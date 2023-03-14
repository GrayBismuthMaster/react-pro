import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    title ?: string;
    className ?: string;
    style ?: CSSProperties
}
//DEFINIDO DE ESTA MANERA SIEMPRE TIENE VALOR 
export const ProductTitle = ({title, ...props} : Props)=>{
    console.log(props);
    const {product} = useContext(ProductContext);
    return(
        <span className={`${styles.productDescription} ${props.className}`} style={props.style}>{title?title : product.title}</span>
    )
}