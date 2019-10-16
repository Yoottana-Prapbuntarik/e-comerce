import React, { Component } from 'react'
class CategoryBox extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="col-lg-4  Category">
                    <h1 className="text-center">#Category1</h1>
                    </div>
                <div className="col-lg-4  Category">                  
                    <h1 className="text-center" text-center>#Category2</h1>
                    </div>
                <div className="col-lg-4  Category">
                    <h1 className="text-center">#Category3</h1>
                </div>
                </React.Fragment>
                    
        )
    }
}

export default CategoryBox;
