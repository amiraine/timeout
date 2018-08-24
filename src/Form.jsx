import React from 'react';

function Form(props){
  let _activity = null;

  function handleFormSubmission(event) {
    event.preventDefault();
    props.handleNewActivity(_activity.value)
    _activity.value = '';
  }
  return(
    <div className='list'>
      <form onSubmit={handleFormSubmission}>
        <h2>Enter a relaxing activity</h2>
        <br/>
        <br/>
        <input type='text'
          placeholder='Jogging, playing with a pet, etc.'
          ref={(input) => {_activity = input;}}
          required/><br/>
        <button type='submit'>Submit</button>
      </form>
      <button onClick={props.handleToggleForm}>Close</button>
    </div>
  )
}

export default Form;
