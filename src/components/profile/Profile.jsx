"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Card,
  CardContent,
  Avatar,
  Grid,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Profile() {
  const searchParams = useSearchParams();
  const isEditMode = searchParams.get("edit") === "true";
  const router = useRouter();

  const [user, setUser] = useState({
    name: "Ankush Roy",
    email: "ankush@example.com",
    altEmail: "ankush.hr@example.com",
    phone: "+91 9876543210",
    designation: "HR Manager",
    companyName: "TargetMarketers",
    companyType: "Startup",
    companyDesc:
      "We are a creative agency focused on branding, marketing, and web development.",
    website: "https://targetmarketers.com",
    location: "Kolkata, India",
    address:
      "2nd Floor, 43/A, Salt Lake, Sector V, Kolkata, West Bengal, 700091",
    linkedIn: "https://linkedin.com/in/ankushroy",
    twitter: "https://twitter.com/ankush",
    facebook: "https://facebook.com/ankush",
    instagram: "https://instagram.com/ankush",
    industry: "Digital Marketing",
    teamSize: "11-50",
    experience: "5 years",
    hiringSince: "2020",
    workingHours: "10 AM - 6 PM IST",
    culture:
      "We value creativity, collaboration, and a positive work environment.",
    bio: "Helping businesses grow digitally through smart marketing strategies.",
    profilePic: "https://i.pravatar.cc/150?img=67",
  });

  const [formData, setFormData] = useState(user);

  useEffect(() => {
    if (!isEditMode) setFormData(user);
  }, [isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(formData);
    alert("Profile updated!");
  };

  const renderFields = (fields) =>
    fields.map(({ label, name, multiline, fullWidth }, idx) => (
      <Grid
        item
        xs={12}
        sm={fullWidth || multiline ? 12 : 6}
        key={idx}
        sx={{
          width: "100%",
        }}
      >
        <TextField
          label={label}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          fullWidth
          multiline={multiline}
          rows={multiline ? 4 : 1}
          InputProps={{
            readOnly: !isEditMode,
          }}
          sx={{
            "& .MuiInputBase-root.Mui-disabled": {
              color: "black",
            },
          }}
        />
      </Grid>
    ));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ff758c, #ff7eb3)",
        py: 8,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "24px",
              boxShadow:
                "0 12px 40px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)",
            }}
            className="w-full px-8 py-10 mb-12 relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute top-[-40px] right-[-40px] opacity-20"
            >
              <Briefcase size={100} />
            </motion.div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Let’s create a job posting for you
                </h2>
                <p className="text-lg text-gray-700 max-w-xl">
                  Share the opportunity, define your need, and we'll help you
                  find the right talent fast.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(to right, #4f46e5, #3b82f6)",
                    borderRadius: "9999px",
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: "1rem",
                    color: "#fff",
                    boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                    "&:hover": {
                      background: "linear-gradient(to right, #4338ca, #2563eb)",
                    },
                  }}
                  onClick={() => router.push("/create-job")}
                >
                  Post Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: 6,
              px: { xs: 2, sm: 4 },
              py: { xs: 3, sm: 5 },
              backgroundColor: "white",
            }}
          >
            <CardContent>
              <Box sx={{ textAlign: "center", mb: 5 }}>
                <Avatar
                  src={formData.profilePic}
                  alt={formData.name}
                  sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    background: "linear-gradient(45deg, #ff7eb3, #ff758c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {isEditMode
                    ? "Edit Job Poster Profile"
                    : "Job Poster Profile"}
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Personal Details
                  </Typography>
                  <Divider />
                </Grid>
                {renderFields([
                  { label: "Full Name", name: "name" },
                  { label: "Email", name: "email" },
                  { label: "Alternate Email", name: "altEmail" },
                  { label: "Phone Number", name: "phone" },
                  {
                    label: "LinkedIn Profile",
                    name: "linkedIn",
                    fullWidth: true,
                  },
                  { label: "Twitter", name: "twitter" },
                  { label: "Facebook", name: "facebook" },
                  { label: "Instagram", name: "instagram" },
                ])}

                <Grid item xs={12} mt={4}>
                  <Typography variant="h6" gutterBottom>
                    Company Info
                  </Typography>
                  <Divider />
                </Grid>
                {renderFields([
                  { label: "Designation", name: "designation" },
                  { label: "Company Name", name: "companyName" },
                  { label: "Company Type", name: "companyType" },
                  { label: "Industry", name: "industry" },
                  { label: "Website", name: "website", fullWidth: true },
                  { label: "Location", name: "location" },
                  {
                    label: "Office Address",
                    name: "address",
                    fullWidth: true,
                    multiline: true,
                  },
                  {
                    label: "Company Description",
                    name: "companyDesc",
                    fullWidth: true,
                    multiline: true,
                  },
                  {
                    label: "Company Culture Highlights",
                    name: "culture",
                    fullWidth: true,
                    multiline: true,
                  },
                  { label: "Hiring Since", name: "hiringSince" },
                  { label: "Team Size", name: "teamSize" },
                  { label: "Working Hours", name: "workingHours" },
                  { label: "Years of Experience", name: "experience" },
                ])}

                <Grid item xs={12} mt={4}>
                  <Typography variant="h6" gutterBottom>
                    Bio
                  </Typography>
                  <Divider />
                </Grid>
                {renderFields([
                  {
                    label: "Bio",
                    name: "bio",
                    fullWidth: true,
                    multiline: true,
                  },
                ])}
              </Grid>

              <Box textAlign="center" mt={5}>
                {!isEditMode ? (
                  <Button
                    onClick={() => {
                      const params = new URLSearchParams(
                        window.location.search
                      );
                      params.set("edit", "true");
                      window.history.replaceState(
                        {},
                        "",
                        `${window.location.pathname}?${params.toString()}`
                      );
                    }}
                    variant="contained"
                    sx={{
                      background: "linear-gradient(to right, #ff758c, #ff7eb3)",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #ff7eb3, #ff758c)",
                      },
                    }}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      handleSave();
                      const params = new URLSearchParams(
                        window.location.search
                      );
                      params.set("edit", "false");
                      window.history.replaceState(
                        {},
                        "",
                        `${window.location.pathname}?${params.toString()}`
                      );
                    }}
                    variant="contained"
                    sx={{
                      background: "linear-gradient(to right, #ff758c, #ff7eb3)",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #ff7eb3, #ff758c)",
                      },
                    }}
                  >
                    Save Changes
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
