import { ProductCard} from '../components/';
import styles from '../styles/custom-styles.module.css'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
    const {onProductCountChange, shoppingCart} = useShoppingCart();
  return (
    <div >
        <h1>Shopping Page</h1>
        <hr/>
        <div style={{
            display : 'flex',
            flexDirection : 'row',
            flexWrap : 'wrap'
        }}>
            {
                products.map((product:any)=>(
                    <ProductCard 
                        key={product.id}
                        product={product} 
                        className={`${styles.bg_dark} ${styles.text_white}`}
                        onChange = {(evento)=>onProductCountChange(evento)}
                        value = {shoppingCart[product.id]?.count || 0}
                    >
                        <ProductCard.Image className={styles['custom-image']}/>
                        <ProductCard.Title className={`${styles.text_white}`} />
                        <ProductCard.Buttons className={`${styles['custom-buttons']} ${styles.text_white}`}/>
                    </ProductCard>
                ))
            }
            <div
                className={styles['shopping-cart']}
            >
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard 
                            key={key}
                            product={product} 
                            className={`${styles.bg_dark} ${styles.text_white}`}
                            style={{width : '100px'}}
                            value = {product.count}
                            onChange = {(evento)=>onProductCountChange(evento)}
                        >
                            <ProductCard.Image className={styles['custom-image']}/>
                            <ProductCard.Title className={`${styles.text_white}`} />
                            <ProductCard.Buttons 
                                className={`${styles['custom-buttons']} ${styles.text_white}`}
                                style={{
                                    display : 'flex',
                                    justifyContent : 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
