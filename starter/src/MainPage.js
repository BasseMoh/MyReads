import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import * as BAPI from "./BooksAPI";

const MainPage = () => {
    const [BookS, setBookS] = useState([])

    useEffect(() => {
        let condition = false;
        if(!condition) {
            const getBooks = async () => {
                const getresb = await BAPI.getAll();
                setBookS(getresb);
            }
            getBooks();
        }
        return () => {
          condition = true;
        }
    }, 
    [])

    return (
        <div className="list-books">
          <div className="list-books-title">
          <h1>Welcome Back</h1>
          <h2>My Reads</h2>
          </div>
          <div className="list-books-content">
            <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <ol className="books-grid">
                    {
                      BookS.map((book) => {
                        switch(true){
                          case book.shelf ==="read": 
                          return (
                              <Books 
                                  key={book.id}
                                  book={book}
                                  UserValue={book.shelf}
                                  MyBooks={BookS}
                                  setMyBooks={setBookS}
                              />
                          );
                        }
                      })
                    }
                </ol>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                      BookS.map((book) => {
                        switch(true){
                          case book.shelf ==="currentlyReading": 
                          return (
                              <Books 
                                  key={book.id}
                                  book={book}
                                  UserValue={book.shelf}
                                  MyBooks={BookS}
                                  setMyBooks={setBookS}
                              />
                          );
                        }
                      })
                    }
                </ol>
            </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                      BookS.map((book) => {
                         switch(true){
                          case book.shelf ==="wantToRead": 
                          return (
                              <Books 
                                  key={book.id}
                                  book={book}
                                  UserValue={book.shelf}
                                  MyBooks={BookS}
                                  setMyBooks={setBookS}
                              />
                          );
                        }
                      })
                    }
                </ol>
              </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/SearchPage">Add a book</Link>
          </div>
        </div>
      );
}

export default MainPage;