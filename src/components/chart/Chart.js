import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const dataPointsValue = props.dataPoints.map(data => data.value)
    const maxValue = Math.max(...dataPointsValue)

  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint => (
            <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={maxValue}/>
        ))}
    </div>
  )
}

export default Chart