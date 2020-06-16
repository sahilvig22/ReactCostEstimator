import React, { Component } from 'react'


export default class RoomItem extends Component {
  
  render() {
    return (
      <div>
        <div
          className=""
          onClick={() =>
            this.props.selectRoom(`${this.props.name} ${this.props.number}`)
          }
        >
          <p className="py-2 my-2 px-4 w-40 hover:bg-orange-600 hover:shadow-lg rounded cursor-pointer inline-block bg-orange-500 text-white text-center">
            {this.props.name} {this.props.number}
          </p>
        </div>
      </div>
    );
  }
}

