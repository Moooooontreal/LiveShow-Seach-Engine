import React, { Component } from 'react'
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Favorite, CloudCircle } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";
import SearchResultItem from "../components/SearchResultItem";
import SearchResult from "../components/SearchResult";
import { Switch, Route } from 'react-router-dom';
import TagList from '../components/TagList';
import TagResult from '../components/TagResult';
import TagCloud from '../components/TagCloud';
import ScrollTop from '../components/ScrollTop';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Column, Item, Row } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import Icon1 from '../assets/images/1.png'
import Icon2 from '../assets/images/2.png'
import Icon3 from '../assets/images/3.png'
import Icon4 from '../assets/images/4.png'
import Icon5 from '../assets/images/5.png'
import Icon6 from '../assets/images/6.png'
import Icon7 from '../assets/images/7.png'
import Icon8 from '../assets/images/8.png'
import Icon9 from '../assets/images/9.png'
import Api from "../components/Api";
import NationalResultCard from "../components/NationalResultCard";
import InfoResultCard from "../components/InfoResultCard";
import Pagination from "material-ui-flat-pagination";
import ItemCard from "../components/ItemCard";
import TablePanel from "../components/TablePanel";
import axios from "axios";

const style = theme => ({
  main: {
    backgroundColor: '#ffffff',
    minHeight: '100%',
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0
  },
  root: {
    maxWidth: 304,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  cardContent: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
  wrapper: {
    padding: '100px 35px 35px 35px',
    [theme.breakpoints.down("xs")]: {
      padding: "10px 10px"
    },
    margin: '25px 25px'
  },
  navBar: {
    backgroundColor: 'transparent',
    boxShadow: '0 0 0 0',
    padding: '20px',
  },
  head: {
    padding: theme.spacing(5)
  },
  searchInfo: {
    padding: theme.spacing(5),
    height: '200px',
  },
  additionalInfo: {
    padding: theme.spacing(5),
    minHeight: '650px',
  },
  inline: {
    display: 'inline',
  },
  line: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(5),
  },
  card: {
    padding: theme.spacing(3),
    backgroundColor: '#ffffff',
    height: '150px',
  },
  sider: {

  },
  // filter: {
  //   height: '50px',
  //   width: '50%'
  // },
  pagination: {
    marginLeft: theme.spacing(6),
    margin: '20px auto',
    display: 'center'
  },
  footer: {
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#000000',
    height: '30px',
    backgroundColor: '#FFFFFF',
    bottom: 0
  },
  loveIcon: {
    fontSize: '1rem',
    padding: '2px 5px'
  },
  columnRow: {
    margin:'0px 0px 10px 0px',
    alignItems: 'center'
  },
  rankIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight:  theme.spacing(1),
    marginTop:  '-7px',
    zIndex: 10000
  },
  textField:{
    marginBottom: theme.spacing(3)
  },
});

const PersonItem = ({ src, name}) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 85});
  return (
        <Item style={{marginTop: '-30px'}}>
          <Avatar classes={avatarStyles} src={src} />
          <div  style={{marginTop:"8px",textAlign:'center'}}>{name.length>6?name.toString().substring(0,5)+"...":name}</div>
        </Item>
  );
}

// const data1=[{"id":50001756,"url":"https://dongqiudi.com/team/50001756.html","birthYear":1899,"country":"西班牙","city":"巴塞罗那","stadium":"诺坎普球场","audience":99787,"phone":"+34 (902) 189900","email":"oab@club.fcbarcelona.com","name":"巴塞罗那","englishName":"Barcelona","address":"Avenida de Arístides Maillol"}]
class ResultPage extends Component {
  state = {
    query:{
      input: this.props.match.params.input,
      time: 0,
      searchParams: { "isAdvanced": false},
    },
    page: 1,
    data: [],
    offset: 0,
    total: 0,
    loading: true,
  }

  componentDidMount() {
    if(this.state.query)
      this.fetchData(this.state.query, 1);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.input &&
    (this.props.match.params.input !== nextProps.match.params.input)) {
      this.setState({
        query:{
          input:nextProps.match.params.input,
          time:this.state.time,
          searchParams:this.state.searchParams
        },
        page: 1,
        offset: 0,
        loading: true
      }, () => {
        this.fetchData(this.state.query, 1);
      })
    }
  }

  fetchData = (query, page=1) => {
    const input = query.input;
    const searchParams = query.searchParams;
    const time = query.time || 0;
    let api = Api.searchAll;

    let url = api + input+ "/" +page;
    // const url = `http://10.214.213.43:9999/search?key=${input}&catalog=${catalog}&page=${page}&size=${pageSize}&delta=${time}`;
    console.log(url);
    if (input) {
      // fetch(url)
      //     .then(res => res.json())
      //     .then((json) => {
      //       console.log(json);
      //       this.setState({
      //         data: json.totalDataList,
      //         total: json.searchInfo.totalNum,
      //         loading: false
      //
      //       })
      //     })
      this.setState({
                data: [{'name': '收到反馈和'}, {'name': '收到反馈和'}, {'name': '收到反馈和'}],
                total: 3/*json.searchInfo.totalNum*/,
                loading: false

              })
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

  changePage = (offset) => {
    const page = 1 + offset / 10;
    this.setState({
      offset: offset,

      page: page,
      loading: true
    });
    this.fetchData(this.state.query, page);
  }

  changeSearchParams = (searchParams) => {
    const query={
      input: this.props.match.params.input,
      time: this.state.time,
      //这样相当于重新搜fetch一遍 没必要 只需要对拿到的大json数组再处理一次
      searchParams: searchParams
    }
    this.fetchData(query, 1);
    this.setState({
      query,
      page: 1,
      offset: 0,
    })
  }

  changeTime = (time) => {
    this.setState({time});
    // console.log("time", time);
  }
  render() {
    const {classes} = this.props;
    const data = this.state.data;
    const total = this.state.total;
    const singers = [
      {
        "id":752232,
        "name":"毛不易",
        "avatar":"https://s2.showstart.com/qn_8fefe278497a4465ad9fec475418bd20_357_357_200611.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":52771,
        "name":"黑豹乐队",
        "avatar":"https://s2.showstart.com/img/2021/1015/13/00/5b69c725f7954328929008038eff9a5d_800_800_1095962.0x0.png",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":2503,
        "name":"刺猬Hedgehog",
        "avatar":"https://s2.showstart.com/img/2022/0111/15/30/499adb1fee5a4c60ab9fa27e7c904752_800_800_998322.0x0.png",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":4578016,
        "name":"气运联盟赵珂",
        "avatar":"https://s2.showstart.com/img/2020/1108/11/30/d428951261774174a00544d3eef1ef59_640_640_406695.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":7477756,
        "name":"气运联盟马哲",
        "avatar":"https://s2.showstart.com/img/2021/1227/11/00/a4d14700257c421abfb117776565935c_800_800_261601.0x0.png",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":6238181,
        "name":"气运联盟胡宇桐",
        "avatar":"https://s2.showstart.com/img/2021/0606/11/30/51ae9fec15ff4298ad98882f1c17e7d3_800_800_1151721.0x0.png",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":2491397,
        "name":"橘子海 Orange Ocean",
        "avatar":"https://s2.showstart.com/img/2019/20190705/6a85c900dbea405ebf8e7e8827e572b7_190_190_4347.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":241498,
        "name":"康姆士",
        "avatar":"https://s2.showstart.com/img/2022/0111/16/00/99e0fa921a814649ba196cb5c3561ad5_800_800_646961.0x0.png",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":2685,
        "name":"丢火车乐队",
        "avatar":"https://s2.showstart.com/img/2020/0825/13/30/726737d406bc42e893e967f7942bce19_800_800_152356.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":24149,
        "name":"棱镜",
        "avatar":"https://s2.showstart.com/img/2022/0111/16/00/38ff7be5f0684d999712b3e6c3e37a04_800_800_86979.0x0.png",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":955622,
        "name":"回春丹乐队",
        "avatar":"https://s2.showstart.com/img/2020/0720/19/30/dd2a93c33b844bcf9ad0e0cd9d95d213_1440_1080_1419851.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":11352,
        "name":"夏日入侵企画",
        "avatar":"https://s2.showstart.com/qn_5dcd2e9943c14e78a6f50b9286ed7131_190_190_53032.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":1403903,
        "name":"霓虹花园",
        "avatar":"https://s2.showstart.com/img/2019/20190812/052f7220ac224b229bb0cd1da0bbab3c_190_190_8408.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":694548,
        "name":"柳爽",
        "avatar":"https://s2.showstart.com/img/2020/1225/00/00/4a62ea851c6347e8aecb3c8aef66e888_800_800_61313.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":601949,
        "name":"ColorfulBar 彩文",
        "avatar":"https://s2.showstart.com/img/2021/1208/17/30/b980f5c0703e4ed4b48a4d0410baa60a_800_800_707606.0x0.png",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":3109728,
        "name":"帆布小镇",
        "avatar":"https://s2.showstart.com/img/2019/20191003/2233d65667ff47caa48cff48403cced4_190_190_5249.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":2271748,
        "name":"散人",
        "avatar":"https://s2.showstart.com/img/2021/0705/16/30/cae682e66e7d43109087c9b9b424e489_800_800_61682.0x0.png",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":84953,
        "name":"时间不够以后",
        "avatar":"https://s2.showstart.com/img/2020/20200101/2e38e695764b4d7ea459944f8d60d6de_190_190_20399.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      },
      {
        "id":3040228,
        "name":"派对间谍PartySpy",
        "avatar":"https://s2.showstart.com/img/2020/20200707/bf4b78e245054e3bb4762823dee53b44_190_190_3653.0x0.jpg",
        "userType":2,
        "activityRoleType":2,
        "isCollect":0
      }
    ]
    console.log(9999, data)
    return (

      <div className={classes.main}>
        {/*<NavBar className={classes.navBar}/>*/}
        <div className={classes.wrapper}>
          {/*<Grid container spacing={4} className={classes.content}>*/}
          {/*  <Grid item xs={12} sm={3} md={2} className={classes.sider}>*/}
          {/*    /!*<SideBar input={input} changeCatalog={this.changeCatalog} />*!/*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={12} sm={6} md={7}>*/}
          {/*    <Switch>*/}
          {/*      <Route path="/search/query/:input"*/}
          {/*        render={() => <SearchResult query={{"input": input, "catalog": catalog, "time": time }}/>}*/}
          {/*      />*/}
          {/*      <Route path="/search/tags/all" component={TagList} />*/}
          {/*      <Route path="/search/tags/:tag" component={TagResult} />*/}
          {/*    </Switch>*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={12} sm={3} md={3} className={classes.sider}>*/}
          {/*    { this.props.location.pathname.indexOf("tags") < 0 &&*/}
          {/*      <Filter changeTime={this.changeTime} />*/}
          {/*    }*/}
          {/*    <Typography variant="subtitle1" component="h2" style={{color: '#7D7D7D', margin:'25px 0'}}>*/}
          {/*      <CloudCircle /> 标签词云*/}
          {/*    </Typography>*/}
          {/*    <TagCloud />*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
          {/*<ScrollTop />*/}
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <TablePanel changeSearchParams={this.changeSearchParams
              }/>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid container xs={8}>
              { data.map((item, index) => (
                  <Grid container xs={12}>
                    <Grid container xs={12}>
                      <Grid item  xs>
                        <div className={classes.card} style={index?{marginBottom:'40px', marginTop:'10px'}:{marginBottom:'40px',marginTop:'10px'}}>
                          {<NationalResultCard data={{info: item, imgURL: item.imgURL,show:1}}/>}
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container xs={12} style={{height:'10px'}}>
                      <Grid xs >
                        <div className={classes.line}>
                          <Divider />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
              ))}
              { total<5?(
                  <Grid container xs={12}>
                    <Grid container xs={12}>
                      <Grid item  xs>
                        <div className={classes.card} style={{marginBottom:'20px',marginTop:'20px'}}/>
                      </Grid>
                    </Grid>
                    <Grid container xs={12}>
                      <Grid item  xs>
                        <div className={classes.card} style={{marginBottom:'20px',marginTop:'20px'}}/>
                      </Grid>
                    </Grid>
                  </Grid>):''
              }
            </Grid>
            <Grid item xs>
              <Card className={classes.additionalInfo} style={{paddingTop:'6px',paddingLeft:'6px'}}>
                <CardContent >

                  <Typography variant="h6" component="h5" style={{ marginBottom:"15px"}}>
                    独立乐队榜
                  </Typography>
                  <Box style={{display:'flex', justifyContent:'space-between' ,marginBottom:'20px'}}>
                    <Box>
                      <Avatar src={Icon1} className={classes.rankIcon} />
                      <PersonItem name={'刺猬Hedgehog'} src={' https:\\\\s2.showstart.com\\img\\2022\\0111\\15\\30\\499adb1fee5a4c60ab9fa27e7c904752_800_800_998322.0x0.png'}/>
                    </Box>
                    <Box >
                      <Avatar src={Icon2} className={classes.rankIcon} />
                      <PersonItem name={'橘子海 Orange Ocean'}src={' https:\\\\s2.showstart.com\\img\\2019\\20190705\\6a85c900dbea405ebf8e7e8827e572b7_190_190_4347.0x0.jpg'} />
                    </Box>
                    <Box>
                      <Avatar src={Icon3} className={classes.rankIcon} />
                      <PersonItem name={'白皮书'} src={' https:\\\\s2.showstart.com\\img\\2021\\1122\\15\\30\\da7602b3889e443985640d3395eff71f_800_800_80187.0x0.png'} />
                    </Box>
                  </Box>
                  <Box style={{display:'flex', justifyContent:'space-between'}}>
                    <Box>
                      <Avatar src={Icon4} className={classes.rankIcon} />
                      <PersonItem name={'椅子乐团 The Chairs'} src={' https:\\\\s2.showstart.com\\img\\2022\\0516\\16\\00\\1f849fceccdb49799e653629fb117423_800_800_907421.0x0.png'} />
                    </Box>
                    <Box >
                      <Avatar src={Icon5} className={classes.rankIcon} />
                      <PersonItem name={'Deca joins'}src={' https:\\\\s2.showstart.com\\qn_20ef7ec4399241aaab014f6cb1aac553_1226_1226_2407956.0x0.jpg'} />
                    </Box>
                    <Box>
                      <Avatar src={Icon6} className={classes.rankIcon} />
                      <PersonItem name={'法兹乐队'} src={' https:\\\\s2.showstart.com\\img\\2018\\20181128\\e10e701d2fa84d83b8db9a8a17964ea2_190_190_4016.0x0.jpg'} />
                    </Box>
                  </Box>
                  <Typography variant="h6" component="h5" style={{ marginTop: '20px',marginBottom:"15px"}}>
                    摇滚乐队榜
                  </Typography>
                  <Box style={{display:'flex', justifyContent:'space-between' ,marginBottom:'20px'}}>
                    <Box>
                      <Avatar src={Icon1} className={classes.rankIcon} />
                      <PersonItem name={'霓虹花园'} src={' https:\\\\s2.showstart.com\\img\\2019\\20190812\\052f7220ac224b229bb0cd1da0bbab3c_190_190_8408.0x0.jpg'}/>
                    </Box>
                    <Box >
                      <Avatar src={Icon2} className={classes.rankIcon} />
                      <PersonItem name={'康姆士'}src={' https:\\\\s2.showstart.com\\img\\2022\\0111\\16\\00\\99e0fa921a814649ba196cb5c3561ad5_800_800_646961.0x0.png'} />
                    </Box>
                    <Box>
                      <Avatar src={Icon3} className={classes.rankIcon} />
                      <PersonItem name={'痛仰'} src={' https:\\\\s2.showstart.com\\img\\2022\\0408\\15\\30\\d454319b49c64575ba8ccfab224fb994_800_800_673580.0x0.png'} />
                    </Box>
                  </Box>
                  <Box style={{display:'flex', justifyContent:'space-between'}}>
                    <Box>
                      <Avatar src={Icon4} className={classes.rankIcon} />
                      <PersonItem name={'回春丹乐队'} src={' https:\\\\s2.showstart.com\\img\\2020\\0720\\19\\30\\dd2a93c33b844bcf9ad0e0cd9d95d213_1440_1080_1419851.0x0.jpg'} />
                    </Box>
                    <Box >
                      <Avatar src={Icon5} className={classes.rankIcon} />
                      <PersonItem name={'夏日入侵企画'}src={' https:\\\\s2.showstart.com\\qn_5dcd2e9943c14e78a6f50b9286ed7131_190_190_53032.0x0.jpg'} />
                    </Box>
                    <Box>
                      <Avatar src={Icon6} className={classes.rankIcon} />
                      <PersonItem name={'二手玫瑰乐队'} src={' https:\\\\s2.showstart.com\\img\\2019\\20190518\\7bb40ba21934460cb166102c4fc97c62_540_540_77159.0x0.jpg'} />
                    </Box>
                  </Box>
                  <Typography variant="h6" component="h5" style={{marginTop: '20px',marginBottom:"15px"}}>
                    演出推荐
                  </Typography>
                  <Box style={{display:'flex', justifyContent:'space-between' ,marginBottom:'20px'}}>
                    <Box>
                      <Avatar src={Icon1} className={classes.rankIcon} />
                      <PersonItem name={'里卡多·洛佩斯'} src={'https://i.pravatar.cc/300?img=10'}/>
                    </Box>
                    <Box >
                      <Avatar src={Icon2} className={classes.rankIcon} />
                      <PersonItem name={'阿瑙托维奇'}src={'https://i.pravatar.cc/300?img=20'} />
                    </Box>
                    <Box>
                      <Avatar src={Icon3} className={classes.rankIcon} />
                      <PersonItem name={'卡尔德克'} src={'https://i.pravatar.cc/300?img=30'} />
                    </Box>
                  </Box>
                  <Box style={{display:'flex', justifyContent:'space-between'}}>
                    <Box>
                      <Avatar src={Icon4} className={classes.rankIcon} />
                      <PersonItem name={'里卡多洛佩'} src={'https://i.pravatar.cc/300?img=10'} />
                    </Box>
                    <Box >
                      <Avatar src={Icon5} className={classes.rankIcon} />
                      <PersonItem name={'阿瑙托维奇'}src={'https://i.pravatar.cc/300?img=20'} />
                    </Box>
                    <Box>
                      <Avatar src={Icon6} className={classes.rankIcon} />
                      <PersonItem name={'卡尔德克'} src={'https://i.pravatar.cc/300?img=30'} />
                    </Box>
                  </Box>
                  {/*<Typography variant="h6" component="h5" style={{ marginBottom:"15px"}}>*/}
                  {/*  最新资讯*/}
                  {/*</Typography>*/}
                  {/*<Column>*/}
                  {/*  <Row className={classes.columnRow}>*/}
                  {/*    <Avatar src={Icon1} className={classes.rankIcon} />*/}
                  {/*    <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150725.html'}>前长沙金德主帅日瓦蒂诺维奇去世</a>*/}
                  {/*  </Row>*/}
                  {/*  <Row className={classes.columnRow}>*/}
                  {/*    <Avatar src={Icon2} className={classes.rankIcon} />*/}
                  {/*    <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150618.html'}>天津球迷向卡达尔送去鲜花</a>*/}
                  {/*  </Row>*/}
                  {/*  <Row className={classes.columnRow}>*/}
                  {/*    <Avatar src={Icon3} className={classes.rankIcon} />*/}
                  {/*    <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150966.html'}>大连人女足2021女甲联赛名单</a>*/}
                  {/*  </Row>*/}
                  {/*  <Row className={classes.columnRow}>*/}
                  {/*    <Avatar src={Icon4} className={classes.rankIcon} />*/}
                  {/*    <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2151002.html'}>集锦丨友谊赛：帕德博恩3-1门兴</a>*/}
                  {/*  </Row>*/}
                  {/*  <Row className={classes.columnRow}>*/}
                  {/*    <Avatar src={Icon5} className={classes.rankIcon} />*/}
                  {/*    <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2151107.html'}>米兰为凯西续约提出“超级报价”</a>*/}
                  {/*  </Row>*/}
                  {/*  <Row className={classes.columnRow}>*/}
                  {/*    <Avatar src={Icon6} className={classes.rankIcon} />*/}
                  {/*    <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2151070.html'}>基耶利尼与凯恩拥抱致敬</a>*/}
                  {/*  </Row>*/}
                  {/*  <Row className={classes.columnRow}>*/}
                  {/*    <Avatar src={Icon7} className={classes.rankIcon} />*/}
                  {/*    <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2151162.html'}>明格萨：奥运会的目标是为金牌而战</a>*/}
                  {/*  </Row>*/}
                  {/*  <Row className={classes.columnRow}>*/}
                  {/*    <Avatar src={Icon8} className={classes.rankIcon} />*/}
                  {/*    <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150904.html'}>巴萨不考虑引进拉姆塞，球员的工资太高</a>*/}
                  {/*  </Row>*/}
                  {/*  <Row className={classes.columnRow}>*/}
                  {/*    <Avatar src={Icon9} className={classes.rankIcon} />*/}
                  {/*    <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150120.html'}>C罗将和尤文谈续约</a>*/}
                  {/*  </Row>*/}
                  {/*</Column>*/}
                  {/*<Divider style={{marginTop:'20px',marginBottom:'20px'}}/>*/}
                  {/*<Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>智能问答</Typography>*/}
                  {/*<TextField*/}
                  {/*    className={classes.textField}*/}
                  {/*    label="你问"*/}
                  {/*    variant="outlined"*/}
                  {/*    fullWidth={true}*/}
                  {/*    id="mui-theme-provider-outlined-input"*/}
                  {/*/>*/}
                  {/*<TextField*/}
                  {/*    className={classes.textField}*/}
                  {/*    label="我答"*/}
                  {/*    variant="outlined"*/}
                  {/*    fullWidth={true}*/}
                  {/*    id="mui-theme-provider-outlined-input"*/}
                  {/*/>*/}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className={classes.pagination}>
          <Pagination
              limit={10}
              offset={this.state.offset}
              total={total}
              onClick={(event, offset) => this.changePage(offset)}
              otherPageColor="default"
              currentPageColor="secondary"
          />
        </div>
        <footer className={classes.footer} >
          <Typography variant="body2" component="p" style={{marginTop: 5}}>
            Copyright © <a href={'https://github.com/Cheungki/KnowABall'} style={{color: 'black'}}>G03</a> @Zhejiang University. All Rights Reserved.
          </Typography>
        </footer>
      </div>
    )
  }
}

export default withStyles(style)(ResultPage);