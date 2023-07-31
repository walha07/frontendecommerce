import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../../../features/ArticleSlice";
import Createarticle from './Createarticle';
import AfficheAerticleTable from './AfficheAerticleTable';

const ProductsAppAdmin = () => {
const dispatch = useDispatch();
useEffect(() => {
dispatch(getArticles());},[])

return (
<div>
<Createarticle/>
<AfficheAerticleTable />
</div>
)
}
export default ProductsAppAdmin