import { useState } from "react";
import { Product, ProductInCart } from "../interfaces";
export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key:string] : ProductInCart}>({});

    
    const onProductCountChange = ({count, product} : {count : number, product : Product})=>{
        setShoppingCart(oldShoppingCart=>{

            const productInCart : ProductInCart = oldShoppingCart[product.id] || {...product, count : 0};
            if(Math.max(productInCart.count + count,0)>0){
                productInCart.count +=count;
                return {
                    ...oldShoppingCart,
                    [product.id] : productInCart
                }
            }
            //BORRAR EL PRODUCTO 
            //Ya que el producto no existe o es cero

            const {[product.id] : toDelete, ...rest} = oldShoppingCart;
            console.log(toDelete)
            return {
                ...rest
            }
            // else{
            //     return {
            //         ...oldShoppingCart,
            //         [product.id] : {
            //             ...product, count
            //         }
            //     }
            // }
            
        })
    }
  return {
    shoppingCart,
    onProductCountChange,

  }
}