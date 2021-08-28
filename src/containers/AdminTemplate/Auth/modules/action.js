import axios from "axios";
import * as ActionType from "./contants";

export const actLoginAuth = (user, history) => {
    return async (dispatch) => {
        try{
            dispatch(actAuthRequest());
            const result = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                method: "POST",
                data: user,
            });
    
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