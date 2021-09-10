import './App.css';
// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
// import ListMoviePage from './containers/HomeTemplate/ListMoviePage';
import {Switch, Route, withRouter} from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import {routesHome, routesAdmin} from "./routes";
import HomeTemplate from './containers/HomeTemplate';
import AdminTemplate from './containers/AdminTemplate';
import AuthPage from "./containers/AdminTemplate/Auth";
import {actTryLogin} from "./containers/AdminTemplate/Auth/modules/action";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actTryLogin(props.history));
  }, [])
 
  const renderLayoutHome = (routes) => {
    return routes?.map((item, index) => {
      return (
        <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
      )
    })
  }

  const renderLayoutAdmin = (routes) => {
    return routes?.map((item, index) => {
      return (
        <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
      )
    })
  }

  return (
   
      <Switch>
        {/* Trang chủ - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage}/> */}

        {/* Trang about - localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage}/> */}

        {/* Trang listMovie - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMoviePage}/> */}

        {renderLayoutHome(routesHome)}
        {renderLayoutAdmin(routesAdmin)}

        {/* Auth */}
        <Route path="/auth" component={AuthPage} />

        {/* Trang không tồn tại - phải để cuối cùng */}
        <Route path="" component={PageNotFound} />
      </Switch>
    
  );
}

export default withRouter(App);
