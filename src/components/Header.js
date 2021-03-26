import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();

	return (
		<>
			<header>
				<nav>
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<div className="container-fluid">
							<Link to="/" className="navbar-brand">
								Luke Oxner
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarNavAltMarkup"
								aria-controls="navbarNavAltMarkup"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
								<div className="navbar-nav w-100 justify-content-end">
									<Link
										to="/about"
										className={
											location.pathname === '/about'
												? 'nav-link active'
												: 'nav-link'
										}
									>
										About
									</Link>
									<Link
										to="/projects"
										className={
											location.pathname === '/projects'
												? 'nav-link active'
												: 'nav-link'
										}
									>
										Portfolio
									</Link>
									<Link
										to="/contact"
										className={
											location.pathname === '/contact'
												? 'nav-link active'
												: 'nav-link'
										}
									>
										Contact
									</Link>
								</div>
							</div>
						</div>
					</nav>
				</nav>
			</header>
		</>
	);
}

export default Header;
