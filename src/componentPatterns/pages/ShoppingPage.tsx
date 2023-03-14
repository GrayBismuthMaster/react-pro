import { ProductCard} from '../components/';
import styles from '../styles/custom-styles.module.css'

const product = {
    id : '1',
    title : 'Coffe mug',
    img : './coffee-mug.png'
}
export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping Page</h1>
        <hr/>
        <div style={{
            display : 'flex',
            flexDirection : 'row',
            flexWrap : 'wrap'
        }}>
            
        <ProductCard 
            product={product} 
            className={`${styles.bg_dark}`}
        >
            <ProductCard.Image className={styles['custom-image']}/>
            <ProductCard.Title className={`${styles.text_white}`} title='Hola'/>
            <ProductCard.Buttons className={`${styles['custom-buttons']} ${styles.text_white}`}/>
        </ProductCard>
        <ProductCard 
            product={product} 
            className={`${styles.bg_dark}`}
            style = {{
                backgroundColor : 'blue'
            }}
        >
            <ProductCard.Image className={styles['custom-image']}/>
            <ProductCard.Title className={`${styles.text_white}`} title='Hola'/>
            <ProductCard.Buttons className={`${styles['custom-buttons']} ${styles.text_white}`}/>
        </ProductCard>
        </div>
    </div>
  )
}
