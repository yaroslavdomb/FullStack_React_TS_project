function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="border-4 border-amber-500 rounded-3xl pt-4 pb-4 pl-3 pr-3 min-w-55">
      {children}
    </aside>
  );
}

export default Sidebar;
