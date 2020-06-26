import React from 'react';
import './../App.scss';
import { Field } from './Field';

function Top() {
  return (
    <div className="info">
      <Field id="info" 
             label="Info" 
             editor="dropdown" 
             options={["", "Starter Guide", "Support", "Feedback"]}
             //url={"www.google.co.uk"}
      />
    </div>
  )
}

export default Top;