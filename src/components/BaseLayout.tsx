import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer.tsx';
import Sidebar from './SideBar';
import SearchSection from './SearchSection';

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5 border-4 border-amber-500 rounded-3xl p-5 w-[95vw] mx-auto">
      <Header version={2}>
        <NavBar />
      </Header>
      <div className="flex flex-row gap-3.5">
        <Sidebar>
          <SearchSection />
        </Sidebar>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default BaseLayout;
