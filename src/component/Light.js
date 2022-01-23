import Wrapper from "../ui/Wrapper";
import './Light.css';
import { useState } from "react";


const Light=()=>{
    const [buttonText, setButtonText] = useState("ON"); 
    const changeText = (props) => setButtonText(props);
    const [buttonText1, setButtonText1] = useState("ON"); 
    const changeText1 = (props) => setButtonText1(props);

    const [colour,SetColour] =useState('orange');
    const Changecolour=()=>{
       if(colour==='orange'){
        changeText("OFF")
        SetColour('grey');
    }
            else{
                changeText("ON")
                SetColour('orange')
            }
    }
    const [colour1,SetColour1] =useState("orange");
    const Changecolour1=()=>{
        if(colour1==='orange'){
            changeText1("OFF")
            SetColour1('grey') }
            else{
                changeText1("ON")
                SetColour1('orange')
            }
    }


   return(
       <div>
     <Wrapper>
             <div className="grid-item ">
         <div  style={{background:colour}} className="circle"  >
         </div>
         </div>
         <div className="grid-item ">
         <div style={{background:colour1}} className="circle">
        </div>
        </div>

        <div className="grid-item ">
        <button className="btn" onClick={Changecolour} >{buttonText}</button>
        </div>
       <div className="grid-item ">
       <button className="btn" onClick={Changecolour1} >{buttonText1}</button>
       </div>
    </Wrapper>
        
     </div> 
    )
}
export default Light;