import React, { Component } from "react";
import "./RoomSection.css";

export default class RoomSection extends Component {

  state={
    floor:'1',
    bathroom:1,
    floorArea:'400',
    isEnable:true
  }
  onSubmit(event){
    console.log(this.state);
      this.props.history.push(
        `/product-selection/${this.state.floor}/${this.state.bathroom}/${this.state.floorArea}`
      );
    event.preventDefault();
  }
  onChangeHandel = (event)=>{
    const {name,value} = event.target
    this.setState({[name]:value})
    switch (name) {
      case 'floorArea':
        if (this.state.floorArea.length <2) {
          this.setState({
            isEnable: false,
          });
        } else {
          this.setState({
            isEnable: true,
          });
        }
        break;    
      default:
        break;
    }
  }

  render() {
    return (
      <div className="mt-4 text-center">
        <p className=" text-2xl text-center">Let's have a plan</p>
        <p className="text-sm text-gray-600">Step 1 of 3</p>
        <div className="flex mx-auto w-6/12 shadow px-6 py-4 mt-2 rounded">
          <div className="flex flex-col">
            <form onSubmit={(event) => this.onSubmit(event)}>
              <p className="text-left">Set your floor plan</p>
              <li>
                <label className="text-lg px-2" htmlFor="1bhk">
                  1 BHK
                </label>
                <input
                  type="radio"
                  name="floor"
                  value="1"
                  onChange={this.onChangeHandel}
                  id="1bhk"
                />
                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>

              <li>
                <label className="text-lg px-2" htmlFor="2bhk">
                  2 BHK
                </label>
                <input
                  type="radio"
                  name="floor"
                  value="2"
                  onChange={this.onChangeHandel}
                  id="2bhk"
                />
                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>
              <li>
                <label className="text-lg px-2" htmlFor="3bhk">
                  3 BHK
                </label>
                <input
                  type="radio"
                  name="floor"
                  value="3"
                  onChange={this.onChangeHandel}
                  id="3bhk"
                />
                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>
              <li>
                <label className="text-lg px-2" htmlFor="4bhk">
                  4 BHK
                </label>
                <input
                  type="radio"
                  name="floor"
                  value="4"
                  onChange={this.onChangeHandel}
                  id="4bhk"
                />
                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>
              <div className="mt-4">
                <p className=" text-left">Select Bathroom</p>
                <div className="flex">
                  <input
                    type="text"
                    value={this.state.bathroom}
                    name="bathroom"
                    onChange={this.onChangeHandel}
                    className="bg-orange-200 font-semibold px-2 py-2 rounded my-2"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className=" text-left">Built-up area</p>
                <div className="flex">
                  <input
                    type="text"
                    value={this.state.floorArea}
                    name="floorArea"
                    onChange={this.onChangeHandel}
                    className="bg-orange-200 font-semibold px-2 py-2 rounded my-2"
                  />
                  <p className="my-auto px-4">sq.ft.</p>
                </div>
              </div>

              <div className="text-left">
                <button
                  type="submit"
                  disabled={!this.state.isEnable}
                  className="bg-orange-600 text-white px-4 py-1 hover:shadow-lg rounded-sm mt-4"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
