import React from "react";
import GoogleMapReact from "google-map-react";

import Typography from "@mui/material/Typography";
import TextField  from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default class Map extends React.Component {

    

    constructor(props) {
        super();
        this.state = {
            latitude: 24.723456,
            longitude: 46.70095,
            restaurants: []
        }
    }
            // Current location
        componentDidMount = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords)
                    this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        restaurantsData
                    })
                },
                (error) => {
                    console.log("Fel vid hämtning av position" + error.message)
                }
            )
        }

    header = () =>{
        return(
            <div>
            <Typography variant="h4" style={{ textAlign: "center" }}>
                L U N C H 
            </Typography>
            <TextField label="Sök..." variant="outlined" style={{ width: "100%" }} />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Typography>
                    Avstånd:
                </Typography>
               <Slider style={{ width: "85%" }} /> 
            </div>
            
            <div>  <Button variant="contained"
                    style={{ width: "50%" }}>
                    <SearchIcon />
                    Sök
                    </Button>
                    <Button variant="outlined"
                    style={{ width: "50%" }}>   
                    <RestartAltIcon />
                    Återställ
                    </Button>
              
            </div>
        </div>
        )
    }
    map = () =>{
        return(
            <div style={{backgroundColor: "pink", height: "80vh"}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBYrV501SwGTqexub8U6JbqIJ44cxGx5I4" }}
               
                defaultZoom={16}
                center={{ 
                    lat: this.state.latitude,
                    lng: this.state.longitude 
                }}
            >

                {
                    this.state.restaurants.map((restaurant) => {
                        return (
                            <LocationOnIcon 
                            lat={restaurant.latitude}
                            lng={restaurant.longitude}
                            />
                        )
                    })
                }
       
                <PersonPinIcon color={"primary"}
                    lat={this.state.latitude}
                    lng={this.state.longitude}
                />
            </GoogleMapReact>
        </div>
        )
    }
    render() {
        return (
            <div style={{backgroundColor: "skyblue"}}>
                    {this.header()}
                    {this.map()}
            </div>
        )
    }
}
// Exempel data Restauranger
let restaurantsData = [
    {
        id: "1",
        name: "Restaurant 1 - Berlin",
        latitude: 52.520007,
        longitude: 13.404954
    },
    {
        id: "2",
        name: "Restaurant 2 - London",
        latitude: 51.507351,
        longitude: -0.127758
    },
    {
        id: "3",
        name: "Restaurant 3 - San Fransisco",
        latitude: 37.774929,
        longitude: -122.419416
    },
    {
        id: "4",
        name: "Restaurant 4 - Shanghai",
        latitude: 31.230416,
        longitude: 121.473701
    },
    {
        id: "5",
        name: "Restaurant 5 - Tokyo",
        latitude: 35.689487,
        longitude: 139.691706
    },
]