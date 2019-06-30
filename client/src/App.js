import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor (){
      super();
      this.state = { file: '' };
    }
    onFileChange(event) {
      console.log(this);
      this.setState({file: event.target.files[0]})
    }
    render() {
      return (
          <div className="App container">
            <header className="App-header">
              <h1>Add an Image</h1>
              <input
                  onChange={this.onFileChange.bind(this)}
                  type="file"
                  accept="image/*" />
            </header>
            <br />
            <button className="btn btn-primary" onClick={this.submitImage.bind(this)}>Save Image</button>
          </div>
      );
    }

  submitImage() {
    console.log(this.state.file);
  }
}

export default App;

