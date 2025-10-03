const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
