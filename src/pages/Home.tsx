import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { BsFillTriangleFill } from 'react-icons/bs';
import Product from '../components/ProductCard';
export type Product = {
    id: number;
    img: string;
    name: String;
    des: String;
    vote: number;
    submit: string;
}
const Products: Product[] = [
    {
        id: 1,
        name: "Yellow Pail",
        img: "./assets/products/image-aqua.png",
        des: "On-demand sand castle construction expertise.",
        vote: Math.floor(Math.random() * 101),
        submit: "./assets/avatars/daniel.jpg"
    },
    {
        id: 2,
        name: "Supermajority: The Fantasy Congress League",
        img: "./assets/products/image-rose.png",
        des: "Earn points when your favorite politicians pass legislation.",
        vote: Math.floor(Math.random() * 101),
        submit: "./assets/avatars/veronika.jpg"
    },
    {
        id: 3,
        name: "Haught or Naught",
        img: "./assets/products/image-steel.png",
        des: "High-minded or absent-minded? You decide.",
        vote: Math.floor(Math.random() * 101),
        submit: "./assets/avatars/kristy.png"
    },
    {
        id: 4,
        name: "Tinfoild: Tailored tinfoil hats",
        img: "./assets/products/image-yellow.png",
        des: "We already have your measurements and shipping address.",
        vote: Math.floor(Math.random() * 101),
        submit: "./assets/avatars/molly.png"
    },
]

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(Products);
    const upteVote = (id: number): void => {
        let newProducts = [...products];
        let index = newProducts.findIndex(item => item.id === id);
        newProducts[index].vote += 1;
        setProducts(newProducts)
    }
    return (<div>
        {Products.sort((first, second) => second.vote - first.vote).map((item, index) => (
            <Product item={item} key={item.id} voteUp={upteVote} />
        ))}
    </div>);
}
export default Home;