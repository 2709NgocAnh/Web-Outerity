import React from 'react';

export default function DetailsThumb({ productImage, setIndex }) {
    return (
        <div className="thumb">
            {productImage?.map((img, index) => (
                <img src={img.image} alt="" key={index} onClick={() => setIndex(index)} />
            ))}
        </div>
    );
}
