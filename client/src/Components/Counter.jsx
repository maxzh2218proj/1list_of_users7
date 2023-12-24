import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decreateCount, increaseCount, resetCount} from "../slice"

const Counter = () => {
    const count = useSelector((state) => state);
    const dispatch = useDispatch()
    console.log(count);
    return <div>
        <h2>Count is: {count.value}</h2>
        <button onClick={()=>{dispatch(increaseCount())}}>Increment</button>
        <button onClick={()=>{dispatch(decreateCount())}}>Decrement</button>
        <button onClick={()=>{dispatch(resetCount())}}>Reset</button>
    </div>;
};

export default Counter;