var maxQueueSize = 10;

class DataStore {
    private static instance: DataStore;
    public queue: Array<string> = [];

    private constructor() { }

    public static getInstance() : DataStore {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }

        return DataStore.instance
    }
    
    push(){

    }

    add(dataSet){

    }
}