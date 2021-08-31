import axios from "axios";
import * as ActionType from "./contants";

export const actAddUser = (user) => {

    let accessToken = "";
    if(localStorage.getItem("UserAdmin")){
        accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }

    return async (dispatch) => {
        try {
            dispatch(actAddUserRequest());
            const result = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
                method: "POST",
                data: user,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })

            if(result.statusText === "OK"){
                dispatch(actAddUserSuccess(result.data))
            }
            else{
                dispatch(actAddUserFailed(result))
            }
        }
        catch(error){
            dispatch(actAddUserFailed(error))
        }
    }   
}

const actAddUserRequest = () => {
    return {
        type: ActionType.ADDUSER_REQUEST,
    }
}

const actAddUserSuccess = (data) => {
    return {
        type: ActionType.ADDUSER_REQUEST,
        payload: data,
    }
}

const actAddUserFailed = (data) => {
    return {
        type: ActionType.ADDUSER_FAILED,
        payload: data,
    }
}