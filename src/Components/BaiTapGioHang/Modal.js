import React, { Component } from 'react'

export default class Modal extends Component {

    renderSanPhamGioHang = () => {
        return this.props.gioHang.map((sanPham, index) => {
            return (
                <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td><img src={sanPham.hinhAnh} width={60} height={70} alt={sanPham.tenSP} /></td>
                    <td>{sanPham.tenSP}</td>
                    <td><button onClick={() => this.props.tangGiamSoLuong(sanPham.maSP, true)} className="btn btn-success" style={{ marginRight: '7px' }}>+</button>{sanPham.soLuong}<button onClick={() => this.props.tangGiamSoLuong(sanPham.maSP, false)} className="btn btn-success" style={{ marginLeft: '7px' }}>-</button></td>
                    <td>{(sanPham.giaBan).toLocaleString()}</td>
                    <td>{(sanPham.soLuong * sanPham.giaBan).toLocaleString()}</td>
                    <td><button onClick={() => this.props.xoaGioHang(sanPham)} className="btn btn-danger">Xoá</button></td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{ minWidth: '960px' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng của bạn</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá bán</th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderSanPhamGioHang()}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan='5'></td>
                                        <td className="text-danger font-weight-bold">Tổng tiền thanh toán</td>
                                        <td>{this.props.gioHang.reduce((tongTienThanhToan, spGH, index) => {
                                            return tongTienThanhToan += spGH.soLuong * spGH.giaBan;
                                        }, 0).toLocaleString() + " VNĐ"}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
