import React, { Component } from 'react'
import {connect} from 'react-redux';
class ProductList extends Component {
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps',nextProps);
    }
    render() {
        const {data,BuyProduct,displayDetail,detailIndex} = this.props;
        console.log('productlis fired');
        return (
            <>
            <div className="container-fluid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem' }}>
                {data.map((item) => {
                    return (
                        <article className="card col-12 p-3" key={item.maSP}>
                            <img src={item.hinhAnh} className="card-img-top" style={{ height: '300px' }} alt />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.tenSP}</h5>
                                <a href="#" className="btn btn-primary" onClick={(e) => {
                                    e.preventDefault();
                                    displayDetail(item)
                                }}>Xem chi tiết</a>
                                <a href="#" className="btn btn-danger" onClick={(e) => {
                                    e.preventDefault();
                                    BuyProduct(item);
                                }}>Thêm giỏ hàng</a>
                            </div>
                        </article>
                    )
                })}

               
            </div>
             <article className={detailIndex.showDetail?'container-fluid my-5 showDetail col-12':"container-fluid my-5 detail-product col-12" }>
              <div key={detailIndex.item.maSP}  style={{display:'flex',flexDirection:'row',background:'white'}}>
                             <div className="col-6">
                                 <img src={detailIndex.item.hinhAnh} className="card-img-top" style={{ height: '500px' }} alt />
                             </div>
                             <table class="table col-8">
                                 <thead>
                                     <tr>
                                         <th scope="col" colSpan="2">Thông số kỹ thuật</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                         <td>Màn Hình</td>
                                         <td>{detailIndex.item.manHinh}</td>
                                     </tr>
                                     <tr>
                                         <td>Hệ điều hành</td>
                                         <td>{detailIndex.item.heDieuHanh}</td>
                                     </tr>
                                     <tr>
                                         <td>Camera trước</td>
                                         <td>{detailIndex.item.cameraTruoc}</td>
                                     </tr>
                                     <tr>
                                         <td>Camera sau</td>
                                         <td>{detailIndex.item.cameraSau}</td>
                                     </tr>
                                     <tr>
                                         <td>RAM</td>
                                         <td>{detailIndex.item.ram}</td>
                                     </tr>
                                     <tr>
                                         <td>ROM</td>
                                         <td>{detailIndex.item.rom}</td>
                                     </tr>
                                 </tbody>
                             </table>
                        </div>
         </article>
         </>
        )
    }
    componentDidUpdate(){
        console.log('componentDidUpdate fired');
    }
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        BuyProduct: (sanPham) => {
            dispatch({
                type: "BUY_PRODUCT",
                payload: sanPham
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);