import React from 'react'; /* Like importing modules/libraries in Python */
import ReactDOM from 'react-dom';
import './index.css'; /* Import css from `index.css` */

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button 
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
 }

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

  render() {
    const status = 'Next player: X';

    return (  // What we're doing here is creating the board row (3 of them for ttt) and then rendering the individual squares in each row (3 squares per row)
      <div> 
        <div className="status">{status}</div> 
        <div className="board-row"> 
          {this.renderSquare(0)} 
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div /* Like html divs, this is a section that is a "board-row" */className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component { // Just content/"blocks" part of react 'vanilla' or install (as in just pre-coded stuff in the react package??)
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board /*Display the game board?*//> 
        </div>
        <div className="game-info">
          <div>{/* status - so a stub? fill in content for "game-info"*/}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render( // Render game?
  <Game />,
  document.getElementById('root')
);
