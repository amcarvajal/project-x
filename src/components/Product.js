import React from 'react'

export default function Product({title}) {

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <div>
                <h2> This is a product page {title}</h2>
            </div>
        </div>
    )
}
