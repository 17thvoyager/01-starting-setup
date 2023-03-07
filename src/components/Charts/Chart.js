import ChartBar from './ChartBar';
import './Chart.css';

const Chart = Props => {
    return(
        <div className="chart">
            {Props.datapoints.map( dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={datapoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}


export default Chart;
