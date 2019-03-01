import {observable,decorate,IObservableArray,action} from 'mobx';

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
    players = [{title:'Homer',id:0,position:{lat:42.0973, lng:-72.5247} }] as any;

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