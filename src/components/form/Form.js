import  React, { Children } from "react";
import "./form.css";
function Form({children}){
    return(
        <div className="Form">{children}</div>
    )
}

export default Form