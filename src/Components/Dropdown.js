import React, { useState } from 'react';
import '../Styles/Dropdown.css';
import eth from '../Images/icon-eth.png';
import drop from '../Images/icon-dropdown.png';

function Dropdown() {
    const [dropdown, setdropdown] = useState(false);

    const toggleDropdown = () => {
        setdropdown(!dropdown);
      };

  return (
    <div className={`Dropdown ${dropdown ? '' : 'menu-hidden'}`}>
        <div className="dropdown-container">
            <img src={eth} alt='eth' className='eth' />
            <p className='dropdown-text'>Etherium</p>
            <img src={drop} alt='drop' onClick={toggleDropdown} className={`drop ${dropdown ? 'opendropdown' : ''}`} />
        </div>
        <ul className="menu-dropdown">
            <div>Bitcoin</div>
            <li>Etherium</li>
            <li>BNB</li>
            <li>Base</li>
            <li>Blast</li>
        </ul>
    </div>
  );
}

export default Dropdown;