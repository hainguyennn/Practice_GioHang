import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import Modal from './Modal'
import phoneData from './PhoneData.json'

export default class BaiTapGioHang extends Component {


    state = {
        gioHang: []
    }
    themGioHang = (sanPhamChon) => {
        let spDaChon = {
            maSP: sanPhamChon.maSP,
            tenSP: sanPhamChon.tenSP,
            giaBan: sanPhamChon.giaBan,
            hinhAnh: sanPhamChon.hinhAnh,
            soLuong: 1
        }
        let gioHangUpdate = [...this.state.gioHang];
        let index = gioHangUpdate.findIndex(sp => sp.maSP === spDaChon.maSP);
        if (index !== -1) {
            gioHangUpdate[index].soLuong += 1;
        } else {
            gioHangUpdate.push(spDaChon);
        }
        this.setState({
            gioHang: gioHangUpdate
        })
    }

    xoaGioHang = (sanPham) => {
        let spCanXoa = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            giaBan: sanPham.giaBan,
            hinhAnh: sanPham.hinhAnh,
            soLuong: 1
        }
        let gioHangUpdate = [...this.state.gioHang];
        let index = gioHangUpdate.findIndex(sp => sp.maSP === spCanXoa.maSP);
        if (index !== -1) {
            gioHangUpdate.splice(index, 1);
        }
        this.setState({
            gioHang: gioHangUpdate
        })
    }

    tangGiamSoLuong = (maSP, tangGiam) => {
        let gioHangUpdate = [...this.state.gioHang];
        let index = gioHangUpdate.findIndex(sp => sp.maSP === maSP);
        if (tangGiam) {
            gioHangUpdate[index].soLuong += 1;
        } else {
            if (gioHangUpdate[index].soLuong > 1) {
                gioHangUpdate[index].soLuong -= 1;
            }
        }
        this.setState({
            gioHang: gioHangUpdate
        })
    }

    render() {
        let tongSoLuongTrongGioHang = this.state.gioHang.reduce((tongSoLuong, spGH, index) => {
            return tongSoLuong += spGH.soLuong;
        }, 0)
        return (
            <div className="container">
                <h3 className="text-center">Tao bán điện thoại</h3>
                <Modal tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <div className="text-right">
                    <span data-toggle="modal" data-target="#modelId" className="btn btn-dark mb-3" style={{ fontSize: '24px' }}>Giỏ hàng ({tongSoLuongTrongGioHang})</span>
                </div>
                <DanhSachSanPham themGioHang={this.themGioHang} mangSanPham={phoneData} />
            </div>
        )
    }
}
