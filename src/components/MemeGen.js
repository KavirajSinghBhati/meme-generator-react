import React from "react";
import ImgFlip from "../api/ImgFlip";

import "./MemeGen.css";

class MemeGen extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    memeImgs: [],
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.memeImgs.length);
    this.setState({
      randomImg: this.state.memeImgs[randomNum].url,
    });
  };
  getMemeImgs = async () => {
    const response = await ImgFlip.get("/get_memes");
    const { memes } = response.data.data;
    this.setState({
      memeImgs: memes,
    });
  };
  componentDidMount() {
    this.getMemeImgs();
  }
  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Top text</label>
            <input
              name="topText"
              type="text"
              value={this.state.topText}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Bottom text</label>
            <input
              name="bottomText"
              type="text"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleSubmit} className="ui secondary button">
            Generate
          </button>
          <button className="ui button">Reset</button>
        </form>
        <div className="meme-box ui segment">
          <div className="meme">
            <img className="ui fluid image" src={this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeGen;
