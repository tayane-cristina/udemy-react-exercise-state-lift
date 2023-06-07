import React from "react";

const HandleMessage = ({handleMessage}) => {
    const options = ['Oi', 'Olá', 'Oi, tudo bem?']

    return(
        <div>
            <button onClick={ () => handleMessage(options[0])}>1</button>
            <button onClick={ () => handleMessage(options[1])}>2</button>
            <button onClick={ () => handleMessage(options[2])}>3</button>
        </div>
    ) 
}
export default HandleMessage;