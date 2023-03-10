import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext} from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces';
import {ProductButtons,ProductImage,ProductTitle} from './index'
export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;



export const ProductCard = ({children, product}:ProductCardProps) => {
    const {counter, increaseBy} = useProduct();
  return (
    <Provider  value = {{
        counter, 
        increaseBy, 
        product
    }}>
        <div key={product.id} className={styles.productCard}>     
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
