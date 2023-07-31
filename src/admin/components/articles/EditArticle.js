import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import {updateArticle} from "../../../features/ArticleSlice"
import {getScategories} from "../../../features/scategorieSlice";
import {useDispatch,useSelector} from "react-redux";
import {UploadFirebase} from '../../../utils/UploadFirebase';
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'

import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const EditArticle = ({art,show,handleClose}) => {

const {scategories} = useSelector((state) =>state.storescategorie);
const [file, setFile] = useState("");
const [reference, setReference] = useState();
const [designation, setDesignation] = useState();
const [prix, setPrix] = useState();
const [marque, setMarque] = useState();
const [qtestock, setQtestock] = useState();
const [imageart, setImageart] = useState();
const [scategorieID, setScategorieID] = useState();
const [validated, setValidated] = useState(false);
const dispatch = useDispatch()

useEffect(()=>{
setReference(art.reference);
setDesignation(art.designation);
setPrix(art.prix);
setScategorieID(art.scategorieID._id);
console.log(art.scategorieID._id)
setMarque(art.marque);
setImageart(art.imageart)
setFile([
{
source: art.imageart,
options: { type: "local" }
}
]);
setQtestock(art.qtestock);

},[art])
useEffect(() => {
dispatch(getScategories());
},[dispatch]);

const handleSubmit = (url) => {
const article={
...art,
reference: reference,
designation: designation,
prix: prix,
marque: marque,
qtestock: qtestock,
imageart: url,
scategorieID: scategorieID
}
dispatch(updateArticle(article))
.then(res=>{
})
.catch(error=>{
console.log(error)
alert("Erreur ! Insertion non effectuée")
})
}
const handleUpload = (event) => {
event.preventDefault();
const form = event.currentTarget;
if (form.checkValidity() === true) {
if (!file) {
const url = imageart;
handleClose()
handleSubmit(url)
}
else {
resultHandleUpload(file[0].file,event);
}

setValidated(true);
};
}
const resultHandleUpload = async(file) => {
try {
const url = await UploadFirebase(file);
handleClose()
handleSubmit(url)
} catch (error) {
}
}
return (
<div>

<Modal show={show} onHide={handleClose}>
<Form noValidate validated={validated} onSubmit={handleUpload}>
<Modal.Header closeButton>
<h2>Modification Product</h2>
</Modal.Header>
<Modal.Body>
<div className="container w-100 d-flex justify-content-center">
<div>
<div className='form mt-3'>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >Référence *</Form.Label>
<Form.Control
required
type="text"
placeholder="Référence"
value={reference}
onChange={(e)=>setReference(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Référence Article
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Désignation *</Form.Label>
<Form.Control
required
type="text"
placeholder="Désignation"
value={designation}
onChange={(e)=>setDesignation(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Désignation
</Form.Control.Feedback>
</Form.Group>
</Row>
<Row className="mb-2">
<Form.Group className="col-md-6">
<Form.Label>Marque *</Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
placeholder="Marque"
value={marque}
onChange={(e)=>setMarque(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Marque Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Prix</Form.Label>
<Form.Control
type="number"
placeholder="Prix"
value={prix}
onChange={(e)=>setPrix(e.target.value)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group className="col-md-6 ">
<Form.Label>
Qté stock<span className="req-tag">*</span>
</Form.Label>
<Form.Control
required
type="number"
value={qtestock}
onChange={(e)=>setQtestock(e.target.value)}
placeholder="Qté stock"
/>
<Form.Control.Feedback type="invalid">
Qté stock Incorrect
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Image</Form.Label>
<FilePond

files={file}
allowMultiple={false}
onupdatefiles={setFile}
labelIdle='<span className="filepond--label-action">Browse

One</span>'

server={{
load: (source, load, error, progress, abort, headers) => {
var myRequest = new Request(source);
fetch(myRequest).then(function(response) {
response.blob().then(function(myBlob) {
load(myBlob);
});
});
}
}}
/>
</Form.Group>
<Form.Group as={Col} md="12">
<Form.Label>S/Catégorie</Form.Label>
<Form.Control
as="select"
type="select"
value={scategorieID}
onChange={(e)=>setScategorieID(e.target.value)}
>
<option></option>

{scategories.map((scat)=><option key={scat._id}
value={scat._id}>{scat.nomscategorie}</option>
)}
</Form.Control>
</Form.Group>
</Row>
</div>
</div>
</div>
</Modal.Body>
<Modal.Footer>
<Button type="submit">Enregistrer</Button>
<Button type="button" className="btn btn-warning" onClick={handleClose}
>Annuler</Button>
</Modal.Footer>
</Form>
</Modal>
</div>
)
}
export default EditArticle