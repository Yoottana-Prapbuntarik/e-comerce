import React, { Component } from 'react'

 class ButtonGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
        index : 0
    }
}
HandlePage = (e) => {
  this.setState({ amount: parseInt(e.target.value) })
}
    render() {
        return (
            <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item ml-2">
                <a className="page-link text-dark" href="#" aria-label="Previous">
                  <span aria-hidden="true">{"<"}</span>
                </a>
              </li>
              <li className="page-item ml-2"><a className="page-link  text-dark" href="#">1</a></li>
              <li className="page-item ml-2"><a className="page-link  text-dark" href="#">2</a></li>
              <li className="page-item ml-2"><a className="page-link  text-dark" href="#">3</a></li>
              <li className="page-item ml-2">
                <a className="page-link text-dark" href="#" aria-label="Next">
                  <span aria-hidden="true">{">"}</span>
                </a>
              </li>
            </ul>
          </nav>
        )
    }
}

export default ButtonGroup
