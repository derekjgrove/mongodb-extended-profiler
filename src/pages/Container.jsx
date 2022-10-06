import React from 'react';
import {AppBar, Toolbar, Stack, Avatar, Box } from '@mui/material';
import { SideNav, SideNavGroup, SideNavItem } from '@leafygreen-ui/side-nav';
import { H1 } from '@leafygreen-ui/typography';

import BaseContainer from './BaseContainer';
import Inflator from './Inflator';


const PAGES = [
    {
        id: 'extendedProfiler',
        value: 'Extended Profiler',
        hasAccess: 'readAll'
    }
]

class Container extends BaseContainer {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'extendedProfiler',
        }
    }

    sideNavItemHandler = (tab) => {
        this.setState({currentTab: tab})
    }

    render() {

        let {theme} = this.props
        let { currentTab } = this.state


        
        return (
            <Box sx={{overflow: 'none', height:'100vh'}}>
                            
                <AppBar position="fixed"  sx={{ maxHeight: '64px', overflow: 'hidden', whiteSpace: 'nowrap', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: (theme) => theme.palette.secondary.contrastText}}>
                    <Toolbar>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{width: '100%'}}
                        >
                            <H1 style={{color: theme.palette.primary.contrastText, maxWidth: 'calc(100vw - 76px)', marginRight: '16px', overflow: 'hidden'}}>{`Extended Profiler`}</H1>
                            <Avatar sx={{ backgroundColor: (theme) => theme.palette.primary.contrastText, color: (theme) => theme.palette.secondary.contrastText}}>{`DB`}</Avatar>
                        </Stack>
                    </Toolbar>
                </AppBar>

                <SideNav
                    style={{height:'calc(100vh - 64px)'}}

                >
                    <SideNavGroup
                        header="Pages"
                        collapsible={false}
                    >
                        {PAGES.map((page) => {
                            if (this[page.hasAccess]()) {
                                return (<SideNavItem 
                                    active={currentTab===page.id}
                                    onClick={() => this.sideNavItemHandler(page.id)}
                                    key={`sideNavItem-${page.id}`}
                                >
                                    {page.value}
                                </SideNavItem>)
                            }
                        })}
                    </SideNavGroup>
                </SideNav>

                <Box sx={{marginLeft: '184px', overflow: 'auto', marginTop: '64px'}}>
                    { <Inflator currentTab={currentTab} theme={theme} /> }
                </Box>
                
            </Box>
        )
    }
}

export default Container