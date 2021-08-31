import {combineReducers} from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviepage/modules/reducer";
import authReducer from "../../containers/AdminTemplate/Auth/modules/reducer";
import addUserReducer from "../../containers/AdminTemplate/AddUser/modules/reducer";

const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    authReducer,
    addUserReducer,
});

export default rootReducer;