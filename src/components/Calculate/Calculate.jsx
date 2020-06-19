import React, { Component } from 'react'
import axios from 'axios'


export default class Calculate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reply: [],
      isRecieved: false,
      defaultImage: '../img/default.jpeg'

    }
  }
  componentDidMount() {
    // axios.get is case sensitive
    // axios.get(`http://www.omdbapi.com/?s=star&apikey=thewdb`)
    axios.get("http://localhost:8000/delhi")
      .then(response => {
        // console.log(response.data)
        this.setState({ reply: response.data, isRecieved: true })
        console.log(this.state.reply)

        // console.log('tyr')
      })
      // .catch(err => `Error: ${err}`)
      .catch(err => {
        // console.log('errrorrrrr' + err);

        window.location = '/ThisWillLeadToNoMatch';

        // <noMatch />

      })
  }



  render() {
    return (
      <div>
        {this.state.isRecieved ?
          (
            <div className="alert alert-success" role="alert"> Data Recieved </div>
          )
          :
          (this.state.isRecieved)}



      </div>
    )
  }
}
