import React, { useState, useEffect } from "react";
import { get } from "../utils/api";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  const groupedRestaurants = {};

  restaurants.forEach((restaurant) => {
    const { state } = restaurant;
    if (!groupedRestaurants[state]) {
      groupedRestaurants[state] = [];
    }
    groupedRestaurants[state].push(restaurant);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("/restaurants");
        setRestaurants(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "100%",
        padding: "20px",
      }}
    >
      {Object.keys(groupedRestaurants).map((state, stateIndex) => (
        <Box key={stateIndex}>
          <Typography
            sx={{ mt: 2, mb: 1, textAlign: "start" }}
            variant="h6"
            component="div"
          >
            {state}:
          </Typography>

          <List dense>
            {groupedRestaurants[state].map((restaurant, index) => (
              <ListItem key={index}>
                <ListItemText primary={`● ${restaurant.restaurant_name}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default RestaurantList;
