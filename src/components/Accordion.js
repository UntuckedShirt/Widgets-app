import React from 'react';



const Accordion = ({ items }) => {
    const renderedItems = items.map(item => {
        return <div> 
            <div className="title active">
                <i className="dorpdown icon"></i>
                {item.title}
            </div>
            <div classname="content active">
                <p>{item.content}</p>
            </div>
        </div>
    });
    return <h1> {items.length}</h1>;

};

export default Accordion;