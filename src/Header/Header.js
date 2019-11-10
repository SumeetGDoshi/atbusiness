import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import Logo from '../assets/businessLogo.png';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import './Header.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo:{
        textAlign: 'center'
    },
    
}));

function Header(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="whoarewe" 
                            spy={true} 
                            smooth={true} 
                            offset={100} 
                            duration={500}>
                        <span>who</span> <span>are we?</span>
                        </Link>
                        {/* <a href="#"><span>who</span> <span>are we?</span></a> */}
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="whatwedo" 
                            spy={true} 
                            smooth={true} 
                            offset={76} 
                            duration={500}>
                        <span>what</span><span> we do?</span>
                        </Link>
                        {/* <a href="#"><span>what</span><span> we do?</span></a> */}
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="howdowedoit" 
                            spy={true} 
                            smooth={true} 
                            offset={-20} 
                            duration={500}>
                        <span>how do we</span> <span>do it?</span>
                        </Link>
                        {/* <a href="#"><span>how do we</span> <span>do it?</span></a> */}
                    </li>
                    <li className={classes.logo} style={{ marginTop: -12 }}><a href="#">
                        <img src={Logo} width={137} height={188}/>
                    </a></li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="whatisatsocial" 
                            spy={true} 
                            smooth={true} 
                            offset={10} 
                            duration={500}>
                        <span>what is</span><span> at social?</span>
                        </Link>
                        {/* <a href="#"><span>what is</span><span> at social?</span></a></li> */}
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="otherservices" 
                            spy={true} 
                            smooth={true} 
                            offset={30} 
                            duration={500}>
                        <span>our</span> <span>services</span>
                        </Link>
                        {/* <a href="#"><span>our</span> <span>services</span></a></li> */}
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="contactus" 
                            spy={true} 
                            smooth={true} 
                            offset={30} 
                            duration={500}>
                        <span>contact</span> <span>us</span>
                        </Link>
                        {/* <a href="#"><span>contact</span> <span>us</span></a> */}
                    </li>
                </ul>
            </nav>
        </div>
    );
    
}

export default Header;