import Home from "./Pages/Home/Home"
import Users from "./Pages/users/Users";
import Products from "./Pages/products/Products";
import NewUser from "./Pages/newUser/NewUser";


const Routes=[
    {path:"/",element:<Home/>},
    {path:"/users",element:<Users/>},
    {path:"/products",element:<Products/>},
    {path:"/newUser",element:<NewUser/>}
]
export default Routes