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
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, Divider } from '@mui/material';

const Home = () => {
  const md = useMediaQuery((theme) => theme.breakpoints.up('md'));


  const RenderBannerOne = () => {
    return (
      <Box className="banner1_container">
        <Box className="sub_container">
          <Box className="section1">
            <Typography variant={md ? 'h1' : 'h3'}>Central Texas<br />Fly Fishing</Typography>
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
          <img src={fishImg} className="banner2_img" />
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
          <Box className="content_section">
            {AccordionDummyData.map((title, index) => (
              <>
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
                <Box className="banner2_card_md_wrapper">
                  <Box className="card_container" style={{ backgroundImage: `url(${fishImg})` }}>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body1" color="info">
                      Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc
                    </Typography>
                    <Button className="btn_sm">Learn more</Button>
                  </Box>
                </Box>
              </>
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
    const Card = ({ Record, index }) => (
      <>
        {index == 0 && <Divider color="#C6C5C3" width="100%" className="divider" />}
        <Box className="card_container">
          <img src={Record.img} className="section1_img" />
          <Typography variant="caption" className="title_md">{Record.title}</Typography>
          <Box className="section2">
            <Typography variant="caption" className="title">{Record.title}</Typography>
            <img src={Record.img} className="section1_img_md" />
            <Typography variant="subtitle1">
              {Record.description}
            </Typography>
            <Button className="btn_sm mt_12 btn_lg">Read more</Button>
          </Box>
          <Button className="btn_sm mt_12 btn_md">Read more</Button>
        </Box>
        <Divider color="#C6C5C3" width="100%" className="divider" />
      </>
    )
    return (
      <Box className="banner3_container">
        <Box className="sub_container">
          <Box className="title_box">
            <Typography variant="h2">Member stories</Typography>
          </Box>
          <Box className="card_wrapper">
            {DummyCardData.map((Record, index) => (<Card Record={Record} index={index} />))}
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
    height: "auto",
    width: "100%",
    display: "grid",
    placeItems: "center",
    "& .sub_container": {
      width: "71.11%",
      margin: "128px 0 80px 0",
      height: "auto",
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
      width: "100%",

    },
    "@media (max-width: 768px)": {
      "& .sub_container": {
        width: "100%",
        flexDirection: 'column-reverse',
        alignItems: 'center',
        gap: '0px',
        margin: "48px 0 0px 0",
      },
      "& .section1": {
        padding: "40px 0",
        width: '89.1%'
      },
      "& .section2": {
        width: '100%'
      },
      "& .bannerImg": {
        width: "100%",
        height: "auto",
        maxHeight: "400px",
      },
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
    "& .content_section": {},
    "& .banner2_card_md_wrapper": {
      display: "none",
    },
    "& .Accordion": {
      background: "#F1ECE1",
      borderRadius: "0",
      boxShadow: "none",
      margin: "0",
      "&::before": {
        content: "none"
      }
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
    "& .banner2_img": {
      width: "39.1%",
    },
    "& .content_container": {
      padding: "24px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    },
    "& .card_container": {
      width: "100%",
      height: "auto",
      backgroundColor: "rgba(241, 236, 225, 0.7)",
      backgroundBlendMode: "overlay",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    },
    "@media (max-width: 768px)": {
      "& .sub_container": {
        width: "89.1%",
        margin: "40px 0",
      },
      "& .Accordion": {
        display: "none"
      },
      "& .banner2_card_md_wrapper": {
        display: "block"
      },
      "& .content_section": {
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }
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
    "& .section1_img": {
      width: "41%"
    },
    "& .section1_img_md": {
      display: "none"
    },
    "& .title_md": {
      display: "none"
    },
    "& .title": {
      display: "block"
    },
    "& .btn_lg": {
      display: "block"
    },
    "& .btn_md": {
      display: "none",
      border: "1px solid #969491",
      background: "unset"
    },
    "& .section2": {
      width: "59%",
      padding: "0 24px",
      display: "flex",
      gap: "4px",
      flexDirection: "column"
    },
    "& .divider": {
      display: "none"
    },
    "@media (max-width: 1439px)": {
      "& .sub_container": {
        margin: "40px 0",
      },
      "& .card_container": {
        width: "100%"
      },
      "& .divider": {
        display: "block"
      }
    },
    "@media (max-width: 768px)": {
      "& .card_wrapper": {
        gap: "32px",
      },
      "& .section1_img": {
        display: "none"
      },
      "& .section1_img_md": {
        display: "block",
        width: "25.51%",
        minWidth: "100px"
      },
      "& .title_md": {
        display: "block"
      },
      "& .title": {
        display: "none"
      },
      "& .card_container": {
        flexDirection: "column",
        height: "auto"
      },
      "& .section2": {
        width: "100%",
        padding: "0",
        gap: "16px",
        flexDirection: "row"
      },
      "& .btn_lg": {
        display: "none"
      },
      "& .btn_md": {
        display: "block"
      },
    }
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