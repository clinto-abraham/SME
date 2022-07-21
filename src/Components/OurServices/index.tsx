import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import ImageTile from './imageTile';

const services = [
    {
        id: 0,
        serviceName: "Fright Forwarding",
        since: "1998",
        imageURL: "https://globalskylogistics.com/wp-content/uploads/2018/04/GLOBALSKY-INTERNATIONAL-FREIGHT-FORWARDING-LOGISTICS-1.jpg",

    },
    {
        id: 1,
        serviceName: "Ship Handling Forwarding",
        since: "1998",
        imageURL: "https://globalskylogistics.com/wp-content/uploads/2018/04/GLOBALSKY-INTERNATIONAL-FREIGHT-FORWARDING-LOGISTICS-1.jpg",

    },
    {
        id: 2,
        serviceName: "License Forwarding",
        since: "1998",
        imageURL: "https://globalskylogistics.com/wp-content/uploads/2018/04/GLOBALSKY-INTERNATIONAL-FREIGHT-FORWARDING-LOGISTICS-1.jpg",

    },

]
export default function OurServices() {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpacing(Number((event.target as HTMLInputElement).value));
    };

    const jsx = `
<Grid container spacing={${spacing}}>
`;

    return (
        <>
        <Typography variant={'h2'}> Our Services</Typography>
            <ImageTile />


            {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>

                    <Grid container justifyContent="center" spacing={3}>
                    {services.map((data, index) =>
                     (
                        <Paper
                            sx={{
                                height: 140,
                                width: 350,
                                backgroundColor: 'black',
                            }}
                            key={data.id}
                        >

                           
                           
                                <Typography>
                                    {data.serviceName}
                                </Typography>
                                <Typography>
                                    Since {data.since}
                                </Typography>
                                <img src={data.imageURL} style={{ width: '350px', height: '240px' }} />
                         
                           
               

                        </Paper>
 )
                        )}
                    </Grid>
                </Grid>

            </Grid> */}

        </>
    );
}
