import React, { Component } from 'react'
import { navigate } from "@reach/router"
import '../styles/menu_link.scss'
import { Grid } from '@material-ui/core';

interface MenuLinkProps {
    title: string,
    description: string,
    color: string,
    route: string
}

export default class MenuLink extends Component<MenuLinkProps> {
    
    render() {
        const {title, description, color, route} = this.props

        return (
            <Grid item className="menu-link"
                xs={12} sm={6} md={4} 
                style={{ backgroundColor: color }}
                onClick={() => navigate(route)}
            >
                <div className="menu-link-title">
                    {title}
                </div>
                <div className="menu-link-description">
                    {description}
                </div>
            </Grid>
        )
    }
}
