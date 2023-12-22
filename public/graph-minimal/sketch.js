let Vertices = [];
let Edges = [];

let BACKGROUND_COLOR;
let DEFAULT_COLOR;
let FOCUSED_VERTEX_COLOR;
let FAKE_VERTEX_COLOR;
let VERTEX_DEFAULT_SIZE = 15;
let EDGE_DEFAULT_STROKE = 2;

let LINE_STROKE = 12;

let VERTEX_SNAP_SIZE = 20;
let snapAnimation = 0;
let snapAnimationAlpha = 0;
let dAlpha = 1.5;

let modern = true;
let creatingMode = true;
let creatingModeAnimation = false;
let creatingModeOffsetX = 0;

let lmouseX;
let lmouseY;
let lvertex;

let isCreatingEdge;
let isDeletingVertex;
let isDraggingVertex;
let mouseStartDraggingX;
let mouseStartDraggingY;
let isSelectioning = false;
let startSelectionX;
let startSelectionY;

let focusedVertex;
let fakeVertex = null;
let selectedVertices = [];
let selectVertices = true;

let fakeEdge = null;
let focusedEdge;
let selectedEdges = [];
let selectEdges = true;

let isFocusingEdge;

// function to disable default menu on right click
// https://discourse.processing.org/t/using-right-mouse-without-context-menu/9379/3
// document.oncontextmenu = function () {
// 	return false;
// };

function preload() {
	// menuFont = loadFont('assets/CaviarDreams.ttf');
}

function setup() {
	// put setup code here

	var canvasDiv = document.getElementById("graph");
	var width = canvasDiv.offsetWidth;

	for (let element of document.getElementsByClassName("p5Canvas")) {
		element.addEventListener("contextmenu", (e) => e.preventDefault());
	}

	let canvas = createCanvas(width, 400);
	canvas.parent("graph");
	BACKGROUND_COLOR = color(25, 25, 25);
	DEFAULT_COLOR = color(250, 232, 207);
	FOCUSED_VERTEX_COLOR = color(237, 92, 92);
	FAKE_VERTEX_COLOR = color(255, 80);

	BACKGROUND_COLOR = color(245, 240, 238);

	// BACKGROUND_COLOR = color(255);
	DEFAULT_COLOR = color(50, 22, 0);
	FOCUSED_VERTEX_COLOR = color(237, 92, 92);
	FAKE_VERTEX_COLOR = color(102, 89, 89);

	isCreatingEdge = false;
	isDeletingVertex = false;
	isDraggingVertex = false;
	isFocusingEdge = false;
	lvertex = null;
	focusedVertex = null;
	fakeVertex = null;
	fakeEdge = null;
	focusedEdge = null;
}

function draw() {
	// console.log("frame");
	background(BACKGROUND_COLOR);
	if (Vertices.length === 0 && Edges.length === 0) {
		fill(DEFAULT_COLOR);
		noStroke();
		textSize(18);
		textFont("Outfit");
		textAlign("center");
		text("Click here to create a new vertex", width / 2, height / 2);
		noLoop();
	}

	if (Vertices.length > 0 && Edges.length === 0 && !isCreatingEdge) {
		fill(DEFAULT_COLOR);
		noStroke();
		textSize(15);
		textFont("Outfit");
		textAlign("center");
		text(
			"Click and drag your mouse from a vertex or\n an empty space to create a new edge",
			width / 2,
			0.8 * height
		);
		noLoop();
	}

	//
	UpdateEdges();
	showGraph();
	drawSelectionBox(mouseX, mouseY, startSelectionX, startSelectionY);
}

function windowResized() {
	// var canvasDiv = document.getElementById("graph");
	// var width = canvasDiv.offsetWidth;
	// resizeCanvas(width, 400);
	// centerVertices();
}

function showGraph() {
	for (let e of Edges) {
		e.show();
	}
	for (let vertex of Vertices) {
		vertex.show();
	}
	showCreatingEdges();
}

function showCreatingEdges() {
	if (isCreatingEdge) {
		snapAnimation = min(snapAnimation + 4, 100);
		snapAnimationAlpha = (snapAnimationAlpha + dAlpha) % 90;
		fakeVertex = new Vertex(mouseX, mouseY, 1);

		if (keyIsPressed && keyCode == SHIFT) {
			for (let v of selectedVertices) {
				if (v != lvertex) {
					// just to prevent an ugly extra edge
					fakeEdge = new Edge(v, fakeVertex);
					fakeEdge.show();
				}
			}
		}
		fakeEdge = new Edge(new Vertex(lmouseX, lmouseY, 1), fakeVertex);
		fakeEdge.show();
		fakeVertex.show();
		lvertex.show();

		fakeVertex = null;
		fakeEdge = null;
	}
}

function UpdateEdges() {
	for (let i = Edges.length - 1; i >= 0; i--) {
		if (Edges[i].toKill) {
			Edges.splice(i, 1);
		}
	}
}

function printEdges() {
	for (let e of Edges) {
		console.log(e.toString());
	}
}

function VertexPicked(x, y) {
	for (let i = Vertices.length - 1; i >= 0; i--) {
		if (Vertices[i].isOn(mouseX, mouseY)) {
			return Vertices[i];
		}
	}
	return;
}

function VertexPickedNotV(x, y, v) {
	for (let i = Vertices.length - 1; i >= 0; i--) {
		if (Vertices[i] != v && Vertices[i].isOn(mouseX, mouseY)) {
			return Vertices[i];
		}
	}
	return;
}

function selectVerticesFromBox(x1, y1, x2, y2) {
	let xs = min(x1, x2);
	let ys = min(y1, y2);

	let xe = max(x1, x2);
	let ye = max(y1, y2);

	let sel = [];
	for (let v of Vertices) {
		if (v.x >= xs && v.x <= xe && v.y >= ys && v.y <= ye) {
			sel.push(v);
		}
	}
	return sel;
}

function selectEdgesFromBox(x1, y1, x2, y2) {
	let minX = min(x1, x2);
	let minY = min(y1, y2);

	let maxX = max(x1, x2);
	let maxY = max(y1, y2);

	let w = maxX - minX;
	let h = maxY - minY;

	let sel = [];

	for (let e of Edges) {
		let x1 = e.v1.x;
		let y1 = e.v1.y;
		let x2 = e.v2.x;
		let y2 = e.v2.y;

		let m = (y2 - y1) / (x2 - x1);
		let p = y1 - m * x1;
		// x coordinate of the intersection between the (infinite) line
		// going from the extremities of the edges and the rectangle
		let xiBottom = (maxY - p) / m;
		// y coordinate on the line when the x coordinate is xiBottom
		let yiBottom = m * xiBottom + p;
		// so the edge intersect the bottom side of the rectangle if :
		// the infinite line cut at some point the rectangle
		// (minX <= xiBottom && xiBottom <= maxX && min(y1, y2)
		// where the y-coordinate of the rectangle at xiBottom
		// is ON the edge
		// (min(y1, y2) <= yiBottom && yiBottom <= max(y1, y2))

		// we do the same for the other sides of the rectangle
		let xiTop = (minY - p) / m;
		let yiTop = m * xiTop + p;

		let yiLeft = m * minX + p;
		let xiLeft = (yiLeft - p) / m;

		let yiRight = m * maxX + p;
		let xiRight = (yiRight - p) / m;

		// we also have to add the case where the edge is totally INSIDE the rectangle

		if (
			(minX <= xiBottom &&
				xiBottom <= maxX &&
				min(y1, y2) <= yiBottom &&
				yiBottom <= max(y1, y2)) ||
			(minX <= xiTop &&
				xiTop <= maxX &&
				min(y1, y2) <= yiTop &&
				yiTop <= max(y1, y2)) ||
			(minY <= yiLeft &&
				yiLeft <= maxY &&
				min(x1, x2) <= xiLeft &&
				xiLeft <= max(x1, x2)) ||
			(minY <= yiRight &&
				yiRight <= maxY &&
				min(x1, x2) <= xiRight &&
				xiRight <= max(x1, x2)) ||
			(minX <= min(x1, x2) &&
				max(x1, x2) <= maxX &&
				minY <= min(y1, y2) &&
				max(y1, y2) <= maxY)
		) {
			sel.push(e);
		}
	}
	return sel;
}

function selectedEdgesFromSelectedVertices() {
	sel = [];
	for (let v of selectedVertices) {
		for (let e of v.edges) {
			sel.push(e);
		}
	}
	return sel;
}

function addNewVertex(x, y) {
	lvertex = new Vertex(x, y, 1);
	Vertices.push(lvertex);
	lmouseX = mouseX;
	lmouseY = mouseY;
}

function drawSelectionBox(x1, y1, x2, y2) {
	if (isSelectioning) {
		let xd = min(x1, x2);
		let yd = min(y1, y2);

		// noFill();
		fill(255, 10);

		drawingContext.setLineDash([5, 5]);
		stroke(DEFAULT_COLOR);
		strokeWeight(2);

		rect(xd, yd, abs(x1 - x2), abs(y1 - y2));
	}
}

function centerVertices() {
	let minX = Infinity;
	let minY = Infinity;
	let maxX = -Infinity;
	let maxY = -Infinity;

	for (let v of Vertices) {
		minX = min(minX, v.x);
		minY = min(minY, v.y);
		maxX = max(maxX, v.x);
		maxY = max(maxY, v.y);
	}

	let vWidth = maxX - minX;
	let vHeight = maxY - minY;

	if (vWidth <= width && vHeight <= height) {
		for (let v of Vertices) {
			v.translate((width - vWidth) / 2 - minX, (height - vHeight) / 2 - minY);
		}
	}
}

function createNewEdge(u, v) {
	if (u == v) return;
	for (let edge of u.edges) {
		if (v.isAnExtremity(edge)) return;
	}
	let e = new Edge(u, v);
	if (!Edges.includes(e)) {
		Edges.push(e);
		e.tellVertices();
	}
}
