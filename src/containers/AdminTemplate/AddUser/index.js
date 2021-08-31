import React, {useState} from 'react';
import Loader from "./../../../components/Loader";
import { actAddUser } from './modules/actions';
import { useSelector, useDispatch } from 'react-redux';

function AddUser() {

    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: "",
    })

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.addUserReducer.loading )

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleAddUser = (event) => {
        event.preventDefault();
        // props.addUser(state)
        dispatch(actAddUser(state))
    }

    if(loading) return <Loader />
    

    return (
        <div>
            <form className="container" onSubmit={handleAddUser}>
                <h3>Thêm người dùng</h3>
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input className="form-control" name="taiKhoan" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                    <span>Mật khẩu</span>
                    <input className="form-control" name="matKhau" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                    <span>Họ tên</span>
                    <input className="form-control" name="hoTen" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                    <span>Email</span>
                    <input className="form-control" name="email" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                    <span>Số điện thoại</span>
                    <input className="form-control" name="soDt" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                    <span>Mã nhóm</span>
                    <input className="form-control" name="maNhom" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Thêm người dùng</button>
                </div>
            </form>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         loading: state.addUserReducer.loading,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addUser: (user) => {
//             dispatch(actAddUser(user))
//         },
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (AddUser);
export default AddUser;