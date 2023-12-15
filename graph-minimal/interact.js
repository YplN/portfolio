function mousePressed() {
	loop();

	// Reset dragging booleans
	isCreatingEdge = false;
	isDraggingVertex = false;
	isSelectioning = false;

	// check if user clicked on a vertex
	let v = VertexPicked(mouseX, mouseY);

	if (v) {
		lvertex = v;
		lmouseX = mouseX;
		lmouseY = mouseY;
		if (mouseButton == RIGHT) {
			if (keyIsPressed) {
				if (keyCode == CONTROL) {
					let index = selectedVertices.indexOf(v);
					if (index < 0) {
						selectedVertices.push(v);
					} else {
						selectedVertices.splice(index, 1);
					}
				}
			} else {
				isDraggingVertex = true;
				mouseStartDraggingX = mouseX;
				mouseStartDraggingY = mouseY;
				if (!selectedVertices.includes(v)) {
					selectedVertices = [v];
					selectedEdges = [];
				}
			}
			// }
		} else {
			if (mouseButton == LEFT) {
				// Create a new edge if there is a drag
				isCreatingEdge = true;
			}
		}
	} else {
		if (mouseButton == LEFT) {
			if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
				addNewVertex(mouseX, mouseY);
				isCreatingEdge = true;
				lmouseX = mouseX;
				lmouseY = mouseY;
			}
		} else {
			selectedVertices = [];
			selectedEdges = [];
			isSelectioning = true;
			startSelectionX = mouseX;
			startSelectionY = mouseY;
		}
	}
}

function mouseDragged() {
	loop();

	if (isDraggingVertex) {
		for (let v of selectedVertices) {
			v.translate(mouseX - mouseStartDraggingX, mouseY - mouseStartDraggingY);
		}
		mouseStartDraggingX = mouseX;
		mouseStartDraggingY = mouseY;
	} else if (isSelectioning) {
		if (selectVertices) {
			selectedVertices = selectVerticesFromBox(
				startSelectionX,
				startSelectionY,
				mouseX,
				mouseY
			);
		}
		if (selectEdges) {
			selectedEdges = selectEdgesFromBox(
				startSelectionX,
				startSelectionY,
				mouseX,
				mouseY
			);
		}
	}
}

function mouseReleased() {
	if (isCreatingEdge) {
		let v = VertexPicked(mouseX, mouseY);
		if (!v) {
			v = new Vertex(mouseX, mouseY, 1);
			Vertices.push(v);
		}
		if (keyIsPressed && keyCode == SHIFT) {
			for (u of selectedVertices) {
				createNewEdge(u, v);
			}
		}
		createNewEdge(lvertex, v);
	} else if (isSelectioning) {
		if (selectVertices) {
			selectedVertices = selectVerticesFromBox(
				startSelectionX,
				startSelectionY,
				mouseX,
				mouseY
			);
		}
		if (selectEdges) {
			selectedEdges = selectEdgesFromBox(
				startSelectionX,
				startSelectionY,
				mouseX,
				mouseY
			);
		}
	} else if (isDraggingVertex) {
		if (selectedVertices.length == 1) {
			let v = VertexPickedNotV(mouseX, mouseY, selectedVertices[0]);
			// if (v) {
			//   v.merge(selectedVertices[0]);
			//   selectedVertices = [v];
			// }
		}
	}

	isSelectioning = false;
	isCreatingEdge = false;
	isDraggingVertex = false;
	lvertex = null;
	snapAnimation = 0;
	snapAnimationAlpha = 0;

	noLoop();
	redraw();
}

function keyPressed() {
	if (keyCode == DELETE || keyCode == BACKSPACE) {
		for (let e of selectedEdges) {
			e.kill();
		}
		for (let v of selectedVertices) {
			v.kill();
		}
		selectedEdges = [];
		selectedVertices = [];
	}
	if (keyCode == ESCAPE) {
		selectedEdges = [];
		selectedVertices = [];
	}

	if (key == "c") {
		centerVertices();
	}

	redraw();
}
