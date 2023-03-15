import axios from 'axios';
import Text from '../Utils/Text';
import { BiDownload } from "react-icons/bi";
import React, { Suspense, useEffect, useState } from 'react';
import { useGlobalState } from "../Hooks/useGlobalState";
import EditableDiv from '../components/BMCModule/EditableDiv';
import BrainstormingSec from '../components/BMCModule/BrainstormingSec';
import { PDFDownloadLink } from '@react-pdf/renderer';
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

    // const handleGetData = async () => {
    //     // const { data } = await axios.get(`http://localhost:8080/getData`)
    //     // dispatch({ type: "UPDATEFORMDB", payload: data })
    //     console.log(form);
    // }

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
                    <PDFDownloadLink document={
                        <Suspense fallback={<LoadingBtn />}>
                            <BMCPdf form={form} />
                        </Suspense>
                    } fileName={id} className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                        <BiDownload className="text-xl" />
                        Download
                    </PDFDownloadLink>
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

const LoadingBtn = () => {
    <button
        disabled
        className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg cursor-wait">
        <svg className="h-20 w-20 animate-spin" viewBox="3 3 18 18">
            <path
                className="fill-white"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
            <path
                className="fill-primary"
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
        </svg>
        Loading
    </button>
}