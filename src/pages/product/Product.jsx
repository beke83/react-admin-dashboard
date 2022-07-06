import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/new-product'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img 
                        src="https://images.pexels.com/photos/3746933/pexels-photo-3746933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        className='productInfoImage' />
                        <span className="productName">Samsung Earbuds</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfokey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfokey">Sales:</span>
                            <span className="productInfoValue">3423</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfokey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfokey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Earpods'/>
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img 
                        src="https://images.pexels.com/photos/3746933/pexels-photo-3746933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="" 
                            className="productUploadImage" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
