import React from 'react'

const Products = ({ products = [] }) => {
    return (
        <div className="row">
            {
                products.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5>{item.nombre}</h5>
                                <p>{item.precio}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Products
