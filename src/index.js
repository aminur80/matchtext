import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function getIndicesFromText(text, subtext) {
  var subtextLength = subtext.length;
  if (subtextLength === 0) {
    return [];
  }
  
  var startIndex = 0;
  var index;
  var indices = [];

  text = text.toLowerCase();
  subtext = subtext.toLowerCase();

  while ((index = text.indexOf(subtext, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + subtextLength;
  }
  return indices;

}

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      subtext: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    var text = this.state.text;
    var subtext = this.state.subtext;
    var indices = getIndicesFromText(text, subtext);
    alert('Match text at: ' + indices + "");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Find occurrences of subtext within text</h1>
        <label id="textLabel">Text</label>
        <input type="text" name="text" value={this.state.value} onChange={this.handleChange} />
        <label id="subtextLabel">Subtext</label>
        <input type="text" name="subtext" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Match" />
      </form>
    );
  }
}

ReactDOM.render(
  <div className="container">
    <TextForm />
  </div>,
  document.getElementById('root')
);

