import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CreateForm({ callBack }) {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };


    return (
        // Form to Create New Order 
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        callBack(formJson);
                        console.log(formJson);
                        handleClose();
                    },
                }}
            >
                <DialogTitle> Create New Order</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the fields
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="id"
                        name="id"
                        label="ID"
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="shipify"
                        
                        name="shipify"
                        label="Shipify#"
                        type="integer"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="date"
                        name="date"
                        label=""
                        type="date"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="status"
                        name="status"
                        label="Status"
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="customer"
                        name="customer"
                        label="Customer"
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="country"
                        name="country"
                        label="Country"
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="shipping"
                        name="shipping"
                        label="Shipping"
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="source"
                        name="source"
                        label="Source"
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="type"
                        name="type"
                        label="Order Type"
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    {/* Button to exit from New order Form  */}
                    <Button onClick={handleClose}>Cancel</Button>
                    {/* Save Button to show the newly created data in table */}
                    <Button type="submit">Save</Button> 
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default CreateForm;
