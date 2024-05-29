import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputData) {
      setItems([...items, inputData]);
      setInputData('');
    } else {
      console.warn('Please enter an item to add to the list.');
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((_, index) => index !== id);
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <div>
      <div className="main-div">
        <div className='child-div'>
          <figure>
            <img src="https://w7.pngwing.com/pngs/670/265/png-transparent-checkmark-done-exam-list-pencil-todo-xomo-basics-icon-thumbnail.png" alt="Todo Icon" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input 
              type="text" 
              placeholder='✍️ Add Items...' 
              value={inputData} 
              onChange={(e) => setInputData(e.target.value)} 
            />
            <i className="fa-solid fa-plus" title='Add Item' onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((item, index) => (
              <div className="eachItem" key={index}>
                <h3>{item}</h3>
                <i className="fa-solid fa-trash" title='Delete Item' onClick={() => deleteItem(index)}></i>
              </div>
            ))}
          </div>
          <div className="showItems">
            <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}>
              <span>Delete All</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
