import React from "react";
// --- Material-UI
import { Stack, Typography, Button } from "@mui/material";
// --- Assets
import bodyPartImg from "../../assets/icons/body-part.png";
import TargetImg from "../../assets/icons/target.png";
import EquipmentImg from "../../assets/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetails = [
    {
      icon: bodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row", xs: "column" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h4">{name}</Typography>
        <Typography>
          {" "}
          Exercises keep you strong. <span style={{ textTransform: "capitalize" }}>{name}</span> bup
          is one of the best <br /> exercises to target your {target}. It will help you improve your{" "}
          <br /> mood and gain energy.
        </Typography>
        {extraDetails.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{ background: "#fff2db", borderRadius: "50%", width: "80px", height: "80px" }}
            >
              <img src={item.icon} alt={item.name} />
            </Button>
            <Typography textTransform="capitalize">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
