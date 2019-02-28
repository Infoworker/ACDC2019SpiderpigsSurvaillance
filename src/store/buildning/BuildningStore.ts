import {observable,decorate,IObservableArray} from 'mobx';

export interface IBuildningStoreProps{
    buildnings:IObservableArray<IBuilning>;
}

interface IBuilning{
    title:string;
    position:IPosition;

}

interface IPosition{
    lat:number;
    lng:number;

}

class BuildningStore implements IBuildningStoreProps{
    buildnings =[{title:'Moes place',position:{lat:0,lng:0}}] as any;

}

decorate<BuildningStore>(BuildningStore,{
    buildnings:observable
});

const buildning = new BuildningStore();

export default buildning;