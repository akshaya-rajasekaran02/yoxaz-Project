import React, { useState , useEffect} from 'react';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Checkbox } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import { Container } from '@mui/material';
import { TableBody } from '@mui/material';
import { Table } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Pagination from '@mui/material/Pagination';
import { OutlinedInput } from '@mui/material';
import { ListItemText } from '@mui/material';
import EditForm from '../EditForm/EditForm';
import { Modal } from '@mui/material';

export default function ProductTable({ products,search }) {
    console.log(search);
    const [paginatedArray, setPaginatedArray] = useState(products.slice(0, 10));
    const [searchCriteria,setSearchCriteria] = useState(search);
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    
        //setPaginatedArray(products.slice(0, 10));
    if(searchCriteria != search) {
        if(Object.keys(search).length > 0) {
            const filteringProducts = products.filter(product => {
                //console.log("search --> ",product.shipify.toString().includes(search.searchInput)," --- ",product.id," --- ",product.shipify.toString()," --- ", search.searchInput);
                if (( search.searchInput == "" || product.id.toString().includes(search.searchInput) || product.id.toString() === search.searchInput || product.shipify.toString().includes(search.searchInput) || product.shipify.toString() === search.searchInput || product.customer.includes(search.searchInput) || product.customer === search.searchInput || product.email.includes(search.searchInput) || product.email === search.searchInput || product.country.includes(search.searchInput) || product.country === search.searchInput || product.shipping.includes(search.searchInput) || product.shipping === search.searchInput || product.source.includes(search.searchInput) || product.source === search.searchInput || product.type.includes(search.searchInput) || product.type === search.searchInput) && (search.status == '' || search.status === product.status)) {
                return true
                }
                else {
                return false
                }
            }
            );
            setPaginatedArray(filteringProducts);
            setSearchCriteria(search);
        }
    }
    
    const columnNames = [
        'SHIPIFY#',
        'DATE',
        'STATUS',
        'CUSTOMER',
        'EMAIL',
        'COUNTRY',
        'SHIPPING',
        'SOURCE',
        'ORDER TYPE'
    ];
    const [selectedColumn, setSelectedColumn] = React.useState(columnNames);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        // console.log("VALUE~~~~", value);
        if ((value.length === 1 && value === 'ALL COLUMN') || value.length === 0) {
            setSelectedColumn(columnNames);
        }
        else {
            setSelectedColumn(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
        }

    };

    const changePage = (event, page) => {
        let starttIndex = (page - 1) * 10;
        let endIndex = (page * 10);

        let temArray = products.slice(starttIndex, endIndex);
        setPaginatedArray(temArray);
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                fontFamily: 'Roboto',
                width: '100vw',
                maxWidth: '1455px',
                borderRadius: '10px',
                background: 'white',
                boxShadow: '1px 1px 10px 0px #c9cdd1',
                margin: '15px',
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
            }}>

            <div style={styles.container}>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        whiteSpace: 'nowrap',
                        marginRight: '300px'
                    }}>
                    Product Summary
                </Typography>
                <div class="m-3 d-flex justify-content-center align-items-center" style={styles.dropdownContainer}>
                    <Typography
                        variant="p"
                        sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            color: '#8c8c89',
                        }}>
                        Show
                    </Typography>
                    <InputLabel id="demo-multiple-checkbox-label"></InputLabel>
                    <Select
                        sx={{ width: '250px', marginLeft: '5px' }}
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={selectedColumn}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {columnNames.map((column) => (
                            <MenuItem key={column} value={column}>
                                <Checkbox checked={selectedColumn.indexOf(column) > -1} />
                                <ListItemText primary={column} />
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <div class="m-3 mt-4">
                    <Button variant="contained" size="large" sx={{ width: '250px' }}>DISPATCH SELECTED</Button>
                </div>
                <div>
                    <Pagination count={10} sx={{ width: '500px' }} onChange={changePage}  color="primary"  shape="rounded" />
                </div>
            </div>

            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <Box
                        sx={{
                            overflow: 'auto',
                            width: '100%',
                            ' @media(max-width:479px)': { padding: '10px' },
                        }}>
                        <Table
                            sx={{
                                borderRadius: '8px',
                                display: 'table',
                                borderCollapse: 'collapse',
                                width: '100%',
                            }}>
                            <Container sx={{ display: 'table-header-group' }}>
                                <TableRow
                                    sx={{
                                        display: 'table-row',
                                        border: '0px',
                                        color: '#3e3e3e',
                                    }}>

                                    <TableCell
                                        sx={{ display: 'table-cell', padding: '25px 10px' }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                whiteSpace: 'nowrap',
                                            }}>
                                            <Checkbox
                                                sx={{
                                                    '& .MuiSvgIcon-root': { fontSize: '13px' },
                                                    '&.Mui-checked': { color: '#007bff' },
                                                }}></Checkbox>

                                            <InputLabel
                                                sx={{
                                                    fontSize: '12px',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap',
                                                    color: 'inherit',
                                                }}>
                                                ID
                                            </InputLabel>
                                        </Box>
                                    </TableCell>
                                    {selectedColumn.map((column) => (
                                        <TableCell sx={{ display: 'table-cell', padding: '10px', textAlign: 'center' }} key={column}>
                                            <Typography
                                                variant="p"
                                                key={column}
                                                sx={{
                                                    fontSize: '12px',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap',
                                                }}>
                                                {column}
                                            </Typography>
                                        </TableCell>
                                    ))}

                                    <TableCell sx={{ display: 'table-cell', padding: '10px' }}>
                                        <Typography
                                            variant="p"
                                            sx={{
                                                fontSize: '12px',
                                                fontWeight: 'bold',
                                                whiteSpace: 'nowrap',
                                            }}>

                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </Container>
                            <TableBody
                                sx={{
                                    borderRadius: '8px',
                                    width: '100%',
                                    display: 'table-row-group',
                                    border: '1px solid #dfdfdf',
                                }}>
                                {paginatedArray.map(product => (
                                    <TableRow
                                        sx={{
                                            display: 'table-row',
                                            borderBottom: '1px solid #f0f0f0ff',
                                        }}
                                        key={product.id}
                                    >
                                        <TableCell
                                            sx={{ display: 'table-cell', padding: '25px 20px' }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    whiteSpace: 'nowrap',
                                                }}>
                                                <Checkbox
                                                    sx={{
                                                        '& .MuiSvgIcon-root': { fontSize: '13px' },
                                                        '&.Mui-checked': { color: '#007bff' },
                                                    }}></Checkbox>

                                                <InputLabel sx={{ color: '#0dc7e7', fontSize: '12px' }}>
                                                    {product.id}
                                                </InputLabel>
                                            </Box>
                                        </TableCell>
                                        {selectedColumn.map((column) => (
                                            <TableCell
                                                sx={{ display: 'table-cell', padding: '25px 20px' }} key={product[column]}>
                                                <Box sx={{ textAlign: 'center' }}>
                                                    <Typography
                                                        variant="p"
                                                        sx={{
                                                            fontSize: '12px',
                                                            color: '#3e3e3e',
                                                            whiteSpace: 'nowrap',
                                                        }}>
                                                        {column === 'SHIPIFY#' ? product.shipify : column === 'ORDER TYPE' ? product.type : product[column.toLocaleLowerCase()]}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                        ))}

                                        <TableCell
                                            sx={{ display: 'table-cell', padding: '25px 10px' }}>
                                            <Typography
                                                variant="p"
                                                sx={{
                                                    fontSize: '12px',
                                                    color: '#3e3e3e',
                                                    whiteSpace: 'nowrap',
                                                }}>
                                                <Button
                                                    onClick={handleOpen}
                                                    variant="outlined"
                                                    sx={{
                                                        backgroundColor: 'transparent',
                                                        padding: '9px 14px',
                                                        fontSize: '14px',
                                                        justifyContent: 'center',
                                                        whiteSpace: 'nowrap',
                                                        color: '#3e3e3e',
                                                        textTransform: 'none',
                                                    }}>
                                                    <EditIcon fontSize="small" />
                                                </Button>
                                                {/* <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="form-modal"
                                                    aria-describedby="form-modal-description"
                                                > */}
                                                    {open && <div>
                                                        <EditForm product={product}/>
                                                    </div>}
                                                {/* </Modal> */}
                                            </Typography>
                                        </TableCell>

                                    </TableRow>
                                ))}

                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    dropdownContainer: {
        width: '300px',
        display: 'flex',
    }
}