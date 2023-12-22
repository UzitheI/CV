import React, { useState } from 'react';

const ListComponent = () => {
  const [list, setList] = useState([]);
  const [newElement, setNewElement] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddElement = () => {
    if (newElement.trim() !== '') {
      setList([...list, newElement]);
      setNewElement('');
    }
  };

  const handleDeleteElement = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleToggleSelect = (index) => {
    const isSelected = selectedItems.includes(index);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedList = list.filter((_, index) => !selectedItems.includes(index));
    setList(updatedList);
    setSelectedItems([]);
  };

  return (
    <div className='mx-44 pt-4 '>
        <h1 className='text-3xl flex justify-center '>Education & Experiences</h1>
      <ul className='flex justify-around text-2xl '>
        {list.map((element, index) => (
          <li key={index} className='flex space-x-4'>
            <input
              type="checkbox"
              checked={selectedItems.includes(index)}
              onChange={() => handleToggleSelect(index)}
            />
            {element}
            <button onClick={() => handleDeleteElement(index)} className='border border-black bg-red-200 round'>Delete</button>
          </li>
        ))}
      </ul>
      <div className='flex justify-center'>
        <input
          type="text"
          value={newElement}
          onChange={(e) => setNewElement(e.target.value)}
          className='border border-black'
        />
        <button onClick={handleAddElement}>Add Element</button>
      </div>
      {selectedItems.length > 0 && (
        <div>
          <button onClick={handleDeleteSelected}>Delete Selected</button>
        </div>
      )}
    </div>
  );
};

export default ListComponent;
