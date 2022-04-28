//import logo from './logo.svg';
//import './App.css';

const getage = ()=>{
return 18;
}
// 三原式
const flag = true
// 列表渲染
// 重复渲染是什么就return什么属性
// 用id作为key（number类型）为了提高diff性能
// key仅仅显示在react内部，在网页审查时候看不到，即不在渲染结果中

const blogs =[
{ID: 1, name: 'how to develop your blog index'},
{ID: 2, name: 'how to list all your blog in a timeline'},
{ID: 3, name: 'use md2html to display your blog' }
]

function App() {
  return (
    <div className="App">
     { getage () }
     { flag ? 'yes' : 'no' }
     <ul>
        {blogs.map(blogs=> <li key={blogs.id}> {blogs.name}</li>)}
     </ul>
    </div>
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