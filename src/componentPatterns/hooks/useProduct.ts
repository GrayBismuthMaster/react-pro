import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from "../interfaces";
interface useProductArgs{
    product : Product;
    onChange ?: (args: onChangeArgs)=>void;
    value ?: number;
}
export const useProduct = ({onChange, product, value=0}:useProductArgs) => {
    
    const [counter, setCounter]= useState(value);
    //el signo de cierre de admiración diría que en el caso de existir daría el contrario osea false
    //y con doble sería true
    useEffect(() => {
        setCounter(value);
      return () => {
      }
    }, [value])
    
    const increaseBy = (value : number)=>{
     
        const newValue = Math.max(counter + value, 0);
       setCounter(newValue);
       onChange && onChange({count : newValue, product });
    }
    
    return {
        counter,
        increaseBy
    }
}
