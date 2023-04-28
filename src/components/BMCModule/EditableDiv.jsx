import React, { useRef, useState } from 'react';
import { BsExclamationLg } from 'react-icons/bs';
import TextInputField from './TextInputField';
import List from './List';
import { useGlobalState } from '../../Hooks/useGlobalState';

const limits = {
    KeyPartnerships: 728,
    KeyActivities: 364,
    ValuePropositions: 728,
    CustomerRelationships: 364,
    CustomerSegments: 728,
    Channels: 364,
    KeyResources: 364,
    RevenueStreams: 420,
    CostStructure: 420,
    BrainstormingNotes: 728
}

export default function EditableDiv({ list, title, objName }) {
    const [inpActive, setInpActive] = useState(false);
    const { dispatch, form } = useGlobalState();

    //save reference for dragItem and dragOverItem
    const dragItem = useRef(null)
    const dragOverItem = useRef(null)

    //const handle drag sorting
    const handleSort = () => {
        //duplicate items
        let _text = [...form[objName].list]

        //remove and save the dragged item content
        const draggedItemContent = _text.splice(dragItem.current, 1)[0]

        //switch the position
        _text.splice(dragOverItem.current, 0, draggedItemContent)

        //reset the position ref
        dragItem.current = null
        dragOverItem.current = null

        //update the actual array
        // setText(_text)
        dispatch({ type: "UPDATEFORM", payload: { ...form, [objName]: { list: _text } } })
    }

    const handleEdit = (index, newValue) => {
        const newItems = [...form[objName].list];
        newItems[index] = newValue;
        dispatch({ type: "UPDATEFORM", payload: { ...form, [objName]: { list: newItems } } })
    }

    const handleTopPercentage = (objeName) => {
        const maxLen = limits[objeName] / 28
        const percentage = Math.floor(form[objeName].list.length / maxLen * 100)
        return percentage
    }
    return (
        <>
            <div className='flex flex-col' >
                <div className='flex items-center px-3 py-3'>
                    {/* <div className='flex items-center justify-between'> */}
                    <h2 className='text-lg font-medium'>{title}</h2>
                    {
                        (form[objName].list.length === 0) && (
                            <>
                                {
                                    !inpActive && (
                                        <button
                                            onClick={() => setInpActive(true)}
                                            className='py-3 text-primary font-semibold flex items-center text-lg hover:text-opacity-60 cursor-pointer ml-auto'>
                                            <h3 className='flex items-center gap-1 justify-center'>
                                                <span>+</span>
                                                Add
                                            </h3>
                                        </button>
                                    )
                                }
                            </>
                        )
                    }
                    {/* </div> */}
                    {
                        (form[objName].list.length > 0 || inpActive) ? (
                            <div
                                title={list}
                                className="bg-secondary h-7 w-7 rounded-full text-lg cursor-pointer ml-auto flex justify-center items-center text-white">
                                <BsExclamationLg className='text-lg' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='px-4'>
                    {
                        (form[objName].list !== "" || form[objName].list !== null) && (
                            form[objName].list?.map((value, index) => {
                                // value = value.replace(/\n/g, "");
                                return (
                                    <div
                                        draggable
                                        onDragStart={(e) => (dragItem.current = index)}
                                        onDragEnter={(e) => (dragOverItem.current = index)}
                                        onDragEnd={handleSort}
                                        onDragOver={(e) => e.preventDefault()}
                                        key={index}
                                    >
                                        <List
                                            value={value.replace(/\n/g, "")}
                                            delVa={value}
                                            handleEdit={handleEdit}
                                            index={index}
                                            objName={objName}
                                        />
                                    </div>
                                )
                            })
                        )
                    }
                </div>
                <div>
                    {
                        (!inpActive) && (
                            (form[objName].list.length === 0) ? (
                                <p className='px-4 text-base text-secondary'>
                                    {
                                        list?.map((list, index) => (
                                            <React.Fragment key={index}>
                                                {list}
                                                < br />
                                            </React.Fragment>
                                        ))
                                    }
                                </p>
                            ) : <div
                                onClick={() => setInpActive(true)}
                                className={`${handleTopPercentage(objName) === 100 ? "hidden" : "block"} px-5 py-3 text-primary font-semibold flex items-center text-lg hover:text-opacity-60 cursor-pointer`}>
                                <h3>
                                    <span>+</span>
                                    Add More
                                </h3>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                inpActive && <TextInputField
                    setInpActive={setInpActive}
                    objName={objName}
                />
            }
        </>
    );
}
