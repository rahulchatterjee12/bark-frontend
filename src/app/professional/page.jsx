"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Checkbox,
  Stack,
  Chip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, User } from "lucide-react";

const questions = [
  "What type of service are you looking to offer?",
  "How many years of experience do you have?",
  "Do you have any certifications?",
  "What is your availability?",
  "Do you have your own tools or equipment?",
  "Are you comfortable working weekends?",
  "What is your expected hourly rate?",
];

const options = [
  ["Plumbing", "Electrical", "Cleaning", "Tutoring"],
  ["0-1 years", "1-3 years", "3-5 years", "5+ years"],
  ["Yes", "No"],
  ["Full-time", "Part-time", "Weekends only"],
  ["Yes", "No"],
  ["Yes", "No"],
  ["< $10/hr", "$10-$25/hr", "$25-$50/hr", "$50+/hr"],
];

const jobList = [
  {
    jobTitle: "Frontend Developer",
    company: "PixelCraft Studios",
    location: "Mumbai, India",
    jobType: "Remote",
    experience: "2+ Years",
    postedDate: "1 day ago",
    skills: ["React", "Tailwind CSS", "JavaScript", "Figma"],
  },
  {
    jobTitle: "Backend Engineer",
    company: "ByteForge",
    location: "Bangalore, India",
    jobType: "Full-time",
    experience: "3+ Years",
    postedDate: "3 days ago",
    skills: ["Node.js", "Express", "MongoDB", "Redis"],
  },
  {
    jobTitle: "Full Stack Developer",
    company: "CodeSphere",
    location: "Hyderabad, India",
    jobType: "Hybrid",
    experience: "4+ Years",
    postedDate: "5 days ago",
    skills: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    jobTitle: "UI/UX Designer",
    company: "DesignVerse",
    location: "Delhi, India",
    jobType: "Remote",
    experience: "2-5 Years",
    postedDate: "Today",
    skills: ["Figma", "Sketch", "Adobe XD", "User Research"],
  },
  {
    jobTitle: "Mobile App Developer",
    company: "AppOrbit",
    location: "Chennai, India",
    jobType: "Full-time",
    experience: "1+ Years",
    postedDate: "2 days ago",
    skills: ["React Native", "Flutter", "Firebase", "UI Design"],
  },
  {
    jobTitle: "DevOps Engineer",
    company: "CloudSync Tech",
    location: "Pune, India",
    jobType: "Hybrid",
    experience: "3+ Years",
    postedDate: "Yesterday",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
  },
  {
    jobTitle: "Data Scientist",
    company: "InnoData Labs",
    location: "Noida, India",
    jobType: "Full-time",
    experience: "2+ Years",
    postedDate: "4 days ago",
    skills: ["Python", "Pandas", "Machine Learning", "SQL"],
  },
  {
    jobTitle: "QA Automation Engineer",
    company: "BugSquashers",
    location: "Remote",
    jobType: "Remote",
    experience: "2-4 Years",
    postedDate: "6 days ago",
    skills: ["Selenium", "Cypress", "Jest", "CI Pipelines"],
  },
  {
    jobTitle: "Product Manager",
    company: "Visionary Apps",
    location: "Gurgaon, India",
    jobType: "Full-time",
    experience: "5+ Years",
    postedDate: "3 days ago",
    skills: ["Agile", "Scrum", "Roadmapping", "Stakeholder Mgmt"],
  },
  {
    jobTitle: "AI Engineer",
    company: "NeuralNetX",
    location: "Bangalore, India",
    jobType: "Remote",
    experience: "3+ Years",
    postedDate: "Today",
    skills: ["Deep Learning", "TensorFlow", "Python", "NLP"],
  },
];

export default function ProfessionalsPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [pincode, setPincode] = useState("");
  const [remote, setRemote] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[step] = value;
    setAnswers(newAnswers);
  };

  const handleVerify = () => {
    if (email.includes("@")) setVerified(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #28313B , #485461, #28313B )",
        p: 4,
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            maxWidth: "960px",
            mx: "auto",
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: 6,
            boxShadow: 8,
            p: { xs: 4, sm: 6 },
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 6,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              textShadow: "0 2px 5px rgba(0,0,0,0.3)",
            }}
          >
            🎉 Get Discovered — Become a Pro!
          </Typography>

          <Stepper activeStep={step} alternativeLabel sx={{ mb: 6 }}>
            {[...questions, "Email", "Location"].map((_, index) => (
              <Step key={index}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              {step < questions.length && (
                <Box>
                  <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
                    {questions[step]}
                  </Typography>
                  <RadioGroup
                    value={answers[step] || ""}
                    onChange={(e) => handleAnswer(e.target.value)}
                  >
                    {options[step].map((opt, i) => (
                      <FormControlLabel
                        key={i}
                        value={opt}
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography sx={{ color: "white", fontWeight: 500 }}>
                            {opt}
                          </Typography>
                        }
                      />
                    ))}
                  </RadioGroup>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!answers[step]}
                    sx={{
                      mt: 4,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      backgroundColor: "#facc15",
                      color: "#000",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#fbbf24",
                      },
                    }}
                  >
                    Next ➡️
                  </Button>
                </Box>
              )}

              {step === questions.length && !verified && (
                <Box>
                  <Typography sx={{ mb: 2, color: "white" }}>
                    Enter your email to receive a verification code:
                  </Typography>
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      mb: 3,
                      backgroundColor: "#fff",
                      borderRadius: 2,
                    }}
                  />
                  <Button
                    variant="contained"
                    onClick={handleVerify}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      backgroundColor: "#4ade80",
                      color: "#000",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#22c55e",
                      },
                    }}
                  >
                    🔐 Verify Email
                  </Button>
                </Box>
              )}

              {step === questions.length && verified && (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    mt: 3,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    backgroundColor: "#60a5fa",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#3b82f6",
                    },
                  }}
                >
                  ✅ Verified! Continue
                </Button>
              )}

              {step === questions.length + 1 && (
                <Box>
                  <Typography sx={{ mb: 2, color: "white" }}>
                    Enter your location:
                  </Typography>
                  <TextField
                    fullWidth
                    label="Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    sx={{
                      mb: 3,
                      backgroundColor: "#fff",
                      borderRadius: 2,
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={remote}
                        onChange={(e) => setRemote(e.target.checked)}
                        sx={{ color: "white" }}
                      />
                    }
                    label={
                      <Typography sx={{ color: "white" }}>
                        I can work remotely
                      </Typography>
                    }
                  />
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!pincode}
                    sx={{
                      mt: 4,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      backgroundColor: "#06b6d4",
                      color: "#000",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#0891b2",
                      },
                    }}
                  >
                    🚀 View Jobs
                  </Button>
                </Box>
              )}

              {step === questions.length + 2 && (
                <Grid container spacing={4}>
                  {jobList.map((job, index) => (
                    <Grid
                      sx={{ width: "100%" }}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={index}
                    >
                      <JobCard {...job} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </motion.div>
          </AnimatePresence>
        </Box>
      </motion.div>
    </Box>
  );
}

const JobCard = ({
  jobTitle,
  company,
  location,
  jobType,
  experience,
  postedDate,
  skills,
}) => {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        boxShadow: 4,
        transition: "transform 0.25s ease-in-out, box-shadow 0.25s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
        width: "100%",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h6" fontWeight="bold" color="primary">
          {jobTitle}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          {company}
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MapPin size={18} />
            <Typography variant="body2">{location}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Briefcase size={18} />
            <Typography variant="body2">{jobType}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <User size={18} />
            <Typography variant="body2">{experience}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Clock size={18} />
            <Typography variant="body2">Posted {postedDate}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            Name :<Typography variant="body2">U********A</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            Phone :<Typography variant="body2">96*******2</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            Email :<Typography variant="body2">p*****@****</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            Matched :<Typography variant="body2">80%</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            Creedit Cost :<Typography variant="body2">30</Typography>
          </Box>
        </Box>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {skills.map((skill, idx) => (
            <Chip
              key={idx}
              label={skill}
              color="secondary"
              variant="outlined"
              sx={{ fontSize: 12 }}
            />
          ))}
        </Stack>

        <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
          <Button
            style={{ textTransform: "none" }}
            variant="contained"
            color="primary"
            size="small"
            sx={{ borderRadius: 1.5, fontWeight: 600 }}
          >
            Unlock Contact
          </Button>
          <Button
            style={{ textTransform: "none" }}
            variant="outlined"
            color="secondary"
            size="small"
            sx={{ borderRadius: 1.5, fontWeight: 600 }}
          >
            Save Job
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
