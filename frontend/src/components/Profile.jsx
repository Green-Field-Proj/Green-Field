import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Snackbar,
  Alert,
  IconButton
} from "@mui/material";
import { login } from "../features/AuthSlice";
import ClearIcon from '@mui/icons-material/Clear'; // For cancel button icon

function Profile() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    profilePicture: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' or 'error'
  
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData({
      userName: user.userName || "",
      email: user.email || "",
      profilePicture: user.profilePicture || "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/api/user/update",
        formData,
        { withCredentials: true }
      );
      setSnackbarMessage("Profile updated successfully!");
      setSnackbarSeverity("success");
      dispatch(
        login(formData.userName, formData.email, formData.profilePicture)
      );
    } catch (error) {
      setSnackbarMessage(error.response.data.message || "An error occurred");
      setSnackbarSeverity("error");
    } finally {
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: 800,
        margin: 'auto',
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#333' }}>
        Manage My Account
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#555' }}>
        Edit Your Profile
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Username"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: '#ddd', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#aaa', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3f51b5', // Border color when focused
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px 14px', // Adjust padding to ensure background matches
                  display: 'flex',
                  alignItems: 'center',
                },
                '& .MuiFormLabel-root': {
                  lineHeight: 1.5, // Center the label vertically
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: '#ddd', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#aaa', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3f51b5', // Border color when focused
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px 14px', // Adjust padding to ensure background matches
                  display: 'flex',
                  alignItems: 'center',
                },
                '& .MuiFormLabel-root': {
                  lineHeight: 1.5, // Center the label vertically
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Profile Picture URL"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: '#ddd', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#aaa', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3f51b5', // Border color when focused
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px 14px', // Adjust padding to ensure background matches
                  display: 'flex',
                  alignItems: 'center',
                },
                '& .MuiFormLabel-root': {
                  lineHeight: 1.5, // Center the label vertically
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ color: '#555' }}>
              Password Changes
            </Typography>
            <TextField
              label="Current Password"
              name="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: '#ddd', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#aaa', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3f51b5', // Border color when focused
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px 14px', // Adjust padding to ensure background matches
                  display: 'flex',
                  alignItems: 'center',
                },
                '& .MuiFormLabel-root': {
                  lineHeight: 1.5, // Center the label vertically
                }
              }}
            />
            <TextField
              label="New Password"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: '#ddd', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#aaa', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3f51b5', // Border color when focused
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px 14px', // Adjust padding to ensure background matches
                  display: 'flex',
                  alignItems: 'center',
                },
                '& .MuiFormLabel-root': {
                  lineHeight: 1.5, // Center the label vertically
                }
              }}
            />
            <TextField
              label="Confirm New Password"
              name="confirmNewPassword"
              type="password"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: '#ddd', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#aaa', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3f51b5', // Border color when focused
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px 14px', // Adjust padding to ensure background matches
                  display: 'flex',
                  alignItems: 'center',
                },
                '& .MuiFormLabel-root': {
                  lineHeight: 1.5, // Center the label vertically
                }
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() =>
              setFormData({
                userName: user.userName,
                email: user.email,
                profilePicture: user.profilePicture,
                currentPassword: "",
                newPassword: "",
                confirmNewPassword: "",
              })
            }
            startIcon={<ClearIcon />}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit" color="primary">
            Save Changes
          </Button>
        </Box>
      </Box>


      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
            <ClearIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Profile;
