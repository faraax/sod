import { PDFViewer } from "@react-pdf/renderer";
import BMCPdf from "../components/PDFReports.jsx/BMCPdf";
import { useGlobalState } from "../Hooks/useGlobalState";


export default function PdfViewer() {
    const { form } = useGlobalState()
    return (
        <div className='flex justify-center items-center h-screen w-full flex-col'>
            <PDFViewer height={"100%"} width={"100%"}>
                <BMCPdf form={form} />
            </PDFViewer>
        </div>
    )
}

// Font.register({
//     family: "Roboto",
//     format: "truetype",
//     fonts: [
//         // { src: RobotoBlack }, // normal
//         { src: RobotoBold },
//         { src: RobotoItalic } // bold
//     ]
// })
// // Create styles
// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//         // fontFamily: "Roboto"
//     },
//     invoiceDateContainer: {
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         margin: 20
//     },
//     label: {
//         fontSize: 48,
//         // fontFamily: "Roboto"
//     },
//     tableContainer: {
//         flexDirection: "row",
//         flexWrap: 'wrap',
//         marginTop: 80,
//         marginBottom: 20,
//         marginLeft: -525,
//         borderWidth: 1,
//         borderColor: '#333',
//         width: 1150
//     },
//     firstRow: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         borderWidth: 1,
//         borderColor: '#333',
//         width: 230,
//         height: 500,
//         borderLeft: "none",
//         borderTop: "none"
//     },
//     firstRowInner: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         borderWidth: 1,
//         borderColor: '#333',
//         width: 230,
//         height: 250,
//         borderLeft: "none",
//         borderTop: "none",
//         borderRight: "none"
//     },
//     firstRowLastCol: {
//         flexDirection: 'column',
//         flexWrap: 'wrap',
//         borderWidth: 1,
//         borderColor: '#333',
//         width: 228,
//         borderLeft: "none",
//         borderTop: "none",
//         borderRight: "none"
//     },
//     secRow: {
//         flexDirection: 'column',
//         flexWrap: 'wrap',
//         borderWidth: 1,
//         borderColor: '#333',
//         width: 574,
//         height: 240,
//         borderLeft: "none",
//         borderTop: "none",
//         borderBottom: "none"
//     },
//     borderRightNone: {
//         border: "none"
//     },
//     title: {
//         fontSize: 16,
//         marginHorizontal: 5,
//         marginVertical: 3,
//         fontFamily: "Roboto",
//         fontWeight: "normal",
//         width: 230
//     },
//     list: {
//         fontSize: 12,
//         marginHorizontal: 10,
//     }
// });

// // Create Document Component
// const MyDocument = ({ form }) => (
//     <Document title='PDF_CHECK'>
//         <Page size="A3" orientation='landscape' style={styles.page}>
//             <View style={styles.invoiceDateContainer}>
//                 <Text style={styles.label}>Business Model Canvas</Text>
//             </View >
//             {/* {
//                 console.log(form)
//             } */}
//             <View style={styles.tableContainer}>
//                 <View style={styles.firstRow}>
//                     <Text style={styles.title}>Key Partnerships</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                 </View>
//                 <View style={styles.firstRow}>
//                     <View style={styles.firstRowInner}>
//                         <Text style={styles.title}>Key Activities</Text>
//                         <Text style={styles.list}>-Key Partnerships</Text>
//                         <Text style={styles.list}>-Key Partnerships</Text>
//                     </View>
//                     <View style={styles.firstRowInner}>
//                         <Text style={styles.title}>Key Resources</Text>
//                         <Text style={styles.list}>-Key Partnerships</Text>
//                         <Text style={styles.list}>-Key Partnerships</Text>
//                     </View>
//                 </View>
//                 <View style={styles.firstRow}>
//                     <Text style={styles.title}> Value Propositions</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                 </View>
//                 <View style={styles.firstRow}>
//                     <View style={styles.firstRowInner}>
//                         <Text style={styles.title}> Customer Relationships</Text>
//                         <Text style={styles.list}>-Key Partnerships</Text>
//                         <Text style={styles.list}>-Key Partnerships</Text>
//                     </View>
//                     <View style={styles.firstRowInner}>
//                         <Text style={styles.title}> Channels</Text>
//                         <Text style={styles.list}>-Key Partnerships</Text>
//                         <Text style={styles.list}>-Key Partnerships</Text>
//                     </View>
//                 </View>
//                 <View style={styles.firstRowLastCol}>
//                     <Text style={styles.title}>Customer Segments</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                 </View>
//                 <View style={styles.secRow}>
//                     <Text style={styles.title}>Cost Structure</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                 </View>
//                 <View style={styles.borderRightNone}>
//                     <Text style={styles.title}>Revenue Streams</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                     <Text style={styles.list}>-Key Partnerships</Text>
//                 </View>
//             </View>
//         </Page>
//     </Document>
// );
