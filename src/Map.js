import React from "react";
import GoogleMapReact from "google-map-react";

import Typography from "@mui/material/Typography";
import TextField  from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default class Map extends React.Component {

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
            <div style={{backgroundColor: "pink" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBYrV501SwGTqexub8U6JbqIJ44cxGx5I4" }}
                defaultCenter={{
                    lat: 10.99835602,
                    lng: 77.01502627
                }}
                defaultZoom={14}
            >
       

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