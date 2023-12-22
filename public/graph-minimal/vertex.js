class Vertex {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.edges = [];
		this.color = BACKGROUND_COLOR;
	}

	move(x, y) {
		this.x = x;
		this.y = y;
	}

	setColor(c) {
		this.color = c;
	}

	show() {
		drawingContext.setLineDash([]);
		if (modern) {
			noStroke();
			fill(BACKGROUND_COLOR);
			circle(this.x, this.y, VERTEX_DEFAULT_SIZE * this.size + 10);
		}

		if (isCreatingEdge) {
			noStroke();
			angleMode(DEGREES);
			if (snapAnimation >= 100) {
				fill(0, 35 * cos(2 * snapAnimationAlpha) + 35);
				circle(
					this.x,
					this.y,
					VERTEX_SNAP_SIZE * this.size * (sin(snapAnimationAlpha) + 1)
				);
			}

			fill(255, 35);
			circle(
				this.x,
				this.y,
				VERTEX_SNAP_SIZE * this.size * map(snapAnimation, 0, 100, 0.7, 2)
			);
		}

		if (selectedVertices.includes(this)) {
			fill(FOCUSED_VERTEX_COLOR);
			circle(this.x, this.y, VERTEX_DEFAULT_SIZE * this.size * 1.5);
		} else if (this == fakeVertex) {
			stroke(FAKE_VERTEX_COLOR);
		} else {
			stroke(DEFAULT_COLOR);
		}
		strokeWeight(2);
		fill(this.color);
		circle(this.x, this.y, VERTEX_DEFAULT_SIZE * this.size);
	}

	isOn(x, y) {
		return dist(x, y, this.x, this.y) < VERTEX_SNAP_SIZE * this.size;
	}

	translate(x, y) {
		this.x += x;
		this.y += y;
	}

	addEdge(e) {
		this.edges.push(e);
	}

	isAnExtremity(e) {
		if (this === e.v1) return 1;
		if (this === e.v2) return 2;
		return;
	}

	setSize(s) {
		this.size = s;
	}

	clearEdge(e) {
		for (var i = this.edges.length - 1; i >= 0; i--) {
			if (this.edges[i].toKill) {
				this.edges.splice(i, 1);
			}
		}
	}

	clearEdges() {
		for (var i = this.edges.length - 1; i >= 0; i--) {
			if (this.edges[i].toKill) {
				this.edges.splice(i, 1);
			}
		}
	}

	kill() {
		for (let e of this.edges) {
			e.kill();
		}
		Vertices.splice(Vertices.indexOf(this), 1);
	}

	toString() {
		return "(" + this.x + ", " + this.y + ")";
	}

	updateNeighbor(e, v) {
		let index = this.edges.includes(e);
		if (index > 0) {
			if (this.isAnExtremity(this.edges[index]) == 1) {
				this.edges[index].v2 = v;
			} else {
				this.edges[index].v1 = v;
			}
		}
	}
}
