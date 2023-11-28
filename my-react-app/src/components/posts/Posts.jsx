import Post from '../post/Post';
import './Posts.scss';


const Posts = () => {

    const posts = [

        {
            id: 1,
            userId: 1,
            name: "Jane Doe",
            profilePic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img:"https://images.pexels.com/photos/2869354/pexels-photo-2869354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            userId: 2,
            name: "Jane Doe",
            profilePic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "https://images.pexels.com/photos/2869354/pexels-photo-2869354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            userId: 3,
            name: "Jane Doe",
            profilePic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "https://images.pexels.com/photos/2869354/pexels-photo-2869354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            userId: 4,
            name: "Jane Doe",
            profilePic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "https://images.pexels.com/photos/2869354/pexels-photo-2869354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            userId: 5,
            name: "Jane Doe",
            profilePic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "https://images.pexels.com/photos/2869354/pexels-photo-2869354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 6,
            userId: 6,
            name: "Jane Doe",
            profilePic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "https://images.pexels.com/photos/2869354/pexels-photo-2869354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },




    ];



    return (
        <div className="posts">
            {posts.map(post => (
                <Post post = { post } key={ post.id}/>
               ))}
        </div>
    )
}

export default Posts