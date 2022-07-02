import React, { Component } from 'react'
import Card from "@material-ui/core/Card";
import cx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Link1 from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import Chip from '@material-ui/core/Chip';
import { Row, Item, Column } from '@mui-treasury/components/flex';
import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';
import Avatar from "@material-ui/core/Avatar";
import {Image} from "@material-ui/icons";
import size from "d3-selection/src/selection/size";
import poster1 from '../assets/images/bg2.jpg'
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import github from "../assets/images/GitHubIcon.png";
import performer from "../assets/images/performer.png"
import love1 from "../assets/images/love1.png"
import love0 from "../assets/images/love2.png"
import {TextField} from "@material-ui/core";

const ReviewCard2Demo = React.memo(function(prams) {
    let id = 2502
    let url= `https://www.showstart.com/artist/${id}`
    let name = '万能青年旅店'
    let city = '石家庄'
    let tags = ['摇滚', '独立']
    let tag = tags.join('/')
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
    // contents.split('\n').map((item, id) => {
    //     return (
    //         <span key={id}>
    //            {item}
    //             <br />
    //        </span>)
    // })
    // console.log(contents)

    let isLoved = false
    const useStyles = makeStyles(({ spacing, palette }) => ({
        sizeAvatar: {
            height: spacing(18),
            width: spacing(18),
            marginTop: '15px',
            marginLeft: '20px'
        },
        card: {
            display: 'flex',
            borderRadius: 16,
        },
        media: {
            width:'auto',
            height:'160px',
            display: 'block',
            flexShrink: 0,
            backgroundColor: palette.grey[200],
            borderRadius: 12,
            boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
            marginRight:'40px'
        },
        rating: {
            verticalAlign: 'text-top',
        },
        content: {
            padding: spacing(0, 2, 0, 4),
            width:'100%',
        },
        heading: {
            fontSize: 17,
            fontWeight: 'bold',
            letterSpacing: '0.5px',
            marginBottom: 5,
            marginRight: spacing(1.5),
            display: 'inline-block',
        },
        body: {
            fontSize: 15,
            color: palette.grey[500],
        },
        divider: {
            margin: spacing(1, 0),
        },
        textFooter: {
            fontSize: 14,
        },
        icon: {
            fontSize: '1.2rem',
            verticalAlign: 'bottom',
        },
        textItem:{
            marginBottom:'10px'
        },
        textItem2:{
            marginTop: '-8px',
            marginBottom:'25px',
            fontSize: '24px'
        },
        text: {
            marginLeft: '210px',
            marginTop: '-125px',
            fontWeight: 'bold'
        },
        avatar: {
            background: `url(${poster1}) no-repeat center`,
            width: 900,
            height: 180,
            backgroundSize: 'cover',
        },
        performer: {
            marginBottom: '100px'
        },
        contents: {
            zIndex: 100000
        }


    }));
    const styles = useStyles();
    const labelStyles = useLabelIconStyles({ linked: true });
    const flexStyles = useRowFlexStyles();
    console.log(prams)
    const data = prams['info']['info'];
    const imgURL = prams['info']['imgURL'];
    const show = prams['info']['show']



    console.log(contents)

    return (
        <div>
            <Card className={styles.card} elevation={0}>
                <CardContent className={styles.content}>
                    {/*<Box mb={1}>*/}
                    {/*    /!*<Chip  size="small" label='音乐人' style={{marginRight:'8px', marginBottom: '8px'}}/>*!/*/}
                    {/*    /!*<h3 dangerouslySetInnerHTML={{__html:data.name}} className={styles.heading}/>*!/*/}
                    {/*    /!*{*!/*/}
                    {/*    /!*    show ? <div/> : <Rating*!/*/}
                    {/*    /!*        name={'rating'}*!/*/}
                    {/*    /!*        max={10}*!/*/}
                    {/*    /!*        value={prams['info']['score']}*!/*/}
                    {/*    /!*        className={styles.rating}*!/*/}
                    {/*    /!*        size={'small'}*!/*/}
                    {/*    /!*        readOnly={true}*!/*/}
                    {/*    /!*    />*!/*/}
                    {/*    /!*}*!/*/}
                    {/*</Box>*/}
                    <Row>
                        <Column>
                            <div className={styles.avatar}>
                                <Avatar src={avatar} alt="Avatar" className={styles.sizeAvatar} />
                                <Column className={styles.text} style={{width:'30%'}}>
                                    <Item dangerouslySetInnerHTML={{__html:""+ name}} className={styles.textItem2}/>
                                    <Item dangerouslySetInnerHTML={{__html:"地区："+ city}} className={styles.textItem}/>
                                    <Item dangerouslySetInnerHTML={{__html:"风格："+ tag}} className={styles.textItem}/>
                                </Column>
                                <Column style={{width: '5%', marginLeft: '770px', marginTop: '-140px'}}>
                                    <Tooltip title="收藏音乐人" aria-label="Love">
                                        <IconButton aria-label="收藏" href={url} target='_blank'>
                                            <img src={isLoved ? love1 : love0} alt="love"  />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="个人主页" aria-label="Performer">
                                        <IconButton aria-label="个人主页" href={url} target='_blank'>
                                            <img src={performer} alt="performer link" className={styles.performer} />
                                        </IconButton>
                                    </Tooltip>
                                </Column>
                            </div>
                        </Column>

                        {/*<Column className={styles.body} style={{marginRight:'20%'}}>*/}
                        {/*    <Item dangerouslySetInnerHTML={{__html:"位置："+data.role}} className={styles.textItem}/>*/}
                        {/*    <Item dangerouslySetInnerHTML={{__html:"年龄："+data.age}} className={styles.textItem}/>*/}
                        {/*    <Item dangerouslySetInnerHTML={{__html:"体重："+data.weight}} className={styles.textItem}/>*/}
                        {/*</Column>*/}
                        {/*<Column className={styles.body}>*/}
                        {/*    <Item dangerouslySetInnerHTML={{__html:"简介："+ contents}} className={styles.textItem}/>*/}
                        {/*    /!*<Item dangerouslySetInnerHTML={{__html:"生日："+data.birthday}} className={styles.textItem}/>*!/*/}
                        {/*    /!*<Item className={styles.textItem}>*!/*/}
                        {/*    /!*    惯用脚：{data.foot?"左脚":"右脚"}*!/*/}
                        {/*    /!*</Item>*!/*/}
                        {/*</Column>*/}
                    </Row>
                    <div className={flexStyles.parent}>
                        {show?<div className={flexStyles.parent}>
                            <Link1
                                className={cx(labelStyles.primaryLink, styles.textFooter)}
                                href={"/player/"+data.id}
                            >
                                Read more <ArrowForwardIos className={labelStyles.icon} />
                            </Link1>
                        </div>:""}
                    </div>
                </CardContent>
            </Card>
            <Card className={styles.card} elevation={1}>
                <CardContent>
                    <Row>
                        <div>
                            <img src={poster} />
                            <Item dangerouslySetInnerHTML={{__html: contents}} className={styles.contents} style={{ whiteSpace: 'pre-wrap'}}/>
                        </div>

                    </Row>
                </CardContent>
            </Card>
        </div>
    );
});
class SearchResultItem extends Component {

    render() {
        return (
            <ReviewCard2Demo info={this.props.data}/>
        )
    }
}

export default SearchResultItem;