import Login from "./pages/login/login"
import Register from "./pages/register/register"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar"
import LeftBar from "./components/leftBar/leftBar";
import RightBar from "./components/rightBar/rightBar";
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile"
import { Children } from "react";
import "./style.scss"



 
function App() {

    const currentUser = true;

    const Layout = () => {
        return (
            <div className="theme-dark">
                <Navbar />
                <div style={{ display:"flex" }}>

                    <LeftBar />
                    <div style={{flex:6}}>
                        <Outlet />
                    </div>
                    
                    <RightBar/>

                </div>


            </div>
            
            )
    }

    const ProtectedRoute = ({ children })=> {

        if (!currentUser) {
            return <Navigate to="/login" />;
        }
            return children;

    };

    const router = createBrowserRouter([
        {
                    path: "/",
                element:(
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
                ),
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
