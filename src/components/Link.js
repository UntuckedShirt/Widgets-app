import React from 'react';

// when defining event handler it always recieves an event obj
// add window.history.pushState({}, "", href) into your click event handler
// for our next link compoenent we want to have a user emit a navigation event
// this is how we tell our route componenets our link has changed
// purpose of this next code is for a URl change

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metakey || event.ctrlKey) {
            return;
      }
      
      event.preventDefault();
        window.history.pushState({}, "", href)
        
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent)
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;