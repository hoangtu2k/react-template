

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import ProductUpload from "../pages/ProductUpload";


const publicRouters = [
        { path: '/', component: Dashboard },
        { path: '/dashboard', component: Dashboard },
        { path: '/login', component: Login },
        { path: '/signUp', component: SignUp },
        { path: '/products' , component: Products },
        { path: '/product/details' , component: ProductDetails },
        { path: '/product/upload' , component: ProductUpload },

];

const privateRouters = [

    
];


export { publicRouters, privateRouters};
