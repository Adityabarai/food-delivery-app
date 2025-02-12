import Link from "next/link";
import Image from "next/image";
import logo from "../assets/image/deliveryboy.png";
//Navbar
const RestaurantHeader = () => {
	return (
		<div className="header-wrapper">
			<div className="logo-container">
				<Image className="logo" src={logo} alt="logo" />
			</div>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/">Login/SignUp</Link>
				</li>
				<li>
					<Link href="/">Profile</Link>
				</li>
			</ul>
		</div>
	);
};
export default RestaurantHeader;
