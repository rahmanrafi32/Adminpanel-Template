import React from 'react';
import {styled} from "@mui/material/styles";
import Rechart from "../Charts/Rechart";
import PiChart from "../Charts/PiChart";
import {Box, Container, Grid, Typography} from "@mui/material";
import Users from "../DashboardElements/Users";
import Admins from "../DashboardElements/Admins";
import QuestionSets from "../DashboardElements/QuestionSets";

const Div = styled('div')(({theme}) => ({
    marginLeft: 260,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        width: 'auto',
    },
}));

const Dashboard = () => {
    return (
        <Div>
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Hi, Welcome back</Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Users/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Admins/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <QuestionSets/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <QuestionSets/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Rechart/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>

                    </Grid>
                </Grid>
            </Container>
        </Div>
    );
};

export default Dashboard;
