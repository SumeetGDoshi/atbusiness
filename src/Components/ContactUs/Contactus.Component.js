import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './Contactus.css';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '70%'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      fontSize: '1.5rem'
    },
    button :{

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
}));

function Contactus(props){
    const classes = useStyles();
    const classess = useStyles();
    const applyClasses = props.applyClasses;
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        number: '',
        addInfo2: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const submitForm = async event => {
        try{
            let result = await fetch("https://at.social/api/admin/contact_us_next", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    contact: values.number,
                    AddInfo: values.addInfo2
                })
            })
            setValues({name: '', email: '', number: '', addInfo2: ''})
        }catch(e){
            console.log(e)  
        }
        
    }

   
    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);
      };
  
    const handleClose = () => {
      setOpen(false);
    submitForm();
    }

    return(
        <div className={applyClasses.container}>
            <div className={applyClasses.containerLeft}>
                {/* <img src={} className="contact-left-image"/> */}
            </div>
            <div className={applyClasses.containerRight}>
                <h2>have us reach you</h2>
                <form autoComplete="off" className={classes.container} onSubmit={ handleOpen }>
                    <TextField
                        placeholder="name"
                        fullWidth
                        onChange={handleChange('name')}
                        margin="normal"
                        value={values.name}
                        className={"contactus-input"}
                        onFocus={(e) => e.target.placeholder = ""} 
                        onBlur={(e) => e.target.placeholder = "name"} 
                        required
                        />

                    <TextField
                        placeholder="contact number"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="tel"
                        className={"contactus-input"}
                        onChange={handleChange('number')}
                        value={values.number}
                        onFocus={(e) => e.target.placeholder = ""} 
                        onBlur={(e) => e.target.placeholder = "Contact number"} 
                        required={true}
                        />
                    <TextField
                        placeholder="email address"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="email"
                        className={"contactus-input"}
                        onChange={handleChange('email')}
                        value={values.email}
                        onFocus={(e) => e.target.placeholder = ""} 
                        onBlur={(e) => e.target.placeholder = "email address"} 
                        required
                        />
                    <div className="bottom-block">
                        <Button size="medium" color="primary" variant="contained" className={classes.button} onClick={ handleOpen }>Submit</Button>
                    </div>
                    <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={`${classess.modal} `}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                            
                        <Fade in={open}>
                        <div className={`${classess.paper}  ${applyClasses.ModalSize} size  `}>
                            <div className="cross">

                                <button size="medium" onClick={ handleClose }  variant="contained" className={`cross1`}>X</button>
                            </div>
                            <div className="modal-text">
                                <h2 id="transition-modal-title">Thank you for getting in touch! </h2>
                                <p id="transition-modal-title-2"> We will initiate a whatsapp chat with you so we can take your service further.</p>
                                <p id ="inner-text">
                                    To book a meeting with our sales representatives, please leave 3 date & time options below:
                                </p>
                            </div>
                            <textarea
                                className="afterForm contactus-input "
                                placeholder="Include a date time and zone"
                                onChange={handleChange('addInfo2')}
                                margin="normal"
                                rows="20"
                                cols="10"
                                required
                                />
                            <div className="bottom-block">
                                <Button size="medium" onClick={ handleClose }  variant="contained" className={`${classes.margin} buttonn`}>GET IT DONE</Button>
                            </div>
                        </div>
                        </Fade>
                    </Modal>
                </form>
            </div>
        </div>
    )
}

export default Contactus;