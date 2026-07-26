function NavButton({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 rounded-2xl border-cyan-500  bg-violet-400 hover:bg-violet-600"
      >
        <button className="text-fuchsia-50 font-bold text-2xl m-4 hover:cursor-pointer">
          {children}
        </button>
      </a>
    </>
  );
}

export default NavButton;
