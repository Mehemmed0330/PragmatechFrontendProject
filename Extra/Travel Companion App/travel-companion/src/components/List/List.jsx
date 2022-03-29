import React from 'react'
import { useState } from "react"
import { Typography, FormControl } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import Grid from '@mui/material/Grid';



export default function List({ places }) {
    const [type, setType] = useState("");
    const [rating, setRating] = useState("");



    return (
        <div style={{ padding: " 0px 15px", overflowY: 'scroll', minHeight: 'calc(100vh - 55px)' }}>
            <Typography variants="" fontSize="24px">Restaurants, Hotels and Attraction around you</Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Rating</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    label="Rating"
                >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>

                </Select>
            </FormControl>
            <Grid container spacing={3}>
                {places?.map((place, i) => (
                    <Grid item xs={12} key={i}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}
