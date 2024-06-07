import React, { useState } from 'react';
import '../Styles/Dropdown.css';
import eth from '../Images/icon-eth.png';
import drop from '../Images/icon-dropdown.png';


function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState('ETH');

    const toggleDropdown = () => {
        setDropdown(!dropdown);
      };
    
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setDropdown(false);
    };


  return (
    <div className={`Dropdown ${dropdown ? '' : 'menu-hidden'}`}>
        <div className="dropdown-container">
            <img src={eth} alt='eth' className='eth' />
            <p className='dropdown-text'>{selectedItem}</p>
            <img src={drop} alt='drop' onClick={toggleDropdown} className={`drop ${dropdown ? 'opendropdown' : ''}`} />
        </div>
        <ul className="menu-dropdown">
            <li onClick={() => handleItemClick('ETH')}>ETH</li>
            <li onClick={() => handleItemClick('Polygon')}>Polygon</li>
            <li onClick={() => handleItemClick('BNB')}>BNB</li>
            <li onClick={() => handleItemClick('Base')}>Base</li>
            <li onClick={() => handleItemClick('Blast')}>Blast</li>
        </ul>
    </div>
  );
}

export default Dropdown;