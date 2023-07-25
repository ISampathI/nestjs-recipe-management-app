import { Alert, Snackbar } from "@mui/material";
import React from "react";

// Snackbar component for displaying feedback messages
function SnackBar({ onClose, open, severity = "success", message }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
