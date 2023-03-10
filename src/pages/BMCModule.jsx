import axios from 'axios';
import Text from '../Utils/Text';
import { BiDownload } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { useGlobalState } from "../Hooks/useGlobalState";
import EditableDiv from '../components/BMCModule/EditableDiv';
import BrainstormingSec from '../components/BMCModule/BrainstormingSec';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import BMCPdf from '../components/PDFReports.jsx/BMCPdf';
import Percentage from '../components/BMCModule/Percentage';

export default function BMCModule() {
    const { form, dispatch } = useGlobalState();
    const [page, setPage] = useState(1);
    const [length, setLength] = useState(null);
    const [id, setId] = useState(null);

    const handlePostForm = async () => {
        if (id) {
            await axios.put("http://localhost:8080/editData/", { form, id })
        } else {
            await axios.post("http://localhost:8080/addData/", form)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: { formData, length } } = await axios.get(`http://localhost:8080/getData?page=${page}`)
                setLength(length);
                if (formData.length > 0) {
                    dispatch({ type: "UPDATEFORMDB", payload: formData[0] })
                    setId(formData[0]._id)
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [page, dispatch])

    const handleCreateNewForm = () => {
        setId(null)
        dispatch({ type: "RESET_STATE" })
    }

    const handleNextPage = () => {
        (page >= length) ? setPage(1) : setPage(page + 1);
    };

    const handlePreviousPage = () => {
        (page <= 1) ? setPage(length) && setPage(page - 1) : setPage(page - 1);
    };

    const handleGetData = async () => {
        // const { data } = await axios.get(`http://localhost:8080/getData`)
        // dispatch({ type: "UPDATEFORMDB", payload: data })
        console.log(form);
    }

    return (
        <div className='px-24 py-10'>
            <div className='flex my-5'>
                <div className='flex gap-5'>
                    <h3
                        className={`${!id && "border-b-2 border-primary"} text-xl text-secondary hover:text-primary font-medium cursor-pointer hover:border-b-2 hover:border-primary`}
                        onClick={handleCreateNewForm}>
                        Create BMC
                    </h3>
                    <h3
                        className='text-xl text-secondary hover:text-primary font-medium cursor-pointer hover:border-b-2 hover:border-primary'
                        onClick={handlePreviousPage}>
                        View Previous
                    </h3>
                    <h3
                        className='text-xl text-secondary hover:text-primary font-medium cursor-pointer hover:border-b-2 hover:border-primary'
                        onClick={handleNextPage}>
                        View Next
                    </h3>
                </div>
                <div className='flex ml-auto gap-3'>
                    {/* <button
                        onClick={handleGetData}
                        className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg"> */}
                    <PDFDownloadLink document={<BMCPdf form={form} />} fileName={id} className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                        <BiDownload className="text-xl" />
                        Download
                    </PDFDownloadLink>
                    {/* </button> */}
                    <button
                        onClick={handlePostForm}
                        className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                        Save Template
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 grid-rows-4 border-2 border-gray-300'>
                {/* KeyPartnerships - box */}
                <div className=' flex flex-col lg:row-span-2 lg:col-span-1 2xl:border-r-2 xl:border-r-2 lg:border-r-2  border-r-0 border-b-2 border-gray-300 gap-2 w-full hover:bg-gray-100'>
                    <Percentage objName={'KeyPartnerships'} />
                    <EditableDiv list={Text.firstBox.questions} title={Text.firstBox.title} objName={'KeyPartnerships'} />
                </div>
                {/* KeyActivities - box */}
                <div className='flex flex-col lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 w-full hover:bg-gray-100'>
                    <Percentage objName={'KeyActivities'} />
                    <EditableDiv list={Text.secondBox.questions} title={Text.secondBox.title} objName={'KeyActivities'} />
                </div>
                {/* ValuePropositions - box */}
                <div className='flex flex-col lg:row-span-2 lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                    <Percentage objName={'ValuePropositions'} />
                    <EditableDiv list={Text.thirdBox.questions} title={Text.thirdBox.title} objName={'ValuePropositions'} />
                </div>
                {/* CustomerRelationships - box */}
                <div className='flex flex-col lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                    <Percentage objName={'CustomerRelationships'} />
                    <EditableDiv list={Text.forthBox.questions} title={Text.forthBox.title} objName={'CustomerRelationships'} />
                </div>
                {/* CustomerSegments - box */}
                <div className='flex flex-col lg:row-span-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                    <Percentage objName={'CustomerSegments'} />
                    <EditableDiv list={Text.fifthBox.questions} title={Text.fifthBox.title} objName={'CustomerSegments'} />
                </div>
                {/* KeyResources - box */}
                <div className='flex flex-col lg:border-b-2 lg:border-r-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                    <Percentage objName={'KeyResources'} />
                    <EditableDiv list={Text.sixthBox.questions} title={Text.sixthBox.title} objName={'KeyResources'} />
                </div>
                {/* Channels - box */}
                <div className='flex flex-col lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                    <Percentage objName={'Channels'} />
                    <EditableDiv list={Text.seventhBox.questions} title={Text.seventhBox.title} objName={'Channels'} />
                </div>
                {/* CostStructure - box */}
                <div className='flex flex-col lg:row-span-2 lg:col-span-2 lg:border-r-2 2xl:border-b-0 xl:border-b-0 lg:border-b-0 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                    <Percentage objName={'CostStructure'} />
                    <EditableDiv list={Text.eightBox.questions} title={Text.eightBox.title} objName={'CostStructure'} />
                </div>
                {/* RevenueStreams - box */}
                <div className='flex flex-col lg:row-span-2 lg:col-span-3 2xl:border-b-0 xl:border-b-0 lg:border-b-0 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                    <Percentage objName={'RevenueStreams'} />
                    <EditableDiv list={Text.ninthBox.questions} title={Text.ninthBox.title} objName={'RevenueStreams'} />
                </div>
            </div>
            <div className="flex mt-1 px-5">
                <p className='w-3/4'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo suscipit tempore culpa delectus labore ea ab id nulla eos, repudiandae at, natus in! Numquam doloremque nihil ea qui, minus optio.
                </p>
                <div className='flex ml-auto gap-3'>
                    <button
                        onClick={() => console.log(form)}
                        className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                        <BiDownload
                            className="text-xl"
                        />
                        Download
                    </button>
                    <button
                        onClick={() => dispatch({ type: "RESET_STATE" })}
                        className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                        Clear Template
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>Brainstorming Notes</h1>
                <p>Write down you thought here and then move them to necessary section.</p>
                <BrainstormingSec objName={'BrainstormingNotes'} />
            </div>
            {/* <div>
                <PDFViewer height={500} width={"100%"}>
                    <BMCPdf form={form} />
                </PDFViewer>
            </div> */}
        </div >
    )
}
