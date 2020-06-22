import React from 'react';
import './../App.scss';

export interface Props {
  name: string;
  url: () => void;
}

function Five() {
  return (
    <div>
      <h1>Five Report Page</h1>
    </div>
  );
}

export default Five;