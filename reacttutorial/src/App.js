import './App.css';
import React from 'react';
import {data} from './data';
function App() {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
      <button className='btn' onClick={() => {
        let arr = people.slice();
        arr.push({id : 5, name : 'Ashutosh'})
        setPeople(arr);
      }}>
        Add item
      </button>
    </>
  );
}

export default App;
