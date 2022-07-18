import React from 'react';

export default function Products(child) {
    return (
        <>
            <div className="mx-15">
                <div>{child.name}</div>
            </div>
        </>
);
}