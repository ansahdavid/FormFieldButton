import React from 'react';
import './../App.scss';
import { Form } from './Form';

export const OneForm: React.FunctionComponent = () => {
  return (
    <Form
      url="https://jsonplaceholder.typicode.com/posts"
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            One Report
          </div>
        </React.Fragment>
      )}
    />
  );
};

export default OneForm;