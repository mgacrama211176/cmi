import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import styled from "styled-components";
import Cta from "../components/Cta";
import Container from "@mui/material/Container";

const CardContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ContainerStyle = {
  minWidth: "100%",
};

const index = () => {
  return (
    <Container sx={ContainerStyle}>
      <Navbar />
      <CardContainer
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <Cta />

      <Footer />
    </Container>
  );
};

export default index;
