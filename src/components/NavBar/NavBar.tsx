import NavButton from '../NavButton/NavButton';

function Navbar() {
  return (
    <>
      <nav className="flex flex-col sm:flex-row gap-3.5 border-4 border-amber-500 rounded-3xl p-3 mx-auto">
        <NavButton link="www.google.com">Home</NavButton>
        <NavButton link="www.google.com">About</NavButton>
        <NavButton link="www.google.com">Partners</NavButton>
        <NavButton link="www.google.com">Details</NavButton>
      </nav>
    </>
  );
}

export default Navbar;
