import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function EditForm({product}) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        console.log("Close clicked");
        setOpen(false);
    };


    return (
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
                        // callBack(formJson);
                        console.log(formJson);
                        handleClose();
                    },
                }}
            >
                <DialogTitle> Edit Order</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="id"
                        name="id"
                        label="ID"
                        value={product.id}
                        type="string"
                        fullWidth
                        variant="standard"
                        disabled
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="shipify"
                        name="shipify"
                        label="Shipify#"
                        value={product.shipify}
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
                        value={(new Date(Date.parse(product.date))).toISOString().split('T')[0]}
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
                        value={product.status}
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
                        value={product.customer}
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
                        value={product.email}
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
                        value={product.country}
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
                        value={product.shipping}
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
                        value={product.source}
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
                        value={product.type}
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default EditForm;
