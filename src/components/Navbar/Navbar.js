import React from "react";
// --- React-Router-Dom
import { Link } from "react-router-dom";
// --- Material-Ui
import { Stack } from "@mui/material";
// --- Assets
import logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        px: "20px",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: "45px", height: "45px", margin: "0 20px" }} />
      </Link>
      <Stack direction="row" gap="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{ borderBottom: "1px solid #FF2625 ", color: "#3A1212", textDecoration: "none" }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            color: "#3A1212",
            textDecoration: "none",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
