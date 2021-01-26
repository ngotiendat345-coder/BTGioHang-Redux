import React, { Component } from 'react'
import ProductList from '../Component/ProductList'
import Cart from '../Component/Cart'
import {connect} from 'react-redux';
class BTGioHang extends Component{
    state={showDetail:false,item:{}}
    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },

        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },

        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]
    displayDetail=(value)=>{
        
        this.setState({showDetail:true,item:value})
    }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate BTGioHang fired');
    // }
    // componentWillMount(){
    //     console.log('componentWillMount BT gio hangfired');
    // }
    render(){
        // console.log('render btgio hang fired')
        return(
            <>
                <header>
                    <h1 className="text-center text-success display-3">Bài tập giỏ hàng</h1>
                    <p className="text-right text-danger">Giỏ hàng: (<span className="text-danger">
                    {this.props.cart.reduce((amounTotal,item)=>{
                        return amounTotal + item.amount;
                    },0)}
                    </span>)</p>
                </header>
                <ProductList data={this.mangSanPham} displayDetail={this.displayDetail} detailIndex={{...this.state}}/>
                <Cart />
            </>

        )
    }
    // componentDidMount(){
    //     console.log('componentDidMount BT gio hang fired')
    // }
}

const mapStateToProps =(state)=>{
    return { cart: state.GioHangReducer.cart};
}


export default connect(mapStateToProps,null)(BTGioHang);