import React,{useEffect,useState,useCallback} from 'react'
import { useDispatch } from "react-redux";
import {getArticlespages} from "../../features/ArticleSlice";
import Affichearticles from './Affichearticles';
const Listarticles = () => {
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 12;
//const indexOfLastItem = currentPage * itemsPerPage;
//const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const dispatch=useDispatch()
const listproduits= useCallback(()=>{
const mesParams={
currentPage:currentPage,
itemsPerPage:itemsPerPage
};
dispatch(getArticlespages(mesParams))
},[currentPage])
useEffect(() => {
listproduits()
}, [listproduits])
return (
<div>
<Affichearticles currentPage={currentPage} setCurrentPage={setCurrentPage}
itemsPerPage = {itemsPerPage}/>
</div>
)
}
export default Listarticles