import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PageLoader = (props) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Loader
          visible={props.visible}
          type="ThreeDots"
          color={props.color}
          height={props.size}
          width={props.size}
          timeout={30000}
        />
      </Box>
    </Container>
  );
};

export default PageLoader;
