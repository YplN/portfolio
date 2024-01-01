import Expendable from "../../Generic/Expendable.jsx";
import Section from "../../Generic/Section.jsx";
import ProjectHeader from "../ProjectHeader.jsx";
import { STACK } from "../Projects.jsx";

const VisualStackCaseStudy = () => {
	return (
		<div className="case-study" id="stack-case-study">
			<ProjectHeader
				team={[{ name: "Jocelyn Thiebaut", src: "img/logo_lightv2.svg" }]}
				title="DataStructures"
				timeline="2020"
				role="UI/UX designer, Front End Developer"
				stack={[
					STACK.P5,
					{ ...STACK.GITHUB, href: "https://github.com/YplN/Linked-List/" },
					// STACK.HTML,
				]}
			/>

			<div className="screen-wrapper">
				<img
					className="screen"
					src="img/visual_stack/stack_screen.png"
					alt="Screenshot of Visual Stack"
				/>
			</div>

			<Section id="stack-case-study">
				<h2> Context </h2>

				<div className="text">
					<p>
						DataStructure is a series of small projects I created while I was
						working as a teacher at the University. During the pandemic, we had
						to quickly adapt our teachings to be able to work remotely. The
						chance I had as a teacher in Computer Science is that our field was
						much more compatible with the remote work. However, the tools we had
						were not as developed as they are now.
					</p>
					<p>
						In this context, I started to develop very simple websites to allow
						my students manipulating some data structures, such as stacks,
						queues, linked lists and graphs. I tried to make the website as
						simple and intuitive as possible.
					</p>
					<Expendable
						collapsed={<div> What is a data structure? </div>}
						expended={
							<div className="content">
								<p>
									In computer science, a data structure is a way of organizing
									and storing data to facilitate efficient manipulation and
									retrieval. It defines the relationship between the data, the
									operations that can be performed on the data, and the
									algorithms used to implement these operations. Choosing the
									right data structure is crucial for optimizing various
									computational tasks.
								</p>

								<p>
									<strong>Stack:</strong> A stack is a linear data structure
									that follows the Last In, First Out (LIFO) principle. Elements
									are added or removed from the top of the stack, resembling a
									collection of items stacked on top of each other. Stacks are
									commonly used for managing function calls, tracking execution
									history, and handling undo operations in software
									applications.
								</p>

								<p>
									<strong>Queue:</strong> A queue is another linear data
									structure that follows the First In, First Out (FIFO)
									principle. Elements are added at the rear (enqueue) and
									removed from the front (dequeue). Queues are often employed in
									scenarios where tasks need to be processed in the order they
									are received, such as print job scheduling or breadth-first
									search algorithms.
								</p>

								<p>
									<strong>Linked List:</strong> A linked list is a data
									structure that consists of nodes, each containing data and a
									reference to the next node in the sequence. Unlike arrays,
									linked lists do not have a fixed size, allowing for dynamic
									memory allocation. Linked lists are efficient for insertions
									and deletions at arbitrary positions, making them suitable for
									scenarios where data modification is frequent, such as
									implementing certain data storage systems.
								</p>
							</div>
						}
					/>
				</div>

				{/* <CompareImages
					left={{ src: "img/gracoon/miro.png", alt: "Miro" }}
					right={{ src: "img/gracoon/comparison.png", alt: "gracoon" }}
					title={
						"Comparison between an actual screenshot of a research project we created on Miro vs on GraCoOn"
					}
				/> */}

				<h2> The series </h2>

				<div className="text">
					<div id="data-structures-grid">
						<video
							id="stack-video"
							className="project-video"
							autoPlay
							muted
							loop
						>
							<source
								src="img/visual_stack/visual_stack.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div id="stack-content">
							<h3>Stack</h3>
							<p>
								In this user-friendly environment, effortless stack management
								is at your fingertips. Execute classic stack operations with
								ease, utilizing intuitive drag-and-drop functionality for both
								push and pop operations.
							</p>
							<p>
								Delve deeper into stack dynamics as you explore the sorting
								feature. The pancake sorting method is seamlessly integrated,
								providing users with a structured approach to organize their
								stack. Witness the sorting process unfold with a visually
								engaging animation, enhancing the overall user experience and
								comprehension of the operation.
							</p>
						</div>
						<video
							id="queue-video"
							className="project-video"
							autoPlay
							muted
							loop
						>
							<source
								src="img/visual_stack/visual_queue.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div id="queue-content">
							<h3>Queue</h3>
							<p>
								Similarly, you can effortlessly manipulate queues with just drag
								and drops.
							</p>
							<p>
								This also shows error messages when the user tries to do illegal
								actions (for example drag and drop an element which is not the
								top of the queue).
							</p>
						</div>

						<video
							id="list-video"
							className="project-video"
							autoPlay
							muted
							loop
						>
							<source
								src="img/visual_stack/visual_linked.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div id="list-content">
							<h3>Linked List</h3>
							<p>
								With the last website, you can easily manipulate linked list.
								This is precisely useful to observe how lists can intertwine
								with each other.
							</p>
						</div>
					</div>
				</div>
			</Section>

			<div id="mosaic">
				<img
					src="img/visual_stack/empty.png"
					alt="Screenshot of an empty stack"
					id="empty-img"
				/>
				<img
					src="img/visual_stack/enfiler.png"
					alt="Screenshot of how to add an element to the queue"
					id="enfiler-img"
				/>
				{/* <img
					src="img/visual_stack/history.png"
					alt="Screenshot of the history of the events"
					id="history-img"
				/> */}
				<img
					src="img/visual_stack/list.png"
					alt="Screenshot of a list"
					id="list-img"
				/>
				<img
					src="img/visual_stack/menu.png"
					alt="Screenshot of the menu"
					id="menu-img"
				/>
				<img
					src="img/visual_stack/stacking.png"
					alt="Screenshot of how to add an element to the stack"
					id="stacking-img"
				/>
				<img
					src="img/visual_stack/suc.png"
					alt="Screenshot of linked list"
					id="suc-img"
				/>
				<img
					src="img/visual_stack/pancake.png"
					alt="Screenshot of pancake sorting"
					id="pancake-img"
				/>
			</div>
		</div>
	);
};

export default VisualStackCaseStudy;
