import React, { Component } from 'react'
import './ProductSelection.css'
import RoomItem from './RoomItem/RoomItem'
import camelcase from "camelcase";

export default class ProductSelection extends Component {
  state = {
    bedRoom: 1,
    hallRoom: 1,
    kitchen: 1,
    bathroom: 1,
    area: 400,
    selectedRoom: 'Select room to estimate'
  }
  componentDidMount() {
    this.setState({
      bedRoom: parseInt(this.props.match.params.floor),
      area: parseInt(this.props.match.params.area),
      bathroom: parseInt(this.props.match.params.bathroom),
    });
  }
  selectRoom(data) {
    this.setState({
      selectedRoom: data
    })
  }
  render() {
    var bedRoomList = []
    for (let i = 1; i <= this.state.bedRoom; i++) {
      bedRoomList.push(
        <RoomItem
          name="Bed Room"
          key={camelcase(`Bed Room ${i}`)}
          selectRoom={this.selectRoom.bind(this)}
          number={i}
        />
      );
    }
    var bathroomList = []
    for (let i = 1; i <= this.state.bathroom; i++) {
      bathroomList.push(
        <RoomItem
          name="Bathroom"
          key={camelcase(`Bathroom ${i}`)}
          selectRoom={this.selectRoom.bind(this)}
          number={i}
        />
      );
    }
    return (
      <div className="mt-4">
        <div className="flex">
          <div className="w-3/12 pl-10">
            <div className="bg-orange-100 py-2 px-4 rounded">
              <p className="font-semibold py-2">Your Room arrangement</p>
              {bedRoomList}
              <RoomItem
                name="Hall Room"
                selectRoom={this.selectRoom.bind(this)}
                number={1}
              />
              <RoomItem
                name="kitchen"
                selectRoom={this.selectRoom.bind(this)}
                number={1}
              />
              {bathroomList}
            </div>
          </div>
          <div className="w-6/12 bg-orange-100 rounded mx-2 text-center">
            <p className="py-4 text-lg font-semibold">
              {this.state.selectedRoom}
            </p>
          </div>
          <div className="w-3/12 rounded mx-1 text-center">
            <div className="bg-orange-100 py-4">
              <p className="py-2 font-semibold">Total Estimated </p>
              <p className="text-2xl">₹ 0</p>
              <p className=" bg-orange-600 inline-block px-4 py-2 text-white rounded shadow-lg hover:bg-orange-500 cursor-pointer">Check Out</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
