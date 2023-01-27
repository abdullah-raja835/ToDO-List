import "./card.css"
import React,{useState} from "react";

function Card (props){
    const [input,setInput] = useState("");


    //   This is for typing
    const inputItem = (event)=>{
        setInput(event.target.value)   
    }

    // input wali value hm array ma store kwana chahty hn so hmy us k liye aik aur
    // useState bna kr empty array chorna ho ga aur is array ko hm map krain gy
    const [item , setItem] = useState([]);
   
// jo value input ma type ho rhee ha wo send kro jb "add" click ho tb
    const add = ()=>{
        setItem((old)=>{
            return [...old,input]
        });
    }
   
   
    return(
        <>
            <div className="card">
                <div className="strip"><h1>{props.title}</h1></div>
            <div className="put">
                
                <input type="text" onChange={inputItem}  placeholder="Add item" />
               <div className="plus" onClick={add} ><p>{props.sign}</p></div>
        
            </div>
                 <div>
                 <ul className="ml">{item.map((val)=>{
                    return <li>{val}</li>
                 })}</ul>

                 </div>
            </div>
        </>
    )

}

export default Card;