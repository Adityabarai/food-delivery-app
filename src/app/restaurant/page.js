"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/Restaurant";
import "./style.css";
import RestaurantFooter from "../_components/RestaurantFooter";
const Restaurant = () => {
	const [Login, setLogin] = useState(false);
	return (
		<>
			<div className="container">
				<RestaurantHeader />

				<h1>Restaurant Page</h1>

				{Login ? <RestaurantLogin /> : <RestaurantSignUp />}
				<div>
					<button className="button-link" onClick={() => setLogin(!Login)}>
						{Login
							? "do not have account? SignUp"
							: "already have account? Login"}
					</button>
				</div>
			</div>
			<RestaurantFooter />
		</>
	);
};
export default Restaurant;
