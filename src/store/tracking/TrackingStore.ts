import {observable,decorate,IObservableArray,action} from 'mobx';
import * as dot from '../../image/Pink-dot.png';


export interface ITrackingStoreProps{
    pigs:IObservableArray<IPig>;
}

interface IPig{
    id:number;
    position:IPosition;
    icon:any;
    title:string;
}

interface IPosition{
    lat:number;
    lng:number;
}

class TrackingStore implements ITrackingStoreProps{
    pigs =[
        {title:'SpiderPig was here',position:{lat:42.0944,lng:-72.5617}, icon:dot},
        {title:'SpiderPig was here',position:{lat:42.1030,lng:-72.5787}, icon:dot},
        {title:'SpiderPig was here',position:{lat:42.0974,lng:-72.5527}, icon:dot},
        {title:'SpiderPig was here',position:{lat:42.0950,lng:-72.5257}, icon:dot},
        {title:'SpiderPig was here',position:{lat:42.0949,lng:-72.5377}, icon:dot}
    ] as any;   
}

decorate<TrackingStore>(TrackingStore,{
    pigs:observable
});

const pigs = new TrackingStore();

export default pigs;