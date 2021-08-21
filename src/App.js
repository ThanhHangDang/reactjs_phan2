import './App.css';
// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
// import ListMoviePage from './containers/HomeTemplate/ListMoviePage';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import Navbar from './containers/HomeTemplate/_components/Navbar/Navbar';
import {routesHome} from "./routes";

function App() {

  const renderLayoutHome = (routes) => {
    return routes?.map((item, index) => {
      return (
        <Route key={index} exact={item.exact} path={item.path} component={item.component}/>
      )
    })
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* Trang chủ - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage}/> */}

        {/* Trang about - localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage}/> */}

        {/* Trang listMovie - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMoviePage}/> */}

        {renderLayoutHome(routesHome)}

        {/* Trang không tồn tại - phải để cuối cùng */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
