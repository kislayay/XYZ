import React, { useState } from 'react';

const FilterableSelect = () => {
  const [filter, setFilter] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Grapes', value: 'grapes' },
    { label: 'Pineapple', value: 'pineapple' }
  ];
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    setFilter(''); // Clear filter when a new option is selected
  };

  const filteredOptions = options.filter(option => {
    // Filter based on both the option label and the filter value
    return option.label.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <select onChange={handleSelectChange} value={selectedOption}>
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <input 
        type="text"
        placeholder="Filter options"
        value={filter}
        onChange={handleFilterChange}
      />
      <select>
        {filteredOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterableSelect;
