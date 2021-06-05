import './App.css';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 1, isSelected: false },
    { itemName: 'item 3', quantity: 1, isSelected: false },
  ]);

  const [inputvalue, setInputValue] = useState('');

  const handleAddButtonClick = () => {
    if (!inputvalue) {
      //do nothing
    } else {
      const newItem = { itemName: inputvalue, quantity: 1, isSelected: false };
      const newItems = [...items, newItem];
      setItems(newItems);
      setInputValue('');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleIncrementClick = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  };
  const handleDecrementClick = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity === 0) {
    } else newItems[index].quantity--;
    setItems(newItems);
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const getTotal = () => {
    const total = items.reduce((total, item) => {
      if (item.isSelected) {
        return total;
      } else return total + item.quantity;
    }, 0);
    setTotal(total);
  };

  const [total, setTotal] = useState(0);

  useEffect(() => getTotal());
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputvalue}
            className="add-item-input"
            onChange={handleChange}
            placeholder="add new item..."
          />
          <FontAwesomeIcon icon={faPlus} onClick={handleAddButtonClick} />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div key={index} className="item-container">
              <div className="item-name">
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      onClick={() => {
                        toggleComplete(index);
                      }}
                    />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon={faCircle}
                      onClick={() => {
                        toggleComplete(index);
                      }}
                    />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button onClick={() => handleDecrementClick(index)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrementClick(index)}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {total}</div>
      </div>
    </div>
  );
}

export default App;
