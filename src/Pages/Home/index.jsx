import React from "react";
import bannerImg1 from "../../Assets/bannerImg1.png"
import arrowIcon from "../../Assets/arrowIcon.png"
import Img1 from "../../Assets/Img1.png"
import Img2 from "../../Assets/Img2.png"
import Img3 from "../../Assets/Img3.png"
import Img4 from "../../Assets/Img4.png"
import fishImg from "../../Assets/fishImg.png"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const Home = () => {

  const RenderBannerOne = () => {
    return (
      <Box className="banner1_container">
        <Box className="sub_container">
          <Box className="section1">
            <Typography variant="h1">Central Texas<br />Fly Fishing</Typography>
            <Typography variant="body1" color="info">
              At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
            </Typography>
            <Button className="get_started_btn" variant="contained">Get started</Button>

          </Box>
          <Box className="section2">
            <img src={bannerImg1} className="bannerImg" />
          </Box>
        </Box>
      </Box>
    )
  }

  const RenderBannerTwo = () => {
    const AccordionDummyData = ["Explore Fly Fishing", "Fly Fishing Experiences", "Gear Up and Catch More"]
    const DummyContent = ({ title }) => {
      return (
        <AccordionDetails className="AccordionDetails">
          <Box className="img_container">
            <img src={fishImg} />
          </Box>
          <Box className="content_container">
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1" color="info">
              Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc
            </Typography>
            <Button className="btn_sm">Learn more</Button>
          </Box>
        </AccordionDetails>
      )
    }
    return (
      <Box className="banner2_container">
        <Box className="sub_container">
          <Box className="title_section">
            <Typography variant="h2">Featured options</Typography>
          </Box>
          <Box className="accordian_section">
            {AccordionDummyData.map((title, index) => (
              <Accordion className="Accordion" defaultExpanded={Boolean(index == 0)}>
                <AccordionSummary
                  expandIcon={<img src={arrowIcon} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="AccordionSummary"
                >
                  <Typography variant="body1">{title}</Typography>
                </AccordionSummary>
                <DummyContent title={title} />
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    )
  }

  const RenderBannerThree = () => {
    const DummyCardData = [
      {
        img: Img1,
        title: "John’s Story",
        description: "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh"
      },
      {
        img: Img2,
        title: "The Journey",
        description: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc"
      },
      {
        img: Img3,
        title: "Catch Day",
        description: "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque"
      },
      {
        img: Img4,
        title: "Trout Tales",
        description: "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed"
      }
    ]
    const Card = ({ Record }) => (
      <Box className="card_container">
        <Box className="section1">
          <img src={Record.img} />
        </Box>
        <Box className="section2">
          <Typography variant="caption">{Record.title}</Typography>
          <Typography variant="subtitle1">
            {Record.description}
          </Typography>
          <Button className="btn_sm mt_12">Read more</Button>
        </Box>
      </Box>
    )
    return (
      <Box className="banner3_container">
        <Box className="sub_container">
          <Box className="title_box">
            <Typography variant="h2">Member stories</Typography>
          </Box>
          <Box className="card_wrapper">
            {DummyCardData.map((Record) => (<Card Record={Record} />))}
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <StyleProvider>
      <Header />
      <RenderBannerOne />
      <RenderBannerTwo />
      <RenderBannerThree />
      <Footer />
    </StyleProvider>
  );
};

export default Home;

const StyleProvider = styled(Box)({
  "& .banner1_container": {
    height: "466px",
    width: "100%",
    display: "grid",
    placeItems: "center",
    "& .sub_container": {
      width: "71.11%",
      height: "306px",
      display: 'flex',
      justifyContent: "space-between",
      gap: "24px"
    },
    "& .section1": {
      width: "58.6%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "24px 0"
    },
    "& .get_started_btn": {
      background: "#514432",
      width: "111px",
      height: "40px",
      padding: "0",
      boxShadow: "none"
    },
    "& .bannerImg": {
      width: "400px",
      height: "300px",
    }
  },
  "& .banner2_container": {
    height: "auto",
    width: "100%",
    display: "grid",
    placeItems: "center",
    background: "#F1ECE1",
    "& .sub_container": {
      width: "71.11%",
      margin: "80px 0",
      height: "auto",
      display: 'flex',
      flexDirection: "column",
      gap: "24px"
    },
    "& .Accordion": {
      background: "#F1ECE1",
      borderRadius: "0",
      boxShadow: "none"
    },
    "& .AccordionSummary": {
      background: "#F1ECE1",
      borderBottom: "1px solid #969491",
      padding: "0",
      minHeight: "unset"
    },
    "& .MuiAccordionSummary-content": {
      "&.Mui-expanded": {
        margin: "12px 0"
      }
    },
    "& .AccordionDetails": {
      padding: "0",
      display: "flex"
    },
    "& .img_container": {

    },
    "& .content_container": {
      padding: "24px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  },
  "& .banner3_container": {
    height: "auto",
    width: "100%",
    display: "grid",
    placeItems: "center",
    "& .sub_container": {
      width: "71.11%",
      margin: "80px 0",
      height: "auto",
      display: 'flex',
      flexDirection: "column",
      gap: "24px"
    },
    "& .title_box": {

    },
    "& .card_wrapper": {
      display: "flex",
      gap: "47.9px",
      flexWrap: "wrap"
    },
    "& .card_container": {
      display: "flex",
      height: "200px",
      width: "47.66%"
    },
    "& .section1": {

    },
    "& .section2": {
      padding: "0 24px",
      display: "flex",
      gap: "4px",
      flexDirection: "column"
    },
  },
  "& .btn_sm": {
    background: "#DFDEDD",
    width: "fit-content",
    color: '#1C1812',
    padding: "4px 8px",
    boxShadow: "none",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px"
  },
  "& .mt_12": {
    marginTop: "12px"
  }
});