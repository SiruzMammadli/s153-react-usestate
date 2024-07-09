import { Outlet } from "react-router-dom";
import Sidebar from "../_components/sidebar/Sidebar";
import Header from "../_components/header/Header";
import Flex from "../_components/Flex";

const styles = {
   _: {
    height: '100dvh',
   },
   wrapper: {
    height: 'calc(100dvh - 58px)',
   }
}

export default function RootLayout() {
  return (
    <div style={styles._}>
      <Header />
      <Flex alignItems="stretch" className="wrapper" style={styles.wrapper}>
        <Sidebar/>
        <Outlet />
      </Flex>
    </div>
  );
}
