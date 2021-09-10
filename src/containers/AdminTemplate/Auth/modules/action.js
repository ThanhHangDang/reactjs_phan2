// import axios from "axios";
import * as ActionType from "./contants";
import setHeader from "../../../../utils/setHeader";
import api from "../../../../utils/apiUtils";

// giả sử BE trả là exp time là 3600000
const TIME_EXP=3600000;

export const actLoginAuth = (user, history) => {
    return async (dispatch) => {
        try{
            dispatch(actAuthRequest());
            // const result = await axios({
            //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            //     method: "POST",
            //     data: user,
            // });
            const result = await api.post("QuanLyNguoiDung/DangNhap", user)
    
            if(result.statusText === "OK"){
                //check maLoaiNguoiDung => "KhachHang" => thong báo
                if(result.data.maLoaiNguoiDung === "KhachHang"){
                    return Promise.reject({
                        //tạo error
                        response: {
                            data: "Bạn không có quyền truy cập",
                        }
                    }).catch((error) => {
                        dispatch(actAuthFailed(error));
                    })
                }

                //set accessToken vào Header
                setHeader(result.data.accessToken);

                //thời gian hết hạn
                //lưu exp time xuống localStorage
                const date = new Date().getTime();
                const exp = date + TIME_EXP;
                localStorage.setItem("exp", exp);
                dispatch(actSetTimeOutLogOut(history, TIME_EXP))

                //lưu trạng thái login ở localStorage
                localStorage.setItem("UserAdmin", JSON.stringify(result.data))

                //check maLoaiNguoiDung => quản trị => Redirect

                //Chuyển hướng sang trang Dashboard
                history.replace("/dashboard");

                dispatch(actAuthSuccess(result.data));
            }
            else{
                dispatch(actAuthFailed(result));
            }
        }
        catch(error){
            dispatch(actAuthFailed(error));
        }
       
    }
}

//trường hợp reload lại trang web
export const actTryLogin = (history) => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem("UserAdmin"));
        if(!user){
            return;
        }

        //tính thời gian exp
        const exp = localStorage.getItem("exp");
        const date = new Date().getTime();
        if(date > exp){
            //logout
            dispatch(actLogOut(history));
            return;
        }
        dispatch(actSetTimeOutLogOut(history, exp - date));
        setHeader(user.accessToken);
        dispatch(actAuthSuccess(user));
    }
}

//Logout
export const actLogOut = (history) => {
    //clear localStorage
    localStorage.removeItem("UserAdmin");
    localStorage.removeItem("exp");
    //redirect page /auth
    history.replace("/auth");
    //Clear reducer
    return {
        type: ActionType.AUTH_CLEAR_DATA,
    }
}

//tính thời gian hết hạn token
const actSetTimeOutLogOut = (history, expTimeout) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(actLogOut(history));
        }, expTimeout);
    }
}

const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    }
}

const actAuthSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data,
    }
}

const actAuthFailed = (data) => {
    return {
        type: ActionType.AUTH_FAILED,
        payload: data,
    }
}