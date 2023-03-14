import { ReactNode } from "react";
import { ButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { ImageProps } from "../components/ProductImage";
import { Props as TitleProps } from "../components/ProducTitle";

export interface Product { 
    id : string;
    title : string;
    img? : string;
}

//CONTEXTO DE PRODUCTO
export interface ProductContextProps {
    counter : number;
    increaseBy : (value: number) => void;
    product : Product
}

export interface ProductCardHOCProps { 
    ({children, product, style}:ProductCardProps):JSX.Element;
    Title : ({title, ...props}:TitleProps)=>JSX.Element;
    Image: ({ img, ...props }: ImageProps) => JSX.Element;
    Buttons : ({className}:ButtonsProps)=>JSX.Element
}