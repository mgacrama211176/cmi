import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../../components/Card";

const Category = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Category: {router.query.category}</h1>
      <Card />
    </div>
  );
};

export default Category;
