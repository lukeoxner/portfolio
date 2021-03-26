import React from 'react';

function Projects() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8 col-lg-10">
						<div className="container mt-5 p-4 content">
							<h1>Portfolio</h1>
							<hr />
							<div className="row">
								<div className="col-12 px-1">
									<div className="row p-2">
										<div className="col-12 col-lg-6 mb-3">
											<img
												src="assets/images/weather-ss.png"
												className="portfolio-ss"
											/>
										</div>
										<div className="col-12 col-lg-6 mb-3">
											<br />
											<h4>Weather Dashboard</h4>
											<a href="https://lukeoxner.github.io/weather-dashboard/">
												lukeoxner.github.io/weather-dashboard
											</a>
											<a href="https://github.com/lukeoxner/weather-dashboard">
												github.com/lukeoxner/weather-dashboard
											</a>
										</div>
										<hr />
									</div>
									<div className="row mt-3 p-2">
										<div className="col-12 col-lg-6 mb-3">
											<img
												src="assets/images/workday-ss.png"
												className="portfolio-ss"
											/>
										</div>
										<div className="col-12 col-lg-6 mb-3">
											<br />
											<h4>Workday Scheduler</h4>
											<a href="https://lukeoxner.github.io/workday-scheduler/">
												lukeoxner.github.io/workday-scheduler
											</a>
											<a href="https://github.com/lukeoxner/workday-scheduler">
												github.com/lukeoxner/workday-scheduler
											</a>
										</div>
										<hr />
									</div>
									<div className="row mt-3 p-2">
										<div className="col-12 col-lg-6 mb-3">
											<img
												src="assets/images/project1-ss.png"
												className="portfolio-ss"
											/>
										</div>
										<div className="col-12 col-lg-6 mb-3">
											<br />
											<h4>Turn That Frown Upside Down</h4>
											<a href="https://lukeoxner.github.io/project-1/">
												lukeoxner.github.io/project-1
											</a>
											<a href="https://github.com/lukeoxner/project-1">
												github.com/lukeoxner/project-1
											</a>
										</div>
									</div>
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

export default Projects;
