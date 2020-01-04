import React, { Component } from 'react';
import { faEdit, faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class AddedAddress extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container boxAddedAddress my-2">
                <div className="row">
                    <div className="col-8 my-3 textAdded">
                        {this.props.nameAnaLastName} (ที่อยู่เริ่มต้น)
                    </div>
                    <div className="col-4 my-3  text-right">
                        <FontAwesomeIcon icon={faEdit} />
                        <FontAwesomeIcon className="ml-2" icon={faTrashAlt} />
                    </div>
                    <div className="underline"></div>
                    <div className="col-12 textAddedDetai my-2">
                        <span > {this.props.address} &nbsp; &nbsp;
                            {this.props.tel}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddedAddress
