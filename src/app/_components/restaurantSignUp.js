const RestaurantSignUp = () => {
	return (
		<>
			<h3>SignUp Component</h3>

			<div>
				<div className="input-wrapper">
					<input
						type="text"
						placeholder="Enter Email"
						className="input-field"
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Enter Password"
						className="input-field"
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Confirm Password"
						className="input-field"
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Enter Restaurant name"
						className="input-field"
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Enter City"
						className="input-field"
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Enter full address"
						className="input-field"
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Enter Contact No."
						className="input-field"
					/>
				</div>
				<div className="input-wrapper">
					<button>Login</button>
				</div>
			</div>
		</>
	);
};
export default RestaurantSignUp;
