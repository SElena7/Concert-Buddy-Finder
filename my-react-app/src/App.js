import Login from "./pages/login/login"
import Register from "./pages/register/register"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar"
import LeftBar from "./components/leftBar/leftBar";
import RightBar from "./components/rightBar/rightBar";
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile"



 
function App() {

    const Layout = () => {
        return (
            <div>
                <Navbar />
                <div style={{ display:"flex" }}>

                    <LeftBar />
                    <Outlet />
                    <RightBar/>

                </div>


            </div>
            
            )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element:<Home/>
                },
                {
                    path: "/profile/:id",
                    element:<Profile/>
                }

            ]
        },

        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);

    return (
    <div>
            <RouterProvider router={ router }/>
    </div>
  );
}

export default App;
