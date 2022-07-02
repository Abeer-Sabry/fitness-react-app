import React from "react";
// ---- Material-Ui
import { Box, Button, Stack, Typography } from "@mui/material";
// ---- Banner-Image
import banner from "../../assets/images/banner.png";

const HeroBanner = () => {
  return (
    // <Stack
    // direction="row"
    // sx={{
    //   flexDirection: { md: "row", sm: "column" },
    //   justifyContent: "none",
    // }}
    // >
    <Box
      sx={{
        mt: { xl: "122px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={600} sx={{ fontSize: { lg: "40px", xs: "36px" } }}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="20px" lineHeight="35px" mb={3}>
        check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: "0.05", display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={banner} alt="banner" className="hero-banner-img " />
    </Box>
    // </Stack>
  );
};

export default HeroBanner;
