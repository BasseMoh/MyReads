import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BAPI from "./BooksAPI";
import Books from "./Books";

const SearchInputPage = () => {
    
    const [search, SetSearch] = useState("");
    const [MyBooks, setMyBooks] = useState([]);
    const [Collection, setCollection] = useState([]);
    
    
    const clearSearchBar = () => {
        SetSearch("");
    }

    const updateSearchBar = (s) => {
        SetSearch(s);
        updateCurrDisplay(s);
    }

    const updateCurrDisplay = (search) => {
        if (search === '') {
          setCollection(MyBooks);
          clearSearchBar();
        } else {
          BAPI.search(search.trim()).then((bk) => {
            if (bk.length >= 0) {
              const booksWithShelves = bk.map((book) => {
                book.shelf = MyBooks?.find((b) => b.id === book.id)?.shelf || 'none';
                return book;
              });
              setCollection(booksWithShelves);
            } else {
              setCollection([]);
            }
          });
        }
      };
    useEffect(() => {
        let condition = false;
        if(!condition) {
            const getBooks = async () => {
                const result = await BAPI.getAll();
                setCollection(result);
                setMyBooks(result);
            }
            getBooks();
        }
        return () => {
            condition = true;
        }
    }, [])

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={search}
                onChange={(e) => updateSearchBar(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
          <h2 className="search">These are Your Books Available in Your Shelfs: - </h2>
            <ol className="books-grid"></ol>
          </div>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                        Collection.map((book) => {
                            switch(true){
                                case book.shelf !=="none":
                                return (
                                    <Books 
                                        key={book.id}
                                        book={book}
                                        UserValue={book.shelf ? book.shelf : "none"}
                                        MyBooks={MyBooks} 
                                        setMyBooks={setMyBooks}
                                    />
                                );
                                break;
                            }
                            
                        }
                        )
                    }
                </ol>
            </div>
        </div>
      );
}

export default SearchInputPage;