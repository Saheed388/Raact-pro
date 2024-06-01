import React from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

function Search() {
    return (
        <TextField
            className="webSearch"
            placeholder="Find Related Peoduct"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <PersonSearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    ); 
}

export default Search;
