import React from 'react';
import Form from './Form';
import CurrentList from './CurrentList';

function Home(props){
  return(
    <div className='home questions'>
      {props.showList == true ? <CurrentList
        handleToggleList = {props.handleToggleList}
        activityList = {props.activityList} /> : null}
      {props.showForm == true ? <Form
        handleToggleForm = {props.handleToggleForm}
        handleNewActivity = {props.handleNewActivity}/> : null}
      <h2>Let's find an activity to help you relax!</h2>
      <div className='select-grid'>
        <button onClick={props.handleRandomize}>Pick an activity!</button>
        <div className='activity'>
          <p>{props.selectedActivity}</p>
        </div>
      </div>
      <div className='footer'>
        <sub>Click <button  onClick={props.handleToggleList}>here</button> to see a list of the current activities.</sub>
        <br/>
        <sub>Don't see something you like? <button onClick={props.handleToggleForm}>Submit your own!</button></sub>
      </div>
    </div>
  )
}
export default Home;
