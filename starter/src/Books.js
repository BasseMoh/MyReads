import PropTypes from "prop-types";
import * as BAPI from "./BooksAPI";
import Shelfs from "./Shelfs";


const Books = (props) => {
    const bookTitle= props.book.title;
    const author = props.book.authors;

    const MangShelf = (event) => {
        const sName = event.target.value;
        BAPI.update(props.book, sName);

        if(!props.MyBooks.includes(props.book)) {
            props.setMyBooks([...props.MyBooks, props.book]);
        } else {
            props.book.shelf = sName;
            const BookArr = props.MyBooks.filter((b) => b.title !== props.book.title);
            props.setMyBooks(BookArr.concat(props.book));
        }
    }
    return (
            <li>
                <div className="book">
                <label style={{fontSize: '0.9rem', fontWeight: 'bold'}}className="book-title">{bookTitle}</label>
                    <br></br>
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url("${ props.book.imageLinks && props.book.imageLinks.smallThumbnail  }")`
                        }} >
                        </div>
                        <Shelfs 
                            NewBookObject={props.book}
                            UserValue={props.UserValue} 
                            MangShelf={MangShelf}
                        />
                    </div>
                    <br></br>
                    <label className="book-authors">{"By: "}</label>
                    <label className="book-authors">{author}</label>
                        
                </div>
            </li>
        );
}

Books.propTypes = {
    UserValue: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    MyBooks: PropTypes.array.isRequired,
    setMyBooks: PropTypes.func.isRequired,
}

export default Books;