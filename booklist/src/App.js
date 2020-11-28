import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {books} from './books';
import Book from './book';

function App() {
  return (
    <article className= "booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}/>
      })}
    </article>
  );
}

export default App;
