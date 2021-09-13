import React, { useState, useEffect } from 'react';
import axios from 'axios';

// remeber that we are using hooks in this file to track our state
// we arent making use of class based component. we still use the exact same
// apporach to managing typing into an input qith class based ocmponents
// still assigning value props and onChange handlers 
// anytime calue is changed we are goingto update piece of state thats going to
// keep track of the vallue of that input thats going to cause compoinent to rrender
// we need to use useState hooks and then createa new piece of state
// ---------------------------------------------------------------//

// useEffect has to be configured to tell whetehr or not something needs to be exectured
// we need to provice a second arguement o useEffect that controls when code is exectuted
// if we run our first an empty array it runs at the initial render
// having no array that means we want to run intial render and run after every rerender
// array with value means we want to run with initial render and run => 
// after every rerender if some element insde array ahs changed since last render
// we need to configure useEffect to rerender
// we would ass a secon arguement to an array with term
// this mean wheneer rerneder component and term has changed we will immediately
// run the => funcirton
// what ever key, value goes inside the obj of params, axios will take
// al of thoseand code them into a query string and ppend then automatically
// ---------------------------------------------------------------//

// what does <span dangerouslySetInnerHTML={{__html do?
// anytime you take a string from a 3rd party. you could be introducing a security hole
// an xxs attack or X site scripting attack, it could allow hackers or malicious person into app
// ---------------------------------------------------------------//

// we want to createa button that links us to the desc of the 
// article that was searched
// we would need a <div> and an <a> (anchor)
// we want to fix an error where it errors out when we delete our search
// it does this due to the fact that we are doing a search with an empit string
// restore it by giving it an if statement of term
// ---------------------------------------------------------------//

// we want to shorten the api request to only search for something every 500 ms
// we want to cancel the previous timer fpr every input change
// the results were delayted and needsa work around
// you would throw a couple of checks into our hook. We must detect whether
// or not its the first time we are going to skjip doing any time out
// and do a search immediately. for every additional type or useEffect being called
// we will go ahead and set a timeout and return the function(check line 68) || line containing the firs tif statement
// it allows first render of component

// ---------------------------------------------------------------//

// figutre out wht this error message means React Hook useEffect has a 
// missing dependency: 'results.length'.Either include it or remove the 
// dependency array  react - hooks / exhaustive - deps overrideMethod
// this next video is advanced and will be hard to understand. This preview will be
// naturally convered later 
// when ususing useEffect you wanna decalre some prop or component
// anytime you use a prop or state inside useEffect. React has a rule wants you to reference
// any peice of propo or state in a dependency array. look at [term]
// use reulsts.length it helps you avoid useEffect issues
// to solve the error bug we got from solving our other error bug
// introduce debouncedTerm which will be a time lagged search term
// in the new code we have one useEffect that is goign to run anytime term chagnes
// term will change anytime a user intput something
// anytime second useEffect changes we are going to que a change to debounc term
// thatll execute in 1 second. If use changes term again we will clear timeout
// and set up timer. Whenever a change in set eboucne term is processed we will run
// seoncd useEffect we put together. Whenever another useEffect is called it take useEffect
// itll update key reults of state.
// ---------------------------------------------------------------//

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return() => {
            clearTimeout(timerId)
};
    }, [term]);

    useEffect(() => {
            const search = async (search) => {
              const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                  action: 'query',
                  list: 'search',
                  origin: '*',
                  format: 'json',
                  srsearch: debouncedTerm,
                },
              });
        
              setResults(data.query.search);
            };
            search();
    }, [debouncedTerm]);
  
    // useEffect(() => {
    //     if (term && !results.length) {
    //         search();
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //               search();
    //             }
    //           }, 1000);
                
    //             return () => {
    //                 clearTimeout(timeoutId)
        
    //             };
    //     }
  
      
    // }, [term, results.length]);
  
    const renderedResults = results.map((result) => {
      return (
        <div key={result.pageid} className="item">
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
          <div className="content">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      );
    });
  
    return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter Search Term</label>
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="input"
            />
          </div>
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    );
  };
  
  export default Search;
  