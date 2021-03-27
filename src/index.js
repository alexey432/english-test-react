import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import data from './questions.csv';
// import { csv } from 'd3';

// Components 
import FetchClass from './components/FetchClass';
import Fetch from './components/Fetch';
import Button from './components/Button';

// import App from './App';
const App = () => {
    const [task, setTask] = useState(
        +window.localStorage.getItem('i') <= 0 ? 1 : +window.localStorage.getItem('i')
        );
    
    return <div>
        <Fetch taskNum={task} />
        <FetchClass taskNum={task} />
        <Button task={task} setTask={setTask} way="decrease" name="Back"/>  
        <Button task={task} setTask={setTask} way="increase" name="Next"/>    
    </div>
}

ReactDOM.render(<App/>, document.querySelector('#root'));