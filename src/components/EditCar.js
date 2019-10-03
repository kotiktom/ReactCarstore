import React, { usestate } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const EditCar = (props) => {

const [open, setOpen] = React.useState(false);
const [car, setCar] = React.useState({
brand: '', model: '', color: '', year: '', fuel: '', price: ''    
})

const handleClickOpen = () => {
  console.log(props.car)
  setCar({brand: props.car.brand, model: props.car.model, color: props.car.color, year: props.car.year, fuel: props.car.fuel, price: props.car.price})
    setOpen(true);
  };

 const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
    console.log(car)
    
  }

  const updateCar = () => {
   props.updateCar(props.car._links.car.href, car)
   handleClose();
  }
    return (
        <div >
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit car</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update the information for excisting car.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            value={car.brand}
            onChange={e => handleChange(e)}
            label="Brand"
            fullWidth
          />
           <TextField
            margin="dense"
            name="model"
            value={car.model}
            onChange={e => handleChange(e)}
            label="Model"
            fullWidth
          />
          <TextField
            margin="dense"
            name="color"
            value={car.color}
            onChange={e => handleChange(e)}
            label="Color"
            fullWidth
          />
          <TextField
            margin="dense"
            name="year"
            value={car.year}
            onChange={e => handleChange(e)}
            label="Year"
            fullWidth
          />
          <TextField
            margin="dense"
            name="fuel"
            value={car.fuel}
            onChange={e => handleChange(e)}
            label="Fuel"
            fullWidth
          />
          <TextField
            margin="dense"
            name="price"
            value={car.price}
            onChange={e => handleChange(e)}
            label="Price"
            fullWidth
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateCar} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    );
};

export default EditCar;