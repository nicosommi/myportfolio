import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
