import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
export class SearchBox extends Component {
    render() {
        let style = {
            width: '340px',
            height: '131.4px',
            zIndex: '100',
            position: 'relative',
            top: '50%',
            fontWeight: 'bold',
            border: '1px solid black',
            padding: '10px'
        }
        return (
            <div className="container" style={style}>
                <h5 className="text-left">ค้นหาเสื้อผ้า</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="serach" aria-label="serach" aria-describedby="basic-addon2"/>
                </div>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </div>
        )
    }
}

export default SearchBox
