import React from 'react';

function CurrentList(props){
  let list = props.activityList
  let ulList = list.map((listItems)=>{
    return <li>{listItems}</li>
  });

  return(
    <div className='list'>
      <ul>
        {ulList}
      </ul>
      <button onClick={props.handleToggleList}>Close</button>
    </div>
  );
}
export default CurrentList;
