import { PDFViewer } from "@react-pdf/renderer";
import BMCPdf from "../components/PDFReports.jsx/BMCPdf";
import { useGlobalState } from "../Hooks/useGlobalState";


export default function PdfViewer() {
    const { form } = useGlobalState()
    const { canvas_name } = useGlobalState();
    return (
        <div className='flex justify-center items-center h-screen w-full flex-col'>
            <PDFViewer height={"100%"} width={"100%"}>
                <BMCPdf form={form} canvas_name={canvas_name} />
            </PDFViewer>
        </div>
    )
}

