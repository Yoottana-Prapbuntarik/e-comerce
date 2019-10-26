import React, { Component } from 'react'
class CategoryBox extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="col-lg-4  Category">
                    <h2 className="text-center">#Category1</h2>
                    </div>
                <div className="col-lg-4  Category">                  
                    <h2 className="text-center">#Category2</h2>
                    </div> 
                <div className="col-lg-4 text-center  Category">
                    <h2>#Category3</h2>
                </div>
                </React.Fragment>
                    
        )
    }
}
export default CategoryBox;
