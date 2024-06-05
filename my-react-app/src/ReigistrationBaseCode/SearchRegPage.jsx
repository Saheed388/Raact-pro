import React from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

function SearchRegPage() {
    return (
        <TextField
            className="regPageSearch"
            placeholder="Find Related Product"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <PersonSearchIcon style={{ color: '#1E0342' , border:'transparent'}} />
                    </InputAdornment>
                ),
            }}
            sx={{
                backgroundColor: '#E1F7F5',  borderRadius: '20px', marginTop: '10px', marginLeft: '15px' // Change the inner background color of the TextField
                
            }}
        />
    );
}

export default SearchRegPage;
