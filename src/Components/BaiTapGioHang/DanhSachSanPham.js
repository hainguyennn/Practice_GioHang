import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSachSanPham extends Component {
    // tao sửa lại chỗ này
    renderDanhSachSanPham = () => {
        return this.props.mangSanPham.map((sanPham, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <SanPhamGioHang themGioHang={this.props.themGioHang} sanPham={sanPham} />
                </div>
            );
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderDanhSachSanPham()}
                </div>
            </div>
        )
    }
}
