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
  const [items, setItems] = useState([]);
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input className="add-item-input" placeholder="add new item..." />
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="item-list">
          <div className="item-container">
            {items.map((item) => {
              <>
                <div className="item-name">
                  {false ? (
                    <>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span className="completed">item 1</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCircle} />
                      <span>item 1</span>
                    </>
                  )}
                </div>
                <div className="quantity">
                  <button>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </>;
            })}
          </div>
        </div>
        <div className="total">Total: 6</div>
      </div>
    </div>
  );
}

export default App;
