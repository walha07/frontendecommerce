import React from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { Page, Image, Document } from "@react-pdf/renderer";
const PrintCart = ({data}) => {
const styles = StyleSheet.create({
body: {
paddingTop: 35,
paddingBottom: 65,
paddingHorizontal: 35,
},
title: {
fontSize: 24,
textAlign: "center",
fontFamily: "AntonFamily",
},
text: {
margin: 12,
fontSize: 14,
textAlign: "justify",
fontFamily: "AntonFamily",
},
image: {
marginVertical: 15,
marginHorizontal: 100,
width:70,
height:70

},
table: {
width: '100%',
border:'1'
},
row: {
display: 'flex',
flexDirection: 'row',
borderTop: '1px solid #EEE',
paddingTop: 8,
paddingBottom: 8,
fontSize: 12,
marginBottom: 20,
textAlign: "center",
color: "grey",
fillColor: [241, 196, 15],
},
header: {
fontSize: 12,
marginBottom: 20,
textAlign: "center",
color: "black",
fillColor: [241, 196, 15]
},
bold: {
fontWeight: 'bold',
},
// So Declarative and unDRY 👌
row1: {
width: '27%',
},
row2: {
width: '15%',
},
row3: {
width: '15%',
},
row4: {
width: '20%',
},
row5: {
width: '27%',
},
pageNumber: {
position: "absolute",
fontSize: 12,
bottom: 30,
left: 0,
right: 0,

textAlign: "center",
color: "grey",
fontFamily: "AntonFamily",
},
})

return (
<Document>
<Page style={{...styles.body}}>
<View style={[styles.bold, styles.header]}>
<Text> Détail de la commande </Text>
</View>
<View style={styles.table}>
<View style={[styles.row, styles.bold, styles.header]}>
<Text style={styles.row1}>Image</Text>
<Text style={styles.row1}>Désignation</Text>
<Text style={styles.row2}>Marque</Text>
<Text style={styles.row2}>Quantité</Text>
<Text style={styles.row5}>Prix</Text>
<Text style={styles.row5}>S/Total</Text>
</View>
{data?.cartItems.map((row, i) => (
<View key={i} style={styles.row} wrap={false}>
<Text style={styles.row1}>
<Image src={row.imageart} style={styles.image}/>
</Text>
<Text style={styles.row1}>
<Text style={styles.bold}>{row.designation}</Text>
</Text>
<Text style={styles.row2}>{row.marque}</Text>
<Text style={styles.row3}>{row.cartQuantity}</Text>
<Text style={styles.row5}>{row.prix} TND</Text>
<Text style={styles.row5}>

{(row.prix * row.cartQuantity).toFixed(3)} TND

</Text>
</View>
))}
<Text style={styles.header}>
Total : {data.cartTotalAmount.toFixed(3)} TND
</Text>
</View>
</Page>
</Document>
)
}

export default PrintCart