import * as ActionType from "./contants";
import axios from "axios";

const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST,
    }
}

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    }
}

const actListMovieFail = (data) => {
    return {
        type: ActionType.LIST_MOVIE_FAIL,
        payload: data,
    }
}

export const actFetchListMovie = () => {
    //Gọi axios trong action
    return (dispatch) => {
        //request
        dispatch(actListMovieRequest);
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET",
        })
            .then((result) => {
                //Success
                dispatch(actListMovieSuccess(result.data));
            })
            .catch((err) => {
                //Fail
                dispatch(actListMovieFail(err));
            })
    }
}