import Box from "../Box";
import Container from "../Container";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header style={{paddingBlock: 8}}>
      <Container>
        <Box justifyContent={"space-between"}>
          <div>
            <span>Start Bootstrap</span>
          </div>
          <Navbar />
        </Box>
      </Container>
    </header>
  );
}
