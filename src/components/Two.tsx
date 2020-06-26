import React from 'react';
import './../App.scss';
import { Form } from './Form';
import { Field } from './Field';

export const TwoForm: React.FunctionComponent = () => {
  return (
    <Form
      url="http://localhost:9000"
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Two Report
          </div>
          <Field id="name" label="Name" />
        </React.Fragment>
      )}
    />
  );
};

export default TwoForm;
