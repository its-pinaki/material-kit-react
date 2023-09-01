import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
// @mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';

export default function PriceAdminPage() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [productValue, setProductValue] = useState('');
  const [pincodeValue, setPincodeValue] = useState('');
  const [multiSelectAreas, setMultiSelectAreas] = useState([]);
  const [multiSelectVehicles, setMultiSelectVehicles] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleProductChange = (event) => {
    setProductValue(event.target.value);
  };
  const handlePincodeChange = (event) => {
    setPincodeValue(event.target.value);
  };

  const handleAreaChange = (event, values) => {
    setMultiSelectAreas(values);
  };
  const handleVehicleChange = (event, values) => {
    setMultiSelectVehicles(values);
  };

  const handleFormSubmit = () => {
    // Perform your form submission logic here
    console.log('Submitted:', inputValue, dropdownValue);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter the required information.</DialogContentText>
          <TextField
            select
            margin="dense"
            label="Select Product"
            fullWidth
            value={productValue}
            onChange={handleProductChange}
          >
            <MenuItem value="fine">fine</MenuItem>
            <MenuItem value="filling">filling</MenuItem>
          </TextField>
          <TextField
            select
            margin="dense"
            label="Select Pincode"
            fullWidth
            value={pincodeValue}
            onChange={handlePincodeChange}
            style={{ marginBottom: '16px' }}
          >
            <MenuItem value="751001">751001</MenuItem>
            <MenuItem value="751002">751002</MenuItem>
          </TextField>
          <Autocomplete
            multiple
            id="multi-select"
            options={['Saheed Nagar', 'Patia', 'Nayapalli']}
            value={multiSelectAreas}
            onChange={handleAreaChange}
            renderInput={(params) => <TextField {...params} label="Select Areas" />}
            style={{ marginBottom: '16px' }}
          />
          <Autocomplete
            multiple
            id="multi-select"
            options={['Excavator', 'Crane', 'Bulldozer']}
            value={multiSelectVehicles}
            onChange={handleVehicleChange}
            renderInput={(params) => <TextField {...params} label="Select Vehicles" />}
            style={{ marginBottom: '16px' }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Input Field"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
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
