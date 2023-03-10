import React from "react";

// Mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

// Mui Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Images
import PerfumeDesktop from "./assets/images/image-product-desktop.jpg";

// Utils
import { Colors } from "./common/utils/constants";

function App() {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: { xs: "100%", md: "100vh" },
        backgroundColor: Colors.primary,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            sx={{ mt: 20, p: { xs: 2 } }}
          >
            <Stack sx={{ width: { xs: "100%", md: "300px" }, height: "500px" }}>
              <CardMedia
                component="img"
                height="500"
                image={PerfumeDesktop}
                alt="Perfume"
                sx={{
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: { xs: 8, md: 0 },
                  borderBottomLeftRadius: { xs: 0, md: 8 },
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Stack>
            <Stack
              justifyContent={{ xs: "center" }}
              sx={{
                width: { xs: "100%", md: "300px" },
                height: "500px",
                borderTopRightRadius: { xs: 0, md: 8 },
                borderBottomRightRadius: { xs: 8, md: 8 },
                borderBottomLeftRadius: { xs: 8, md: 0 },
                boxShadow: 2,
                bgcolor: Colors.white,
              }}
            >
              <Typography
                variant="h5"
                align="left"
                sx={{ p: 2, fontWeight: "bold" }}
              >
                PERFUME
              </Typography>
              <Typography
                variant="h4"
                align="left"
                sx={{ p: 2, fontWeight: "bold" }}
              >
                Gabrielle Essence Eau De Parfum
              </Typography>
              <Typography align="left" sx={{ p: 2 }}>
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House CHANEL.
              </Typography>
              <Stack direction="row" sx={{ p: 2 }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: Colors.tertiary }}
                >
                  R149.99
                </Typography>
                <Typography
                  sx={{
                    textDecoration: "line-through",
                    alignSelf: "center",
                    mx: 2,
                    color: Colors.grey,
                    fontWeight: "bold",
                  }}
                >
                  R169.99
                </Typography>
              </Stack>
              <Stack sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                  sx={{
                    p: 1,
                    backgroundColor: Colors.secondary,
                    ":hover": {
                      bgcolor: Colors.secondary,
                      borderColor: Colors.secondary,
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
