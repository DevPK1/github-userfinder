import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


const ChartComponent=({data})=>{
  const chartConfigs = {
    type: "Bar3D",  
    width: "100%",  
    height: "380", 
    dataFormat: "json",  
    dataSource: {
    
      chart: {
      caption:'Most Forked',
      yAxisName:'Forks',
      xAxisName:'Repos',
      xAxisNameFontSize:'16px',
      yAxisNameFontSize:'16px',
            
      },
    
      data
    }
  };
  return(
    <ReactFC {...chartConfigs} />
  )
}

export default ChartComponent;