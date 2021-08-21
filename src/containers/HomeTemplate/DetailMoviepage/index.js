import React, { Component } from 'react';
import {actFetchDetailMovie} from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader"

class DetailMoviePage extends Component {

    componentDidMount() {
        //nhận lại id từ url
        const id = this.props.match.params.id;
        this.props.fetchDetailMovie(id);
    }

    renderTable = () => {
        const {data} = this.props;
        return data?.lichChieu?.map((item) => {
            return (
                <tr key={item.maLichChieu}>
                    <td>{item.thongTinRap.tenCumRap}</td>
                    <td>{item.thongTinRap.tenRap}</td>
                    <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                    <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                    <td>
                        <a href="#dat-ve" className="btn btn-success">Đặt vé</a>
                    </td>
                </tr>
            )
        })
    }

    render() {
        const {loading, data} = this.props;
        if(loading) return <Loader />
        return (
            <div className="container">
                <h3>DetailMoviePage</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={data && data.hinhAnh} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Tên Phim</td>
                                    <td>{data && data.tenPhim}</td>
                                </tr>
                                <tr>
                                    <td>Mô Tả</td>
                                    <td>{data && data.moTa}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Cụm rạp</th>
                                    <th>Tên rạp</th>
                                    <th>Ngày chiếu</th>
                                    <th>Giờ chiếu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailMovie: (id) => {
            dispatch(actFetchDetailMovie(id))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.detailMovieReducer.loading,
        data: state.detailMovieReducer.data,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DetailMoviePage);