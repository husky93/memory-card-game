import React from 'react';
import '../assets/styles/Spinner.css';

function Spinner() {
  return (
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
