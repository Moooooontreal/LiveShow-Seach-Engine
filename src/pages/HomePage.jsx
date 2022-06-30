import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FindInPage, Favorite } from '@material-ui/icons';
import backgroundImg from '../assets/images/bg1.jpg';
import SearchBar from '../components/SearchBar';
import logo from '../assets/images/logo.png';
import soccer from '../assets/images/soccer.svg'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {lightBlue} from "@material-ui/core/colors";


const style = theme => ({
  root: {
    height: '100%'
  },
  wrapper: {
    width: '100%',
    height: '100%',
    background: `url(${backgroundImg}) no-repeat center`,
    backgroundSize: 'cover',
    position: 'fixed'
  },
  title: {
    marginLeft: '280px',
    marginTop: '100px',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center'
  },
  navLinks: {
    marginLeft: 'auto',
    marginRight: '0'
  },
  linkItem: {
    margin: '0 10px'
  },
  navBar: {
    backgroundColor: 'transparent',
    color: "#ffffff",
    boxShadow: '0 0 0 0',
    padding: '20px 30px'
  },
  content: {
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slick: {
    width: '80%',
    margin: 'auto',
    position: 'flex',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  footer: {
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#ffffff',
    position: 'fixed',
    bottom: 20
  },
  loveIcon: {
    fontSize: '1rem',
    padding: '2px 5px'
  }
});

class HomePage extends React.Component {
  state = {
    input: "",
  }

  render() {
    const settings = {
      //详细的设置请查看官方API
      dots: true, //圆点显示（false隐藏）
      infinite: true, //无限的环绕内容
      autoplay: true, //自动播放，速度默认为（3000毫秒）
      lazyLoad: true,
      speed: 500 ,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2
    };
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <AppBar position="absolute" className={classes.navBar}>
            <Toolbar>
              {/*<img src={soccer} style={{width: 25,fill:'rgb(245,245,245)'}}/>*/}
              {/*<Typography variant="subtitle1" >*/}
              {/*  .               超全球员数据，海量比赛资讯*/}
              {/*</Typography>*/}

            </Toolbar>
          </AppBar>
          <div>
            <div className={classes.title}>
              <img src={logo} alt="techhub logo" style={{width: 120}}/>
              <SearchBar />
            </div>
          </div>
          <div className={classes.slick}>
            <Slider {...settings}>
              <div>
                <img src="https:\\s2.showstart.com\img\2021\0929\17\00\489f6a503b304df2b2d818caa4dec9f8_800_800_889425.0x0.png" alt="" width="400" height="400"/>
              </div>
              <div>
                <img src="https:\\s2.showstart.com\qn_20ef7ec4399241aaab014f6cb1aac553_1226_1226_2407956.0x0.jpg" alt="" width="400" height="400"/>
              </div>
              <div>
                <img src="https:\\s2.showstart.com\img\2021\1118\11\00\fd2020355a13471fb298e356bba36cde_800_800_937406.0x0.png" alt="" width="400" height="400"/>
              </div>
              <div>
                <img src="https:\\s2.showstart.com\qn_73a5dbdfaa374615ac3e1532110ae514_501_501_260297.0x0.jpg" alt="" width="400" height="400"/>
              </div>
              <div>
                <img src="https:\\s2.showstart.com\img\2018\20181128\e10e701d2fa84d83b8db9a8a17964ea2_190_190_4016.0x0.jpg" alt="" width="400" height="400"/>
              </div>

            </Slider>
          </div>
          <footer className={classes.footer} >
            <Typography variant="body2" component="p">
              Copyright © <a href={'https://www.baidu.com'} style={{color: 'white'}}>G03</a> @Zhejiang University. All Rights Reserved.
              {/*<InfoCircleOutlined />*/}
            </Typography>
          </footer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(HomePage);