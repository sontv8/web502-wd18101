import React, { useState } from 'react'

const AddProductPage = ({ addProduct }) => {
    const [inputValues, setInputValues] = useState();
    const onHandleChange = (event) => {
        setInputValues({ "name": event.target.value });
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        addProduct(inputValues);
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Enter Product Name' onChange={onHandleChange} />
                <button type="submit">Add New</button>
            </form>
        </div>
    )
}

export default AddProductPage