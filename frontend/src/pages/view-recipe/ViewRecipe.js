import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.webp";
import { useDispatch, useSelector } from "react-redux";

// Component for displaying a single recipe
function ViewRecipe() {
  // Retrieve the selectedRecipe from the Redux store
  const recipe = useSelector((state) => state.selectedRecipe);
  const dispatch = useDispatch();

  return (
    <Box width="100vw" height="100vh" bgcolor="#F5F7F7" position="relative">
      <NavBar nav />
      <Box width="100wh" height="calc(100vh - 4rem)" overflow="auto" pb={10}>
        <Box
          sx={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "150px",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            width="100%"
            height="100%"
            position="absolute"
            bgcolor="rgba(0, 0, 0, 0.46)"
          ></Box>
          <Stack
            px={10}
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h3"
              zIndex="1"
              color="white"
              textAlign="center"
            >
              LET'S COOK
            </Typography>
          </Stack>
        </Box>
        <Container>
          <Box justifyContent="center" display="flex" width="100%">
            <Box
              width={{ xxs: "95%", xs: "85%", sm: "70%", lg: "60%" }}
              height="100%"
              bgcolor="white"
              p={5}
              pt={0}
            >
              <Stack direction="column">
                <Typography variant="body1" pt={5}>
                  Recipe Name
                </Typography>
                <Typography variant="body2">{recipe?.name || "-"}</Typography>
                <Typography variant="body1" pt={5}>
                  Ingredients
                </Typography>

                <List sx={{ p: 0 }}>
                  {/* Render a list item for each ingredient */}
                  {recipe?.ingredients?.split(",").map((item) => (
                    <ListItem key={item} sx={{ m: 0, p: 0 }}>
                      <Typography variant="body2">- {item}</Typography>
                    </ListItem>
                  ))}
                </List>

                <Typography variant="body1" pt={5}>
                  Description
                </Typography>
                <Typography variant="body2">
                  {recipe?.description || "-"}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ViewRecipe;
