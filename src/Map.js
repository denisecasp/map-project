import React from "react";
import Typography from "@mui/material/Typography";
import TextField  from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default class Map extends React.Component {

    header = () =>{
        return(
            <div style={{backgroundColor: "lightblue"}}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
                L U N C H 
            </Typography>
            <TextField label="Sök..." variant="outlined" style={{ width: "100%" }} />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Typography>
                    Avstånd:
                </Typography>
               <Slider style={{ widht: "80%" }} /> 
            </div>
            
            <div>
                <Button variant="outlined"
                    style={{ width: "50%" }}
                >   
                    <RestartAltIcon />
                    Återställ</Button>
                <Button variant="contained"
                    style={{ width: "50%" }}
                >
                    <SearchIcon />
                    Sök</Button>
            </div>
        </div>
        )
    }
    map = () =>{
        return(
            <div style={{backgroundColor: "skyblue"}}>
            Map
        </div>
        )
    }
    render() {
        return (
            <div>
                    {this.header()}
                    {this.map()}
            </div>
        )
    }
}