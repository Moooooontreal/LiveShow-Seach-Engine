import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import axios from "axios";
import NavBar1 from "../components/NavBar1";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SearchResultItem from "../components/SearchResultItem";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from '@material-ui/core/Avatar';
import { Row, Column, Item } from '@mui-treasury/components/flex';
import {
    Info,
    InfoTitle,
    InfoSubtitle,
    InfoCaption,
} from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useTrendInfoStyles } from '@mui-treasury/styles/info/trend'
import { Radar, RadarChart, PolarGrid, Tooltip, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PlayerTable from "../components/PlayerTable";
import TransferTable from "../components/transferTable";
import InjureTable from "../components/InjureTable";
import transferPic from "../assets/images/transfer.svg";
import injurePic from "../assets/images/injure.svg";
import statPic from "../assets/images/stat.svg";
import kgraph from "../assets/images/tupu.svg"
import ReactWordcloud from "react-wordcloud";
import Graph from "react-graph-vis";
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";

const style = theme => ({
    main: {
        backgroundColor: '#ffffff',
        minHeight: '100%',
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0
    },
    navBar: {
        backgroundColor: 'transparent',
        boxShadow: '0 0 0 0',
        padding: '20px',
    },
    wrapper: {
        padding: '100px 35px 35px 35px',
        [theme.breakpoints.down("xs")]: {
            padding: "10px 10px"
        },
        margin: '25px 25px'
    },
    footer: {
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        color: '#000000',
        height: '30px',
        backgroundColor: '#FFFFFF',
        position: 'fixed',
        bottom: 0
    },
    table: {

    },
    line: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    infoCard: {
        padding: theme.spacing(3),
        backgroundColor: '#ffffff',
        height: '1200px',
    },
    statisticCard: {
        padding: theme.spacing(3)
    },
    kgCard: {
        padding: theme.spacing(5),
        marginTop: '-75px'
    },
})

const callbacks = {
    getWordTooltip: (word) =>
        `The word "${word.text}" appears ${word.value} times.`,
};
const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [20, 50],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
};

const graphOptions = {
    groups: {
        self: {
            color: { background: "#00FA9A", border: "#00FA9A" },
            // shape: "circle",
            scaling: { min: 20 }
        },
        teammate: {
            color: { background: "#ffa3a3", border: "#ffa3a3" },
            shapeProperties: { borderDashes: true },
            // shape: "box",
        },
        relation: {
            color: { background: "#a9d2a9", border: "#a9d2a9" },
            shapeProperties: { borderDashes: true },
            // shape: "ellipse"
        },
        team: {
            color: { background: "#98F5FF", border: "#98F5FF" },
            shapeProperties: { borderDashes: true },
            // shape: "box"
        },
        oldTeam: {
            color: { background: "#98F5FF", border: "#98F5FF" },
            shapeProperties: { borderDashes: true },
            // shape: "box"
        },
        injure: {
            color: { background: "#FF6347", border: "#FF6347" },
            shapeProperties: { borderDashes: true },
            // shape: "box"
        },
        honor: {
            color: { background: "#FFD700", border: "#FFD700" },
            shapeProperties: { borderDashes: true },
            // shape: "box"
        }
    },
    layout: {
        hierarchical: false
    },
    edges: {
        width: 2,
        font: { align: "bottom", strokeWidth: 3, strokeColor: "#ffffff" },
        color: {
            color: "#cccccc",
            highlight: "#aabbee",
            hover: "#aaaaaa",
            inherit: "both",
            opacity: 1
        },
        arrowStrikethrough: false,
        // font: '12px arial #ff0000',
        scaling: {
            min: 1,
            max: 10,
            label: true
        },
        smooth: {
            type: "continuous",
            forceDirection: "horizontal"
        }
    },
    nodes: {
        font: {
            size: 14
        },
        color: {
            hover: {
                border: '#D2E5FF',
                background: '#D2E5FF'
            }
        },
        shape: "dot",
        size: 15,
        scaling: {
            type: "incomingAndOutgoingConnections",
            min: 10,
            max: 60,
            label: {
                enabled: true,
                min: 20,
                max: 32
            }
        }
    },
    interaction:{
        hover: true,
        zoomView: false
    }
};

const events = {
    select: function(event) {
        let { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
    }
};

const PersonItem = ({ src, name, type, id }) => {
    const avatarStyles = useDynamicAvatarStyles({ size: 85});
    return (
        <Item>
            <Avatar classes={avatarStyles} src={src} />
            {
                type === 1 ? <div style={{marginTop:"8px",textAlign:'center'}}><a style={{textDecoration:'none'}} href={"/player/" + id}>{name.length>6?name.toString().substring(0,5)+"...":name}</a></div> : <div style={{marginTop:"8px",textAlign:'center'}}><a style={{textDecoration:'none'}} href={"/team/" + id}>{name.length>6?name.toString().substring(0,5)+"...":name}</a></div>
            }
        </Item>
    );
}

function AboutList(prams) {
    const about = prams.about ? prams.about : []
    const avatarStyles = useDynamicAvatarStyles({ size: 40 });
    return (
        <Box style={{display:'flex', justifyContent:'space-between' ,marginBottom:'20px'}}>
            {
                about.map((item) => (
                    <Box>
                        <PersonItem name={item.name} src={item.img_url} type={item.type} id={item.id}/>
                    </Box>
                ))
            }
        </Box>
    );
}

function NewsList(prams) {
    const news = prams.news
    const avatarStyles = useDynamicAvatarStyles({ size: 40 });
    return (
        <Column gap={2}>
            {
                news.map((item) => (
                    <Row>
                        <Item>
                            <Avatar
                                variant={'rounded'}
                                classes={avatarStyles}
                                src={item.img_urls}
                            />
                        </Item>
                        <Info useStyles={useTrendInfoStyles}>
                            <InfoTitle style={{alignItems: 'center'}}><a style={{textDecoration:'none'}} href={item.urls}>{item.titles}</a></InfoTitle>
                        </Info>
                    </Row>
                ))
            }
        </Column>
    );
}

const items1 = ['速度', '射门', '传球', '盘带', '防守', '力量']
const items2 = ['speed', 'shoot', 'pass', 'dribbling', 'defence', 'strength']

class PlayerPage extends Component {
    state = {
        input: this.props.match.params.input,
        info: {},
        data: [],
        score: 0,



        imgURL: "",
        matchData: [],
        injureData: [],
        hotWord: [],
        graph: {nodes: [], edges: []},
        loading: true,
        catalog: -1,
        news: [],
        time: 220,



        contents: '',
        styles: [],
        recentLives: [],
    }

    //test/find/梅西/0
    async componentWillMount() {
        //通过请求拿到跟演出人有关的所有信息并完成后端到前端数据格式的转换
        const that = this
        //api根据演出人id请求最近所有演出的数据
        await axios.get('/player/getAll/' + that.state.input)
            .then(function (response) {
                //需要查询最近演出 得到演出数组
                let data = response.data['lives'];
                //遍历数组得到展示数据


                that.setState({
                    info: response.data['playerBaseInfo'],
                    about: response.data['recommendList'],
                    transferData: response.data['playerTransferDataList'],
                    injureData: response.data['playerInjuredDataList'],
                    imgURL: response.data['imgURL'],

                    recentLives: response.data['']

                })
            })
            .catch(function (error) {
                console.log(error);
            });
        await axios.get('/player/hotWord/' + that.state.input)
            .then(function (response) {
                that.setState({
                    hotWord: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        await axios.get('/player/kg/' + that.state.input)
            .then(function (response) {
                that.setState({
                    graph: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        await axios.get('/player/news/' + that.state.input)
            .then(function (response) {
                that.setState({
                    news: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.match.params.input &&
            (this.props.match.params.input !== nextProps.match.params.input)) {
            this.setState({
                input: nextProps.match.params.input
            })
        }
    }

    render() {
        const {classes} = this.props;
        const { input, info, data, transferData, injureData, imgURL, hotWord, graph, score, news, about } = this.state;

        //mock数据
        let name = '万能青年旅店'
        let city = '石家庄'
        let styles = ['摇滚', '独立']
        let avatar = 'https:\\\\s2.showstart.com\\img\\2021\\1231\\14\\30\\cd45342dc49a42359760153ce382a2e2_800_800_454172.0x0.png'
        let poster = 'https:\\\\s2.showstart.com\\group1\\M00\\01\\14\\ChQyH1U4uTWAPfh7AAB9-Q0AIhE261.0x0.jpg'
        let contents = '这本是一个90年代的乐队。\n' +
            '\n' +
            '站在分割世界的桥\n' +
            '那会儿很多人在愤怒，包括后来的大骗子和假和尚。他们来自石家庄，*压抑的农贸市场。周围到处是忍耐和呐喊，但这些人玩的东西，却散发一些摸不着头脑的唯美气息。他们偏离了杀父和*，艺术和革命的正题，倒像莫名其妙丢失了家人的天才儿童，在奔向一个离石家庄太远的*。那时候他们还有个英文名字，the nico。以盲瓜theblind melon的女儿自命，布鲁斯，另类摇滚，略带阴柔的唱和咿咿呀呀，一群偏执变态的人，既是小屁孩也是糙汉，他们到底怎么冒出来的。一个迷案。 再后来，社会在洗牌，每把都玩得大，所谓覆巢之下，安有完卵。总之，简单的事情，全变复杂了，复杂的事情，\n' +
            '\n' +
            '乐队人员\n' +
            '全被简单处理了。放眼望去，早死的，文艺的，从良的，被慢慢消化的。他们当然不例外，从生活的狗洞里一点点钻出来，漫长的匍匐岁月，经历所有普通人的麻烦，所有敏感者的痛苦。 到头来他们还要再搞，搞音乐，幸甚至哉。名字变了，*青年旅店，全世界的青年都在，而且还被招待起来，妙到不靠谱。歌曲的架构越磨越长，极尽繁华之能事，一副梦醒后吾将上下求索的阵势，硬摇滚、前卫摇滚、爵士，胃口够大。另一方面，再大的气魄也遮不住揪心的细节，比如好听的旋律，茫然、倔强、保留童真的唱腔，还有那些歌词，尽是朦胧的理想和彻骨的经验，一半火焰一半海水。这是一言难尽的声音，诚实而且美。 时代列车滚滚碾过，不想给谁以喘息余地。顷刻间，他们显得土，显得慢了，显得不够直接，显得缺乏取悦他人的能力。他们竟然还敢唱中文，还挖掘自我的深处……无形中，他们跟借力打力的全球化唱了反调，跟排坐坐过家家的独立音乐生产线尿不到一个壶。但与此同时，你很难再见到这么意气、这么纯朴的情怀，这般裹挟在漫天的风尘之中仍不离其宗，忘情于街道天空，却又对阴沟水洼中的沉痛念念在兹的诗意。他们在脏水中完成洗礼。不知不觉间，他们成了迷人的怪物，中国新音乐的奇葩，外省青年的历史宝藏，未来无限的精神不动产。好，现在时间到了，去听这些超现实主义土鳖的心跳，去看他们牛逼闪闪的现场。这些个前仆后继的，经常要扫进历史垃圾堆的，曾经苍老而今风华正茂的身体和心灵，现在全部站起来了，成立了，活下去了，发光发热了，来到你面前了。\n' +
            '\n' +
            '豆瓣：*青年旅店\n' +
            '*\n' +
            '微博：@*青年旅店乐队'

        return (
            <div className={classes.main}>
                <NavBar1 className={classes.navBar} />
                <div className={classes.wrapper}>
                    <Grid container spacing={5}>
                        <Grid container xs={8}>
                            <Grid container xs={12}>
                                <Grid item xs>
                                    <div className={classes.infoCard}>
                                        <SearchResultItem data={{info: info, imgURL: avatar, show: 0, score: score}}/>
                                    </div>
                                    {/*<div className={classes.statisticCard}>*/}
                                    {/*    <Row>*/}
                                    {/*        <img src={statPic} style={{marginRight: '10px', height: '32px', width: '32px'}}/>*/}
                                    {/*        <Typography variant="h6" component="h5">*/}
                                    {/*            比赛数据*/}
                                    {/*        </Typography>*/}
                                    {/*    </Row>*/}
                                    {/*    <PlayerTable id={input}/>*/}
                                    {/*</div>*/}
                                    {/*<Divider className={classes.line}/>*/}
                                    {/*<div className={classes.statisticCard}>*/}
                                    {/*    <Row>*/}
                                    {/*        <img src={transferPic} style={{marginRight: '10px', height: '32px', width: '32px'}}/>*/}
                                    {/*        <Typography variant="h6" component="h5">*/}
                                    {/*            转会*/}
                                    {/*        </Typography>*/}
                                    {/*    </Row>*/}
                                    {/*    <TransferTable data={transferData}/>*/}
                                    {/*</div>*/}
                                    {/*<Divider className={classes.line}/>*/}
                                    {/*<div className={classes.statisticCard}>*/}
                                    {/*    <Row>*/}
                                    {/*        <img src={injurePic} style={{marginRight: '10px', height: '32px', width: '32px'}}/>*/}
                                    {/*        <Typography variant="h6" component="h5">*/}
                                    {/*            伤病*/}
                                    {/*        </Typography>*/}
                                    {/*    </Row>*/}
                                    {/*    <InjureTable data={injureData}/>*/}
                                    {/*</div>*/}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Card className={classes.additionalInfo} style={{paddingTop:'6px',paddingLeft:'6px'}}>
                                <CardContent >
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px"}}>
                                        {name}的热度分布图
                                    </Typography>
                                    <div style={{width: '335px', height: '335px', marginBottom: '30px'}}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                                <Tooltip />
                                                <PolarGrid />
                                                <PolarAngleAxis dataKey="item" />
                                                <PolarRadiusAxis/>
                                                <Radar name={info.name} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                            </RadarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <Divider className={classes.line}/>
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>
                                        {name}的粉丝分布图
                                    </Typography>
                                    <div style={{height: '300px', width: '100%'}}>
                                        <ReactWordcloud
                                            callbacks={callbacks}
                                            options={options}
                                            words={hotWord}
                                        />
                                    </div>
                                    <Divider className={classes.line}/>
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>
                                        {name} 最近演出
                                    </Typography>
                                    <AboutList about={about}/>
                                    <Divider className={classes.line}/>
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>
                                        {name}的最新动态
                                    </Typography>
                                    <NewsList news={news}/>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                {/*<div className={classes.kgCard}>*/}
                {/*    <Divider className={classes.line}/>*/}
                {/*    <div className={classes.statisticCard}>*/}
                {/*        <Row>*/}
                {/*            <img src={kgraph} style={{marginRight: '10px', height: '32px', width: '32px'}}/>*/}
                {/*            <Typography variant="h6" component="h5">*/}
                {/*                知识图谱*/}
                {/*            </Typography>*/}
                {/*        </Row>*/}
                {/*        <Card style={{ height: "1000px", marginTop: '30px' }}>*/}
                {/*            <Graph*/}
                {/*                graph={graph}*/}
                {/*                options={graphOptions}*/}
                {/*                events={events}*/}
                {/*                style={{ height: "100%", width: "100%", fontFamily: 'sans-serif', textAlign: 'center' }}*/}
                {/*            />*/}
                {/*        </Card>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <footer className={classes.footer} >
                    <Typography variant="body2" component="p" style={{marginTop: 5}}>
                        Copyright © <a href={'https://github.com/Cheungki/KnowABall'} style={{color: 'black'}}>G03</a> @Zhejiang University. All Rights Reserved.
                    </Typography>
                </footer>
            </div>
        )
    }
}

export default withStyles(style)(PlayerPage);