import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GradeIcon from '@mui/icons-material/Grade';

export default function PlaceDetails({ place }) {
    return (
        // <Card elevation={6}>
        //     <CardMedia
        //         style={{ height: 350 }}
        //         image={place.photo ? place.photo.images.large.url : ""}
        //         title={place.name}
        //     />
        //     <CardContent>
        //         <Typography variant="body2" gutterBottom color="text.secondary">
        //             {place.name}
        //         </Typography>
        //     </CardContent>
        // </Card >
        <h1>{place.name}</h1>

    )
}
