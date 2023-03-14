import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

//PARA EL TERNARIO UN STRING VACIO DA COMO FALSE
export interface ImageProps {
    img ?: string;
    className ? : string;
    style ?: CSSProperties
}
export const ProductImage = ({img = '', ...props} : ImageProps)=>{
    const {product} = useContext(ProductContext);
    let imgToShow : string;
    if(img){
        imgToShow = img;
    }else if(product.img){
        imgToShow = product.img
    }else{
        imgToShow = noImage
    }
    return (
        <img className={`${styles.productImg} ${props.className}`} src={imgToShow} alt='Product Imate' style={props.style} />
    )
}