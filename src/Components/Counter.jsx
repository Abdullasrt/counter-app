import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount, reset } from '../Redux/counterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counterSlice.count)
    const [amount, setAmount] = useState(0)
    const handleIncrement=()=>{
        if(amount>0){
            dispatch(incrementbyAmount(+amount))
            setAmount("")
        }else{
            alert("Enter valid Amount")
        }
    }
    return (
        <div>
            <h1 className='text-center p-5'>Counter-App</h1>
            <div style={{ width: '600px' }} className='border rounded p-5 d-flex justify-content-center align-items-center flex-column'>
                <h1 style={{ fontSize: '75px' }}>{count}</h1>

                <div className='d-flex justify-content-evenly mt-3 w-100'>
                    <button onClick={() => dispatch(increment())} className='btn btn-success '>Increment</button>
                    <button onClick={() => dispatch(reset())} className='btn btn-danger '>Reset</button>
                    <button onClick={() => dispatch(decrement())} className='btn btn-warning '>Decrement</button>
                </div>

            <div className='d-flex justify-content-between mt-5 w-95'>
                <input onChange={e => setAmount(e.target.value)} value={amount || ""} type="text" className='form-control' placeholder='Enter the amount to be Increment ' />
                <button onClick={handleIncrement} className='btn btn-primary ms-3 '>Increment by Amount</button>
            </div>

            </div>
          
        </div>
    )
}

export default Counter

