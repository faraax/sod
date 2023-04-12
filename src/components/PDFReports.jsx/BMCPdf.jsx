import { Document, Page, Text, View, StyleSheet, Font, Link, Image } from '@react-pdf/renderer';
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
        // flexDirection: 'column',
        backgroundColor: '#fff',
        // fontFamily: "Roboto"
        position: "relative"
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20
    },
    label: {
        fontSize: 32,
        marginLeft: 10
        // fontFamily: "Roboto"
    },
    tableContainer: {
        flexDirection: "row",
        flexWrap: 'wrap',
        // marginTop: 80,
        marginLeft: 30,
        marginBottom: 20,
        // marginLeft: -525,
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
    firstRowInnerNoBd: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#333',
        width: 230,
        height: 250,
        borderLeft: "none",
        borderTop: "none",
        borderRight: "none",
        borderBottom: "none"
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
        height: 200,
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
    },
    container: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: '80px'
    },
    name: {
        marginRight: 20,
        marginTop: 20
    },
    date: {
        marginRight: 20,
        // marginTop: 20
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        // backgroundColor: "red"
    },
    link: {
        flexDirection: "row",
        fontSize: 12,
        // marginHorizontal: 10,
        // width: 230,
        fontFamily: "Roboto-Regular"
    },
    waterMark: {
        position: "absolute",
        top: '50%',
        left: "45%",
        height: 90,
        width: 150,
        opacity: 0.4,
    }
});

export default function BMCPdf({ form, canvas_name }) {
    const date = new Date().toLocaleDateString()

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
            ele.text = element.innerText.replace("\n", "")
        }

        for (let i = 0; i < bold.length; i++) {
            const element = bold[i];
            ele.bold = true
            ele.text = element.textContent.replace("\n", "")
        }

        for (let i = 0; i < italic.length; i++) {
            const element = italic[i];
            ele.italic = true
            ele.text = element.textContent.replace("\n", "")
        }
        if ((bold.length < 1) && (italic.length < 1) && (link.length < 1)) {
            ele.text += list;
        }
        // console.log(ele);
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
                                    style={classStyle.list} key={index} >
                                    {ele.text}
                                </Text>
                        })
                    }
                </View>
                <View style={styles.firstRowInnerNoBd}>
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
                    <Text style={styles.title}>Customer Relationships</Text>
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
                <View style={styles.firstRowInnerNoBd}>
                    <Text style={styles.title}>Channels</Text>
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
                    <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 20 }}>
                        <Text style={styles.name}>Canvas Name: {canvas_name}</Text>
                        <Text style={styles.date}>Date: {date}</Text>
                    </View>
                </View >
                {data}
                <Image style={styles.waterMark} src={'../../assets/watermark.png'} />
                <View style={styles.footer}>
                    <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center", marginLeft: 20 }}>
                        <Image style={{ width: 26, height: 26 }} src={'../../assets/internet.png'} />
                        <Link
                            src={'steveondigital.com'}
                        >
                            SteveOnDigital.com
                        </Link>
                    </View>
                    <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
                            <Image style={{ width: 20, height: 20 }} src={'../../assets/youtube.png'} />
                            <Link src={'https://www.youtube.com/@steveondigital'} style={{ fontSize: 14 }}>/@steveondigital</Link>
                        </View>
                        <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
                            <Image style={{ width: 20, height: 20 }} src={'../../assets/facebook.png'} />
                            <Link src={'https://www.facebook.com/steveondigital/'} style={{ fontSize: 14 }}>/steveondigital</Link>
                        </View>
                        <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
                            <Image style={{ width: 20, height: 20 }} src={'../../assets/twitter.png'} />
                            <Link src={'https://twitter.com/SteveOnDigital1'} style={{ fontSize: 14 }}>/SteveOnDigital1</Link>
                        </View>
                        <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
                            <Image style={{ width: 20, height: 20 }} src={'../../assets/instagram.png'} />
                            <Link src={'https://www.instagram.com/steveondigital/'} style={{ fontSize: 14 }}>/steveondigital</Link>
                        </View>
                        <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
                            <Image style={{ width: 20, height: 20 }} src={'../../assets/linkedin.png'} />
                            <Link src={'https://www.linkedin.com/company/steveondigital-digital-transformation-simplified/'} style={{ fontSize: 14 }}>/company/steveondigital-digital-transformation-simplified</Link>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
