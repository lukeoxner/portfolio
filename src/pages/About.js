import React from "react";

function About() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-10">
						<div className="container mt-5 p-4 content">
							<h1>About Me</h1>
							<hr />
							<div className="row">
								<div className="col-12">
									<img
										className="float-start me-3 p-3"
										src="./assets/images/headshot.jpg"
										id="headshot"
										alt="Luke Oxner headshot"
									/>
									<h3 className="pt-4 px-3" id="hey">
										Hey there, I'm Luke!
									</h3>
									<p className="p-4">
										I'm a full-stack developer based in the beautiful state of
										Colorado, and a recent graduate of the University of
										Denver's Full Stack Coding Bootcamp. I thrive when solving
										complex problems and learning new things, and I am
										passionate about functionality and making things work. I am
										a strong communicator, fast learner, and an excellent team
										player. Prior to entering the development space, I spent
										four years as a professional racing driver, race team
										manager, and marketing manager. I am excited to join a
										software development team in which I can apply both my
										technical coding skills, as well as the valuable teamwork
										and leadership experience I gained during my previous career
										in motorsport.
									</p>
									<p className="px-4">
										I built this portfolio site to showcase some of the awesome
										group projects and individual homework projects I completed
										during the bootcamp, as well as the personal and client
										projects I've been working on since graduating from the
										program! I'm also planning to film some video walkthroughs
										of the finished projects and their codebases - check back
										soon for that!
									</p>
									<br />
									<div className="px-4">
										<h4 className="contact-text">
											<img
												src="./assets/images/resume-icon.png"
												alt="resume"
												className="contact-icon"
											/>{" "}
											<a
												href="https://drive.google.com/file/d/1VtjL1kyyFdLPYdwvbJzRchn7wR6BXGPk/view?usp=sharing"
												target="blank"
											>
												View My Resume
											</a>
										</h4>
									</div>
									<br />
									<br />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
