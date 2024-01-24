import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function LastPage() {
  return (
    <Box
      sx={{
        margin: 0,
        minHeight: "100vh",
        background: "#f2f5ff",
      }}
    >
      <Box
        sx={{
          background: "white",
          borderRadius: "0 0 30% 30%",
          height: "100px",
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "50px 30%",
          marginTop:6,
          textAlign: "center"
        }}
      >
        <Typography variant="h5" gutterBottom color="#111b47" >
          A Price To Suit Everyone
        </Typography>

        <Typography variant="body1" paragraph color="#5c6a9f" marginTop={1}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum socils natoque penatibus
          et magnis dis parturient montes,nascetur ridiculus
        </Typography>

        <Typography variant="h3" color="#111b47" marginTop={2}>$40</Typography>
        <Typography variant="h6" color="#111b47">UI Design Kit</Typography>

        <Typography variant="body1" paragraph marginTop={5}>
          See, One price. Simple.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
          
            background: "#111b47",
            padding: "3px 35px",
            textTransform: "none",
          }}
        >
          Purchase UI Kit
        </Button>
      </Box>
    </Box>
  );
}

export default LastPage;
