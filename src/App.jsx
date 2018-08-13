import React, { Component } from 'react';
import './App.css';

import Q1 from './Q1';
import Home from './Home';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activityList: [
        'Clean room for 15 minutes',
        'Wash some dishes',
        'Meditate for 15 minutes',
        'Write down how you\'re feeling',
        'Message a friend',
        'Play a game',
        'Go for a walk',
        'Stretch',
        'Read a book',
        'Watch an episode of a TV show',
        'Cook a meal',
        'Practice an instrument'
      ],
      selectedActivity: '',
      currentPrompt: true,
      showList: false,
      showForm: false
    }
    this.handleRandomize = this.handleRandomize.bind(this);
    this.handleTogglePrompt = this.handleTogglePrompt.bind(this);
    this.handleToggleList = this.handleToggleList.bind(this);
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleNewActivity = this.handleNewActivity.bind(this);
  }

  handleRandomize(){
    let index = Math.floor(Math.random() * (this.state.activityList.length));
    console.log(index);
    let currentSelectedActivity = this.state.activityList[index];
    console.log(currentSelectedActivity);
    this.setState({
      selectedActivity: currentSelectedActivity
    })
  }
  handleTogglePrompt(){
    this.setState({
      currentPrompt: false
    });
  }
  handleToggleList(){
    console.log(this.state.showList);
    this.setState({
      showList: !this.state.showList
    });
  }
  handleToggleForm(){
    this.setState({
      showForm: !this.state.showForm
    });
  }
  handleNewActivity(newActivity){
    var newActivityList = this.state.activityList.slice();
    newActivityList.push(newActivity);
    this.setState({
      activityList: newActivityList
    });
  }
  render() {
    return (
      <div className='app-container'>
        {this.state.currentPrompt == true ? <Q1
          handleTogglePrompt = {this.handleTogglePrompt}/> : <Home
          handleRandomize = {this.handleRandomize}
          selectedActivity = {this.state.selectedActivity}
          activityList = {this.state.activityList}
          showList = {this.state.showList}
          showForm = {this.state.showForm}
          handleToggleList = {this.handleToggleList}
          handleToggleForm = {this.handleToggleForm}
          handleNewActivity = {this.handleNewActivity}/>}
      </div>
    );
  }
}

export default App;
