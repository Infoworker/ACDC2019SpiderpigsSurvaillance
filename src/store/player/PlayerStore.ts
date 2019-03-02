import {observable,decorate,IObservableArray,action} from 'mobx';
import * as Homer_Simpson from '../../image/Homer_Simpson.png';
import * as Bart_Simpson from '../../image/Bart_Simpson.png';
import * as Lisa_Simpson from '../../image/lisa_Simpson.png';
import * as Marge from '../../image/Marge.png';
import * as Maggie_Simpson from '../../image/Maggie_Simpson.png';
import * as Spiderpig from '../../image/spiderpig.png';
import * as Smithers from '../../image/Waylon_Smithers.png';
import * as chris from '../../image/chris_burns_orig.png';
import * as seb from '../../image/seb_troy.png';
import * as marius from '../../image/marius_edna.png';
import * as laura from '../../image/marge_laura.png';
import * as erwin from '../../image/erwin_flanders.png';

export interface IPlayerStoreProps{
    players:IObservableArray<IPlayer>;
    movePosition:()=>void;
}

interface IPlayer{
    id:number;
    position:IPosition;
    icon:any;
    title:string;
    favoriteDrink:string;
    favoriteFood:string;
    quote:string;
}

interface IPosition{
    lat:number;
    lng:number;
}

class PlayerStore implements IPlayerStoreProps{
    players = [
        {title:'Homer Simpson',position:{lat:42.0954,lng:-72.5738}, icon:Homer_Simpson, favoriteDrink:'Beer', favoriteFood:'Donut', quote:'As usua, drinking too much beer and eating too much donuts' },
{title:'Bart Simpson',position:{lat:42.0906,lng:-72.5768}, icon:Bart_Simpson, favoriteDrink:'Soda', favoriteFood:'candy', quote:'"Eat my shorts!'},
{title:'Maggie Simpson',position:{lat:42.0885,lng:-72.5706}, icon:Maggie_Simpson, favoriteDrink:'I don\'t drink', favoriteFood:'Pacifier', quote:'Drink beer and eat donuts'},
{title:'Marge Simpson',position:{lat:42.0955,lng:-72.5849}, icon:Marge, favoriteDrink:'Soda', favoriteFood:'Pretzel', quote:'Now it\'s Marge\'s time to shine!'},
{title:'Lisa Simpson',position:{lat:42.0945,lng:-72.5812}, icon:Lisa_Simpson, favoriteDrink:'Soda', favoriteFood:'Everything as long as it\'s vegan', quote:'Trust in yourself and you can achieve anything'},
{title:'Spiderpig',position:{lat:42.0920,lng:-72.5700},icon:Spiderpig,favoriteDrink:'Water', favoriteFood:'Pellets', quote:'Oink, Oink'},
{title:'Waylon Smithers',position:{lat:42.0920,lng:-72.5650},icon:Smithers, favoriteDrink:'Beer', favoriteFood:'Donut', quote:'Mr. Burns isn\'t just my heartless boss, he\'s also my best friend'},
{title:'Seb Troy',position:{lat:42.0974,lng:-72.5657},icon:seb, favoriteDrink:'Beer', favoriteFood:'Any kind of Steak', quote:'Bring us beer!'},
{title:'Chris Burns',position:{lat:42.0920,lng:-72.5620},icon:chris, favoriteDrink:'Beer', favoriteFood:'Donut', quote:'I love the Beasty boys'},
{title:'Marius Edna',position:{lat:42.0940,lng:-72.5695},icon:marius, favoriteDrink:'Beer', favoriteFood:'Hamburger', quote:'I love CRM'},
{title:'Marge Laura',position:{lat:42.0930,lng:-72.5785},icon:laura, favoriteDrink:'Cider', favoriteFood:'Long breakfast', quote:'Rakastan SharePoint, Office 365 and Azure'},
{title:'Erwin Flanders',position:{lat:42.0940,lng:-72.5950},icon:erwin, favoriteDrink:'Beer', favoriteFood:'Donut', quote:'I love Office Apps and Services'},

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