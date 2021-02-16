import { useState, useEffect } from 'react'
import Map from  './components/map'
import Loader from  './components/Loader'
import Header from  './components/Header'


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] =useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch ('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      // this ^ is pulling just the events in the NASA data array that we are
      // linking to 

      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData= {eventData} /> : <Loader />}

    </div>
  );
}

export default App;
