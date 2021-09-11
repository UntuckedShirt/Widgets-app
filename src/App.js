import React from 'react';
import Accordion from './components/Accordion'

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

const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default App;