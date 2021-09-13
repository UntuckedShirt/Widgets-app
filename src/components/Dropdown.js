// Next for the dropdown we want to create a piece of stat insdie of app compoenent
// for option that is selected. App might want to know what the seleted
// option is
// what are making these wighrys challenging?
// Topic 1 is the dropdowns needs to somewhow listen to events on these elements
// elements being the body accordion and divs
// ---------------------------------------------------------------//

// eventBubbling the use clicks the item, the browser then crteates and event obj
// the event obj then provides info on the click. The browser then send it to react
// react then provides an event obj. The event obj then travel to the 
// menu and then moves to the class ui selection. Then travels up from one
// lvl to another
// ---------------------------------------------------------------//

// What had been est is that the dropdown componenet needs to detect a
// click event on any elemtn besides one it created
// The Dropdown component has a hard time settin up an event handlers
// on elemtns that it does not crteate
// Event bubbling is a thing
// The culmination of all these domponent is that the dropdown can set up
// a manual event listener (without React) on the body elemnt
// A click on any element will bubble up to the body
// ---------------------------------------------------------------//

// The way the dropwdown functions is from child to parent
// having the body, then the dropdown, and then the item all being invoked in said order
// The first thing that happens is when item is clockied is set open to false
// we then update our currently selected option and then is invoked which is 
// flipped in setOpen which we need to undo to not alow that ot happen
// To fix this in scenraio (one) if the user ever clicks anyhting created by dropdown
// we dont want anycode inside to open or close the dropdown
// ---------------------------------------------------------------//

// we will be introduced into another hook called useRef. useRef allows us to get
// a reference of a used dom element. we will be using useRef to find the most
// parent elemtn to be used in the dropdown
// after component is renederd for first time we can use ref.current
// it is the curent property of th ref thay is a reference to that div
// TypeError: Cannot read property 'contains' of null is saying that ref.current
// is evaluating to null
// what happening is whenever we remove a ocmpienent from a dom all the ref attached
// get set to null because we no longer have an elemnt to refer to
// if that element is removed then there is no longer a reference
// when we remove the dropdown from dom we shoudl turn off the eventlistener



import React, {useState, useEffect, useRef} from 'react';


const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
  
    useEffect(() => {
      const onBodyClick = (event) => {
        if (ref.current.contains(event.target)) {
          return;
        }
        setOpen(false);
      };
      document.body.addEventListener("click", onBodyClick, { capture: true });
  
      return () => {
        document.body.removeEventListener("click", onBodyClick, {
          capture: true,
        });
      };
    }, []);
  
    useEffect(() => {
      document.body.addEventListener(
        "click",
        () => {
          setOpen(false);
        },
        { capture: true }
      );
    }, []);
  
    const renderedOptions = options.map((option) => {
      if (option.value === selected.value) {
        return null;
      }
  
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => onSelectedChange(option)}
        >
          {option.label}
        </div>
      );
    });
  
    return (
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">Select a Color</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dropdown;
  