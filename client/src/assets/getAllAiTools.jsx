var allTools = []

    fetch("http://localhost:5000/api/getAllAiTools")
    .then((res) => res.json())
    .then(data => {
       data.map((e) =>{
        allTools.push(e)
       })
    })
    

export default allTools