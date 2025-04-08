"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  MenuItem,
  Select,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { Briefcase, Send, Layers } from "lucide-react";

const steps = ["Job Info", "Category & Questions", "Location & Submit"];

const PostJobPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    companyName: "",
    category: "",
    questionResponse: "",
    location: "",
    remote: "no",
  });

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      alert("Job submitted successfully!");
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Box sx={{ maxWidth: "1000px", mx: "auto", py: 10, px: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 6,
            color: "#1e3a8a",
          }}
        >
          <Briefcase style={{ marginRight: 10, verticalAlign: "middle" }} />{" "}
          Post a New Job
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 6 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <motion.div
          style={{
            backgroundColor: "#fff",
            borderRadius: 24,
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardContent sx={{ p: 5 }}>
            {activeStep === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 4, fontWeight: 600, color: "#111" }}
                >
                  🔍 Basic Job Information
                </Typography>
                <TextField
                  fullWidth
                  label="Job Title"
                  sx={{ mb: 4 }}
                  value={formData.title}
                  onChange={handleChange("title")}
                />
                <TextField
                  fullWidth
                  label="Company Name"
                  sx={{ mb: 4 }}
                  value={formData.companyName}
                  onChange={handleChange("companyName")}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Job Description"
                  sx={{ mb: 4 }}
                  value={formData.description}
                  onChange={handleChange("description")}
                />
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 4, fontWeight: 600, color: "#111" }}
                >
                  🗂️ Job Category & Experience
                </Typography>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <FormLabel sx={{ mb: 1 }}>Select Category</FormLabel>
                  <Select
                    value={formData.category}
                    onChange={handleChange("category")}
                  >
                    <MenuItem value="web">Web Development</MenuItem>
                    <MenuItem value="design">UI/UX Design</MenuItem>
                    <MenuItem value="marketing">Digital Marketing</MenuItem>
                  </Select>
                </FormControl>
                <FormControl component="fieldset">
                  <FormLabel sx={{ mb: 1 }}>
                    Experience Level Required
                  </FormLabel>
                  <RadioGroup
                    value={formData.questionResponse}
                    onChange={handleChange("questionResponse")}
                  >
                    <FormControlLabel
                      value="entry"
                      control={<Radio />}
                      label="Entry Level"
                    />
                    <FormControlLabel
                      value="mid"
                      control={<Radio />}
                      label="Mid Level"
                    />
                    <FormControlLabel
                      value="senior"
                      control={<Radio />}
                      label="Senior Level"
                    />
                  </RadioGroup>
                </FormControl>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 4, fontWeight: 600, color: "#111" }}
                >
                  📍 Location & Remote Option
                </Typography>
                <TextField
                  fullWidth
                  label="City or Pincode"
                  sx={{ mb: 4 }}
                  value={formData.location}
                  onChange={handleChange("location")}
                />
                <FormControl component="fieldset">
                  <FormLabel sx={{ mb: 1 }}>Remote Work?</FormLabel>
                  <RadioGroup
                    value={formData.remote}
                    onChange={handleChange("remote")}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes, fully remote"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No, on-site only"
                    />
                  </RadioGroup>
                </FormControl>
              </motion.div>
            )}

            <Divider sx={{ my: 4 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2563eb",
                    ":hover": { backgroundColor: "#1e40af" },
                  }}
                  endIcon={
                    activeStep === steps.length - 1 ? <Send /> : <Layers />
                  }
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </motion.div>
            </Box>
          </CardContent>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default PostJobPage;
