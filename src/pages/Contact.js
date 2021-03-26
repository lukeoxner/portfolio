import React from 'react';

function Contact() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-10">
						<div className="container mt-5 p-2 content">
							<h1>Contact</h1>
							<hr />
							<div className="row">
								<div className="col-10 col-md-8 m-4">
									<h4 className="contact-text">
										<img
											src="./assets/images/email-icon.png"
											className="contact-icon"
											alt="email"
										/>
										<a href="mailto:lukeoxnercoding@gmail.com" target="blank">
											LukeOxnerCoding@gmail.com
										</a>
									</h4>
									<h4 className="contact-text">
										<img
											src="./assets/images/linkedin-icon.png"
											className="contact-icon"
											alt="linkedin"
										/>{' '}
										<a
											href="https://www.linkedin.com/in/lukeoxner"
											target="blank"
										>
											LinkedIn.com/in/LukeOxner
										</a>
									</h4>
									<h4 className="contact-text">
										<img
											src="./assets/images/github-icon.png"
											className="contact-icon"
											alt="github"
										/>{' '}
										<a href="https://github.com/lukeoxner" target="blank">
											GitHub.com/LukeOxner
										</a>
									</h4>
									<h4 className="contact-text">
										<img
											src="./assets/images/resume-icon.png"
											className="contact-icon"
											alt="resume"
										/>{' '}
										<a
											href="https://drive.google.com/file/d/1X9fs7HrRNgZxRTPx4Omb8p5o9Fx2WEEt/view?usp=sharing"
											target="blank"
										>
											Luke Oxner Resume
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
