
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ChartComponent extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
        
            chart: {
                height: 350,
                type: 'bar',
                stacked: true,
                toolbar: {
                  show: true
                },
                zoom: {
                  enabled: true
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
              series: [{
                name: 'PRODUCT A',
                data: [44, 55, 41, 67, 22, 43]
              }, {
                name: 'PRODUCT B',
                data: [13, 23, 20, 8, 13, 27]
              }],
              xaxis: {
                type: 'datetime',
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
              },
              legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
              },
              fill: {
                opacity: 1
              },
            }
        
        
      }
      

  render() {
    return (
        <ReactApexChart options={this.state} series={this.state.series} type="bar" height={350} />
    );
  }
}

export default ChartComponent;