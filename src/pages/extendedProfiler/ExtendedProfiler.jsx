import React from 'react';
import { Box } from '@mui/material';
import { Chart } from 'react-google-charts';
import { DragnDrop } from '../../components';


  const chartEvents = [
    {
      eventName: "select",
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length === 1) {
          const [selectedItem] = selection;
          const dataTable = chartWrapper.getDataTable();
          const { row = null, column = null } = selectedItem;
          
          console.log("You selected:", {
            row,
            column,
            value: dataTable?.getValue(row, column),
          });
        }
      },
    },
  ];

class ExtendedProfiler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            options: {
                pointSize: 12,
                tooltip: {
                    trigger: 'selection'
                },
                explorer: {
                    actions: ['dragToPan', 'rightClickToReset', 'dragToZoom'],
                    axis: 'horizontal',
                    keepInBounds: true
                },
                enableInteractivity: true,
                "dataOpacity": 0.4,
                "vAxis": { 
                    "title": "Duration of Op (Millis)", 
                    "baseline": 0, 
                    "minValue": 0,
                    // "format": "none",
                    // "gridlines": {
                    //     "count": 0,
                    //     "interval": 0,
                    //     "color": 'transparent'
                    // },
                    // "minorGridlines": {
                    //     "count": 0,
                    //     "interval": 0,
                    //     "color": 'transparent'
                    // }
                },
                "hAxis": { 
                    "title": "Date/Time of Op", 
                    // "format": 'MM/dd/yyyy',
                    // "format": '%M/%d/%y',
                    "gridlines": {
                        "count": 0,
                        "interval": 0,
                        "color": 'transparent'
                    },
                    "minorGridlines": {
                        "count": 0,
                        "interval": 0,
                        "color": 'transparent'
                    },
                    "ticks": []
                }  
            }
        }
    }

    dataDrop = (data) => {
        

        let tempData = [
            // ["Date/Time of Op"]
            [{ type: "date", label: "Date/Time of Op" }]
        ]

        let tempDataHM = {

        }

        let days = {

        }

        for (var log of data) {
            if (!tempDataHM[log.attr.ns]) {
                tempDataHM[log.attr.ns] = []
                tempData[0].push(log.attr.ns)
            }

            days[new Date(log.t['$date'].slice(0, 10))] = true

            tempDataHM[log.attr.ns].push([new Date(log.t['$date']), log.attr['durationMillis']])
        }

        var nsArr = Object.keys(tempDataHM)

        for (var i = 0; i <= nsArr.length-1; i++) {

            //Post-fix
            var nullArr = []
            for (var j = 0; j <= nsArr.length-1 - i - 1; j++) {
                nullArr.push(null)
            }

            for (var j = 0; j <= tempDataHM[nsArr[i]].length-1; j++) {
                tempDataHM[nsArr[i]][j] = tempDataHM[nsArr[i]][j].concat(nullArr)
            }

            //Pre-fix
            nullArr = []
            for (var j = 0; j <= i -1; j++) {
                nullArr.push(null)
            }
            
            for (var j = 0; j <= tempDataHM[nsArr[i]].length-1; j++) {
                var tempCollumnElem = tempDataHM[nsArr[i]][j].shift()
                tempDataHM[nsArr[i]][j] = [tempCollumnElem].concat(nullArr.concat(tempDataHM[nsArr[i]][j]))
            }

            tempData = tempData.concat(tempDataHM[nsArr[i]])

        }

        let tempOptions = { ...this.state.options }
        tempOptions.hAxis['ticks'] = Object.keys(days)

        this.setState({data: tempData})
    }


    render() {

        let {data, options} = this.state

        return (
            <Box sx={{height:'100%', width: '100%'}}>

                {
                    data == null || data === undefined ?
                        <DragnDrop retFunction={this.dataDrop}/>
                    :
                    <Chart
                        chartType="Scatter"
                        data={data}
                        options={options}
                        width="calc(100vw - 184px - 32px)"
                        height="calc(100vh - 64px - 64px)"
                        chartEvents={chartEvents}
                    />
                        
                }
            </Box>
        )
    }
}

export default ExtendedProfiler