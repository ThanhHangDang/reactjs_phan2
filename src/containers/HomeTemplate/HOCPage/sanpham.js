import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        return (
            <>
                <div className="form-group">
                    <label>Mã SP</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Tên SP</label>
                    <input type="text" />
                </div>
            </>
        )
    }
}
