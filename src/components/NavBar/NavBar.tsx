import NavButton from './NavButton';

function NavBar() {
  return (
    <>
      <nav className="flex flex-col sm:flex-row gap-3.5 border-4 border-amber-500 rounded-3xl p-3">
        <NavButton />
      </nav>
    </>
  );
}

export default NavBar;
