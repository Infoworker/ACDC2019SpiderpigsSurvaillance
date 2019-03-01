import React from 'react';
import Map from '../Map/Map';
import {compose} from 'recompose';
import {inject,observer} from 'mobx-react';
import * as image from '../../image/duff.png';
import {IBuildningStoreProps,IPlayerStoreProps} from '../../store';


interface IMapContainerProps{
    buildningStore:IBuildningStoreProps;
    playerStore:IPlayerStoreProps
}

interface IMapContainerState{
    markers: any[];
}


class MapContainer extends React.Component<IMapContainerProps,IMapContainerState>{

    constructor(props: IMapContainerProps) {
        super(props)
        this.state= {
            markers: []
        }
    }

    render(){
        return(
            <Map
            id="myMap"
            options={{
              center: { lat: 42.0974, lng: -72.5647 },
              zoom: 15,
              
            }}
            customeStyles={[{featureType:"all",elementType:"labels",stylers:[{visibility:"off"}]}]}
            onMapLoad={map => {

                let newMarkers = this.state.markers;
                 
                const buildMarker = this.props.buildningStore.buildnings.map(buildning=>{
                    // let infowindow = new (window as any).google.maps.InfoWindow({
                    //     content: "Add your popup content here"
                    //   });

                    let popup = undefined;
                    

                   let marker = new (window as any).google.maps.Marker({
                        position:{lat:buildning.position.lat, lng:buildning.position.lng},
                        map:map,
                        title:buildning.title,
                        icon:buildning.icon
                    });

                    (window as any).google.maps.event.addListener(marker, 'click', function() {
                        //infowindow.open(map, marker);
                        //this.hideAllInfoWindows(map);

                        newMarkers.forEach(function(m) {
                            if (m) {
                                m.close(map, m);
                            }
                            //marker.window.close(map, marker);
                            console.log(m);
                        });

                        console.log(window);

                        let c = buildning.feed ? '<iframe src="//aka.ms/ampembed?url=' + buildning.feed + '" name="azuremediaplayer" scrolling="no" frameborder="no" align="center" height="280px" width="500px" allowfullscreen></iframe>' : '<div><p>No feed available!</p></div>'

                        popup = new (window as any).google.maps.InfoWindow({
                            //content: '<iframe src="//aka.ms/ampembed?url=https%3A%2F%2Fspiderpigsms.blob.core.windows.net%2Fasset-216f0abd-9c30-4e80-b768-c3407940a70f%2FPowerPlant.mp4%3Fsv%3D2017-04-17%26sr%3Dc%26si%3D766ed076-30fd-4eb2-9904-04a3ea2a0eb3%26sig%3D1jjQaZUk5xCB07JH0uuGOCbYdkQf8lE9JjVXURI%252B5NI%253D%26st%3D2019-03-01T13%253A33%253A43Z%26se%3D2119-04-04T12%253A33%253A43Z" name="azuremediaplayer" scrolling="no" frameborder="no" align="center" height="280px" width="500px" allowfullscreen></iframe>'
                            content: c
                            //content: '<iframe title="YouTube video player" class="youtube-player" type="text/html" width="480" height="390" src="https://www.youtube.com/embed/714-Ioa4XQw" frameborder="0"></iframe>'
                          })
                          popup.open(map, marker);
                        //window.location.href = marker.url;

                        newMarkers.push(popup);
                        
                      });

                    
                    
                });
                
                const buildMarkerPerson = this.props.playerStore.players.map(player=>{
                    new (window as any).google.maps.Marker({
                        position:{lat:player.position.lat, lng:player.position.lng},
                        map:map,
                        title:player.title,
                        icon:player.icon

                    });
                    
                });
            //   var marker = new (window as any).google.maps.Marker({
            //     position: { lat: 42.0974, lng: -72.5647 },
            //     map: map,
            //     title: 'test2',
            //     icon:image
            //   });
            //   var marker2 = new (window as any).google.maps.Marker({
            //     position: { lat: 42.0000, lng: -72.5000 },
            //     map: map,
            //     title: 'test'
            //   });
            }}
          />
        );
    }

    //  hideAllInfoWindows(map: any) {
    //     this.state.markers.forEach(function(marker) {
    //     marker.infowindow.close(map, marker);
    //     }); 
}

const enchanted = compose<IMapContainerProps,{}>(
 inject('buildningStore','playerStore'),
 observer
);



export default enchanted(MapContainer);


