import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Link,
    Box
  } from "@mui/material";
  import { createTheme, ThemeProvider } from "@mui/material/styles";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Reg() {
    const theme = createTheme();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [mobile, setMobile] = useState("");
    const [isMobileError, setIsMobileError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const disallowedDomains = ["yahoo.com", "gmail.com", "aol.com"];
    
 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
          if (validateEmail(email)) {
            // Handle form submission here
            console.log({
              firstName,
              lastName,
              email,
              password,
            });
          } else {
            setEmailError(true);
          }
        } else {
          setPasswordError(true);
        }
      };
    
    //   const validateEmail = (email) => {
    //     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return re.test(email);
    //   };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          const domain = email.split("@")[1];
          return !disallowedDomains.some((disallowedDomain) =>
        domain.endsWith(disallowedDomain)
          );
        }
        return false;
      };

      

      const handleMobileChange = (event) => {
        const value = event.target.value;
        if (/^[7-9]\d{0,9}$/.test(value)) {
            setIsMobileError(false);
            setMobile(value);
          } else {
            setIsMobileError(true);
          }
      };
  return (
    <div>
        <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Typography component="div" sx={{ marginTop: 8 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <LockOutlinedIcon />
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h5">
                Registration 
              </Typography>
            </Grid>
          </Grid>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>

                <TextField
                  autoComplete="family-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="tel"
                  name="mobile"
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  type="tel"
                  value={mobile}
                  onChange={handleMobileChange}
                  error={isMobileError}
                  helperText={
                    isMobileError ? "Mobile number should be 10 digits" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError ? "Invalid email address" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  name="password"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  name="confirmPassword"
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={passwordError}
                  helperText={
                    passwordError ? "Passwords do not match" : ""
                  }
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" 
             color="primary"
             sx={{ mt: "3",
              backgroundColor: "red", color: "white", 
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Typography>
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default Reg