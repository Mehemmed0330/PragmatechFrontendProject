import './App.css';
import { Grid } from "@mui/material"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import { getPlacesData } from "./api/index"
import { useEffect, useState } from "react"

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({ sw: 0, ne: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    console.log(coordinates, bounds)
    getPlacesData(bounds.sw, bounds.ne)
      .then(data => {
        console.log(data)
        setPlaces(data)
      })
  }, [coordinates, bounds]);


  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
