import './profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";


const Profile = () => {

	const { currentUser } = useContext(AuthContext);

	const u_id = parseInt(useLocation().pathname.split("/")[2]);

	const { isLoading, error, data } = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const res = await makeRequest.get("/users/find/" + u_id);
			return res.data;
		},
	});

	// Add conditional checks for loading, error, and data
	if (isLoading) {
		return <p>Loading...</p>; // You can display a loading message while data is being fetched.
	}

	if (error) {
		return <p>Error: {error.message}</p>; // You can display an error message if there's an issue fetching the data.
	}

	if (!data) {
		return <p>No data available</p>;
	}

	// Now you can safely access data.profilePic
	console.log(data.profilePic);


	return (

		<div className="profile">
			{isLoading ? (
				"loading"
			) : (
				<>
			<div className="images">
				<img src={data.coverPic} className="cover" />
				<img src={data.profilePic} className="profilePic" />
			</div>
			<div className="profileContainer">
				<div className="uInfo">
					<div className="left">
						<a href="http://facebook.com">
							<FacebookTwoToneIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<InstagramIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<TwitterIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<LinkedInIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<PinterestIcon fontSize="large" />
						</a>
					</div>
					<div className="center">
						<span>{data.name }</span>
					<div className="info">
						<div className="item">
							<PlaceIcon />
								<span>{data.city}</span>
						</div>
						<div className="item">
							<LanguageIcon />
								<span>{ data.website }</span>
						</div>
					</div>
						{u_id === currentUser.id ? (<button>update</button>):<button>follow</button>}
					</div>
				<div className="right">
					<EmailOutlinedIcon />
					<MoreVertIcon />
					</div>
				</div>
			<Posts/>
						</div>
				</>
			)}
		</div>


	)


}
export default Profile