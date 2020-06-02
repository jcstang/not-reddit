import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';

it('Form renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
})