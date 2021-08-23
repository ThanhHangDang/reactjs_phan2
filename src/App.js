import './App.css';
// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
// import ListMoviePage from './containers/HomeTemplate/ListMoviePage';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import {routesHome, routesAdmin} from "./routes";
import HomeTemplate from './containers/HomeTemplate';
import AdminTemplate from './containers/AdminTemplate';


function App() {

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
    <BrowserRouter>
      <Switch>
        {/* Trang chủ - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage}/> */}

        {/* Trang about - localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage}/> */}

        {/* Trang listMovie - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMoviePage}/> */}

        {renderLayoutHome(routesHome)}
        {renderLayoutAdmin(routesAdmin)}

        {/* Trang không tồn tại - phải để cuối cùng */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
