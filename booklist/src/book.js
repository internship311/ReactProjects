import React from 'react';

const Book = (props) => {
    return <div className= "book">
      <img src= {props.book.img} alt=""/>
      <h4 onClick={()=> {console.log(props.book.title)}}>{props.book.title}</h4>
      <h5 onClick={() => {alert(`${props.book.author} is clicked`)}} style={{ color : '#617d98', fontSize : '0.75rem', marginTop : '0.25rem'}}>{props.book.author}</h5>
      </div>
  }

  export default Book;