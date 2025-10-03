import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-gray-500 text-blue-800 flex justify-between items-center px-5 py-3">
      <header>
        <h1>Hello Admin</h1>
      </header>

      <div>
        <ul className="flex justify-evenly items-center gap-5 mx-5">
          <li>Add photo</li>
          <li>Remove photo</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
