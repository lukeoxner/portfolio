import React from "react";

function Contact() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="container mt-5 p-2 content">
							<h1>Contact</h1>
							<hr />
							<br />
							<div className="row d-flex justify-content-start justify-content-md-center">
								<div
									div
									className="d-flex justify-content-start justify-content-md-center col-10 col-md-4"
								>
									<h4 className="contact-text">
										<img
											src="./assets/images/email-icon.png"
											className="contact-icon"
											alt="email"
										/>
										<a href="mailto:lukeoxner77@gmail.com" target="blank">
											{" "}
											Email
										</a>
									</h4>
								</div>
								<div className="d-flex justify-content-start justify-content-md-center col-12 col-md-4">
									<h4 className="contact-text">
										<img
											src="./assets/images/linkedin-icon.png"
											className="contact-icon"
											alt="linkedin"
										/>{" "}
										<a
											href="https://www.linkedin.com/in/lukeoxner"
											target="blank"
										>
											LinkedIn
										</a>
									</h4>
								</div>
								<div className="d-flex justify-content-start justify-content-md-center col-10 col-md-4">
									<h4 className="contact-text">
										<img
											src="./assets/images/github-icon.png"
											className="contact-icon"
											alt="github"
										/>{" "}
										<a href="https://github.com/lukeoxner" target="blank">
											GitHub
										</a>
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
		</>
	);
}

export default Contact;
