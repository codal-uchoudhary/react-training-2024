import Login from "./components/Authentication/Login";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ProductPage from "./components/Products/ProductPage";
import {RouterProvider,createRoutesFromElements,Route, createBrowserRouter} from 'react-router-dom'
import RootLayout from "./Pages/root";
import CartPage from "./components/Cart/Cart";
import ProductsPage from "./components/Products/ProductsPage";


const router = createBrowserRouter(
  [
    {
      path:'',
      element:<RootLayout></RootLayout>,
      children:[
        {path:"/",element:<Home/>},
        {path:"/product/:productId",element:<ProductPage/>},
        {path:"/about",element:<About/>},
        {path:"/contact",element:<Contact/>},
        {path:"/login",element:<Login/>},
        {path:"/cart",element:<CartPage/>},
        {path:"/products/category/:category",element:<ProductsPage/>}
      ]
    }
  ]
)


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
