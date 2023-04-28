import axios from 'axios';
import Text from '../Utils/Text';
import { BiDownload } from "react-icons/bi";
import React, { Suspense, useEffect, useState } from 'react';
import { useGlobalState } from "../Hooks/useGlobalState";
import EditableDiv from '../components/BMCModule/EditableDiv';
import BrainstormingSec from '../components/BMCModule/BrainstormingSec';
// import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import BMCPdf from '../components/PDFReports.jsx/BMCPdf';
import Percentage from '../components/BMCModule/Percentage';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

export default function BMCModule() {
    const { form, dispatch, user, canvas_name } = useGlobalState();
    // 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 (Access token of github)
    const [confirm, setConfirm] = useState(false);
    // const [page, setPage] = useState(1);
    // const [length, setLength] = useState(null);
    const [canvas, setCanvas] = useState([]);
    const [canvasName, setCanvasName] = useState('');
    const [id, setId] = useState('Select Canvas');
    const [canvasLoading, setCanvasLoading] = useState(false);
    const token = Cookies.get('sodIdToken');

    const handlePostForm = async () => {
        if (id === 'Select Canvas') {
            try {
                if (canvasName.length > 0) {
                    await axios.post(`${process.env.REACT_APP_API}/save-canvas`, { google_id: user.data.google_id, canvas_name: canvasName, canvas: form }, {
                        headers: {
                            "ngrok-skip-browser-warning": true,
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    toast.success(`Canvas Posted Successfully`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: true,
                        theme: "colored",
                    });
                    setId(null)
                    dispatch({ type: "RESET_STATE" })
                    // console.log("sdf");
                } else {
                    toast.error(`Give the Name of Canvas`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: true,
                        theme: "colored",
                    });
                }
            } catch (err) {
                if (err.response.data) {
                    toast.error(err.response.data.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: true,
                        theme: "colored",
                    });
                }
                // console.log({ google_id: user.data.google_id, canvas_name: canvasName, canvas: form });
                console.log(err);
            }
        } else {
            try {
                const resp = await axios.post(`${process.env.REACT_APP_API}/update-canvas`, { google_id: user.data.google_id, canvas_name: id, canvas: form }, {
                    headers: {
                        "ngrok-skip-browser-warning": true,
                        "Authorization": `Bearer ${token}`
                    }
                })
                toast.success(resp.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: true,
                    theme: "colored",
                });
                // console.log(resp.data.message);
                // console.log(form);
            } catch (err) {
                console.log(err);
            }
        }
    }

    const handleDelete = async () => {
        try {
            const resp = await axios.post(`${process.env.REACT_APP_API}/delete-canvas`, { canvas_name: id }, {
                headers: {
                    "ngrok-skip-browser-warning": true,
                    "Authorization": `Bearer ${token}`
                }
            })
            dispatch({ type: "RESET_STATE" })
            setId('Select Canvas')
            toast.success("Canvas Deleted", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: true,
                theme: "colored",
            });
            console.log(resp.data.message);
            setConfirm(false)
            // console.log(form);
        } catch (err) {
            console.log(err);
            setConfirm(false)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/get-canvas-names`, {
                    headers: {
                        "ngrok-skip-browser-warning": true,
                        "Authorization": `Bearer ${token}`
                    }
                })
                setCanvas(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
        // console.log(user);
    }, [id, token])

    useEffect(() => {
        const getCanvas = async () => {
            setCanvasLoading(true)
            try {
                let canvas_name = id
                const data = await axios.post(`${process.env.REACT_APP_API}/get-canvas`, { 'canvas_name': canvas_name }, {
                    headers: {
                        "ngrok-skip-browser-warning": true,
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    }
                })
                dispatch({ type: "UPDATEFORM", payload: data.data.data.canvas })
                dispatch({ type: "UPDATECANVASNAME", payload: data.data.data.canvas_name })
                // console.log("Data", data.data.data.canvas_name);
                // console.log("state", canvas_name);
                setCanvasLoading(false)
            } catch (err) {
                console.log("get Canvas Err", err);
                setCanvasLoading(false)
            }
        }
        if (id !== "Select Canvas") {
            getCanvas()
        }
    }, [id, dispatch, token])

    const handleCreateNewForm = () => {
        setId('Select Canvas')
        setCanvasName('')
        dispatch({ type: "RESET_STATE" })
    }

    return (
        <>
            <div className='px-2 2xl:px-24 xl:px-24 lg:px-24 md:px-16 py-10'>
                <div className='hidden 2xl:flex xl:flex lg:flex md:hidden my-5 gap-4 btn:flex-col flex-col 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col'>
                    <div className='flex gap-5 items-center'>
                        {
                            (canvas.length === 3) ? (
                                <button
                                    title='Max Limit Reached'
                                    className={`${(id === "Select Canvas") ? "border-primary" : ""}  opacity-50 cursor-not-allowed bg-primary rounded-lg border-2 px-5 py-2 text-xl text-white font-medium  hover:border-b-2 hover:border-primary`}
                                // onClick={handleCreateNewForm}
                                >
                                    Create BMC
                                </button>
                            ) : (
                                <button
                                    className={`${(id === "Select Canvas") ? "border-primary" : ""} hover:bg-opacity-80 border-2 text-white bg-primary px-5 py-2 rounded-lg text-xl  font-medium cursor-pointer hover:border-b-2 hover:border-primary`}
                                    onClick={handleCreateNewForm}>
                                    Create BMC
                                </button>
                            )
                        }
                        <select name="canvas" className='w-52 border px-5 py-2' value={id} onChange={(e) => setId(e.target.value)}>
                            <option selected disabled value={'Select Canvas'}>Select Canvas</option>
                            {
                                canvas && canvas.map((canvasName, index) => (
                                    <option value={canvasName.canvas_name} key={index}>{canvasName.canvas_name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='flex ml-auto gap-3'>
                        {
                            !confirm ? (
                                <>
                                    <div className='w-72'>
                                        <input type="text" name="Canvas" value={canvasName} placeholder='Type in the name of canvas' className='w-full px-5 py-3 border' required onChange={(e) => setCanvasName(e.target.value)} />
                                    </div>
                                    <PDFDownloadLink document={
                                        <Suspense fallback={<LoadingBtn />}>
                                            <BMCPdf form={form} canvas_name={canvas_name} />
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
                                    {
                                        (id === 'Select Canvas') ? <></> : (
                                            <button
                                                // onClick={handleDelete}
                                                onClick={() => setConfirm(true)}
                                                className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                                                Delete Canvas
                                            </button>
                                        )
                                    }
                                </>
                            ) : (
                                (id === 'Select Canvas') ? <></> : (
                                    <>
                                        <button
                                            onClick={handleDelete}
                                            // onClick={() => setConfirm(true)}
                                            className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                                            Yes, Delete Canvas
                                        </button>
                                        <button
                                            // onClick={handleDelete}
                                            onClick={() => setConfirm(false)}
                                            className="border-primary border text-primary p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                                            No, Keep Canvas
                                        </button>
                                    </>
                                )
                            )
                        }
                    </div>
                </div>

                <div className='flex 2xl:hidden xl:hidden lg:hidden md:flex my-5 gap-4 btn:flex-col flex-col 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col'>
                    <div className='flex gap-5 justify-center'>
                        {
                            (canvas.length === 3) ? (
                                <button
                                    title='Max Limit Reached'
                                    className={`${(id === "Select Canvas") ? "border-primary" : ""}  opacity-50 cursor-not-allowed bg-primary rounded-lg border-2 px-5 py-2 text-xl text-white font-medium  hover:border-b-2 hover:border-primary`}
                                // onClick={handleCreateNewForm}
                                >
                                    Create BMC
                                </button>
                            ) : (
                                <button
                                    className={`${(id === "Select Canvas") ? "border-primary" : ""} hover:bg-opacity-80 border-2 text-white bg-primary px-5 py-2 rounded-lg text-xl  font-medium cursor-pointer hover:border-b-2 hover:border-primary`}
                                    onClick={handleCreateNewForm}>
                                    Create BMC
                                </button>
                            )
                        }
                        <select name="canvas" className='w-52 border px-5' value={id} onChange={(e) => setId(e.target.value)}>
                            <option selected disabled value={'Select Canvas'}>Select Canvas</option>
                            {
                                canvas && canvas.map((canvasName, index) => (
                                    <option value={canvasName.canvas_name} key={index}>{canvasName.canvas_name}</option>
                                ))
                            }
                        </select>
                    </div>
                    {
                        !confirm ? (
                            <>
                                <div className='flex ml-auto gap-3 justify-center w-full'>
                                    <div className='w-full'>
                                        <input type="text" name="Canvas" value={canvasName} placeholder='Type in the name of canvas' className='w-full px-5 py-3 border' required onChange={(e) => setCanvasName(e.target.value)} />
                                    </div>
                                </div>
                                <div className='flex gap-5 justify-center flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col'>
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
                                    {
                                        (id === 'Select Canvas') ? <></> : (
                                            <button
                                                // onClick={handleDelete}
                                                onClick={() => setConfirm(true)}
                                                className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                                                Delete Canvas
                                            </button>
                                        )
                                    }
                                </div>
                            </>
                        ) : (
                            (id === 'Select Canvas') ? <></> : (
                                <>
                                    <button
                                        onClick={handleDelete}
                                        // onClick={() => setConfirm(true)}
                                        className="bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                                        Yes, Delete Canvas
                                    </button>
                                    <button
                                        // onClick={handleDelete}
                                        onClick={() => setConfirm(false)}
                                        className="border-primary border text-primary p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg">
                                        No, Keep Canvas
                                    </button>
                                </>
                            )
                        )
                    }
                </div>
                <div>
                    {
                        (canvas.length === 3) ? (
                            <div>
                                <h2 className='text-red-500 text-xl'> Canvas Saved: {canvas.length} /3 </h2>
                                <p className='text-sm text-red-500 '>IMPORTANT: You reached the MAX of 3 Canvas. Delete one of your SAVED Canvas if you want to save your inputs.</p>
                            </div>
                        ) : (
                            <h2 className='text-xl'> Canvas Saved: {canvas.length} /3 </h2>
                        )
                    }
                </div>
                <div className='hidden lg:grid grid-cols-1 lg:grid-cols-5 grid-rows-4 border-2 border-gray-300'>
                    {
                        !canvasLoading ? (
                            <>
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
                            </>
                        ) : (
                            <div className="flex justify-center items-center gap-2 p-3 rounded-lg font-bold h-screen cursor-wait col-span-full">
                                <svg className="h-20 w-20 animate-spin" viewBox="3 3 18 18">
                                    <path
                                        className="fill-gray-300"
                                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                    <path
                                        className="fill-primary"
                                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                </svg>
                                <span className="text-4xl">Loading...</span>
                            </div>
                        )
                    }
                </div>

                <div className='lg:hidden grid grid-cols-1 lg:grid-cols-5 grid-rows-4 border-2 border-gray-300'>
                    {
                        !canvasLoading ? (
                            <>
                                {/* CustomerSegments - box */}
                                <div className='flex flex-col lg:row-span-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                                    <Percentage objName={'CustomerSegments'} />
                                    <EditableDiv list={Text.fifthBox.questions} title={Text.fifthBox.title} objName={'CustomerSegments'} />
                                </div>
                                {/* ValuePropositions - box */}
                                <div className='flex flex-col lg:row-span-2 lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                                    <Percentage objName={'ValuePropositions'} />
                                    <EditableDiv list={Text.thirdBox.questions} title={Text.thirdBox.title} objName={'ValuePropositions'} />
                                </div>
                                {/* Channels - box */}
                                <div className='flex flex-col lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                                    <Percentage objName={'Channels'} />
                                    <EditableDiv list={Text.seventhBox.questions} title={Text.seventhBox.title} objName={'Channels'} />
                                </div>
                                {/* CustomerRelationships - box */}
                                <div className='flex flex-col lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                                    <Percentage objName={'CustomerRelationships'} />
                                    <EditableDiv list={Text.forthBox.questions} title={Text.forthBox.title} objName={'CustomerRelationships'} />
                                </div>
                                {/* RevenueStreams - box */}
                                <div className='flex flex-col lg:row-span-2 lg:col-span-3 2xl:border-b-0 xl:border-b-0 lg:border-b-0 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                                    <Percentage objName={'RevenueStreams'} />
                                    <EditableDiv list={Text.ninthBox.questions} title={Text.ninthBox.title} objName={'RevenueStreams'} />
                                </div>
                                {/* KeyResources - box */}
                                <div className='flex flex-col lg:border-b-2 lg:border-r-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                                    <Percentage objName={'KeyResources'} />
                                    <EditableDiv list={Text.sixthBox.questions} title={Text.sixthBox.title} objName={'KeyResources'} />
                                </div>
                                {/* KeyActivities - box */}
                                <div className='flex flex-col lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 w-full hover:bg-gray-100'>
                                    <Percentage objName={'KeyActivities'} />
                                    <EditableDiv list={Text.secondBox.questions} title={Text.secondBox.title} objName={'KeyActivities'} />
                                </div>
                                {/* KeyPartnerships - box */}
                                <div className=' flex flex-col lg:row-span-2 lg:col-span-1 2xl:border-r-2 xl:border-r-2 lg:border-r-2  border-r-0 border-b-2 border-gray-300 gap-2 w-full hover:bg-gray-100'>
                                    <Percentage objName={'KeyPartnerships'} />
                                    <EditableDiv list={Text.firstBox.questions} title={Text.firstBox.title} objName={'KeyPartnerships'} />
                                </div>
                                {/* CostStructure - box */}
                                <div className='flex flex-col lg:row-span-2 lg:col-span-2 lg:border-r-2 2xl:border-b-0 xl:border-b-0 lg:border-b-0 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100'>
                                    <Percentage objName={'CostStructure'} />
                                    <EditableDiv list={Text.eightBox.questions} title={Text.eightBox.title} objName={'CostStructure'} />
                                </div>

                            </>
                        ) : (
                            <div className="flex justify-center items-center gap-2 p-3 rounded-lg font-bold h-screen cursor-wait col-span-full">
                                <svg className="h-20 w-20 animate-spin" viewBox="3 3 18 18">
                                    <path
                                        className="fill-gray-300"
                                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                    <path
                                        className="fill-primary"
                                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                </svg>
                                <span className="text-4xl">Loading...</span>
                            </div>
                        )
                    }
                </div>

                <div className="flex mt-1 justify-between items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse gap-5">
                    <div className='2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 w-full'>
                        <p>
                            Business Model Canvas by Alexander Osterwalder from <a className='text-blue-600 underline' href="https://www.strategyzer.com/" target="_blank" rel="noopener noreferrer">Strategyzer.com </a>. The business model canvas itself is licensed under the <a className='text-blue-600 underline' href="https://creativecommons.org/licenses/by-sa/3.0/deed.en" target="_blank" rel="noopener noreferrer">CC BY SA 3.0.</a> / Modifications by StemJee Inc.
                        </p>
                    </div>
                    <div className='flex gap-3 mt-5'>
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
                        <BMCPdf form={form} canvas_name={canvas_name} />
                    </PDFViewer>
                </div> */}

                <ToastContainer
                    position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    // pauseOnFocusLoss
                    // draggable
                    // pauseOnHover
                    theme="colored"
                />

            </div >
            <Footer />
        </>
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