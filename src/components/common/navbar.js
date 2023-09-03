import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "education"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/education">Education</Link>
							</li>
							<li
								className={
									active === "experience"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/experience">Experience</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "publications"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/publications">Publications</Link>
							</li>
							<li
								className={
									active === "opensource"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/opensource">Open Source</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;