import React from 'react';

const Button = ({ task, setTask, way, name }) => {
    
    // if(typeof(Storage) !== "undefined") {
    //     if (localStorage) {
            
        
    //     };
    // };

    const changeStep = () => {
        
        if(way == 'increase') {
            window.localStorage.setItem('i', task+1);
            setTask(+window.localStorage.getItem('i'));
        } else if(way == 'decrease') {
            window.localStorage.setItem('i', task-1);
            setTask(+window.localStorage.getItem('i'));
        }
        
    };
    
    return (
        <div>
            {task}
            <button onClick={changeStep}>{name}</button>
        </div>
    );
};

export default Button;