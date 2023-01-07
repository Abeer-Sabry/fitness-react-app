import React, { useEffect, useState } from "react";
// --- Material-UI
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
// --- Utils
import { exerciseOptions, fetchData } from "../../utils/fetchData";
// --- Components
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";

const SearchExercises = ({ setBodyPart, bodyPart, setExercises }) => {
  // ---Search-Input-State
  const [search, setSearch] = useState("");
  const [bodyPartsData, setBodyPartsData] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const fetchBodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyPartsData(["all", ...fetchBodyPartsData]);
    };
    fetchExercisesData();
  }, [bodyPartsData]);

  // Handling-Search-Data-func
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exerciseData.filter(
        exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
        <Typography
          variant="h4"
          sx={{ fontSize: { lg: "40px", xs: "30px" } }}
          mb="50px"
          textAlign="center"
        >
          Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "4px",
                p: "10px",
              },
              width: { lg: "800px", xs: "100%" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            height="76px"
            value={search}
            onChange={e => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              backgroundColor: "#ff2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "17px", xs: "14px" },
              position: "absolute",
              right: "0",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ position: "relative", p: "20px", width: "100%" }}>
          <HorizontalScrollbar
            data={bodyPartsData}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            bodyPartsData
          />
        </Box>
      </Stack>
    </>
  );
};

export default SearchExercises;
