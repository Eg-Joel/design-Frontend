import React from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function LandingPage() {
  return (
    <Box
      sx={{
        background: `url('LandingPage.png')`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        margin: 0,
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Box
        sx={{
          display: "flex",
          padding: "100px 100px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid xs={12} sm={12} md={4.5}>
            <Box sx={{ justifyContent: "center",  }}>
              <Typography variant="h4" gutterBottom color="#111b47">
                Introduce Your Product Quickly & Effrctively
              </Typography>

              <Typography variant="body1" paragraph color="#5c6a9f">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum socils natoque
                penatibus et magnis dis parturient montes,nascetur ridiculus
              </Typography>
              <Typography variant="body1" paragraph color="#5c6a9f">
                mus. Donec quam fells, ultricles nec, pellentesque eu, pretium
                quis,sem. Nulla consequat massa quis enim.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginRight: 3,
                  background: "#111b47",
                  padding: "3px 35px",
                  textTransform: "none",
                }}
              >
                Purchase UI Kit
              </Button>
              <Button
                variant="outlined"
               
                sx={{
                  color:"#111b47",
                  padding: "3px 45px",
                  textTransform: "none",
                  borderColor:"#111b47",
                
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  
    
  );
}

export default LandingPage;
