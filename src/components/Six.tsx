import React from 'react';
import './../App.scss';
import { Form } from './Form';
import { Field } from './Field';

export const SixForm: React.FunctionComponent = () => {
  return (
    <Form
      url="http://localhost:9000"
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Six Report
          </div>
          <Field id="name" label="Name" />
        </React.Fragment>
      )}
    />
  );
};

export default SixForm;