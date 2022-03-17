import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


const ChartComponent=({data})=>{
  const chartConfigs = {
    type: "Doughnut2D",  
    width: "100%",  
    height: "380", 
    dataFormat: "json",  
    dataSource: {
    
      chart: {
      caption:'Stars per languages',
      theme:'candy',
      doughnutRadius:'35%',
      decimals:0,
      showPercentValues:0
      
      },
    
      data
    }
  };
  return(
    <ReactFC {...chartConfigs} />
  )
}

export default ChartComponent;