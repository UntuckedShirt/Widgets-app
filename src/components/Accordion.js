import React, { useState } from 'react';

// this function { useState } is a hook, which gives acces to state inside 
// of a function componenet
// this line of code will initialize a state:
// const [activeIndex, setActiveIndex] = useState(null);
// you would set activeIndex inside ontitleclick:
// const onTitleClick = (index) => {setActiveIndex(index)
// then call {activeIndex} in an h1 tag 
// ---------------------------------------------------------------//

// every element inside of a ls of JS elements need a key properyt
// we want to return everything but nothing extra when it comes to React fragments
// the REact.Fragment is a containing element when rendered on the screen
// we take the inxex variable and put it to the end of the console log 
// if this was in a class based ocmponenet we could use an example like:
// class Accordion extends Component {
// onTitleClick() {
//     console.log('title was clicked');
//     }
// rendered() {
//      }    
// }

// ---------------------------------------------------------------//
// we cant to call our callback function unless an => func is put in on ontitleclick
// if we wanted to show an index of the selected item wed use class based system
//for an alt route for solution
// ---------------------------------------------------------------//

// the 3 things to remember is to inititilze value of state
// value only changed through 'setState' function
// reference value inside entire class with this.state.active index
// ---------------------------------------------------------------//

// to figure out what we wrote we will start with: const [activeIndex, setActiveIndex] = useState(null);
// we use useState that comes from the react library which ia primitive hook
// when we call useState we call the syntac inside the array where we 
// are not actually makeing an array
// syntax we saw is called array desctructing which is the same as obj desctructuring
// i can write an array normally as i would but end up with a lot of kines of code
// its easier to start array destructuring  an example would be:
// const [firstElement, secondElement] = colors;
// no arrays are being created here and is just some syntax telling JS that we want access to 
// the first element and sign it to an array. Its a short way to get elements inside of an array
// the variable activeIndex is the piece of state we are trying to keep track of
// it represents some calue of change over time
// the second variable setActiveIndex isa function that we call to updqte our piece of state
// everutime we call the setter fucntion to update our state it will cause entire component 
// to rerender. Wheneer useState is called it takes in 1 arguement which is 
// the defualt value for our piece of state
// ---------------------------------------------------------------//

// the names of activeIndex and setActiveIndex are not static and can be changed 
// ex1. const [name, setName] = useState (" ")
// ex2. const [couneter, setCounter] = useState (0)
// ex3. const [color, setColor] = useState ('green')
// ---------------------------------------------------------------//

// an active className controls whether or not an idividuial item will be expanded
// whenever iterating over list of item we lok over index and copmapre to the active nidex state 
// if they are == we want to add the className of active to the <div>


const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const onTitleClick = (index) => {
      setActiveIndex(index);
    };
  
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

      return (
        <React.Fragment key={item.title}>
              <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`content ${active}`}>
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });
  
    return (
      <div className="ui styled accordion">
        {renderedItems}
        
      </div>
    );
  };
  
  export default Accordion;