"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

export default function JobPosterSignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Replace with your signup logic
    console.log("Signup Data:", formData);
    setSuccess(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #7b2ff7, #f107a3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: 10,
              px: 4,
              py: 5,
              backgroundColor: "#fff",
            }}
          >
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    mb: 4,
                    background: "linear-gradient(45deg, #f107a3, #7b2ff7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Job Poster Signup
                </Typography>
              </motion.div>

              {success ? (
                <div>
                  <Typography
                    variant="h6"
                    sx={{ color: "green", textAlign: "center" }}
                  >
                    🎉 Signup successful! You can now post jobs.
                  </Typography>
                  <div className="flex justify-center mt-4">
                    <Link href="/profile?edit=true">
                      <Button variant="outlined">Fill More Details</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ mb: 3 }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ mb: 3 }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{ mb: 3 }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    sx={{ mb: 3 }}
                    required
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      py: 1.5,
                      fontWeight: "bold",
                      background: "linear-gradient(to right, #f107a3, #7b2ff7)",
                      color: "white",
                      borderRadius: 3,
                      transition: "0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #7b2ff7, #f107a3)",
                      },
                    }}
                  >
                    Create Account
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
