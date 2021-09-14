import React, { useState }from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
    
    return (
      <div>
        <Translate />
        
      </div>
    );
  };
  export default App;