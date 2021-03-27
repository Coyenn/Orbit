import { TabsType } from "antd/lib/tabs"

var DataStore = [
    [
        {
            name: "1",
            value: 1,
        },
        {
            name: "2",
            value: 5,
        },
        {
            name: "3",
            value: 8,
        },
        {
            name: "4",
            value: 5,
        },
        {
            name: "5",
            value: 12,
        },
        {
            name: "6",
            value: 5,
        },
        {
            name: "7",
            value: 7,
        },
        {
            name: "8",
            value: 7,
        },
        {
            name: "9",
            value: 4,
        },
        {
            name: "10",
            value: 8,
        },
    ],
]

function assertWarn(bool: boolean,text: string){
    if (!bool){
        console.log(text)
    }
}

function QuadBezier(t: number,p0: number,p1: number,p2: number){
    return (1 - t)^2 * p0 + 2 * (1 - t) * t * p1 + t^2 * p2
}

function SmoothOut(t:Array<any>){
    assertWarn(t.length >= 3, "there must be at least 3 values to draw a graph")

    var sorted = []

    for (var i = 0; t.length, i++;){
        var curData = t[i]
        var lastData = t[i-1]
        var nextData = t[i+1]
        var smoothedValue = 0

        if (curData && lastData && nextData){
            smoothedValue = QuadBezier(.5,lastData.value || 0,curData.value || 0,nextData.value || 0)
        }

        sorted[i] = smoothedValue
    }

    return sorted
}

export function GetData(index:number){
    var table = DataStore[index]
    return SmoothOut(table)
}