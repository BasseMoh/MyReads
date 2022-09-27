import PropTypes from "prop-types";

const Shelfs = (props) => {
    switch(true){
        case props.UserValue === "wantToRead":
        return (
            <div className="book-shelf-changer">
                <select defaultValue={'wantToRead'} onChange={props.MangShelf}> 
                    <option value="none" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading" >
                    Currently Reading
                    </option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        );
         

        case props.UserValue === 'currentlyReading' :
            return (
                <div className="book-shelf-changer">
                    <select defaultValue={'currentlyReading'} onChange={props.MangShelf}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                        Currently Reading
                        </option>
                        <option value="wantToRead" >Want to Read</option>
                        <option value="read" >Read</option>
                        <option value="none" >None</option>
                    </select>
                </div>
            );

        case props.UserValue === "read":
            return (
                <div className="book-shelf-changer">
                    <select defaultValue={'read'} onChange={props.MangShelf}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading" >
                        Currently Reading
                        </option>
                        <option value="wantToRead" >Want to Read</option>
                        <option value="read" >Read</option>
                        <option value="none" >None</option>
                    </select>
                </div>
            );
          
            default :
            return (
                <div className="book-shelf-changer">
                    <select defaultValue={'none'} onChange={props.MangShelf}>
                        <option value="none2" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading" >
                        Currently Reading
                        </option>
                        <option value="wantToRead" >Want to Read</option>
                        <option value="read" >Read</option>
                        <option value="none" >None</option>
                    </select>
                </div>
            );
          
        }
        
}

Shelfs.propTypes = {
    NewBookObject: PropTypes.object.isRequired,
    UserValue: PropTypes.string.isRequired,
    MangShelf: PropTypes.func.isRequired
}
export default Shelfs;