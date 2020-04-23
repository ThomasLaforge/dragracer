import React, { Component } from 'react'
import { RouteComponentProps } from '@reach/router';
import MenuLink from '../components/MenuLink';
import '../styles/home.scss'
import { Grid } from '@material-ui/core';
interface HomeProps extends RouteComponentProps {}

export default class Home extends Component<HomeProps> {
    render() {
        return (
            <React.Fragment>
                <h1>Home</h1>
                <Grid container spacing={2}>
                    <MenuLink 
                        title='Info Player' 
                        route='/player' 
                        color='blue'
                        description={`Carreer, cars, statistics`}
                    />
                    
                    <MenuLink 
                        title='Garage' 
                        route='/garage' 
                        color='red'
                        description={`cars, repair`}
                    />
                </Grid>
            </React.Fragment>
        )
    }
}
