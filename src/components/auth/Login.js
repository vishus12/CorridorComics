import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = ({setAuthUser}) => {
	const [loginUser, setLoginUser ] = useState({ email: "" });
	const [existDialog, setExistDialog] = useState(false);

	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const newUser = { ...loginUser };
		newUser[event.target.id] = event.target.value;
		setLoginUser(newUser);
	};

	 const existingUserCheck = () => {
		return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
			.then((res) => res.json())
			.then((user) => (user.length ? user[0] : false));
	};

	const handleLogin = (e) => {
		e.preventDefault();

		existingUserCheck().then((exists) => {
			if (exists) {
		
				setAuthUser(exists.id)
				navigate("/");
			} else {
				setExistDialog(true);
			}
		});
	};

	return (
		<main className="container--login">
			<dialog className="dialog dialog--auth" open={existDialog}>
				<div>User does not exist</div>
				<button
					className="button--close"
					onClick={(e) => setExistDialog(false)}
				>
					Close
				</button>
			</dialog>
			<section>
				<form className="form--login" onSubmit={handleLogin}>
					<h1 className="Title">Corridor Comics</h1>
					<h2 className="Log">Sign In</h2>
					<fieldset className='fieldset_email'>
						<label htmlFor="inputEmail"> Email Address: </label>
						<input
							type="email"
							id="email"
							className="form-control"
							placeholder="Email address"
							required
							autoFocus
							value={loginUser.email}
							onChange={handleInputChange}
						/>
					</fieldset>
					<fieldset className='fieldset_signin'>
						<button type="submit" className="signbtn">Sign in</button>
					</fieldset>
				</form>
			</section>
			<section className="link_register">
				<Link to="/register">Register for an account</Link>
			</section>
		</main>
	);
};