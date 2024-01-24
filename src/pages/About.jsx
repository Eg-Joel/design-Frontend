import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import axios from "../utils/axios";
function About() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
          const response = await axios.get(
            `/user/getData`,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          const data = response.data;
          setData(data)
         
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);
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
          <Box sx={{ alignItems: "center",padding: "50px 0px",}}>
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
            

            <Box sx={{  marginTop:7 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 5 }}
              columns={{ xs: 12, sm: 12, md: 12 }}
            >
                {data.map((item) => (
              <Grid xs={12} sm={12} md={6}>
                <Box sx={{  alignItems: "center" }}>
                  <img
                    src="./icon1.png"
                    alt="Icon"
                    style={{ height: "40px" }}
                  />
                  <Typography variant="h6" gutterBottom marginTop={1} color="#111b47">
                  {item.title}
                  </Typography>
                  <Typography variant="body1" paragraph style={{color:'gray' ,fontSize:14,marginTop:1}}> 
                  {item.description}
                  </Typography>
                </Box>
              </Grid>
           ))}
            </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6}>
          <Box
            sx={{
              background: `url('aboutimg.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              margin: 0,
              minHeight: "70vh",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
