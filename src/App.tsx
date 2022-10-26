import {Button} from 'antd';
import {useRoutes, Link, Outlet} from 'react-router-dom';
import routes from './router';
// import 'antd/dist/antd.css';
function App() {
  return (
    <div className='App'>
      {/* <Button type='primary'>coder</Button> */}
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      {/* <Outlet /> */}
      {useRoutes(routes)}
    </div>
  );
}

export default App;
