import "./App.css";
import { useEffect, useState } from "react";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Body from "./assets/Body";
import MoreInfo from "./assets/MoreInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    getAiTools()
  }, [])

  const [aiTools, setAITools] = useState([])

  function getAiTools() {
    fetch("https://ai-finder-api-p4jq.onrender.com/api/getAllAiTools")
      .then((res) => res.json())
      .then(data => {
        setAITools(data)
      })
  }

  const AIToolroutes = aiTools.map((element, index) => {
    return(
      <Route key={index} path={element.name.toLowerCase()} element={<MoreInfo element = {element}/>}>
      </Route>
    )
  })

  return (
    <>

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body aiTools={aiTools}/>}></Route>
          {AIToolroutes}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
