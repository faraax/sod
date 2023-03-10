import React, { useRef, useState } from 'react'
import { useGlobalState } from '../../Hooks/useGlobalState';
import List from './List';
import TextInputField from './TextInputField';

export default function BrainstormingSec({ objName }) {
    const [input, setInput] = useState(false)
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
    return (
        <div className='border-2 border-gray-300 min-h-52 p-5'>
            <div className='hover:text-opacity-60'>
                {
                    (form[objName].list.length === 0) && (
                        !input && (
                            <h1
                                className='text-2xl text-primary font-medium cursor-pointer'
                                onClick={() => setInput(!input)}
                            >
                                <span>+</span>
                                Add Business Notes Here
                            </h1>
                        )
                    )
                }
                {
                    (form[objName].list !== "" || form[objName].list !== null) && (
                        form[objName].list?.map((value, index) => (
                            <div
                                draggable
                                onDragStart={(e) => (dragItem.current = index)}
                                onDragEnter={(e) => (dragOverItem.current = index)}
                                onDragEnd={handleSort}
                                onDragOver={(e) => e.preventDefault()}
                                key={index}
                            >
                                <List
                                    value={value}
                                    handleEdit={handleEdit}
                                    index={index}
                                    objName={objName}
                                />
                            </div>
                        ))
                    )
                }
                {
                    (!input) && (
                        (form[objName].list.length === 0) ? null : <div
                            onClick={() => setInput(true)}
                            className='px-5 py-3 text-primary font-semibold flex items-center text-lg hover:text-opacity-60 cursor-pointer'>
                            <h3>
                                <span>+</span>
                                Add More
                            </h3>
                        </div>
                    )
                }
                {
                    input && (
                        <TextInputField
                            setInpActive={setInput}
                            objName={objName}
                        />
                    )
                }
            </div>
        </div>
    )
}
