import { createBrowserRouter } from "react-router"

import DashboardLayout from "../components/layout/DashboardLayout"
import Dashbord from "../pages/dashboard/Dashbord"
import Products from "../pages/products/Products"
import Order from "../pages/orders/Order"
import Users from "../pages/users/Users"
import Reports from "../pages/reports/Reports"
import Settings from "../pages/settings/Settings"



const Router=createBrowserRouter([
    {path:"/" ,element:<DashboardLayout/>,
        children:[
{index:true,element:<Dashbord/>,handle:{
    title:"داشبورد"
}}
,{path:"products",element:<Products/>,handle:{
    title:"محصولات"
}}
,{path:"orders",element:<Order/>,handle:{
    title:"سفارشات"
}}
,{path:"users",element:<Users/>,handle:{
    title:"کاربران"
}}
,{path:"reports",element:<Reports/>,handle:{
    title:"گزارشات"
}}
,{path:"settings",element:<Settings/>,handle:{
    title:"تنظیمات"
}}


        ]
    }





])









export default Router