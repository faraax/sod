import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';
import RobotoRegular from '../../Utils/fonts/Roboto-Regular.ttf'
import RobotoBold from '../../Utils/fonts/Roboto-Bold.ttf'
import RobotoItalic from '../../Utils/fonts/Roboto-Italic.ttf'
import RobotoBoldItalic from '../../Utils/fonts/Roboto-BoldItalic.ttf'

Font.register({
    family: "Roboto",
    format: "truetype",
    fonts: [
        // { src: RobotoBlack }, // normal
        { src: RobotoBold },
        { src: RobotoItalic }, // bold
        { src: RobotoBoldItalic } // bold
    ]
})

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        // fontFamily: "Roboto"
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 20
    },
    label: {
        fontSize: 48,
        // fontFamily: "Roboto"
    },
    tableContainer: {
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop: 80,
        marginBottom: 20,
        marginLeft: -525,
        borderWidth: 1,
        borderColor: '#333',
        width: 1150
    },
    firstRow: {
        // flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#333',
        width: 230,
        height: 500,
        borderLeft: "none",
        borderTop: "none",
        // whiteSpace: "pre-wrap"
    },
    firstRowInner: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#333',
        width: 230,
        height: 250,
        borderLeft: "none",
        borderTop: "none",
        borderRight: "none"
    },
    firstRowLastCol: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#333',
        width: 228,
        borderLeft: "none",
        borderTop: "none",
        borderRight: "none"
    },
    secRow: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#333',
        width: 574,
        height: 240,
        borderLeft: "none",
        borderTop: "none",
        borderBottom: "none"
    },
    borderRightNone: {
        border: "none"
    },
    title: {
        fontSize: 16,
        marginHorizontal: 5,
        marginVertical: 3,
        fontFamily: "Roboto",
        fontWeight: "normal",
        // width: 230,
        // overflow: "hidden"
    }
});

export default function BMCPdf({ form }) {

    const handleTag = (list) => {
        let ele = { bold: "", italic: "", link: "", src: null, text: "" }
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(list, 'text/html')
        let bold = htmlDoc.getElementsByTagName('b');
        let italic = htmlDoc.getElementsByTagName('i');
        let link = htmlDoc.getElementsByTagName('a');
        for (let i = 0; i < link.length; i++) {
            const element = link[i];
            ele.link = true
            ele.src = element.getAttribute('href')
            ele.text = element.textContent
        }

        for (let i = 0; i < bold.length; i++) {
            const element = bold[i];
            ele.bold = true
            ele.text = element.textContent
        }

        for (let i = 0; i < italic.length; i++) {
            const element = italic[i];
            ele.italic = true
            ele.text = element.textContent
        }
        if ((bold.length < 1) && (italic.length < 1) && (link.length < 1)) {
            ele.text += list;
        }
        return ele
    }

    const blankRows = Array(form)
    const data = blankRows.map((list, index) => (
        <View style={styles.tableContainer} key={index}>
            <View style={styles.firstRow}>
                <Text style={styles.title}>Key Partnerships</Text>
                {
                    list.KeyPartnerships.list.map((list, index) => {
                        const ele = handleTag(list)
                        Font.register({
                            family: "Roboto-Regular",
                            format: "truetype",
                            src: RobotoRegular
                        })
                        Font.register({
                            family: "Roboto-Bold",
                            format: "truetype",
                            src: RobotoBold
                        })
                        Font.register({
                            family: "Roboto-Italic",
                            format: "truetype",
                            src: RobotoItalic
                        })
                        Font.register({
                            family: "Roboto-Bold-Italic",
                            format: "truetype",
                            src: RobotoBoldItalic
                        })
                        const classStyle = StyleSheet.create({
                            list: {
                                flexDirection: "row",
                                fontSize: 12,
                                marginHorizontal: 10,
                                width: 230,
                                fontFamily: (ele.bold) ? "Roboto-Bold" : (ele.italic) ? "Roboto-Italic" : "Roboto-Regular"
                            }
                        })
                        return (ele.link) ?
                            <Link
                                src={ele.src}
                                style={classStyle.list} key={index} >
                                {ele.text}
                            </Link>
                            :
                            <Text
                                style={classStyle.list} key={index} >{ele.text}</Text>
                    })
                }
            </View>
            <View style={styles.firstRow}>
                <View style={styles.firstRowInner}>
                    <Text style={styles.title}>Key Activities</Text>
                    {
                        list.KeyActivities.list.map((list, index) => {
                            const ele = handleTag(list)
                            Font.register({
                                family: "Roboto-Regular",
                                format: "truetype",
                                src: RobotoRegular
                            })
                            Font.register({
                                family: "Roboto-Bold",
                                format: "truetype",
                                src: RobotoBold
                            })
                            Font.register({
                                family: "Roboto-Italic",
                                format: "truetype",
                                src: RobotoItalic
                            })
                            Font.register({
                                family: "Roboto-Bold-Italic",
                                format: "truetype",
                                src: RobotoBoldItalic
                            })
                            const classStyle = StyleSheet.create({
                                list: {
                                    fontSize: 12,
                                    marginHorizontal: 10,
                                    width: 230,
                                    fontFamily: (ele.bold) ? "Roboto-Bold" : (ele.italic) ? "Roboto-Italic" : "Roboto-Regular"
                                }
                            })
                            return (ele.link) ?
                                <Link
                                    src={ele.src}
                                    style={classStyle.list} key={index} >
                                    {ele.text}
                                </Link>
                                :
                                <Text
                                    style={classStyle.list} key={index} >{ele.text}</Text>
                        })
                    }
                </View>
                <View style={styles.firstRowInner}>
                    <Text style={styles.title}>Key Resources</Text>
                    {
                        list.KeyResources.list.map((list, index) => {
                            const ele = handleTag(list)
                            Font.register({
                                family: "Roboto-Regular",
                                format: "truetype",
                                src: RobotoRegular
                            })
                            Font.register({
                                family: "Roboto-Bold",
                                format: "truetype",
                                src: RobotoBold
                            })
                            Font.register({
                                family: "Roboto-Italic",
                                format: "truetype",
                                src: RobotoItalic
                            })
                            Font.register({
                                family: "Roboto-Bold-Italic",
                                format: "truetype",
                                src: RobotoBoldItalic
                            })
                            const classStyle = StyleSheet.create({
                                list: {
                                    fontSize: 12,
                                    marginHorizontal: 10,
                                    width: 230,
                                    fontFamily: (ele.bold) ? "Roboto-Bold" : (ele.italic) ? "Roboto-Italic" : "Roboto-Regular"
                                    // fontWeight: ele.bold ? "normal" ? (ele.italic) : "bold" : null
                                }
                            })
                            return (ele.link) ?
                                <Link
                                    src={ele.src}
                                    style={classStyle.list} key={index} >
                                    {ele.text}
                                </Link>
                                :
                                <Text
                                    style={classStyle.list} key={index} >{ele.text}</Text>
                        })
                    }
                </View>
            </View>
            <View style={styles.firstRow}>
                <Text style={styles.title}> Value Propositions</Text>
                {
                    list.ValuePropositions.list.map((list, index) => {
                        const ele = handleTag(list)
                        Font.register({
                            family: "Roboto-Regular",
                            format: "truetype",
                            src: RobotoRegular
                        })
                        Font.register({
                            family: "Roboto-Bold",
                            format: "truetype",
                            src: RobotoBold
                        })
                        Font.register({
                            family: "Roboto-Italic",
                            format: "truetype",
                            src: RobotoItalic
                        })
                        Font.register({
                            family: "Roboto-Bold-Italic",
                            format: "truetype",
                            src: RobotoBoldItalic
                        })
                        const classStyle = StyleSheet.create({
                            list: {
                                fontSize: 12,
                                marginHorizontal: 10,
                                width: 230,
                                fontFamily: (ele.bold) ? "Roboto-Bold" : (ele.italic) ? "Roboto-Italic" : "Roboto-Regular",
                                // whiteSpace: "pre-wrap"
                                // fontWeight: ele.bold ? "normal" ? (ele.italic) : "bold" : null
                            }
                        })
                        return (ele.link) ?
                            <Link
                                src={ele.src}
                                style={classStyle.list} key={index} >
                                {ele.text}
                            </Link>
                            :
                            <Text
                                style={classStyle.list} key={index} >{ele.text}</Text>
                    })
                }
            </View>
            <View style={styles.firstRow}>
                <View style={styles.firstRowInner}>
                    <Text style={styles.title}> Customer Relationships</Text>
                    {
                        list.CustomerRelationships.list.map((list, index) => {
                            const ele = handleTag(list)
                            Font.register({
                                family: "Roboto-Regular",
                                format: "truetype",
                                src: RobotoRegular
                            })
                            Font.register({
                                family: "Roboto-Bold",
                                format: "truetype",
                                src: RobotoBold
                            })
                            Font.register({
                                family: "Roboto-Italic",
                                format: "truetype",
                                src: RobotoItalic
                            })
                            Font.register({
                                family: "Roboto-Bold-Italic",
                                format: "truetype",
                                src: RobotoBoldItalic
                            })
                            const classStyle = StyleSheet.create({
                                list: {
                                    fontSize: 12,
                                    marginHorizontal: 10,
                                    width: 230,
                                    fontFamily: (ele.bold) ? "Roboto-Bold" : (ele.italic) ? "Roboto-Italic" : "Roboto-Regular"
                                    // fontWeight: ele.bold ? "normal" ? (ele.italic) : "bold" : null
                                }
                            })
                            return (ele.link) ?
                                <Link
                                    src={ele.src}
                                    style={classStyle.list} key={index} >
                                    {ele.text}
                                </Link>
                                :
                                <Text
                                    style={classStyle.list} key={index} >{ele.text}</Text>
                        })
                    }
                </View>
                <View style={styles.firstRowInner}>
                    <Text style={styles.title}> Channels</Text>
                    {
                        list.Channels.list.map((list, index) => {
                            const ele = handleTag(list)
                            Font.register({
                                family: "Roboto-Regular",
                                format: "truetype",
                                src: RobotoRegular
                            })
                            Font.register({
                                family: "Roboto-Bold",
                                format: "truetype",
                                src: RobotoBold
                            })
                            Font.register({
                                family: "Roboto-Italic",
                                format: "truetype",
                                src: RobotoItalic
                            })
                            Font.register({
                                family: "Roboto-Bold-Italic",
                                format: "truetype",
                                src: RobotoBoldItalic
                            })
                            const classStyle = StyleSheet.create({
                                list: {
                                    fontSize: 12,
                                    marginHorizontal: 10,
                                    width: 230,
                                    fontFamily: (ele.bold) ? "Roboto-Bold" : (ele.italic) ? "Roboto-Italic" : "Roboto-Regular"
                                    // fontWeight: ele.bold ? "normal" ? (ele.italic) : "bold" : null
                                }
                            })
                            return (ele.link) ?
                                <Link
                                    src={ele.src}
                                    style={classStyle.list} key={index} >
                                    {ele.text}
                                </Link>
                                :
                                <Text
                                    style={classStyle.list} key={index} >{ele.text}</Text>
                        })
                    }
                </View>
            </View>
            <View style={styles.firstRowLastCol}>
                <Text style={styles.title}>Customer Segments</Text>
                {
                    list.CustomerSegments.list.map((list, index) => {
                        const ele = handleTag(list)
                        Font.register({
                            family: "Roboto-Regular",
                            format: "truetype",
                            src: RobotoRegular
                        })
                        Font.register({
                            family: "Roboto-Bold",
                            format: "truetype",
                            src: RobotoBold
                        })
                        Font.register({
                            family: "Roboto-Italic",
                            format: "truetype",
                            src: RobotoItalic
                        })
                        Font.register({
                            family: "Roboto-Bold-Italic",
                            format: "truetype",
                            src: RobotoBoldItalic
                        })
                        const classStyle = StyleSheet.create({
                            list: {
                                fontSize: 12,
                                marginHorizontal: 10,
                                width: 230,
                                fontFamily: (ele.bold) ? "Roboto-Bold" : (ele.italic) ? "Roboto-Italic" : "Roboto-Regular"
                                // fontWeight: ele.bold ? "normal" ? (ele.italic) : "bold" : null
                            }
                        })
                        return (ele.link) ?
                            <Link
                                src={ele.src}
                                style={classStyle.list} key={index} >
                                {ele.text}
                            </Link>
                            :
                            <Text
                                style={classStyle.list} key={index} >{ele.text}</Text>
                    })
                }
            </View>
            <View style={styles.secRow}>
                <Text style={styles.title}>Cost Structure</Text>
                {
                    list.CostStructure.list.map((list, index) => {
                        const ele = handleTag(list)
                        Font.register({
                            family: "Roboto-Regular",
                            format: "truetype",
                            src: RobotoRegular
                        })
                        Font.register({
                            family: "Roboto-Bold",
                            format: "truetype",
                            src: RobotoBold
                        })
                        Font.register({
                            family: "Roboto-Italic",
                            format: "truetype",
                            src: RobotoItalic
                        })
                        Font.register({
                            family: "Roboto-Bold-Italic",
                            format: "truetype",
                            src: RobotoBoldItalic
                        })
                        const classStyle = StyleSheet.create({
                            list: {
                                fontSize: 12,
                                marginHorizontal: 10,
                                width: 230,
                                fontFamily: (ele.bold) ? "Roboto-Bold" : (ele.italic) ? "Roboto-Italic" : "Roboto-Regular"
                                // fontWeight: ele.bold ? "normal" ? (ele.italic) : "bold" : null
                            }
                        })
                        return (ele.link) ?
                            <Link
                                src={ele.src}
                                style={classStyle.list} key={index} >
                                {ele.text}
                            </Link>
                            :
                            <Text
                                style={classStyle.list} key={index} >{ele.text}</Text>
                    })
                }
            </View>
            <View style={styles.borderRightNone}>
                <Text style={styles.title}>Revenue Streams</Text>
                {
                    list.RevenueStreams.list.map((list, index) => {
                        const ele = handleTag(list)
                        Font.register({
                            family: "Roboto-Regular",
                            format: "truetype",
                            src: RobotoRegular
                        })
                        Font.register({
                            family: "Roboto-Bold",
                            format: "truetype",
                            src: RobotoBold
                        })
                        Font.register({
                            family: "Roboto-Italic",
                            format: "truetype",
                            src: RobotoItalic
                        })
                        Font.register({
                            family: "Roboto-Bold-Italic",
                            format: "truetype",
                            src: RobotoBoldItalic
                        })
                        const classStyle = StyleSheet.create({
                            list: {
                                fontSize: 12,
                                marginHorizontal: 10,
                                width: 230,
                                fontFamily: (ele.bold) ? "Roboto-Bold" : (ele.italic) ? "Roboto-Italic" : "Roboto-Regular"
                                // fontWeight: ele.bold ? "normal" ? (ele.italic) : "bold" : null
                            }
                        })
                        return (ele.link) ?
                            <Link
                                src={ele.src}
                                style={classStyle.list} key={index} >
                                {ele.text}
                            </Link>
                            :
                            <Text
                                style={classStyle.list} key={index} >{ele.text}</Text>
                    })
                }
            </View>
        </View>
    ))
    return (
        <Document title='PDF_CHECK'>
            <Page size="A3" orientation='landscape' style={styles.page}>
                <View style={styles.invoiceDateContainer}>
                    <Text style={styles.label}>Business Model Canvas</Text>
                </View >
                {data}
            </Page>
        </Document>
    )
}
