import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'


const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)


    const markers = eventData.map(ev =>{
        if(ev.categories[0].id === 8) {
            return <LocationMarker 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title}) }
            />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
            //put this in a server somewhere or in a .env file
            bootstrapURLKeys={{ key: 
            'AIzaSyDtru1-wQMDFRVo4Z6OJ22EE4CUWrBr9A8' }}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6

    
}

export default Map;
