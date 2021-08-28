import React, {useState} from 'react';
import {actLoginAuth} from "./modules/action"; 
import {connect} from "react-redux";
import Loader from "./../../../components/Loader";
import {Redirect} from "react-router-dom";

function AuthPage(props) {
    console.log(props)
    const {loading, error} = props;

    const [state, setstate] = useState({taiKhoan: "", matKhau: ""})

    const handleOnchange = (event) => {
        const {name, value} = event.target;
        setstate({
            ...state,                                                                                                                                                                        
            [name] : value,
        })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        props.login(state, props.history);
    }

    if(localStorage.getItem("UserAdmin")){
        return <Redirect to="/dashboard" />
    }

    if(loading) return <Loader />

    const renderNoti = () =>{
        // if(error){
        //     return <div className="alert alert-danger">{error.response.data}</div>
        // }
        return error && <div className="alert alert-danger">{error.response.data}</div>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h3>AuthPage</h3>
                    {renderNoti()}
                    <form   onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" name="taiKhoan" onChange={handleOnchange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control" name="matKhau" onChange={handleOnchange}/>
                        </div>
                        <button type="submit" className="btn btn-success">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user, history) => {
            dispatch(actLoginAuth(user, history))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.authReducer.loading,
        error: state.authReducer.error,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AuthPage);
