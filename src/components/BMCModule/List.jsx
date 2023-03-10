import { useState } from 'react'
import { RxDragHandleDots2 } from 'react-icons/rx'
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri'
import EditInput from './EditInput'
import { useGlobalState } from '../../Hooks/useGlobalState'


export default function List({ value, handleEdit, index, objName }) {
    const [newInpValue, setNewInpValue] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const { dispatch, form } = useGlobalState();

    const handleDelete = (value) => {
        const updatedList = form[objName].list.filter((partner) => partner !== value);
        dispatch({
            type: "UPDATEFORM", payload: { ...form, [objName]: { list: updatedList } }
        });
    }

    return (
        <div
            onDoubleClick={() => setNewInpValue(true)}>
            {
                newInpValue && <EditInput handleEdit={handleEdit} index={index} setNewInpValue={setNewInpValue} valueToEdit={value} />
            }
            {
                !newInpValue && (
                    <div className='flex items-center gap-3 justify-center px-2 cursor-pointer hover:bg-white'>
                        <div
                            className='hover:bg-slate-200 text-lg group relative'
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <RxDragHandleDots2 />
                            {
                                showMenu && (
                                    <div className={`absolute bg-white p-2 border shadow-2xl z-10 border-gray-300`}>
                                        <ul>
                                            <li
                                                onClick={() => setNewInpValue(true)}
                                                className='flex items-center gap-3 hover:bg-gray-200 hover:text-primary p-1 w-28 text-sm'>
                                                <RiEditBoxLine />
                                                Edit
                                            </li>
                                            <li
                                                onClick={() => handleDelete(value)}
                                                className='flex items-center gap-3 hover:bg-gray-200 hover:text-primary p-1 w-28 text-sm'>
                                                <RiDeleteBinLine />
                                                Delete
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <div
                            className='w-full break-all text-area'
                            dangerouslySetInnerHTML={{ __html: value }}
                        />
                    </div>
                )}
        </div>
    )
}
