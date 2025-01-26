import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import footerLogo from '../../Assets/footerLogo.png'
import linkedin from "../../Assets/linkedin.png"
import instaIcon from "../../Assets/instaIcon.png"
import faceBookIcon from "../../Assets/faceBookIcon.png"


const Footer = () => {
  return (
    <StyleProvider>
      <Box className="footer_container">
        <Box className="sub_container">
          <Box className="linkbar">
            <Box className="section1">
              <img src={footerLogo} />
              <Typography className='link' component={"a"} href='#'>FAQ</Typography>
              <Typography className='link' component={"a"} href='#'>Privacy</Typography>
              <Typography className='link' component={"a"} href='#'>Support</Typography>
              <Typography className='link' component={"a"} href='#'>Contact</Typography>
            </Box>

            <Box className="section2">
              <img src={faceBookIcon} />
              <img src={instaIcon} />
              <img src={linkedin} />
            </Box>
          </Box>

          <Box className="footer_text">
            <Typography align='center' variant='subtitle2' color='secondary'>
              © 2024 Central Texas Fly Fishing All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </StyleProvider>
  )
}

export default Footer

const StyleProvider = styled(Box)({
  "& .footer_container": {
    height: "142px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#1C1812",
    "& .sub_container": {
      width: "71.11%",
      gap: "36px",
      display: "flex",
      flexDirection: "column",
      padding: "24px 0"
    },
    "& .linkbar": {
      display: "flex",
      justifyContent: "space-between",
      height: "40px",
      width: "100%"
    },
    "& .section1": {
      display: "flex",
      gap: "24px",
      alignItems: "center",
    },
    "& .link": {
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: 400,
      color: "#F7F7F6"
    },
    "& .section2": {
      display: "flex",
      gap: "24px",
      alignItems: "center",
    },
  },
});
