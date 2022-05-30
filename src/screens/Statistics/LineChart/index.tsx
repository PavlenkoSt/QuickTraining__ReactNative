import React, { FC, useMemo, useState } from 'react'
import { ScrollView, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart'
import Svg, { Rect, Text as TextSVG } from 'react-native-svg'
import { LineChart } from 'react-native-chart-kit'
import ChartHeader from './ChartHeader'

type TooltipData = {
  x: number
  y: number
  value: number
}

type LineChartPropsType = {
  data: {
    datasets: {
      data: number[]
      color: (opacity?: number) => string
    }[]
    legend: string[]
    labels: string[]
  }
  title: string
}

const LineChartComponent: FC<LineChartPropsType> = ({ data, title }) => {
  const chartConfig: AbstractChartConfig = useMemo(
    () => ({
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      barPercentage: 0.5,
      useShadowColorFromDataset: true,
      decimalPlaces: 0,
    }),
    []
  )

  const [activeDataForTooltip, setActiveDataForTooltip] = useState<TooltipData | null>(null)

  const { width } = useWindowDimensions()

  const calcWidth = data.datasets[0].data.length * 60
  const graphWidth = calcWidth < width ? width : calcWidth

  return (
    <>
      <ChartHeader title={title} />
      <ScrollView horizontal>
        <TouchableOpacity activeOpacity={1} onPress={() => setActiveDataForTooltip(null)}>
          <LineChart
            onDataPointClick={(data) =>
              setActiveDataForTooltip({
                x: data.x,
                y: data.y,
                value: data.value,
              })
            }
            decorator={() => {
              if (!activeDataForTooltip) return <></>

              return (
                <View>
                  <Svg>
                    <Rect
                      x={activeDataForTooltip.x}
                      y={activeDataForTooltip.y}
                      width="40"
                      height="30"
                      fill="black"
                    />
                    {/* @ts-ignore */}
                    <TextSVG
                      x={activeDataForTooltip.x + 20}
                      y={activeDataForTooltip.y + 20}
                      fill="white"
                      fontSize="16"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {activeDataForTooltip.value}
                    </TextSVG>
                  </Svg>
                </View>
              )
            }}
            fromZero
            data={data}
            width={graphWidth}
            height={300}
            chartConfig={chartConfig}
            segments={5}
            yLabelsOffset={25}
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default LineChartComponent

const styles = EStyleSheet.create({})
