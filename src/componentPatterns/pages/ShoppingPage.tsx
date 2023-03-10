import { ProductCard} from '../components/';
const product = {
    id : '1',
    title : 'Coffe mug',
    img : './coffee-mug.png'
}
export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr/>
        <div style={{
            display : 'flex',
            flexDirection : 'row',
            flexWrap : 'wrap'
        }}>
            
        <ProductCard product={product}>
            <ProductCard.Image/>
            <ProductCard.Title title='Hola'/>
            <ProductCard.Buttons/>
        </ProductCard>
        {/* <ProductCard product={product}>
            <ProductCard.Image/>
            <ProductCard.Title/>
            <ProductCard.Buttons/>
        </ProductCard> */}
        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}
        </div>
    </div>
  )
}
