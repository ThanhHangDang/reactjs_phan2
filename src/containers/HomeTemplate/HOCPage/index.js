import React, { Component } from 'react';
// import NhanVien from './nhanvien';
import SanPham from './sanpham';
import WithCard from './WithCard';

const WrapperCard = WithCard(SanPham);

export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HOC page</h3>
                <WrapperCard />
            </div>
        )
    }
}
