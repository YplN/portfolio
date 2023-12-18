class Edge {
	constructor(v1, v2) {
		this.v1 = v1;
		this.v2 = v2;
		this.toKill = false;
		this.color = DEFAULT_COLOR;
		this.size = 1;
	}

	kill() {
		this.toKill = true;
		this.v1.clearEdges();
		this.v2.clearEdges();
	}

	setColor(c) {
		this.color = c;
	}

	show() {
		drawingContext.setLineDash([]);
		if (modern) {
			strokeWeight(EDGE_DEFAULT_STROKE * this.size * 2 + 2);
			stroke(BACKGROUND_COLOR);
			line(this.v1.x, this.v1.y, this.v2.x, this.v2.y);
		}
		stroke(this.color);
		strokeWeight(EDGE_DEFAULT_STROKE * this.size);

		line(this.v1.x, this.v1.y, this.v2.x, this.v2.y);
		if (selectedEdges.includes(this)) {
			stroke(FOCUSED_VERTEX_COLOR);
			strokeWeight(EDGE_DEFAULT_STROKE * this.size * 2);
			line(this.v1.x, this.v1.y, this.v2.x, this.v2.y);
		}
	}

	tellVertices() {
		this.v1.addEdge(this);
		this.v2.addEdge(this);
	}

	isEquals(e) {
		return (
			(this.v1 === e.v1 && this.v2 === e.v2) ||
			(this.v1 === e.v2 && this.v2 === e.v1)
		);
	}

	distFrom(x, y) {
		const x1 = this.v1.x;
		const y1 = this.v1.y;
		const x2 = this.v2.x;
		const y2 = this.v2.y;

		const den = dist(x1, y1, x2, y2);
		if (den == 0) {
			return;
		}
		const num = abs((x2 - x1) * (y1 - y) - (x1 - x) * (y2 - y1));

		return num / den;
	}
}
