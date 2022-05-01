import './test.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'


// lesson 1: 用逻辑运算或者三元表达式表示
const flag = true

// lesson 2: 标签状态
// 1->h1
// 2->h2
// 3->h3
// 复杂多分支逻辑时，收敛为一个函数，专门写分支逻辑
const getHtag = (type)=>{
    if(type === 1){
        return <h1> this is h1 </h1>
        }
    if(type === 2){
        return <h2> this is h2 </h2>
        }
    if(type === 3){
        return <h3> this is h3 </h3>
        }
}

// lesson 3: 样式处理
// 1.行内样式：在写的时候绑定style属性
const style = {
color: 'red',
fontSize: '30px'
}
// 2.类名样式：在元素身上绑定一个classname属性，更常用
// 需在顶部导入test.css，其中定义了active样式

// lesson 4: 动态控制类名样式，需要一定条件满足才启用
// 结合三元
const activeFlag = false;






// lesson x: 定义类并使用: 示例tictac
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Game />);

class HelloMessage extends React.Component {
    render() {
      return <div>Hello {this.props.name}</div>;
    }
  }

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
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
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>

        </div>
      </div>
    );
  }
}


function App() {
  return (
  <>

    <div className="App">
      { flag ? (
          <div>
              <span> this is span </span>
          </div>) :null}

      {true && <span> this is span </span>}
      </div>


     {getHtag(1)}
     {getHtag(2)}
     {getHtag(3)}

     <div>
     <span style= {{ color : 'red', fontSize: '30px'}} > this is span </span>
     <span style= {style} > this is span </span>
     <span className='active' > 类名样式 </span>
     </div>

     <span className={activeFlag? 'active' : '' }> 类名样式 </span>








     <div>
     <HelloMessage name="Taylor" />
     <ShoppingList name="Mark" />
     <Game />

     </div>


  </>
  )
}

export default App;



// <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>