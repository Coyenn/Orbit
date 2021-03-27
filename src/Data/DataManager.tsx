import FlightData from '../../assets/Data/FlightData'
const Store = require('electron-store');

const SettingsStore = new Store();

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) =>
  obj[key];

export function GetData(DataIndex:any){
  const ChartItems = SettingsStore.get("Settings")
  const FlightDataIndex = getKeyValue(FlightData[0])(DataIndex)
  var HowManyItemsToDisplay = 30

  if(ChartItems){
    console.log("Graph Data Exists in Settings, so it will be assigned")
    HowManyItemsToDisplay = ChartItems["Graph Data Resolution"]
  }

  const SlicedData = FlightDataIndex.slice(Math.max(FlightDataIndex.length - HowManyItemsToDisplay, 0))

  return SlicedData;
}
