import React from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

function Search() {
    return (
        <TextField
            className="webSearch"
            placeholder="Find Related Product"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <PersonSearchIcon style={{ color: '#1E0342' }} />
                    </InputAdornment>
                ),
            }}
            sx={{
                backgroundColor: '#E1F7F5',  borderRadius: '20px' // Change the inner background color of the TextField
                
            }}
        />
    );
}

export default Search;
