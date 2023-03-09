import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../lazyload/pages/NoLazy';
type JSXComponent = ()=>JSX.Element;
interface Route {
    to : string;
    path : string;
    Component : LazyExoticComponent<JSXComponent>|JSXComponent;
    name : string;
}

const LazyLayout = lazy(()=>import( '../lazyload/layout/LazyLayout'));
const Lazy2= lazy(()=>import( '../lazyload/pages/LazyPage2'));
const Lazy3 = lazy(()=>import( '../lazyload/pages/LazyPage3'));

export const routes : Route[] = [
    {
        path:'/lazyload/*',
        to : '/lazyload',
        Component : LazyLayout,
        name : 'Lazy Layout'
    },
    {
        path:'no-lazy',
        to : '/no-lazy',
        Component : NoLazy,
        name : 'No Lazy'
    },
    
]