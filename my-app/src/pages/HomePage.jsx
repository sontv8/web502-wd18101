import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = ({ products }) => {
    console.log("Home page: ", products);
    return (
        <div>
            {products.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <Link to={`/detail/${item.id}`}><button>Detail</button></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage