import "./App.css";
import { Box, Flex, Stack } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Flex flexDir={'column'} w={"100%"} h={"auto"} textColor={"white"} bg={"#3D1766"}>
      <NavBar></NavBar>
      <AllRoutes></AllRoutes>
      <Footer></Footer>

    </Flex>
  );
}

export default App;
