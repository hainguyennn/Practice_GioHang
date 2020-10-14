import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
        const { sanPham, themGioHang } = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP} width={60} height={300} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <button onClick={() => themGioHang(sanPham)} className="btn btn-dark">Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
