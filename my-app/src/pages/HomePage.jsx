import React from 'react'

const HomePage = ({ products }) => {
    console.log("Home page: ", products);
    return (
        <div>
            {products.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button>Detail</button>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage