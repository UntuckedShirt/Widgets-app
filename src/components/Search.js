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




const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
  
    useEffect(() => {
      const search = async () => {
        const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term,
          },
        });
  
        setResults(data.query.search);
      };
  
      search();
    }, [term]);
  
    const renderedResults = results.map((result) => {
      return (
        <div key={result.pageid} className="item">
          <div className="content">
                  <div className="header">{result.title}</div>
                  <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
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
  