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


class MapContainer extends React.Component<IMapContainerProps,{}>{


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
                const buildMarker = this.props.buildningStore.buildnings.map(buildning=>{
                    new (window as any).google.maps.Marker({
                        position:{lat:buildning.position.lat, lng:buildning.position.lng},
                        map:map,
                        title:buildning.title,
                        icon:buildning.icon

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
}

const enchanted = compose<IMapContainerProps,{}>(
 inject('buildningStore','playerStore'),
 observer
);

export default enchanted(MapContainer);


