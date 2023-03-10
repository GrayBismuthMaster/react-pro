import { ReactNode } from "react";

export interface ProductCardProps {
    product : Product;
    children : ReactNode | ReactNode[]

}
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
    ({children, product}:ProductCardProps):JSX.Element;
    Title : ({title}:{title ? : string;})=>JSX.Element;
    Image: ({ img }: {img?: string;}) => JSX.Element;
    Buttons : ()=>JSX.Element
}