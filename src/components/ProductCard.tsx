import React from 'react';
import { IconContext } from "react-icons";
import { BsFillTriangleFill } from 'react-icons/bs';
import { Product } from '../pages/Home';
type Props = {
    item: Product;
    voteUp: (id: number) => void
}
const ProductCard: React.FC<Props> = ({ item,voteUp }) => {
    return (
        <div className="row justify-content-center product">
            <div className="col-3 product-img">
                <img src={item.img} alt="" />
            </div>
            <div className="col-6 product-info">
                <div className="vote">
                    <button type='button'
                        onClick={() => {
                            voteUp(item.id);
                        }}>
                        <IconContext.Provider value={{ className: "vote-up-icon" }}>
                            <BsFillTriangleFill />
                        </IconContext.Provider >
                    </button>
                    <p>{item.vote}</p>
                </div>
                <div>
                    <a href="#">{item.name}</a>
                    <p>{item.des}</p>
                </div>
                <div className='submit'>
                    <p>Submitted by:</p>
                    <div className="submit-img">
                        <img src={item.submit} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;