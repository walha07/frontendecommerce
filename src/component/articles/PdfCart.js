import React,{ useEffect,useCallback } from 'react'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PrintCart from './PrintCart';
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../features/cartSlice";
function PdfCart() {
const dispatch = useDispatch();
const cart = useSelector((state) => state.storecart);
const calTotals = useCallback(() => {
dispatch(getTotals());
}, [cart, dispatch])
useEffect(() => {
calTotals()
}, [calTotals])
return (
<div>
<div className="App">

{cart? <>
<PDFViewer width={1200} height={800} >
<PrintCart data={cart} />
</PDFViewer>

</>
: <div>loading</div>}
</div>
</div>
)
}
export default PdfCart