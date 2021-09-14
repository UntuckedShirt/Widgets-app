import React, { useState }from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
  
// below are an example of the repitive functions that were cleaned up

//   const showAccordion = () => {
//     if (window.location.pathname === "/") {
//       return <Accordion items={items} />;
//     }
//   };
  
//   const showList = () => {
//     if (window.location.pathname === "/list") {
//       return <Search />;
//     }
//   };
  
//   const showDropdown = () => {
//     if (window.location.pathname === "/dropdown") {
//       return <Dropdown />;
//     }
//   };
  
//   const showTranslate = () => {
//     if (window.location.pathname === "/translate") {
//       return <Translate />;
//     }
//   };

// Whenever we providea jsx into another jsx the innder element is provided to the outer one
// called children
  
const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route
                path="/">
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>

            <Route path='/dropdown'>
                <Dropdown
                label="Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                    />
            </Route>

            <Route path='/translate'>
                <Translate />
            </Route>
      </div>
    );
  };
  export default App;