import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useState } from 'react';


function Search({ products, onSubmit }) {
    const [statusArray, setStatusArray] = useState(processStatusList);
    const [searchInput, setSearchInput] = useState('');  //Search input of search bar
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');    //Search input from status dropdown

    const handleSubmit = () => {
        // Pass the user input to the onSubmit function provided by the parent component
        onSubmit({ searchInput, category, status });
    };
    //processStatusList();

    // Create the Status list, to show it in the Status Dropdown
    function processStatusList() {
        const statusList = [];

        products.map((item) => {
            if (!statusList.includes(item.status)) {
                statusList.push(item.status)
            }
        })
        return statusList;
    }

    return (
        <div style={styles.container}>
            <div class="m-3">
                {/* Search Bar */}
                <h6 class="text-start">What are you looking for?</h6>
                <TextField
                    style={styles.searchContainer}
                    size="small" // Adjust the size as needed (small, medium, large)
                    sx={{ width: '100%' }} // Adjust the width as needed
                    placeholder="Search for category,name,company,etc"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <SearchIcon sx={{ color: 'action.active', mr: 1, pointerEvents: 'none' }} />
                        ),
                    }}
                />
            </div>

            {/* Category Dropdown */}
            <div class="m-3" style={styles.dropdownContainer}>
                <InputLabel id="demo-simple-select-label" sx={{ fontWeight: 'bold', textAlign: 'left' }}>Category</InputLabel>
                <Select
                    size="large" // Adjust the size as needed (small, medium, large)
                    sx={{ width: '100%', height: '38px' }} // Adjust the width as needed
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    label="Category"
                >
                    <MenuItem value={'customer'}>Customer</MenuItem>
                    <MenuItem value={'owner'}>Owner</MenuItem>
                    <MenuItem value={'seller'}>Seller</MenuItem>
                </Select>
            </div>

            {/* Status Dropdown */}
            <div class="m-3" style={styles.dropdownContainer}>
                <InputLabel id="demo-simple-select-label" sx={{ fontWeight: 'bold', textAlign: 'left' }}>Status</InputLabel>
                <Select
                    size="large" // Adjust the size as needed (small, medium, large)
                    sx={{ width: '100%', height: '38px' }} // Adjust the width as needed
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    onChange={(e) => {
                        if (e.target.value === 'all') {
                            setStatus('')
                        }
                        else {
                            setStatus(e.target.value)
                        }
                    }}
                    label="Status"
                >
                    {statusArray.map((item) => (

                        <MenuItem value={item} key={item}>{item}</MenuItem>

                    ))}
                    <MenuItem value={'all'}>All</MenuItem>
                </Select>
            </div>

            <div class="m-3 mt-4">
                <Button style={{ borderColor: '#3a06d6' }} variant="outlined" startIcon={<KeyboardDoubleArrowDownIcon />}>

                </Button>
            </div>

            {/* Search Button */}
            <div class="m-3 mt-4">
                <Button sx={{
                    width: '185px',
                    backgroundColor: '#3a06d6', // Change the background color to your desired color
                    color: 'white', // Change the text color to contrast with the background color
                    borderRadius: '10px', // Adjust the border radius to round the corners
                    '&:hover': {
                        backgroundColor: 'primary', // Change the hover color if needed
                    },
                }} variant="contained" size="large" onClick={handleSubmit}>SEARCH</Button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        borderRadius: '10px',
        background: 'white',
        boxShadow: '1px 1px 10px 0px #c9cdd1',
        margin: '15px',
        padding: '20px',
        height: '100px',
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchContainer: {
        width: '430px',
    },
    dropdownContainer: {
        width: '300px',
    },
}

export default Search;