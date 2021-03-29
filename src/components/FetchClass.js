import React, { Component } from 'react';

// Data import 
import data from '../questions.csv';

// Libraries
import * as d3 from 'd3'; //https://github.com/d3/d3-dsv

// Components


class FetchClass extends Component {
    
    state = { questions: [] };

    componentDidMount() {

        d3.text(data).then(item => {
            const x = d3.dsvFormat(';').parseRows(item);
            
            this.setState({ questions: x[this.props.taskNum - 1]});
            
        });
    };

    componentDidUpdate() {
        this.componentDidMount();
    };
    
    
    render() {
        return (
            <div>
                <div>
                    <div>
                        <p><b>Задание {this.props.taskNum}</b></p>
                        <div>
                            <div className="">{this.state.questions[0]}</div>
                            <br></br>
                            <input id="" type="radio" name="first"/><label htmlFor="">{this.state.questions[1]}</label>
                        
                            <br></br>
                            <input id="" type="radio" name="first"/><label htmlFor="">{this.state.questions[2]}</label> 
                            
                            <br></br>
                            <input id="" type="radio" name="first"/><label htmlFor="">{this.state.questions[3]}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FetchClass;