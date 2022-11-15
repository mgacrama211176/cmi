import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const index = () => {
  return (
    <div>
      <Navbar />
      <CardContainer>
        <Card />
      </CardContainer>

      <Footer />
    </div>
  );
};

export default index;
