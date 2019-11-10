import React from 'react';
import './WhoWeAre.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Back1 from '../../assets/back-1.png';
//  function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-738751729/-MEICKmIyrIBEPHpoeAC', 'event_callback': callback }); return false; } 

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      borderRadius: '25px',
      height: 50,
      width: theme.spacing(20),
      background: '#149bd0',
      '&:hover':{
          background: '#128dbe'
      }
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
      button:{
        margin: theme.spacing(1),
        borderRadius: '25px',
        height: '40px',
        width: theme.spacing(20),
        borderColor: 'black',
        marginBottom: '-53px',
        backgroundColor: '#149bd0',
      '&:hover':{
          background: '#128dbe'
      }
        
    }
}));





 const WhoWeAre=()=>{
    const classes = useStyles();
    const [values, setValues] = React.useState({
        needs: '',
        number: '',
        addInfo: ''
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
                    AddInfo: values.addInfo
                })
            })
            setValues({needs: '',  number: '', addInfo: ''});
           
            
        }catch(e){
            console.log(e)
        }
    }

 
    const classess = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose =  () => {
      
        setOpen(false);
          handleSubmit();
       
    };
    


    
    

    return (
        <div className="who-we-are">
            <div className="back-1" ></div>
            <div className="content-tube">
                <div className="upper-block">
                    <div className="block-1">
                        <input className="bussiness-need "  type="text" placeholder="What does your business need?" onChange={ handleChange('needs') } value={ values.needs }  onFocus={(e) => e.target.placeholder = ""} 
                        onBlur={(e) => e.target.placeholder = "What does your business need?"} required={true} />
                    </div>
                    <div className="Line"></div>
                    <div className="block-2">
                        <input className="contact-num" type="text" placeholder="Contact number" onChange={ handleChange('number') }  value={ values.number } onFocus={(e) => e.target.placeholder = ""} 
                        onBlur={(e) => e.target.placeholder = "Contact number"} required />
                    </div>
                </div>
                <div className="bottom-block">
                    <Button size="medium" onClick={ handleOpen } color="primary" variant="contained" className={classes.button}>GET IT DONE</Button>
                </div>
                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={`${classess.modal} modal-size `}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={`${classess.paper} size`}>
          <div className="cross">

<button size="large" onClick={ handleClose }  variant="contained" className="cross1">X</button>
</div>
      <div className="modal-text">
      <h2 id="transition-modal-title">Thank you for getting in touch! </h2>
        <p id="transition-modal-title-2">
        We will initiate a whatsapp chat with you so we can take your service further.
        </p>
        <p id ="inner-text">
        To book a meeting with our sales representatives, please leave 3 date & time options below:
        </p>
      </div>
        <textarea
                        className="afterForm"
                        placeholder="Include a date time and zone"
                        onChange={handleChange('addInfo')}
                        margin="normal"
                        rows="20"
                        cols="2"
                        className={"contactus-input"}
                        />

<div className="bottom-block-2">
                    <Button size="medium" onClick={ handleClose } color="primary" variant="contained" className={classes.margin}>GET IT DONE</Button>
                </div>
          </div>
        </Fade>
      </Modal>
            </div>
        </div>
    );
    
}
 


export default WhoWeAre;