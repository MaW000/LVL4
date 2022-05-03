import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav className='nav'>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
      <footer>Project by Matthew Wardlow</footer>
    </div>
  );
}

export default App;
