import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactNode} from 'react';
import { onChangeArgs, ProductContextProps} from '../interfaces';
import { Product } from '../interfaces/index';
export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export interface Props {
    product : Product;
    children : ReactNode | ReactNode[];
    className ?: string
    style ?: CSSProperties;
    onChange ?: (args : onChangeArgs)=>void;
    value ? : number
}

export const ProductCard = ({children, product, className, style, onChange, value=0}: Props) => {
    const {counter, increaseBy} = useProduct({
        onChange, 
        product,
        value
    });

  return (
    <Provider  value = {{
        counter, 
        increaseBy, 
        product,
    }}>
        <div key={product.id} className={`${styles.productCard} ${className}`} style={style}>     
            {
                children
            }
            {/* <ProductImage img = {product.img} />
            <ProductTitle title={product.title}/>
            <ProductButtons increaseBy={increaseBy} counter={counter}/>  */}
        </div>
    </Provider>
    
  )
}
