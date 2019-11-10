import React from "react";
import { Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './OurServices.css';
import Carousel from "../Carousel/Carousel.Component";

import CRA from '../../assets/pdfs/Creative-agencies-pricing.pdf';
import FIP from '../../assets/pdfs/Food-industry-pricing.pdf';
import PIP from '../../assets/pdfs/Product-industry-pricing.pdf';
import REP from '../../assets/pdfs/Real-estate-pricing.pdf';
import SUP from '../../assets/pdfs/Start-Ups-pricing.pdf';

const industryPdfs = {
    10: { path: CRA, value: 10 },
    20: { path: FIP, value: 20 },
    30: { path: PIP, value: 30 },
    40: { path: REP, value: 40 },
    50: { path: SUP, value: 50 }
}

const divStyle = {
    backgroundColor: '#149bd0'
  };
const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid black',
      fontSize: 23,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      width: 436,
      height: 50,
      borderRadius: 30,
      lineHeight: '50px',
      textAlign: 'left',
      paddingLeft: '2rem',
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 30,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
}))(InputBase);
  
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    button:{
        margin: theme.spacing(1),
        borderRadius: '25px',
        height: '40px',
        width: theme.spacing(20),
        borderColor: 'black',
        marginBottom: '-53px'
        
    }
}));

function OtherServices(){
    const classes = useStyles();
    const [industry, setIndustry] = React.useState('');
    const handleChange = event => {
        setIndustry(event.target.value);
    };

    const getIndustryDetails = e => {
        console.log(industry, e);
        if(!industryPdfs[industry]){
            return;
        }
        let pdfPath = industryPdfs[industry];
        window.open(pdfPath.path, '_blank');
    }


    return(
        <div className="other-services">
            <div className="heading">
                <h2>Based on your industry, we suggest services </h2>
                <h2>  that help your business grow.</h2>
            </div>
            <div className="services-holder">
                <div className="slect-prices-b1" style={{marginTop:'-50px'}}>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="age-customized-select"></InputLabel>
                        <Select
                        displayEmpty
                        value={industry}
                        onChange={handleChange}
                        input={<BootstrapInput name="age" id="age-customized-select" />}
                        >
                            <MenuItem value="" disabled>
                                Select an Industry
                            </MenuItem>
                            <MenuItem value={10}>Food</MenuItem>
                            <MenuItem value={20}>Product, Fasion or E-commerce</MenuItem>
                            <MenuItem value={30}>Real Estate</MenuItem>
                            <MenuItem value={40}>Creative Agencies</MenuItem>
                            <MenuItem value={50}>Start-up's</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="bottom-block">
                    <Button size="medium" color="primary" variant="contained" className={classes.button} onClick={getIndustryDetails} style={divStyle}>View prices</Button>
                </div>
            </div>
            {/* <div className="prices-holder">
            <Carousel />
            </div> */}
        </div>
    )
}

export default OtherServices;