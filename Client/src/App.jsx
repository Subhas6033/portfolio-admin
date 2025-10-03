import { Outlet } from 'react-router-dom';
import { Layout, Nav, Footer } from './Components/index';

const App = () => {
  return (
    <Layout>
      <main>
        <Nav />
        <Outlet />
        <Footer />
      </main>
    </Layout>
  );
};

export default App;
