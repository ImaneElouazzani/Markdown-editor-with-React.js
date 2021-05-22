import ReactMarkdown from 'react-markdown'
import { useState } from "react";
import "./css/style.css"

function App() {
  const [text, setText] = useState('')
  return (
    <div className="App">
      <div className="title">
          <h1>Markdown Editor <img src="https://simpleen.io/static/39f66eacb194426c374c42395c144c70/ccaf4/logo-markdown.png"></img></h1>
      </div>
      <div className="areas">
        <div className="rightArea">
          <h3>Markdown Text</h3>
          <textarea
          onChange={(e)=>setText(e.target.value)}>
        </textarea>
        </div>
        <div className="leftArea">
          <h3>Converted Text</h3>
          <div className="box">
           <ReactMarkdown >{text}</ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="reference">
        <p>If you don't know how to write Markdown,<a href="https://daringfireball.net/projects/markdown/syntax">click on this link</a></p>
      </div>
    </div>
  );
}

export default App;