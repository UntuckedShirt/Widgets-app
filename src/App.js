import React, { useState }from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'

//this is a static componeny below
const items = [
    {
        title: "What is react?",
        content: "React isa front end jS framework",
    },
    {
        title: "Why use REact?",
        content: "REact is a fav JS library among engi",
        
    },
    {
        title: "How do you use React?",
        content: "You use react by creating components",
    },
];

const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];
  
  const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
  
    return (
      <div>
        <button onClick={() => setShowDropdown(!showDropdown)}>
          Toggle Dropdown
        </button>
        {showDropdown ? (
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        ) : null}
      </div>
    );
  };
  export default App;