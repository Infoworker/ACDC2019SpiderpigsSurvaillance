import {observable,decorate,IObservableArray,action} from 'mobx';
import * as Homer_Simpson from '../../image/Homer_Simpson.png';
import * as Bart_Simpson from '../../image/Bart_Simpson.png';
import * as Lisa_Simpson from '../../image/lisa_Simpson.png';
import * as Marge from '../../image/Marge.png';
import * as Maggie_Simpson from '../../image/Maggie_Simpson.png';

export interface IPlayerStoreProps{
    players:IObservableArray<IPlayer>;
    movePosition:()=>void;

}

interface IPlayer{
    id:number;
    position:IPosition;
    icon:any;
    title:string;
}

interface IPosition{
    lat:number;
    lng:number;
}



class PlayerStore implements IPlayerStoreProps{
    players = [{title:'Homer',id:0,position:{lat:42.0973, lng:-72.5247}},
    {title:'Homer Simpson',position:{lat:42.0954,lng:-72.5738}, icon:Homer_Simpson},
    {title:'Bart Simpson',position:{lat:42.0906,lng:-72.5768}, icon:Bart_Simpson},
    {title:'Maggie Simpson',position:{lat:42.0885,lng:-72.5706}, icon:Maggie_Simpson},
    {title:'Marge Simpson',position:{lat:42.0965,lng:-72.5849}, icon:Marge},
    {title:'Lisa Simpson',position:{lat:42.0945,lng:-72.5812}, icon:Lisa_Simpson}

] as any;

    movePosition=()=>{
        const blat =42.0974;
        const blng =-72.5647;
        const findPlayer:IPlayer = this.players.find((player:IPlayer)=> player.id ===0);
        console.log(findPlayer.title);
    }



}

decorate<PlayerStore>(PlayerStore,{
    players:observable,
    movePosition:action('Move player')
});

const buildning = new PlayerStore();

export default buildning;