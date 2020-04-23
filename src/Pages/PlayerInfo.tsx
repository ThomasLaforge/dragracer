import React, { Component } from 'react'
import { Link } from "@reach/router"
import { RouteComponentProps } from '@reach/router';
import { Card, CardMedia, CardContent, Typography, Grid, Paper } from '@material-ui/core';

const DescriptionFieldName = ({fieldName}: {fieldName: string}) => (
    <Typography 
        variant="body2" 
        component="p"
    >{fieldName} :</Typography>
)
const DescriptionValue = ({value}: {value: string | number}) => (
    <Typography 
        variant="body2" 
        color="textSecondary" 
        component="p"
    >{value}</Typography>
)

const DescriptionItem = ({ fieldName, value}: { fieldName: string, value: string | number}) => (
    <Grid container>
        <Grid item xs={3}>
            <DescriptionFieldName fieldName={fieldName} />
        </Grid>
        <Grid item xs={9}>
            <DescriptionValue value={value} />
        </Grid>
    </Grid> 
)

interface PlayerInfoProps extends RouteComponentProps {}
export default class PlayerInfo extends Component<PlayerInfoProps> {
    render() {
        return (
            <React.Fragment>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardMedia
                                style={{height: '200px'}}
                                image={require("../mazda3.jpg")}
                                title="My car"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Mazda 3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    200 HP, 1.420 KG
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper>
                            <DescriptionItem fieldName='Name' value={'Thomas'} />
                            <DescriptionItem fieldName='Age' value={28} />
                            <DescriptionItem fieldName='Number of races' value={138} />
                            <DescriptionItem fieldName='Victories' value={50} />
                            <DescriptionItem fieldName='Percentage' value={(50/138*100).toFixed(2)  + '%'} />
                            <DescriptionItem fieldName='Money' value={30000 + '€'} />
                            <DescriptionItem fieldName='Cars in garage' value={6} />
                        </Paper>
                    </Grid>
                </Grid>
                <Link to='/'>Back Home</Link>
            </React.Fragment>
        )
    }
}
