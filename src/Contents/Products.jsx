import React from 'react';
import products from './Menu'

export default function Products(child) {
    return (
        <>
            <div className="mx-15">
                <div>{child.name}</div>
            </div>
        </>
);
}