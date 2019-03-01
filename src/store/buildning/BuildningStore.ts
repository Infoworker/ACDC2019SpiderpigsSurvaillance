import {observable,decorate,IObservableArray} from 'mobx';
// import * as fat from '../../image/fat.png';
// import * as bart from '../../image/bart.png';
// import * as homer from '../../image/homer.jpg';
import * as elementaryschool from '../../image/Springfield_Elementary.png';
import * as highschool from '../../image/Springfield_High_School.png';
import * as mosbar from '../../image/mosbar.png';
import * as nuclear from '../../image/power-plant-png-7.png';
import * as homerhome from '../../image/Simpson_House.png';
import * as kwikemart from '../../image/Kwikemart.png';
import * as Krustyburger from '../../image/Krustyburger.png';
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
        {title:'Moes place',position:{lat:42.0974,lng:-72.5647},icon:mosbar},
        {title:'Nucler plant',position:{lat:42.0975,lng:-72.5747}, icon:nuclear},
        {title:'Simpsons home',position:{lat:42.0988,lng:-72.5729}, icon:homerhome},
        {title:'Kwik-E-Mart',position:{lat:42.0936,lng:-72.5715}, icon:kwikemart},
        {title:'Elementary School',position:{lat:42.0974,lng:-72.5847}, icon:elementaryschool},
        {title:'High School',position:{lat:42.0918,lng:-72.5814}, icon:highschool},
        {title:'Krustyburger',position:{lat:42.0908,lng:-72.5743}, icon:Krustyburger}
    ] as any;
}


decorate<BuildningStore>(BuildningStore,{
    buildnings:observable
});

const buildning = new BuildningStore();

export default buildning;