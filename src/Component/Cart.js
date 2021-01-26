import React, { Component } from 'react';
import {connect} from 'react-redux';
class Cart extends Component {
    // componentWillReceiveProps(nextProps){
    //     console.log('componentWillReceiveProps',nextProps);
    // }
    render() {
        const { cart, showCart ,CloseCart,IncreaseAmount,DecreaseAmount,DeleteProduct} = this.props;
        console.log('render cart fired');
        return (
            <>
                <div className={showCart ? " cart-container show" : " cart-container"}>
                    <div className="card w-80 m-auto">
                        <header className="d-flex justify-content-between card-header">
                            <h1>Giỏ hàng</h1>
                            <button type="button" class="btn-close" aria-label="Close" onClick={CloseCart}><i class="fas fa-times"></i></button>
                        </header>
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>

                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Thành tiền</th>
                                        <th scope="col">Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.maSP}</td>
                                                <td><img src={item.hinhAnh} height={50} width={50} /></td>
                                                <td>{item.tenSP}</td>
                                                <td className="d-flex flex-direction-column">
                                                    <button className="btn btn-primary"
                                                        onClick={() => {
                                                            IncreaseAmount(item.maSP)
                                                        }}><i class="fas fa-chevron-up"></i></button>
                                                    {item.amount}
                                                    <button className="btn btn-primary"
                                                        onClick={() => {
                                                            DecreaseAmount(item.maSP)
                                                        }}
                                                    ><i class="fas fa-chevron-down"></i></button>
                                                </td>
                                                <td>{item.gia}</td>
                                                <td>{item.thanhTien}</td>
                                                <td><button className="btn btn-danger" onClick={() => {
                                                    DeleteProduct(item.maSP)
                                                }}>Xóa</button></td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <footer className="d-flex justify-content-between card-footer">
                            <div>
                                <h3>Tổng tiền:{cart.reduce((total,item)=>{
                                    console.log(total);
                                    return total + (item.amount *item.gia);
                                },0)}</h3>
                                <h2></h2>
                            </div>
                            <button type="button" className="btn btn-secondary" onClick={CloseCart}>Đóng</button>
                        </footer>
                    </div>
                </div>
            </>
        )
    }
    // componentDidUpdate(){
    //     console.log('componentDidUpdate fired');
    // }
}
const mapDispatchToProps = (dispatch) => {
    return {
        CloseCart: () => {
            dispatch({
                type:'CLOSE_CART'  
                }
            )
        },
        IncreaseAmount:(maSP)=>{
            dispatch({
                type:'INCREASE_AMOUNT',
                payload:maSP
            })
        },
        DecreaseAmount:(maSP)=>{
            dispatch({
                type:'DECREASE_AMOUNT',
                payload:maSP
            })
        },
        DeleteProduct:(maSP)=>{
            dispatch({
                type:'DELETE_PRODUCT',
                payload:maSP
            })
        }
    }
}
const mapStateToProps = (state) => {
    return { cart: state.GioHangReducer.cart, showCart: state.GioHangReducer.showCart }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);