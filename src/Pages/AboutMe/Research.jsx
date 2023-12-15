import DBLP from "./DBLP.jsx";

const Research = () => {
	return (
		<div id="research">
			<h2 id="research">Research</h2>
			<div className="content">
				<div className="text">
					<p>
						I have co-written a dozen of scientific articles in Graph Theory, a
						mathematical field that explores the relationships between
						interconnected nodes or vertices.
					</p>
					<p>
						A graph consists of vertices and edges, with each edge connecting
						two vertices, representing relationships between entities like
						cities or computers. Graphs can be directed or undirected, have
						loops or multiple edges, and may be connected or have separate
						components. Fundamental concepts include vertex degree, measuring
						the number of incident edges. Key algorithms, like Dijkstra's for
						finding the shortest path, find applications in computer science,
						biology, and social networks, making graph theory a versatile tool
						in various domains.
					</p>

					<p>
						Feel free to play with the canvas on the right and draw maybe your
						first graph !
					</p>
				</div>
				<div id="graph" />
			</div>
			<DBLP />
		</div>
	);
};

export default Research;
