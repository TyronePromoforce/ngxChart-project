export interface DataPoint{
    name: string,
    value: number | DataPoint[]
}

export interface GraphData{
    xAxisName: string,
    yAxisName: string,
    Data: DataPoint[]
    GraphName: string
}

export class DataChecker{
    static checkSingleSeries(data: DataPoint[]): boolean{
        if(data.length == 0){
            return false;
        }
        for(let point of data){
            if(typeof point.value != "number"){
                return false;
            }
        }
        return true;
    }

    static EmptyGraphData: GraphData = {
        Data : [],
        xAxisName : "",
        yAxisName : "",
        GraphName : ""
    }
} 