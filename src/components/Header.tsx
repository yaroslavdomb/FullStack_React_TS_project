function Header({
  children,
  version,
}: {
  children: React.ReactNode;
  version: number;
}) {
  return (
    <>
      <header>
        <h1 className="font-bold m-6 text-6xl text-emerald-700 text-center">
          You are welcome to Book Viewer - {version}!
        </h1>
        {children}
      </header>
    </>
  );
}

export default Header;
