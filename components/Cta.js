import { useState, useEffect } from "react";
import styled from "styled-components";

//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Cta = () => {
  const options = [
    "Content Marketing Work In Wisconsin",
    "Content Marketing For Beginners",
    " Apply For Content Marketing Jobs",
    "Easy Content Marketing",
  ];
  const OptionContainer = styled.div`
    display: flex;
  `;

  const colors = ["#44B7EC", "#42E45B", , "#DF8641", "#EC3ED2"];

  // const [colored, setColored] = useState("");

  // useEffect(() => {
  //   colors.map((color) => {
  //     setColored(color);
  //   });
  //   console.log(colored);
  // }, []);

  return (
    <Container sx={{ padding: "10px" }}>
      <Box sx={{ backgroundColor: "transparent" }}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{
            display: "flex",
            gap: 1,
            flexFlow: "column wrap",
          }}
        >
          {options.map((option) => (
            <>
              <OptionContainer>
                <Button
                  key={option._id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  <KeyboardDoubleArrowRightIcon sx={{ width: "1rem" }} />
                  {option}
                  <KeyboardArrowRightIcon sx={{ width: "1rem" }} />
                </Button>
              </OptionContainer>
            </>
          ))}
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default Cta;
