import Header from '../Header/index.ts';
import NavBar from '../NavBar/index.ts';
import Footer from '../Footer/Footer.tsx';
import Sidebar from '../SideBar/index.ts';

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5 border-4 border-amber-500 rounded-3xl p-5 w-[95vw] mx-auto">
      <Header version={2}>
        <NavBar />
      </Header>
      <div className="flex flex-col min-[720px]:flex-row gap-3.5">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default BaseLayout;
