import * as React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@mui/material/Button';
import CreateForm from '../CreateForm/CreateForm';
import { Modal } from '@mui/material';

function Header({ callBack }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const callBackSubmitted = (product) => {
        setOpen(false);
        callBack(product);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div class="d-flex justify-content-between">
            <div class="m-3">
                <h2>Orders</h2>
            </div>
            <div class="m-3">
                <Button sx={{
                    backgroundColor: '#3a06d6', // Change the background color to your desired color
                    color: 'white', // Change the text color to contrast with the background color
                    borderRadius: '10px', // Adjust the border radius to round the corners
                    '&:hover': {
                        backgroundColor: 'primary', // Change the hover color if needed
                    },
                }} variant="contained" onClick={handleOpen}>Create New</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-modal"
                    aria-describedby="form-modal-description"
                >
                    <div>
                        <CreateForm callBack={callBackSubmitted} />
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Header;