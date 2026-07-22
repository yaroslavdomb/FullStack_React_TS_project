import Header from './Header.tsx';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import Sidebar from './Sidebar.tsx';

function BaseLayout() {
  return (
    <>
      <Header version={1}>
        <Navbar></Navbar>
      </Header>
      <Sidebar></Sidebar>
      {/* {children} */}
      <Footer />
    </>
  );
}

export default BaseLayout;
