import {observable,decorate,IObservableArray} from 'mobx';
import * as fat from '../../image/fat.png';
import * as bart from '../../image/bart.png';
export interface IBuildningStoreProps{
    buildnings:IObservableArray<IBuilning>;
}

interface IBuilning{
    title:string;
    position:IPosition;
    icon:any;

}

interface IPosition{
    lat:number;
    lng:number;

}

class BuildningStore implements IBuildningStoreProps{
    buildnings =[
        {title:'Moes place',position:{lat:42.0974,lng:-72.5647},icon:fat},
        {title:'Nucler plant',position:{lat:42.0975,lng:-72.5747}, icon:fat},
        {title:'Homers home',position:{lat:42.0978,lng:-72.5847}, icon:fat},
        {title:'K-Mark',position:{lat:42.0975,lng:-72.5247}, icon:fat},
        {title:'School',position:{lat:42.0974,lng:-72.5847}, icon:fat}
    ] as any;

}

decorate<BuildningStore>(BuildningStore,{
    buildnings:observable
});

const buildning = new BuildningStore();

export default buildning;