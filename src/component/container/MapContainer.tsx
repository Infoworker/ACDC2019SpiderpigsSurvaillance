import React from 'react';
import Map from '../Map/Map';
import {compose} from 'recompose';
import {inject,observer} from 'mobx-react';
import * as image from '../../image/duff.png';
import {IBuildningStoreProps,IPlayerStoreProps, IPlayer, BuildningStore, PlayerStore} from '../../store';
import { timingSafeEqual } from 'crypto';
import { action, toJS } from 'mobx';
import {DefaultLayout} from "../layout/Default";
import playerStore from '../../store/player/PlayerStore';


interface IMapContainerProps{
    buildningStore:IBuildningStoreProps;
    playerStore:IPlayerStoreProps
    //playerStore:IPlayer[]
}

interface IMapContainerState{
    markers: any[];
    playerMarkers: any[];
    tick: number;
    map: any;

    buildningStore:IBuildningStoreProps;
    //playerStore:IPlayerStoreProps
    playerStore:IPlayer[];

}


export default class MapContainer extends React.Component<IMapContainerProps,IMapContainerState>{



    constructor(props: IMapContainerProps) {
        super(props)

            this.state= {
                markers: [],
                playerMarkers: [],
                tick: Date.now(),
                map: undefined,
    
                playerStore: [],
                buildningStore:BuildningStore
    
            }

        

        

        //console.log(this.props.playerStore);
        //console.log(this.props.playerStore.players[0]);

        setInterval(()=>{

            if (this.state.playerMarkers && this.state.map) {
                //console.log(this.state.playerMarkers);

                this.state.playerMarkers.forEach(playerMarker=>{
                    this.moveBus(this.state.map, playerMarker.marker, playerMarker.player);
                })
    
                //this.moveBus(this.state.map, this.state.playerMarkers[0].marker, this.state.playerMarkers[0].player);

                    // console.log(this.state.tick);
                    // //console.log(Date.now());
                    // if (Date.now()-this.state.tick > 2000) {
                    //     //console.log(this.state.tick);
                    //     //this.setState({tick: Date.now()});
                        
                    // } 
                    console.log(Date.now());
            }

            this.setState({tick: Date.now()}, ()=> {
                //console.log(this.state.tick);
            });
        }, 2000);
    }

   // @action
    componentDidMount() {
        //const {buildningStore, playerStore } = this.props;
        playerStore.fetchUsers().then(users=>{
            console.log(users);
            //Object.assign(playerStore.players, users);
            let newPlayerStore = this.state.playerStore;
            //newPlayerStore.players = users;
            newPlayerStore = users;

            this.setState({playerStore: newPlayerStore});
        });
        //console.log(playerStore.players);
    }

    
    // tick() {
    //     this.setState({tick: Date.now()}, ()=> {
    //         console.log(this.state.tick);
    //     });
    // }

    //componentDidUpdate

    render(){

        //console.log(this.props.playerStore.players[0]);

        // if (this.state.playerMarkers && this.state.map) {
        //     //console.log(this.state.playerMarkers);

        //         console.log(this.state.tick);
        //         console.log(Date.now());
        //         if (Date.now()-this.state.tick > 2000) {
        //             console.log(this.state.tick);
        //             //this.setState({tick: Date.now()});
        //             this.moveBus(this.state.map, this.state.playerMarkers[0].marker, this.state.playerMarkers[0].player);
        //         } 
        // }

        return(
            <DefaultLayout>
            <Map
            id="myMap"
            options={{
              //center: { lat: 42.0974, lng: -72.5647 },
              center: { lat: 42.0954, lng: -72.5750 },
              zoom: 15,
              
            }}
            customeStyles={[{featureType:"all",elementType:"labels",stylers:[{visibility:"off"}]}]}
            onMapLoad={map => {

                let newMarkers = this.state.markers;
                 
                const buildMarker = this.state.buildningStore.buildnings.map(buildning=>{

                    let popup = undefined;
                    

                   let marker = new (window as any).google.maps.Marker({
                        position:{lat:buildning.position.lat, lng:buildning.position.lng},
                        map:map,
                        title:buildning.title,
                        icon:buildning.icon     
                    });

                    (window as any).google.maps.event.addListener(marker, 'click', function() {

                        newMarkers.forEach(function(m) {
                            if (m) {
                                m.close(map, m);
                            }
                            console.log(m);
                        });

                        console.log(window);

                        let c = buildning.feed ? '<iframe src="//aka.ms/ampembed?url=' + buildning.feed + '" name="azuremediaplayer" scrolling="no" frameborder="no" align="center" height="280px" width="500px" allowfullscreen></iframe>' : '<div><p>No feed available!</p></div>'

                        popup = new (window as any).google.maps.InfoWindow({
                            content: c
                          })
                        popup.open(map, marker);
                        newMarkers.push(popup);
                      });
                });
                

                console.log(this.state.playerStore);
                //const players: IPlayer[] = this.props.playerStore.players;
                //console.log(players);
                //const buildMarkerPerson = this.state.playerStore.players.map(player=>{
                    const buildMarkerPerson = this.state.playerStore.map(player=>{
                    console.log(player.position);
                    let m = new (window as any).google.maps.Marker({
                        position:{lat:player.position.lat, lng:player.position.lng},
                        map:map,
                        title:player.title,
                        icon:player.icon

                    });
                    //return m;
                    return {
                        marker: m,
                        player: player
                    }
                });

                this.setState({
                    playerMarkers: buildMarkerPerson,
                    map: map
                })

                // console.log(buildMarkerPerson);

                // console.log(this.state.tick);
                // console.log(Date.now());
                // if (Date.now()-this.state.tick > 2000) {
                //     console.log(this.state.tick);
                //     //this.setState({tick: Date.now()});
                //     this.moveBus(map, buildMarkerPerson[0].marker, buildMarkerPerson[0].player);
                // } 

            }}
          />
          </DefaultLayout>
        );
    }

    moveBus(map: any, marker: any, player: IPlayer) {
        //console.log(marker);

        let c = 0;
        while (c < player.movementPattern.length) {
            if (player.movementPattern[c].lat == player.position.lat && player.movementPattern[c].lng == player.position.lng) {
                console.log("Found current pos: " + c);
                break;
            }
            c++;
        }

        if (c < player.movementPattern.length-1) {
            console.log("Moving next to " + (c+1) + " (max: " + (player.movementPattern.length-1) + ")");
            marker.setPosition(player.movementPattern[c+1]);
            player.position = player.movementPattern[c+1];
        } else {
            console.log("Initial pos");
            marker.setPosition(player.movementPattern[0]);
            player.position = player.movementPattern[0];
        }

        //let i = player.movementPattern.indexOf(player.position);
        //console.log(player.movementPattern);
        //console.log(player.position.lat);
        //console.log(i);
        // if (i < player.movementPattern.length-1) {
        //     marker.setPosition(player.movementPattern[i+1]);
        // } else {
        //     marker.setPosition(player.movementPattern[0]);
        // }
        
        
    }
}


const enchanted = compose<IMapContainerProps,{}>(



    inject('buildningStore','playerStore'),
    observer
);


//export default enchanted(MapContainer);


