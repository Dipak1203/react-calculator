import { useState } from 'react'
import './App.css'
const App = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operator = ['/', '%', '*', '+', '-'];


    const updateOpt = (value) => {
        if (
            operator.includes(value) && calc === '' ||
            operator.includes(value) && operator.includes(calc.slice(-1))
        ) {
            return;
        }
        setCalc(calc + value);

        if (!operator.includes(value)) {
            setResult(eval(calc + value).toString());
        }
        console.log(operator.includes(value))
    }
    // console.log(calc + value)
    const calculator = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc == '') {
            return;
        }

        const value = calc.slice(0, -1);
        setCalc(value)
    }
    const clear = () => {
        setCalc('');
    }
    return (
        <div className='container'>
            <div className="calculator">
                <div className="display-section">
                    <p>DIPAK</p>
                    <span>{calc || '0'}</span>
                </div>
                <div className="buttons">
                    <button onClick={clear} className='second'>C</button>
                    <button onClick={deleteLast} className='second'>Del</button>
                    <button onClick={() => updateOpt('%')} className='second'>%</button>
                    <button onClick={() => updateOpt('/')} className='second'>/</button>
                    <button onClick={() => updateOpt('7')} className='third'>7</button>
                    <button onClick={() => updateOpt('8')} className='third'>8</button>
                    <button onClick={() => updateOpt('9')} className='third'>9</button>
                    <button onClick={() => updateOpt('*')} className='second'>*</button>
                    <button onClick={() => updateOpt('4')} className='third'>4</button>
                    <button onClick={() => updateOpt('5')} className='third'>5</button>
                    <button onClick={() => updateOpt('6')} className='third'>6</button>
                    <button onClick={() => updateOpt('-')} className='second'>-</button>
                    <button onClick={() => updateOpt('1')} className='third'>1</button>
                    <button onClick={() => updateOpt('2')} className='third'>2</button>
                    <button onClick={() => updateOpt('3')} className='third'>3</button>
                    <button onClick={() => updateOpt('+')} className='second'>+</button>
                    <button onClick={() => updateOpt('0')} className='third'>0</button>
                    <button onClick={() => updateOpt('.')} className='third dot'>.</button>
                    <button onClick={() => updateOpt('.')} className='third dot'>.</button>
                    <button onClick={calculator} className='second'>=</button>
                </div>
            </div>
            {/* <p>Design & Develop by DIPAKKUMAL</p> */}
        </div>
    )
}

export default App