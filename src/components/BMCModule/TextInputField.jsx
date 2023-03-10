import { useEffect, useRef, useState } from 'react';
import { BiLink, BiUnlink } from 'react-icons/bi';
import { useGlobalState } from '../../Hooks/useGlobalState';


export default function TextInputField({ setInpActive, objName }) {
    const containerRef = useRef(null);
    const [inpValue, setInpValue] = useState('');
    const { dispatch, form } = useGlobalState()

    const handleInput = (e) => {
        const allowedTags = ["i", "b", "a"];
        const parser = new DOMParser();
        const doc = parser.parseFromString(e.target.innerHTML, "text/html");
        let validatedContent = "";

        for (let node of doc.body.childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                validatedContent += node.textContent;
            } else if (allowedTags.includes(node.tagName.toLowerCase())) {
                const attrs = Array.from(node.attributes)
                    .map((attr) => `${attr.name}="${attr.value}"`)
                    .join(" ");
                validatedContent += `<${node.tagName.toLowerCase()} ${attrs}>${node.textContent}</${node.tagName.toLowerCase()}>`;
            }
        }
        if (e.target.innerHTML.startsWith('&nbsp;')) {
            setInpValue('');
        } else {
            setInpValue(validatedContent);
        }
    };

    useEffect(() => {
        const handleEnter = (e) => {
            if (e.keyCode === 13) {
                if (inpValue === '') {
                    setInpActive(false);
                } else {
                    // setText([...text, inpValue]);
                    setInpActive(false);
                    dispatch({ type: "UPDATEFORM", payload: { ...form, [objName]: { list: [...form[objName].list, inpValue] } } })
                }
            }
        };
        document.addEventListener('keydown', handleEnter);

        const handleEsc = (e) => {
            if (e.keyCode === 27) {
                setInpActive(false);
            }
        };
        document.addEventListener('keydown', handleEsc);

        function handleClickOutside(e) {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                if (inpValue === '') {
                    setInpActive(false);
                } else {
                    // setText([...text, inpValue]);
                    setInpActive(false);
                    dispatch({ type: "UPDATEFORM", payload: { ...form, [objName]: { list: [...form[objName].list, inpValue] } } })
                }
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.removeEventListener('keydown', handleEnter);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setInpActive, containerRef, inpValue, dispatch, objName, form]);

    const handleFontStyle = (fontStyle) => {
        document.execCommand(fontStyle, false, null);
    };

    const handleFontLink = (fontLink) => {
        const links = prompt('Inset Link');
        document.execCommand(fontLink, false, links);
    };

    const handleFontUnLink = (fontUnLink) => {
        document.execCommand(fontUnLink, false, '');
    };
    return (
        <div ref={containerRef}>
            <div className='flex'>
                <div
                    role='textbox'
                    title='Type a message'
                    data-placeholder="Click here and type ..."
                    contentEditable={true}
                    onClick={() => setInpActive(true)}
                    onInput={handleInput}
                    className={`input_text_editor px-5 py-1 focus:border-none bg-gray-50 break-all w-full active:border-none outline-none`}
                />
            </div>
            <div className='flex justify-center items-center border border-gray-500 rounded-md max-w-[150px] m-2 bg-white'>
                <button
                    onClick={() => handleFontStyle('bold')}
                    className="flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md">
                    B
                </button>
                <button
                    onClick={() => handleFontStyle('italic')}
                    className="flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md">
                    i
                </button>
                <button
                    onClick={() => handleFontLink('createLink')}
                    className="flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md"
                >
                    <BiLink />
                </button>
                <button
                    onClick={() => handleFontUnLink('unlink')}
                    className="flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md"
                >
                    <BiUnlink />
                </button>
            </div>
        </div>
    )
}
