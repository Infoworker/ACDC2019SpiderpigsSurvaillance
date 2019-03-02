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
    feed?:string;

}

interface IPosition{
    lat:number;
    lng:number;

}

class BuildningStore implements IBuildningStoreProps{
    buildnings =[
        {title:'Moes place',position:{lat:42.0974,lng:-72.5647},icon:mosbar, feed: "https%3A%2F%2Fspiderpigsms.blob.core.windows.net%2Fasset-7bf6ca96-e463-4fb6-a8bf-fbaa5185d729%2F23%20Of%20Bart%20Simpsons%20Best%20Prank%20Calls%20(2).mp4%3Fsv%3D2017-04-17%26sr%3Dc%26si%3D2dafa507-1dce-4cec-ba39-84a539724714%26sig%3DvCWYcNg79qXnZgJmSzmN0h3Ln2vu3Q1Qj8aSKR23fyI%253D%26st%3D2019-03-01T17%253A24%253A53Z%26se%3D2119-03-05T17%253A24%253A53Z"},
        {title:'Nucler plant',position:{lat:42.1030,lng:-72.5747}, icon:nuclear, feed:"https%3A%2F%2Fspiderpigsms.blob.core.windows.net%2Fasset-216f0abd-9c30-4e80-b768-c3407940a70f%2FPowerPlant.mp4%3Fsv%3D2017-04-17%26sr%3Dc%26si%3D766ed076-30fd-4eb2-9904-04a3ea2a0eb3%26sig%3D1jjQaZUk5xCB07JH0uuGOCbYdkQf8lE9JjVXURI%252B5NI%253D%26st%3D2019-03-01T13%253A33%253A43Z%26se%3D2119-04-04T12%253A33%253A43Z"},
        {title:'Simpsons home',position:{lat:42.0988,lng:-72.5729}, icon:homerhome, feed: "https%3A%2F%2Fspiderpigsms.blob.core.windows.net%2Fasset-83fddfb8-15a7-4883-a27e-cd4d647448a2%2FSpider%20Pig.mp4%3Fsv%3D2017-04-17%26sr%3Dc%26si%3Dd9ce6b83-691d-4cbe-9fa5-af0c689519ae%26sig%3DxRbQ1U9d2RmKgyMx3ysWrt69Kb3iv7eG7iPr%252BeLuGRo%253D%26st%3D2019-03-01T14%253A20%253A03Z%26se%3D2119-03-05T14%253A20%253A03Z"},
        {title:'Kwik-E-Mart',position:{lat:42.0936,lng:-72.5715}, icon:kwikemart, feed: "https%3A%2F%2Fspiderpigsms.blob.core.windows.net%2Fasset-c79563eb-31bd-4cd7-910d-bed4c8dc2886%2FKrusty%20Robs%20The%20kwik%20E%20Mart%20-%20The%20Simpsons.mp4%3Fsv%3D2017-04-17%26sr%3Dc%26si%3Dfdac6faa-b46f-41bf-bfbb-fae98fa662d2%26sig%3DI81KvRUXPJ1xj005hoF9jcqANxu%252BLrvry91FVoSiILU%253D%26st%3D2019-03-01T14%253A53%253A52Z%26se%3D2119-03-05T14%253A53%253A52Z"},
        {title:'Elementary School',position:{lat:42.0974,lng:-72.5847}, icon:elementaryschool, feed: "https%3A%2F%2Fspiderpigsms.blob.core.windows.net%2Fasset-033cc86b-5239-47aa-b5c2-0842d88c76a7%2FBart%20Pranks%20Springfield%20Elementary%20School%20-%20The%20Simpsons.mp4%3Fsv%3D2017-04-17%26sr%3Dc%26si%3Df8c7854c-aca0-4804-96ea-77a05588cac7%26sig%3D7OBIqNcL4gA781xoQzxlTOiv7%252BzPDSBT26VdEp4F%252BKc%253D%26st%3D2019-03-01T15%253A24%253A30Z%26se%3D2119-03-05T15%253A24%253A30Z"},
        {title:'High School',position:{lat:42.0918,lng:-72.5814}, icon:highschool, feed: "https%3A%2F%2Fspiderpigsms.blob.core.windows.net%2Fasset-6b957bf7-c299-4c8a-8e07-4f3939972146%2FHomer%20Simpson%20High%20School%20Reunion.mp4%3Fsv%3D2017-04-17%26sr%3Dc%26si%3Dfa7acf1d-a0c9-485c-810e-a16a1fbe41ab%26sig%3DdAHzHWDb%252FATI%252FRjND8jnouHxm5NWrsYujPb4Y6Jh7F4%253D%26st%3D2019-03-01T17%253A14%253A52Z%26se%3D2119-03-05T17%253A14%253A52Z"},
        {title:'Krustyburger',position:{lat:42.0908,lng:-72.5743}, icon:Krustyburger, feed: "https%3A%2F%2Fspiderpigsms.blob.core.windows.net%2Fasset-1f6b63c7-9710-470b-95f2-2d23c9c243a4%2FThe%20Simpsons%2030%20Days%20Krustyburger.mp4%3Fsv%3D2017-04-17%26sr%3Dc%26si%3D821d6ca0-6a0c-4165-9265-ce946f7eebed%26sig%3DMh62dyQZU%252BtdpQwFiQO6ekhNHnCw0UKd7%252B9BbbUJXD8%253D%26st%3D2019-03-01T17%253A26%253A42Z%26se%3D2119-03-05T17%253A26%253A42Z"}
    ] as any;
}


decorate<BuildningStore>(BuildningStore,{
    buildnings:observable
});

const buildning = new BuildningStore();

export default buildning;