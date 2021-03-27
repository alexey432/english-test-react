import React, { useState, useEffect } from 'react';
// Data import 
import data from '../questions.csv';
// Libraries
import * as d3 from 'd3'; //https://github.com/d3/d3-dsv

const Fetch = ({ taskNum }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {      
        // *********CSV data parsing************************************
        d3.text(data).then(item => {
            const x = d3.dsvFormat(';').parseRows(item);
            
            setQuestions(x[taskNum-1]);
        });
        // *************************************************************
    }, [questions]);

    return (
        <div>
            <div>
                <p><b>Задание {taskNum}</b></p>
                <div>
                    <div className="">{questions[0]}</div>
                    <br></br>
                    <input id="" type="radio" name="first"/><label htmlFor="">{questions[1]}</label>
                
                    <br></br>
                    <input id="" type="radio" name="first"/><label htmlFor="">{questions[2]}</label> 
                    
                    <br></br>
                    <input id="" type="radio" name="first"/><label htmlFor="">{questions[3]}</label>
                </div>
            </div>
        </div>
        
    );
};

export default Fetch;