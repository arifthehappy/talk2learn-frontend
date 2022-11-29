import React from "react";
import { Container, Loader } from "rsuite";

const LoaderComp = () => {
  return (
    <Container>
      <Loader center vertical size="md" content="Loading" speed="slow" />
    </Container>
  );
};

export default LoaderComp;
