import React, { useState } from "react";



const AddValues = () => {
    const [numberOne, setNumberOne] = useState("");
    const [numberTwo, setNumberTwo] = useState("");
    const [answer, setAnswer] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        setAnswer(addNumbers(numberOne, numberTwo));
    };

    const addNumbers = (a, b) => {
        return Number(a) + Number(b);
    };

    return (
        <div className="pb-[60px] bg-white-lilac max-lg:px-5 max-lg:pb-10 max-md:pb-8 max-sm:pb-5 flex justify-center">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-xs">
                <h2 className="font-bold text-center leading-[44px] max-md:leading-[40px] max-sm:leading-[36px] text-4xl max-lg:text-3xl max-md:text-2xl pb-2 ">Add Values</h2>
                <form onSubmit={submitHandler}>
                    <input
                        type="number"
                        value={numberOne}
                        onChange={(e) => setNumberOne(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        placeholder="First Number"
                    />
                    <input
                        type="number"
                        value={numberTwo}
                        onChange={(e) => setNumberTwo(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="Second Number"
                    />
                    <p className='text-xl py-1 font-normal text-gray-700'>
                        {`${numberOne === "" ? "0" : numberOne}`} + {`${numberTwo === "" ? "0" : numberTwo}`} = <span className={`${answer === null ? "" : "font-bold"}`}> {`${answer === null ? "0" : answer}`} </span>
                    </p>
                    <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md" >Add Values </button>
                </form>
            </div>
        </div>
    );
};

export default AddValues;
