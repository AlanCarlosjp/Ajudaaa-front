import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import DataBanner from '../DataBanner';
import Svg from 'react-native-svg';
import { BarChart, LineChart, } from 'react-native-chart-kit';


const Grafico = () => {
    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 0) => `rgba(30, 30, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    return (
        <DataBanner style={{backgroundColor: 'white', marginTop: 10, width: 400}}>
            <Svg>
                <LineChart
                    data={data}
                    width={350}
                    height={200}
                    chartConfig={chartConfig}
                />
            </Svg>
        </DataBanner>
    )
}

export default Grafico;