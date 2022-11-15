import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Cta = () => {
  return (
    <Container sx={{ padding: "10px" }}>
      <Box>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{ display: "flex", gap: 1, flexFlow: "column wrap" }}
        >
          <Button sx={{ backgroundColor: "#42E45B" }}>
            Content Marketing Work In Wisconsin
          </Button>
          <Button sx={{ backgroundColor: "#DF8641" }}>
            Content Marketing For Beginners
          </Button>
          <Button sx={{ backgroundColor: "#44B7EC" }}>
            Apply For Content Marketing Jobs
          </Button>
          <Button sx={{ backgroundColor: "#EC3ED2" }}>
            Easy Content Marketing
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default Cta;
