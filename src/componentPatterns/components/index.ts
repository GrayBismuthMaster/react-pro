import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProducTitle';
import { ProductCardHOCProps } from '../interfaces/index';
export { ProductButtons } from "./ProductButtons";
export { ProductTitle } from './ProducTitle';
export { ProductImage } from './ProductImage';

export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title : ProductTitle,
    Image : ProductImage,
    Buttons : ProductButtons
})
export default ProductCard;