import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';

// ----------------------------------------------------------------------
export default function ProductAdminPage() {

  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleSlugChange = (event) => {
    setSlug(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.checked);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleFormSubmit = () => {
    // Perform your form submission logic here
    console.log('Submitted:', {
      productName,
      slug,
      description,
      status,
      imageFile
    });
    handleClose();
  };


  return (
    <div>
      
      <Button variant="contained" onClick={handleClickOpen}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the product details.
          </DialogContentText>
          <TextField
            margin="dense"
            label="Product Name"
            fullWidth
            value={productName}
            onChange={handleProductNameChange}
          />
          <TextField
            margin="dense"
            label="Slug"
            fullWidth
            value={slug}
            onChange={handleSlugChange}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={handleDescriptionChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={status}
                onChange={handleStatusChange}
                color="primary"
              />
            }
            label="Active"
          />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <IconButton
              color="primary"
              aria-label="upload image"
              component="span"
            >
              {/* <PhotoCamera /> */}
            </IconButton>
            Upload Image
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
