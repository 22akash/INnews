import React, { useState } from 'react';

export default function ImgLay(props) {
    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
      };
    
    const handleOnChange = (event)=>{
        setImg(event.target.value) 
        console.log(event.target.files[0]);
    }
    return(
        <div className="inputImg">
        <h1>{props.title}</h1>
        <input type="file" onChange={onImageChange} />
        <button onChange={handleOnChange}>Reset</button> <br/>
        <img src={img} alt="" /> 
        <p> {}</p>
      </div>
    )
}