import React from 'react';

function Q1(props){
  return(
    <div className='questions q1'>
      <h1>Feeling stressed?</h1>
      <button id='next' onClick={props.handleTogglePrompt}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Chevron_right_font_awesome.svg" alt='right caret'/></button>
    </div>
  )
}

export default Q1;
