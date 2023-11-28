import React, { useState } from "react";

import Email from "../../assets/mail.png";
import User from "../../assets/user.png";
import Password from "../../assets/password.png";

import "./SignUpCSS.css";

function SignUp() {
	const [action, setAction] = useState("Sign Up");

	return (
		<div className="container">
			{/*HEADER*/}
			<div className="header">{action}</div>

			{/*INPUTS*/}
			<div className="inputs">
				{action === "Login" ? (
					<div></div>
				) : (
					<div className="input">
						<img src={User} alt="" />
						<input type="text" placeholder="Name" />
					</div>
				)}

				<div className="input">
					<img src={Email} alt="" />
					<input type="email" placeholder="Email id" />
				</div>
				<div className="input">
					<img src={Password} alt="" />
					<input type="password" placeholder="Password" />
				</div>
			</div>

			{/*FORGOT PASSWORD*/}
			{action === "Login" ? (
				<div className="forgot-password">
					Forgot Password? <span>Click Here</span>
				</div>
			) : (
				<div></div>
			)}

			{/*BUTTONS*/}
			<div className="btns">
				<div
					className={action === "Sign Up" ? "" : "grey"}
					onClick={() => setAction("Sign Up")}
				>
					Sign Up
				</div>
				<div
					className={action === "Login" ? "" : "grey"}
					onClick={() => setAction("Login")}
				>
					login
				</div>
			</div>
		</div>
	);
}

export default SignUp;
