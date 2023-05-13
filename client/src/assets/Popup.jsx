import { useState } from "react"

const PopUp = ({setOpenPopUp}) =>{

const closePopUp = ()=>{
    setOpenPopUp(false)
}

return(
    <div className="popUp">
      <div onClick={closePopUp}>X</div>
      <div>
      </div>
    </div>
)
}

export default PopUp