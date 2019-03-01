import {observable,decorate,IObservableArray,action} from 'mobx';
import * as Homer_Simpson from '../../image/Homer_Simpson.png';
import * as Bart_Simpson from '../../image/Bart_Simpson.png';
import * as Lisa_Simpson from '../../image/lisa_Simpson.png';
import * as Marge from '../../image/Marge.png';
import * as Maggie_Simpson from '../../image/Maggie_Simpson.png';
import * as Spiderpig from '../../image/spiderpig.png';
import * as Smithers from '../../image/Waylon_Smithers.png';

export interface IPlayerStoreProps{
    players:IObservableArray<IPlayer>;
    //movePosition:()=>void;
}

export interface IPlayer{
    id:number;
    position:IPosition;
    icon:any;
    title:string;
    movementPattern:IPosition[]
}

interface IPosition{
    lat:number;
    lng:number;
}

class PlayerStore implements IPlayerStoreProps{
    players = [
    {
        title:'Homer Simpson',
        position:{lat:42.0954,lng:-72.5738},
        icon:Homer_Simpson,
        movementPattern : [
            {lat:42.0954,lng:-72.5738},
            {lat:42.0960,lng:-72.5800}
        ]
    },
    {
        title:'Bart Simpson',position:{lat:42.0906,lng:-72.5768}, icon:Bart_Simpson,
        movementPattern : [
            {lat:42.0906,lng:-72.5768},
            {lat:42.0920,lng:-72.5800}
        ]

    },
    {
        title:'Maggie Simpson',position:{lat:42.0885,lng:-72.5706}, icon:Maggie_Simpson,
        movementPattern : [
            {lat:42.0885,lng:-72.5706},
            {lat:42.0885,lng:-72.5706}
        ]
    },
    {
        title:'Marge Simpson',position:{lat:42.0955,lng:-72.5849}, icon:Marge,
        movementPattern : [
            {lat:42.0955,lng:-72.5849},
            {lat:42.0955,lng:-72.5849}
        ]
    },
    {
        title:'Lisa Simpson',position:{lat:42.0945,lng:-72.5812}, icon:Lisa_Simpson,
        movementPattern : [
            {lat:42.0945,lng:-72.5812},
            {lat:42.0945,lng:-72.5812}
        ]
    },
    {
        title:'Spiderpig',position:{lat:42.0920,lng:-72.5700},icon:Spiderpig,
        movementPattern : [
            {lat:42.0920,lng:-72.5700},
            {lat:42.0920,lng:-72.5700}
        ]
    },
    {
        title:'Waylon Smithers',position:{lat:42.0920,lng:-72.5650},icon:Smithers,
        movementPattern : [
            {lat:42.0920,lng:-72.5650},
            {lat:42.0920,lng:-72.5650}
        ]
    }
] as any;

    // movePosition=()=>{
    //     const blat =42.0974;
    //     const blng =-72.5647;
    //     const findPlayer:IPlayer = this.players.find((player:IPlayer)=> player.id ===0);
    //     console.log(findPlayer.title);
    // }
}

decorate<PlayerStore>(PlayerStore,{
    players:observable,
    //movePosition:action('Move player')
});

const buildning = new PlayerStore();

export default buildning;