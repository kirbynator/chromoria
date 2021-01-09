import React from "react";
import OutsideG from  "../../media/green/OutsideG.gif"
import OutsideW from  "../../media/white/OutsideW.gif"

const getBackgoundImage = started => {
    if (started > 4){
        return `url('${OutsideG}')`
    } else {
        return `url('${OutsideW}')`
    }
}

const Outside = ({props, children}) => (
    <div
    style={{
      width: "100%",
      height: "100%",
      backgroundImage: getBackgoundImage(props.color.started)
    }}
  > {children} </div>
)

export default Outside
