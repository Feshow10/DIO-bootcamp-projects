import React from "react"
import reactDom from "react-dom"
import Button from "./Button"
import "C:/Users/notem/Desktop/GIT/DIO projetos/react-js/components/src/styles.css"

function sum(a,b){
    alert(a + b)
}

function primeiroJSX(){
    return(
        <div className="teste">
            Felipe Marques - Introdução ao ReactJs
            <h1>Soma: {sum(10,20)}</h1>
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            {
//                primeiroJSX()
                <Button onClick={() => sum(10,20)} name={"Felipe Marques"}/>
            }
        </div>
    )
}

const rootElement = document.getElementById("root")
reactDom.render(<App />, rootElement)