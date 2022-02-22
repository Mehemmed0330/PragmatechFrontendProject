import React from 'react';
import UseCreate from "../hook/UseCreate"
import { useRef } from 'react';

const Create = () => {
    const {isLoading , CreateList} = UseCreate()
    const inputRef = useRef()
    return (
        <div className="flex flex-col space-y-3 items-center justify-center h-screen">
        <input ref={inputRef} type="text" className="px-3 py-4 bg-black text-white" />
        <button onClick={() => { CreateList(inputRef.current.value) }}>
            {isLoading ? "Yaradılır..." : "Yarat"}
        </button>
    </div>
    );
}

export default Create;
