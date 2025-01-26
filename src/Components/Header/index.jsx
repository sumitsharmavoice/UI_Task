import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import logoIcon from "../../Assets/logoIcon.png";
import { MenuIcon } from '../../Assets/SvgIcons';
import { NavLink } from "react-router";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={NavLink} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={NavLink} to="/About_us">
                    <ListItemText primary="About Us" />
                </ListItem>
                <ListItem button component={NavLink} to="/Services">
                    <ListItemText primary="Services" />
                </ListItem>
                <ListItem button component={NavLink} to="/Contact">
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Box>
    );


    return (
        <StyleProvider>
            <Box className="header_container">
                <Box className="header_toolbar">
                    <Box className="header_section1">
                        <img className='dynamicLogo' src={logoIcon} alt="Logo" />
                        <Typography className='dynamicText' variant='h5'>Central Texas Fly Fishing</Typography>
                    </Box>

                    <Box className="header_section2">
                        <Box className="menuButton">
                            <IconButton onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box className="navLinkList">
                            <NavLink className="link_tone" to="/">Home</NavLink>
                            <NavLink className="link_tone" to="/About_us">About us</NavLink>
                            <NavLink className="link_tone" to="/Services">Services</NavLink>
                            <NavLink className="link_tone" to="/Contact">Contact</NavLink>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
        </StyleProvider>
    );
};

export default Header;

const StyleProvider = styled(Box)(({ theme }) => ({
    "& .header_container": {
        height: "56px",
        width: "100%",
        position: "fixed",
        zIndex: "100",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#fcfcfb",

        [theme.breakpoints.between('lg', 'xl')]: {
            height: "48px",
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: "44px",
        },
        [theme.breakpoints.down('md')]: {
            height: "40px",
        }
    },
    "& .header_toolbar": {
        width: "71.11%",
        height: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        [theme.breakpoints.between('lg', 'xl')]: {
            width: "75%",
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "80%",
        },
        [theme.breakpoints.down('md')]: {
            width: "90%",
        }
    },
    "& .header_section1": {
        display: "flex",
        alignItems: "center",
        gap: "12px",

        "& img": {
            maxWidth: "4.67rem",
            [theme.breakpoints.down('md')]: {
                maxWidth: "57px",
            }
        },
        "& .MuiTypography-h5": {
            fontSize: "1.25rem",
            [theme.breakpoints.down('md')]: {
                display: 'none',
            }
        },

    },
    "& .header_section2": {
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down('md')]: {
            gap: "16px",
        },
        "& .menuButton": {
            [theme.breakpoints.up('md')]: {
                display: 'none',
            }
        },
        "& .navLinkList": {
            display: 'flex',
            gap: '24px !important',
            [theme.breakpoints.down('md')]: {
                display: 'none',
            }
        }
    },
    "& .link_tone": {
        fontSize: '16px',
        fontWeight: 400,
        textDecoration: 'none',
        color: '#1C1812',
        transition: 'color 0.3s ease, text-decoration 0.3s ease',

        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },

        '&:hover': {
            textDecoration: 'underline',
            textUnderlineOffset: '8px',
            textDecorationThickness: '2px',
        },
        '&.active': {
            textDecoration: 'underline',
            textUnderlineOffset: '8px',
            textDecorationThickness: '2px',
        },
    },
    "& .drawer": {
        backgroundColor: "#fcfcfb"
    }
}));