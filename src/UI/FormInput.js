import React from 'react';
import './elements.css';
const FormInput=(props)=> {
      return (
        <div >
            <label className='Label'style={{float:"left"}}>{props.label}</label>
            <input
              className="FormInput"
              name={props.name}
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.onChange}
              value={props.value}
            />
        </div>
      )
    }
export default FormInput;