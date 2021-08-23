import HomePage from "../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviepage";
import Dashboard from "../containers/AdminTemplate/Dashboard";
import AddUser from "../containers/AdminTemplate/AddUser";
import HocPage from "../containers/HomeTemplate/HOCPage";
import RenderProps from "../containers/HomeTemplate/RenerProps";


const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: "/about",
        component: AboutPage,
    },
    {
        exact: false,
        path: "/list-movie",
        component: ListMoviePage,
    },
    {
        exact: false,
        path: "/detail/:id",
        component: DetailMoviePage,
    },
    {
        exact: false,
        path: "/hoc",
        component: HocPage,
    },
    {
        exact: false,
        path: "/render-props",
        component: RenderProps,
    },

];
const routesAdmin = [
    {
        exact: false,
        path: "/dashboard",
        component: Dashboard,
    },
    {
        exact: false,
        path: "/add-user",
        component: AddUser,
    },
];

export {routesHome, routesAdmin};