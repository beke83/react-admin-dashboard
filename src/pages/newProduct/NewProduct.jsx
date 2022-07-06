import React from 'react';
import './newProduct.css';

export default function NewProduct() {
  return (
    <div className='newProduct'>
        <h1 className="addProductTitle">New Product</h1>
        <form action="" className="addProductForm">
            <div className="addProductItem">
                <label htmlFor="">Image</label>
                <input type="file" id="file" />
            </div>
            <div className="addProductItem">
                <label >Name</label>
                <input type="text" placeholder='Apple earpods' />
            </div>
            <div className="addProductItem">
                <label htmlFor="">Stock</label>
                <input type="text" placeholder='123' />
            </div>
            <div className="addProductItem">
                <label htmlFor="Active">Active</label>
                <select name="active" className='newUserSelect' id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>   
        </form>
    </div>
  )
}
