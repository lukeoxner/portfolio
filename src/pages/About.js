import React from 'react';

function About() {
	return (
		<>
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-10">
						<div class="container mt-5 p-4 content">
							<h1>About Me</h1>
							<hr />
							<div class="row">
								<div class="col-12">
									<img
										class="float-start me-3 p-3"
										src="./assets/images/headshot.jpg"
										id="headshot"
										alt="Luke Oxner headshot"
									/>
									<h3 class="pt-4 px-3" id="hey">
										Hey there, I'm Luke!
									</h3>
									<p class="p-4">
										I'm a student in the University of Denver Full-Stack Web
										Development Boot Camp. I'm originally from Arkansas, but
										have lived in Colorado for almost five years now. When I'm
										not learning code (which is pretty much all I have time for
										right now), I love motorsport, hiking, running, skiing, and
										pretty much anything else outdoors!
									</p>
									<p class="px-4">
										What you've found here is my coding portfolio website. As I
										progress through the boot camp, I look forward to adding
										more content and functionality to this site. Check back soon
										to see what's new!
									</p>
									<br />
									<div class="px-4">
										<h4 class="contact-text">
											<img
												src="assets/images/resume-icon.png"
												class="contact-icon"
											/>{' '}
											<a
												href="https://drive.google.com/file/d/1X9fs7HrRNgZxRTPx4Omb8p5o9Fx2WEEt/view?usp=sharing"
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