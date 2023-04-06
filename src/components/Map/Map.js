import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapCard from './MapCard';

import mapStyles from '../../mapStyles';
import useStyles from './styles';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked }) => {
  
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        
        {places?.length && places?.map((place, i) => (
          <MapCard lat={Number(place.latitude)} lng={Number(place.longitude)} place={place} key={i}/>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
