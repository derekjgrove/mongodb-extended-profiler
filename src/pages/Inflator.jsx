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
            <Box sx={{}}>
                { content }
            </Box>
        )
    }
}

export default Inflator