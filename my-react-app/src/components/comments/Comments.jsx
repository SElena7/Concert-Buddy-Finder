import "./comments.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Comments = () => {
	const { currentUser } = useContext(AuthContext);
	//TEMPORARY

	const comments = [
		{
		id: 1 ,
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " ,
		name: "John Doe",
		userId: 1,
		profilePicture:"https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		},
		{
			id: 2,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
			name: "John Doe",
			userId: 2,
			profilePicture: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		},

		{
			id: 3,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
			name: "John Doe",
			userId: 3,
			profilePicture: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		},

		{
			id: 4,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
			name: "John Doe",
			userId: 4,
			profilePicture: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		},

	]


	return (

		<div className="comments">
			
				<div className="write">
					<img src={currentUser.profilePic} alt="" />
					<input type="text" placeholder="write a comment" />
					<button>Send</button>
				</div>
			{comments.map(comment => (
					<div className="comment">
						<img src={comment.profilePicture} alt="" />
						<div className="info">
							<span>{comment.name}</span>
							<p>{comment.desc}</p>
						</div>
						<span className="date">1 hour ago</span>
					</div>
				))

		}			
		</div>
		
		
		)

}
export default Comments