import React from 'react';
import Logo from '../../../assets/businessLogo.png';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { WhatsApp } from '@material-ui/icons';
import { green, purple } from '@material-ui/core/colors';
import { ThemeProvider }  from '@material-ui/styles';
// import useModal from 'use-react-modal'

// import Modal from 'react-responsive-modal';

import './Header.css';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      margin1: {
        margin: theme.spacing(1),
        borderRadius: '25px',
        height: 50,
        width: theme.spacing(20),
        background: '#149bd0',
        '&:hover':{
            background: '#128dbe'
        }
      }
}));

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
});


const ColorButton = withStyles(theme => ({
    root: {
      color: '#fff',
      backgroundColor: '#4caf50',
      padding: '2px 15px !important',
      '&:hover': {
        backgroundColor: "#4caf50",
      },
    },
}))(Fab);

const ColorButtonUp = withStyles(theme => ({
    root: {
      color: '#fff',
      backgroundColor: '#149bd0',
      padding: '2px 15px !important',
      '&:hover': {
        backgroundColor: "#149bd0",
      },
    },
}))(Fab);





function MobileHeader(){
    const classes = useStyles();
    const [values, setValues] = React.useState({
      needs: '',
      number: '',
      addInfo:''
  });

  const handleChange = name => event => {
      console.log(name, values)
      setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async event => {
      try{
          let result = await fetch("https://at.social/api/admin/know_you", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  Needs: values.needs,
                  Number: values.number,
                  addInfo: values.addInfo
              })
          })
          setValues({needs: '',  number: '', addInfo: ''});
         
          
      }catch(e){
          console.log(e)
      }
  }
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleSubmit();
  };


    return(
        <div className="mobile-header-container">
            

            <div className="for-back-left"></div>
            <div className="mobile-logo">
                <img src={Logo} width={101} height={140}/>
            </div>

            <div className="header-form-container">
                <input type="text" className="header-input" onChange={ handleChange('needs') } value={ values.needs } required placeholder="What does your business need?"/>
                <p></p>
                <input type="text" className="header-input" onChange={ handleChange('number') }  value={ values.number } placeholder="Contact Number "/>
            </div>
            {/* <div className="for-back-right"></div> */}
            <div className="header-btn">
                <div className="header-button-holder">
                        <ColorButtonUp
                        variant="extended"
                        size="small"
                        color="primary"
                        onClick={handleOpen}
                        aria-label="add"
                        className={`${classes.margin} button1`}
                        >
                            
                            GET IT DONE
                        </ColorButtonUp>
    
                        <ColorButton
                        variant="extended"
                        size="small"
                        color="primary"
                        onClick={ ()=>  window.location = "https://wa.me/919833441263" }
                        aria-label="add"
                        className={`${classes.margin} button1`}
                        >
                            <WhatsApp className={`${classes.extendedIcon}`} />
                            INITIATE A CHAT 
                        </ColorButton>
                </div>
                
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                <div className="modal-text1">
                    <div className="cross4">
                    <button size="large" onClick={ handleClose }  variant="contained" className="cross3">X</button>
                    </div>
                <h2 id="transition-modal-title1">Thank you for getting in touch! </h2>
                    <p id="transition-modal-description">
                    We will initiate a whatsapp chat with you so we can take your service further.
                    </p>
                    <p id ="inner-text1">
                    To book a meeting with our sales representatives, please leave 3 date & time options below:
                    </p>
                </div>

            <div style={{margin:"20px 0"}}>
            <textarea
                        className="afterForm"
                        placeholder="Include a date time and zone"
                        onChange={handleChange('addInfo')}
                        margin="normal"
                        rows="4"
                        cols="40"
                        className={"contactus-input"}
              
              />
            </div>
              <div style={{textAlign:"center"}}>
              <Button size="medium" onClick={ handleClose } color="primary" variant="contained" className={classes.margin1}>GET IT DONE</Button>
              </div>
          </div>
         
        </Fade>
            </Modal>

        </div>
    );
}

export default MobileHeader;