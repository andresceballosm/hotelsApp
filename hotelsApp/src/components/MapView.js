import React from 'react';
import MapView from 'react-native-maps';

const MapsView = (props) => {
  return (
      <MapView
          style={{ flex: 1 }}
          region={props.region}
          >
         <MapView.Marker
            draggable
            coordinate={props.region} /> 
      </MapView>
  )
}

export default MapsView;