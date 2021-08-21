import React, { Component } from 'react';
import MovieItem from './MovieItem';
import Loader from '../../../components/Loader';
import { actFetchListMovie } from "./modules/action";
import {connect} from "react-redux";

class ListMoviePage extends Component {

    componentDidMount(){
        this.props.fetchData();
    }

    renderListMovie(){
        const {loading, data} = this.props;
        if(loading) return <Loader />;
        return data?.map((movie) => {
            return <MovieItem key={movie.maPhim} movie={movie}/>
        })
    }

    render() {
        return (
            <div className="container">
                <h3>ListMovie Page</h3>
                <div className="row">
                    {this.renderListMovie()}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(actFetchListMovie());
        },
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
