import React from 'react';
import './../App.scss';
import { Form } from './Form';
import { Field } from './Field';

export const FourForm: React.FunctionComponent = () => {
  return (
    <Form
      action="http://localhost:9000"
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Four Report
          </div>
          <Field id="name" label="Name" />
        </React.Fragment>
      )}
    />
  );
};

export default FourForm;
