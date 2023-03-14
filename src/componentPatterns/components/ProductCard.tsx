import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactNode} from 'react';
import { ProductContextProps} from '../interfaces';
import { Product } from '../interfaces/index';
export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export interface Props {
    product : Product;
    children : ReactNode | ReactNode[];
    className ?: string
    style ?: CSSProperties
}

export const ProductCard = ({children, product, className, style}: Props) => {
    const {counter, increaseBy} = useProduct();
  return (
    <Provider  value = {{
        counter, 
        increaseBy, 
        product
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
