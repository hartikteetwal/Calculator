import React, { useEffect, useState } from 'react'
import './Calculator.css'
import { Slide, toast } from 'react-toastify'

const Calculator = () => {
    const [Data, setData] = useState('')

    const result = () => {
        try {
            if (Data == '') {
                toast.error("Calculate something", { autoClose: 1500 })
            }
            else {
                setData(eval(Data))
            }
        }
        catch (error) {
            toast.error("Wrong Expression", { autoClose: 1500 })
        }
    }



    useEffect(() => {
        console.log(Data)
    }, [Data])

    const del = () => {
        setData(Data.toString().slice(0, -1))
    }

    const handleDisplay = (e) => {
        if (Data === '0') {
            setData(e.target.value)
        }
        else {
            setData(Data + e.target.value)
        }
    }

    return (
        <div className='container calculator'>
            <div className='cover'>
                <div className="display">
                    <input type="text" placeholder='0' value={Data} />
                </div>
                <div className="buttons">
                    <button onClick={() => { setData('') }} className="btn clear">AC</button>
                    <button className="btn op" onClick={del}><i class='bx bxs-tag-x'></i></button>
                    <button onClick={handleDisplay} value='%' className="btn op">%</button>
                    <button onClick={handleDisplay} value='/' className="btn op">/</button>
                    <button onClick={handleDisplay} value='9' className="btn">9</button>
                    <button onClick={handleDisplay} value='8' className="btn">8</button>
                    <button onClick={handleDisplay} value='7' className="btn">7</button>
                    <button onClick={handleDisplay} value='*' className="btn op">x</button>
                    <button onClick={handleDisplay} value='6' className="btn">6</button>
                    <button onClick={handleDisplay} value='5' className="btn">5</button>
                    <button onClick={handleDisplay} value='4' className="btn">4</button>
                    <button onClick={handleDisplay} value='+' className="btn op">+</button>
                    <button onClick={handleDisplay} value='3' className="btn">3</button>
                    <button onClick={handleDisplay} value='2' className="btn">2</button>
                    <button onClick={handleDisplay} value='1' className="btn">1</button>
                    <button onClick={handleDisplay} value='-' className="btn op">-</button>
                    <div className="btn bracket">
                        <button onClick={handleDisplay} value='(' className="btna op">(</button>
                        <button onClick={handleDisplay} value=')' className="btna op">)</button>
                    </div>
                    <button onClick={handleDisplay} value='0' className="btn">0</button>
                    <button onClick={handleDisplay} value='.' className="btn">.</button>
                    <button className="btn equal" onClick={result}> = </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
