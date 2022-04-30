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

// lesson 5: 函数组件和类组件
// 函数组件创建，组件名必须首字母大写才能用
function Hello(){
    const clickHandler = ()=>{
        console.log('函数组件中的事件被触发了')
        }

    const eclickHandler = (e)=>{
    // 阻止默认行为, 只反馈不跳转百度
        e.preventDefault()
        console.log(e);
        }

    const diyclickHandler = (msg)=>{
        console.log('函数组件中的自定义传参事件被触发了',msg)
        }


return(
//        <div onClick={eclickHandler}>
//            hello
//        </div>

//        <div>
//            <a href="http://www.baidu.com/" onClick={eclickHandler}>百度</a>
//        </div>

        <div onClick={() => diyclickHandler('this is msg')}>
            click me
        </div>

  )
}
// 函数组件渲染 <Hello/> or <Hello> </Hello>

// 类组件创建，组件名必须首字母大写才能用
const root = ReactDOM.createRoot(document.getElementById("root"));
// 类组件继承React.component类，从而可以使用其方法和属性，且必须提供Render方法
class HelloMessage extends React.Component {
    render() {
      return <div>Hello {this.props.name}</div>;
    }
  }

class ShoppingList extends React.Component {
  // 事件回调函数标准写法, 避免了this指向问题（即this指向不明）
  // 这样写 在回调函数中的this指向的是当前的组件实例对象
  clickHandler = ()=>{
    console.log('类组件中的事件被触发了');
  }
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li onClick={this.clickHandler}>Instagram</li>
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

// 类组件渲染 <Game/> 和函数组件类似


// lesson 5: 事件绑定
// on + 事件名称 = {事件处理程序}
// 见前面的 'function Hello' and 'class ShoppingList'
// onClick onMouseEnter onFocus...

// lesson 6: 事件对象e, 见'function Hello'
// lesson 7: 传递自定义参数, 见'function Hello'
// 1. 只需要一个额外参数：{clickHandler -> {()=>clickHandler('自定义参数‘)}
// 2. 需要e和额外参数： {(e) => clickHandler(e,'自定义参数’)}

// lesson 7：组件状态
// 前提： 在react hook出现之前没有状态，所以必须用类组件来讲解
// 步骤： 初始化状态 读取状态 修改状态 影响视图

// 组件状态，以类组件为演示
class TestComponent extends React.Component{
    // 1. 定义组件状态
    state = {
        // 通过对象语法定义各种属性，全都是当前组件的状态
        name: '费扬'
    }
    // 定义一个事件回调函数
    changeName = () => {
    // 3. 修改state中的状态name
    // 注意： 不可以直接赋值修改，必须通过setState，该方法来自与继承的react.component
    this.setState({
        name: 'fy'
    })
    }
    render(){
    // 2. 使用状态, this内部调用
        return(
            <div>
            this is testcomponent
                <div>
                    当前的name为：{this.state.name}
                </div>
              <button onClick={this.changeName}>
                修改name
              </button>
            </div>
        )
    }
}

// lesson 8：修改组件状态之counter
class Counter extends React.Component{
    // State 定义
    state= {
        count: 0
    }

    // 定义事件回调
    addone = () =>{
        // 不能直接改数据！！！得setState
        this.setState({
            count : this.state.count + 1
        })
    }


    render(){
        return (
            <button onClick ={this.addone} >clicked {this.state.count} times  </button>
        )
    }
}

// lesson x:






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
     <Hello></Hello>
     <Hello/>
     </div>


     <div>
        <TestComponent/>
     </div>


     <div>
             <Counter/>
     </div>


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