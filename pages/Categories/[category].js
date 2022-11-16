import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../../components/Card";

//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Category = () => {
  const router = useRouter();

  return (
    <Container>
      <Box>
        <h1>Category: {router.query.category}</h1>
        <Card />
      </Box>
    </Container>
  );
};

export default Category;
