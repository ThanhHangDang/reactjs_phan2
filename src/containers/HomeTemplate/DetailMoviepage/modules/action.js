import * as ActionType from "./contants";
import axios from "axios";

const actDetailMovieRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST,
    }
}

const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    }
}

const actDetailMovieFail = (err) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAILED,
        payload: err,
    }
}

export const actFetchDetailMovie = (id) => {
    return (dispatch) => {
        //request
        dispatch(actDetailMovieRequest());
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
            method: "GET",
        })
            .then((result) => {
                //Success
                dispatch(actDetailMovieSuccess(result.data));
            })
            .catch((err) => {
                //Fail
                dispatch(actDetailMovieFail(err));
            })
    }
}