import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from './DataProvider';
import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

/* import { Link } from 'react-router-dom';
import Sizes from './Sizes';
import Colors from './Colors'; */
import axios from 'axios';
import TabTitle from '~/Components/config/TabTitle';
import './Details.css';
import DetailsThumb from './DetailsThumb';
export default function Details() {
    TabTitle('/product');
    const { id } = useParams();
    const value = useContext(DataContext);
    const addCart = value.addCart;
    const [current, setCurrent] = useState();
    const [productImage, setProductImage] = useState();
    const [index, setIndex] = useState(0);
    const imgDiv = useRef();

    // console.log(products);
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
    };
    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/product/${id}`);
            return data;
        };
        aaa()
            .then((response) => {
                setProductImage(response.data.product_images);
                setCurrent(response.data.product);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        console.log(current);
    }, [current]);

    return current ? (
        <div className="details" key={current?.id}>
            <div
                className="img-container"
                onMouseMove={handleMouseMove}
                style={{
                    backgroundImage: `url(${productImage.length ? productImage[index].image : current.image})`,
                }}
                ref={imgDiv}
                onMouseLeave={() => (imgDiv.current.style.backgroundPosition = `center`)}
            />

            <div className="box-details">
                <h2 title={current?.name}>{current?.name}</h2>
                <h3>{current?.price} VND</h3>
                {/* <Colors colors={current.colors} />
                    <Sizes sizes={current.sizes} /> */}
                <p>{current?.content}</p>
                <p>{current?.content}</p>
                <DetailsThumb productImage={productImage} setIndex={setIndex} />
                <button className="cart" onClick={() => addCart(current.id)}>
                    Add to cart
                </button>
            </div>
        </div>
    ) : (
        <div style={{ display: 'flex', margin: 50 }}>
            <Skeleton height={300} width={300} />
            <div style={{ display: 'flex', direction: 'collumn' }}>
                <Skeleton count={5} height={30} width={250} style={{ marginBottom: 20 }} />
            </div>
        </div>
    );
}
