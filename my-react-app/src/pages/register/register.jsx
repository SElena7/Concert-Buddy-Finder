import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {


	return (

		<div className="register">
			<div className="card">
				<div className="left">
					<h1>Concert Buddy Finder</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<span>
						Do you already have an account?
					</span>
					<Link to='/login'>
					<button>
						Log in
					</button>
					</Link>
				</div>
				<div className="right">
					<h1>Register</h1>
					<form>
						<input type="text" placeholder="Username"></input>
						<input type="email" placeholder="Email"></input>
						<input type="password" placeholder="Password"></input>
						<input type="text" placeholder="Name"></input>
						<button>Register</button>

					</form>
				</div>
			</div>
		</div>


	)


}
export default Register