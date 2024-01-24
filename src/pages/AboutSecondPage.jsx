import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

function AboutSecondPage() {
  return (
    <Box
      sx={{
        display: "flex",
        margin: 0,
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 100px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >

<Grid xs={12} sm={12} md={6}>
          <Box
            sx={{
              background: `url('about3img.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              margin: 0,
              minHeight: "70vh",
            }}
          ></Box>
        </Grid>

        <Grid xs={12} sm={12} md={6}>
          <Box sx={{padding: "100px 100px",}}>
            <Typography variant="h4" gutterBottom color="#111b47">
              Light, Fast & Powerful
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
            
          </Box>
        </Grid>

       
      </Grid>
    </Box>
  )
}

export default AboutSecondPage