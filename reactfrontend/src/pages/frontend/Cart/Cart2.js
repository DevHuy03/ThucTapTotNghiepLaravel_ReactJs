import React from 'react';
import { Link } from "react-router-dom";

const Cart2 = () => {

    return (
        <div className="container_fullwidth">
            <div className="container shopping-cart">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="title">
                            Shopping Cart
                        </h3>
                        <div className="clearfix">
                        </div>
                        <table className="shop-table">
                            <thead>
                                <tr>
                                    <th>
                                        Image
                                    </th>
                                    <th>
                                        Dtails
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="images/products/small/products-06.png" alt="" />
                                    </td>
                                    <td>
                                        <div className="shop-details">
                                            <div className="productname">
                                                Lincoln Corner Unit Products
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>
                                            $200.00
                                        </h5>
                                    </td>
                                    <td>
                                    <div class="input-group mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            defaultValue={1} // Mặc định số lượng là 1
                                            min={1}
                                            max={10}
                                            step={1}
                                            data-decimals={0}
                                            required=""
                                        />

                                    </div>
                                    </td>
                                    <td>
                                        <h5>
                                            <strong className="red">
                                                $200.00
                                            </strong>
                                        </h5>
                                    </td>
                                    <td>
                                        <Link href="#">
                                            <img src="images/remove.png" alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="6">
                                        <button className="pull-left">
                                            Continue Shopping
                                        </button>
                                        <button className=" pull-right">
                                            Update Shopping Cart
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="clearfix">
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="shippingbox">
                                    <h5>
                                        Estimate Shipping And Tax
                                    </h5>
                                    
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="shippingbox">
                                    <h5>
                                        Discount Codes
                                    </h5>
                                    <form>
                                        <label>
                                            Enter your coupon code if you have one
                                        </label>
                                        <input type="text" name=""/>
                                            <div className="clearfix">
                                            </div>
                                            <button>
                                                Get A Qoute
                                            </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="shippingbox">
                                    <div className="subtotal">
                                        <h5>
                                            Sub Total
                                        </h5>
                                        <span>
                                            $1.000.00
                                        </span>
                                    </div>
                                    <div className="grandtotal">
                                        <h5>
                                            GRAND TOTAL
                                        </h5>
                                        <span>
                                            $1.000.00
                                        </span>
                                    </div>
                                    <button>
                                        Process To Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix">
                </div>
            </div>
        </div>

    );
};

export default Cart2;