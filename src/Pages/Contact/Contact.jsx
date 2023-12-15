import React, { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Replace with your Formspree endpoint or other service
		const formEndpoint = "#";

		try {
			const response = await fetch(formEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("Form submitted successfully!");
			} else {
				console.error("Error submitting the form");
			}
		} catch (error) {
			console.error("Error submitting the form", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				type="hidden"
				name="_subject"
				value="Contact request from personal website"
			/>

			<input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				required
			/>

			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				required
			/>

			<label htmlFor="message">Message</label>
			<textarea
				id="message"
				name="message"
				rows="4"
				value={formData.message}
				onChange={handleChange}
				required
			></textarea>

			<button type="submit">Submit</button>
		</form>
	);
};

export default Contact;
