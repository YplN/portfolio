import BulletImage from "../../Generic/BulletImage.jsx";
import CardParameter from "../../Generic/CardParameter.jsx";
import CompareImages from "../../Generic/CompareImages.jsx";
import Expendable from "../../Generic/Expendable.jsx";
import ImgColumn from "../../Generic/ImgColumn.jsx";
import Section from "../../Generic/Section.jsx";
import SwitchOnClick from "../../Generic/SwitchOnClick.jsx";
import TwoColumns from "../../Generic/TwoColumns.jsx";
import ProjectHeader from "../ProjectHeader.jsx";
import { STACK } from "../Projects.jsx";

const GracoonCaseStudy = () => {
	return (
		<div className="case-study" id="gracoon-case-study">
			<ProjectHeader
				team={[
					{ name: "Jocelyn Thiebaut", src: "/portfolio/img/logo_lightv2.svg" },
					{ name: "Lucas Isenmann", src: "/portfolio/img/people/lucas.png" },
				]}
				title="GraCoOn"
				timeline="2022 - present"
				role="UI/UX designer, Front End Developer, R&D"
				stack={[
					STACK.NODEJS,
					{ ...STACK.GITHUB, href: "https://github.com/lucas-test/gracofeu" },
					// STACK.HTML,
				]}
			/>

			<div className="screen-wrapper">
				<img
					className="screen"
					src="/portfolio/img/gracoon/screen2.png"
					alt="Screenshot of Gracoon"
				/>
			</div>

			<Section id="gracoon-case-study">
				<h2> The problem </h2>

				<div className="text">
					<p>
						<a href="http://gracoon.com" target="_blank">
							GraCoOn
						</a>{" "}
						(short for "<span className="short">Gra</span>ph{" "}
						<span className="short">Co</span>llaborative{" "}
						<span className="short">On</span>line") is a platform I developed
						with my friend{" "}
						<a href="https://www.lirmm.fr/~isenmann/" target="_blank">
							Lucas Isenmann
						</a>
						. During the pandemic, we were both frustrated by the limited tools
						available to graph theory researchers for remote work (despite the
						common practice of collaborating with people from afar in research).
						While platforms like Miro are great for many usage, it's
						disappointing that they only allow us to "draw" graphs without
						generating a "real graph."
					</p>
					<Expendable
						collapsed={<div> What is a graph? </div>}
						expended={
							<div className="content">
								<p>
									In graph theory, a <strong>graph</strong> is a mathematical
									structure that consists of two main components: vertices and
									edges. It is a fundamental concept used to model and analyze
									relationships between objects. Let me break down the key
									components:
								</p>

								<ol>
									<li>
										<strong>Vertices :</strong> These are the fundamental units
										of a graph. Each vertex represents an "entity", and these
										entities can vary depending on the context of the problem
										being modeled. For example, in a map, vertices might
										represent cities.
									</li>
									<li>
										<strong>Edges:</strong> Edges are the connections or
										relationships between vertices. They define how the
										"entities" are related or not related to each other. Edges
										may have a direction (directed graph) or be undirected,
										depending on whether the relationship between vertices has a
										specific direction or not. The absence or presence of an
										edge can convey important information about the
										relationships in the graph. Previously, we mentioned that in
										a map, the vertices might represent cities, well in that
										case the edges might represent the roads between the cities.
									</li>
								</ol>

								<p>
									Now, let's consider another simple example. Imagine a group of
									people who need to divide desserts. Each person has their
									preferences, and not everyone likes all the possible desserts.
									This scenario can be represented using a graph, where vertices
									correspond to individuals or desserts, and edges represent
									preferences for specific desserts. If Alice likes only banana
									split and Bob favors apple pie and donut, there would be an
									edge between Alice and banana split and two another edge
									between Bob and apple pie, as well as Bob and donut.{" "}
								</p>
								<p>
									The goal here is to find a <strong>perfect matching</strong>{" "}
									in the graph, ensuring that each person is matched with a
									dessert they like. Graph theory provides algorithms, like the{" "}
									<em>Hopcroft-Karp algorithm</em>, that can be applied to find
									such optimal matchings, making everyone in the group happy
									with their dessert choices.
								</p>

								<SwitchOnClick
									reveal={
										<img
											src="/portfolio/img/gracoon/solution.png"
											alt="solution"
											className="graph-problem"
										/>
									}
									base={
										<img
											src="/portfolio/img/gracoon/problem.png"
											alt="problem"
											className="graph-problem"
										/>
									}
									title={"Click to reveal a solution!"}
								/>

								<p>
									As mentioned above, a more practical (but less tasty example)
									is map: your cities are vertices, and edges are the roads
									between them. Graph Theory provides efficient algorithms, to
									find for example the shortest paths between two cities.
								</p>
							</div>
						}
					/>

					<p>
						Motivated by this, we initiated the development of{" "}
						<a href="http://gracoon.com" target="_blank">
							GraCoOn
						</a>
						, enabling users (typically researchers or teachers/students) to
						collaboratively draw graphs.
					</p>
				</div>

				<CompareImages
					left={{ src: "/portfolio/img/gracoon/miro.png", alt: "Miro" }}
					right={{
						src: "/portfolio/img/gracoon/comparison.png",
						alt: "gracoon",
					}}
					title={
						"Comparison between an actual screenshot of a research project we created on Miro vs on GraCoOn"
					}
					// width={500}
					// width={"80%"}
					// height={"auto"}
				/>

				<h2> Our solution </h2>

				<div className="text">
					<p>
						In GraCoOn, everything is stored in the server as a real graph. This
						way of doing enables several significant advantages.
					</p>
					<p>
						First, since everything (i.e. the front and the back) is a graph, we
						can give to the user dedicated tools to draw and manipulate graphs.
						Several tools are available, including:
					</p>{" "}
					<ul>
						<li>Draw edges (oriented or not oriented)</li>
						<li>Bend edges</li>
						<li> Define a subgraph</li>

						<li>
							Classical tools, such as selection tool, color items, pencil,
							eraser, and so on.
						</li>
					</ul>
					<p>
						Second, it allows the user to compute in real time parameters for
						the graph, such as tracking the number of vertices, the diameter,
						etc. These computations can also extend to subgraphs.
					</p>
					<Expendable
						collapsed={
							<div> What is a parameter, and why it is not that simple? </div>
						}
						expended={
							<div className="content">
								<p>
									In graph theory, various parameters help quantify and
									characterize the properties of a graph.
								</p>

								<p>
									One such parameter is the <em>diameter</em>, which represents
									the maximum distance between any pair of vertices in the
									graph. Graph parameters are crucial for understanding the
									structure and behavior of graphs in different applications.
									For instance, the diameter provides insights into the overall
									"size" of a graph and can be relevant in network analysis or
									communication efficiency studies.
								</p>

								<p>
									However, it's important to note that computing graph
									parameters can have different computational complexities
									(understand "time to compute"; intuitively, some tasks are
									easier to do than others: it is for example easier for you to
									do an addition between two numbers than to solve a sudoku).
									While some parameters, like the number of vertices or edges,
									can be computed efficiently in constant time, others, such as
									the diameter or chromatic number, may require more complex
									algorithms with higher computational time, especially for
									large or dense graphs. More dramatically: some can be computed
									in polynomial time (e.g. the diameter), others may need to be
									computed in an exponential time (e.g. chromatic number).
								</p>
								<p>
									This arises a lot of things to consider if we allow the user
									to compute their own parameters, since it may require a very
									long time to compute them.
								</p>
							</div>
						}
					/>
					<p>
						Right now, there are more than 20 different parameters available,
						but we plan to provide a tool for the users to create their own
						parameters.
					</p>
					<div className="parameters-list">
						<CardParameter
							title="Vertex number"
							definition="The number of vertices in the graph."
						/>

						<CardParameter
							title="Maximum degree"
							definition="The highest number of edges connected to any single vertex in the graph."
						/>
						{/* <CardParameter
							title="Is the current drawing planar?"
							definition="Determines whether the current drawing graph is drawn without any edges crossing each other."
						/> */}
						<CardParameter
							title="Is the graph connected?"
							definition="Determines if there is a path between every pair of vertices, ensuring that every vertex is reachable from any other vertex in the graph."
						/>
						<CardParameter title="20 more..." definition="" disabled />
					</div>
					<TwoColumns
						left={
							<ImgColumn
								src={"/portfolio/img/gracoon/parameter.png"}
								alt="example of parameters"
							/>
						}
						idLeft="parameter-img"
						right={
							<div>
								<p>
									This is an example on how we depict parameters. There are two
									types of parameters: the ones with yes/no answers (showed as
									green or red dots), and the ones with an answer as a number.
								</p>
								<p>
									You can also apply a parameter to a subgraph (i.e. a part of a
									sub-part of a graph). In the example here, the subgraph
									correspond to the graph where the vertex out of the red
									rectangle and all its incident edges are removed.
								</p>
							</div>
						}
					/>
				</div>

				<h2> More features </h2>

				<BulletImage
					img={{
						src: "/portfolio/img/gracoon/screen.png",
						alt: "All the features of Gracoon",
					}}
					bullets={[
						{
							id: "people",
							left: "5.5%",
							top: "14.5%",
							content: "List of people connected",
							type: "light",
						},
						{
							id: "generate",
							left: "14.5%",
							top: "16%",
							content: "Generate automatically big graphs",
							type: "light",
						},
						{
							id: "grids",
							left: "24.5%",
							top: "16%",
							content: "Display grid layouts to help with the drawing.",
							type: "light",
						},

						{
							id: "darkMode",
							left: "34.5%",
							top: "16%",
							content: "Toggle dark mode",
							type: "light",
						},

						{
							id: "save",
							left: "40%",
							top: "16%",
							content: "Save file to your computer",
							type: "light",
						},

						// {
						// 	id: "selection",
						// 	left: "5.5%",
						// 	top: "22.5%",
						// 	content: "Selection tool",
						// 	type: "light",
						// },
						// {
						// 	id: "edgeMode",
						// 	left: "5.5%",
						// 	top: "30%",
						// 	content: "Edge/Vertex tool (directed, undirected, or bend edges)",
						// 	type: "light",
						// },
						{
							id: "pencil",
							left: "5.5%",
							top: "36.5%",
							content: "Pencil",
							type: "light",
						},
						{
							id: "color",
							left: "5.5%",
							top: "42.5%",
							content: "Color element (edge or vertex)",
							type: "light",
						},
						{
							id: "subgraph",
							left: "5.5%",
							top: "48.5%",
							content: "Define a subgraph",
							type: "light",
						},
						{
							id: "parameters",
							left: "85%",
							top: "15.5%",
							content: "Add a new parameter",
							type: "light",
						},
						{
							id: "cursor",
							left: "68.5%",
							top: "47.5%",
							content: "You can see the cursor position of the other people",
							type: "light",
						},
					]}
				/>
			</Section>
		</div>
	);
};

export default GracoonCaseStudy;
