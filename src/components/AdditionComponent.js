import React from 'react';
import { AdditionInput } from './AdditionInput';
import { AdditionResult } from './AdditionResult';

const mockApiMethod = (v1, v2) => {
    return `${v1}${v2}`;
}

export const AdditionComponent = () => {
    const [state, setState] = React.useState({ value1: "", value2: "", result: "" });
    React.useEffect(() => {
        const returnValue = mockApiMethod(state.value1, state.value2);
        setState(prevState => ({ ...prevState, result: returnValue }));
        // console.log("returnValue", returnValue);
        // Use the dependency array in useEffect to prevent infinite loops
    }, [state.value1, state.value2]);

    return (
        <div className='addition-component'>
            <h1 className='title text-center mt-3 mb-5'>Addition tool</h1>
            {/* <p>Use this tool to combine 2 strings into a single result without even having to send an api call!</p> */}
            <div className='row'>
                <AdditionInput label="First value" id="input1"
                    value={state.value1}
                    onChange={e => setState(prevState => ({ ...prevState, value1: e.target.value }))}
                />
                <AdditionInput label="second value" id="input2"
                    value={state.value2}
                    onChange={e => setState(prevState => ({ ...prevState, value2: e.target.value }))}
                />
                <AdditionResult result={state.result} />
            </div>
        </div>
    )
}