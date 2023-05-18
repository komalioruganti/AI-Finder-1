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
    fetch("http://localhost:5000/api/getAllAiTools")
      .then((res) => res.json())
      .then(data => {
        setAITools(data)
      })
  }

  const AIToolroutes = aiTools.map((x, index) => {
    return(
      <Route key={index} path={x.name.toLowerCase()} element={<MoreInfo id={x.id} name={x.name} description={x.description} tags={x.tags} website={x.website} />}>
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
