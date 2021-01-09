import React from "react";
import CanyonG from  "../../media/green/CanyonG.gif"
import CanyonP from  "../../media/pink/CanyonP.gif"

const getBackgoundImage = started => {
    if (started > 11){
        return `url('${CanyonP}')`
    } else {
        return `url('${CanyonG}')`
    }
}

const Canyon = ({props, children}) => (
    <div
    style={{
      width: "100%",
      height: "100%",
      backgroundImage: getBackgoundImage(props.color.started)
    }}
  > {children} </div>
)

export default Canyon
