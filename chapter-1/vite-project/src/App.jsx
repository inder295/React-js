import React from "react"

function code(props){
  console.log(props);
  
   return React.createElement("div",{},[
     React.createElement("h2",{},props.title),
     React.createElement("p",{},props.description)
   ])
}

function App() {
 

  return  React.createElement("div",{},[
    React.createElement("h1",{},"Code Variations"),
    React.createElement(code, {
      title: "server side",
      description:" This code is executed on the server and sent to the client as HTML."
    }),
    React.createElement(code,{
      title:"client side",
      description:" This code is executed on the client after the HTML is loaded."
    })

  ])
}

export default App
