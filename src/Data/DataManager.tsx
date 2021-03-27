import FlightData from '../../assets/Data/FlightData.json'
const Store = require('electron-store');

const SettingsStore = new Store();

export function GetData(DataIndex){
  const ChartItems = SettingsStore.get("Settings")
  const FlightDataIndex = FlightData[0][DataIndex]
  const HowManyItemsToDisplay = ChartItems["Graph Data Resolution"]
  const SlicedData = FlightDataIndex.slice(Math.max(FlightDataIndex.length - HowManyItemsToDisplay, 0))

  return SlicedData;
}
