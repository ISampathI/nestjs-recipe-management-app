import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

// ConfirmDialog component for rendering a confirmation dialog
function ConfirmDialog({ open, onClose, onConfirm }) {
  // Close the dialog without confirming
  const handleClose = () => {
    onClose(false);
  };

  // Confirm the action and close the dialog
  const handleConfirm = () => {
    onConfirm();
    onClose(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this recipe?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleConfirm} color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
