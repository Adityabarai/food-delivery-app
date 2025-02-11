"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
	const [Login, setLogin] = useState(false);
	return (
		<>
        <div className="container">
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
		</>
	);
};
export default Restaurant;
