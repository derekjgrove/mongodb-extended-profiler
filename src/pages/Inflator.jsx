import React from 'react';
import { Box } from '@mui/material';
import ExtendedProfiler from './extendedProfiler/ExtendedProfiler';



class Inflator extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let { currentTab, theme } = this.props
        let content;
        switch (currentTab) {
            case 'extendedProfiler':
                content = <ExtendedProfiler theme={theme}/>
                break;
            default:
                content = <ExtendedProfiler theme={theme}/>
                break;
        }

        return (
            <Box sx={{overflow: 'auto', height:'calc(100vh - 64px)', padding: '32px 16px'}}>
                { content }
            </Box>
        )
    }
}

export default Inflator