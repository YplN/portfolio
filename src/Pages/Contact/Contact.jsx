import { ValidationError, useForm } from "@formspree/react";
import React from "react";

const ContactForm = () => {
	const [state, handleSubmit] = useForm("meqyjqpv");
	// const [state, handleSubmit] = useForm("FAKE");
	if (state.succeeded) {
		return <p className="mail-success">Sent. Thank you!</p>;
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group-error">
				<div className="form-group">
					<label htmlFor="email">email</label>
					<input
						className="contact-input"
						id="email"
						type="email"
						name="email"
						required
						placeholder="your.email@domain.com"
					/>
				</div>
				<ValidationError
					prefix="This field"
					field="email"
					errors={state.errors}
					className="error-input"
				/>
			</div>
			<div className="form-group-error">
				<div className="form-group">
					<label htmlFor="name">name</label>
					<input
						className="contact-input"
						id="name"
						type="text"
						name="name"
						placeholder="Jane Doe"
						required
					/>
				</div>
				<ValidationError prefix="Name" field="name" errors={state.errors} />
			</div>
			<div className="form-group-error">
				<div className="form-group">
					<label htmlFor="text">message</label>
					<textarea
						id="message"
						name="message"
						placeholder="Your kind words!"
					/>
				</div>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<button type="submit" disabled={state.submitting}>
				Submit
			</button>
		</form>
	);
};

const Contact = () => {
	return (
		<div id="contact">
			<h2>Contact me</h2>
			<ContactForm />
		</div>
	);
};
export default Contact;
