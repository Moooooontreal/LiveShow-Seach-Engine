import React, {Component} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { pillTabsStylesHook } from '@mui-treasury/styles/tabs';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    console.log(88888, value, index)
    return (
        <div
            role="tabpanel"
            // hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
         >
            { value === index && (
                <Box p={3} style={index===1?{paddingBottom:'8px',paddingTop:'6px'}:{paddingTop:'0',paddingBottom:'13px'}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.rationRoot}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    rationRoot: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
}));

export default function TablePanel(props) {
        const classes = useStyles();
        // 声明一个叫 "value" 的 state 变量
        const [value, setValue] = React.useState(0);
        const [selectValue, setSelectValue] = React.useState(0);
        const [cityValue, setCityValue] = React.useState('all');
        const [timeValue, setTimeValue] = React.useState('all');
        const [stylesValue, setStylesValue] = React.useState('all');
        const [sortValue, setSortValue] = React.useState('related');
        const tabsStyles = pillTabsStylesHook.useTabs();
        const tabItemStyles = pillTabsStylesHook.useTabItem();

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };
        const selectHandleChange = (index, event) => {
            let params = { isAdvanced: true }
            switch (index){
                case 0:
                    params.city = event.target.value
                    setCityValue(event.target.value)
                    break
                case 1:
                    params.time = event.target.value
                    setTimeValue(event.target.value)
                    break
                case 2:
                    params.styles = event.target.value
                    setStylesValue(event.target.value)
                    break
                case 3:
                    params.sort = event.target.value
                    setSortValue(event.target.value)
                    break
            }
            props.changeSearchParams(params);
        };


        return (
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)"}}>
                    <Tabs value={value} classes={tabsStyles} onChange={handleChange} aria-label="simple tabs example">
                        <Tab style={{width: '15%', fontWeight:'bold'}} classes={tabItemStyles} label="search" {...a11yProps(0)} />
                        <Tab style={{width: '15%'}} classes={tabItemStyles} label="filter" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <AppBar position="static" style={{backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)"}}>
                    <TabPanel value={value} index={1}>
                        <FormControl component="fieldset" style={{display: 'inline-block'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>演出城市:</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={cityValue}
                                            style={{display: 'inline-block'}} onChange={selectHandleChange.bind(this, 0)}>
                                    <FormControlLabel value="all" control={<StyledRadio/>} label="全部"/>
                                    <FormControlLabel value="杭州" control={<StyledRadio/>} label="杭州"/>
                                    <FormControlLabel value="上海" control={<StyledRadio/>} label="上海"/>
                                    <FormControlLabel value="北京" control={<StyledRadio/>} label="北京"/>
                                    <FormControlLabel value="南京" control={<StyledRadio/>} label="南京"/>
                                    <FormControlLabel value="厦门" control={<StyledRadio/>} label="厦门"/>
                                    <FormControlLabel value="宁波" control={<StyledRadio/>} label="宁波"/>
                                    <FormControlLabel value="成都" control={<StyledRadio/>} label="成都"/>
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </TabPanel>
                    <TabPanel value={selectValue + value} index={1}>
                        <FormControl component="fieldset" style={{display: 'inline-block'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>演出时间:</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={timeValue}
                                            style={{display: 'inline-block'}} onChange={selectHandleChange.bind(this, 1)}>
                                    <FormControlLabel value="all" control={<StyledRadio/>} label="全部"/>
                                    <FormControlLabel value="今天" control={<StyledRadio/>} label="今天"/>
                                    <FormControlLabel value="近三天" control={<StyledRadio/>} label="近三天"/>
                                    <FormControlLabel value="下周内" control={<StyledRadio/>} label="下周内"/>
                                    <FormControlLabel value="最近一个月" control={<StyledRadio/>} label="最近一个月"/>
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </TabPanel>
                    <TabPanel value={selectValue + value} index={1}>
                        <FormControl component="fieldset" style={{display: 'inline-block'}} >
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>演出风格:</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={stylesValue}
                                            style={{display: 'inline-block'}} onChange={selectHandleChange.bind(this, 2)}>
                                    <FormControlLabel value="all" control={<StyledRadio/>} label="全部"/>
                                    <FormControlLabel value="独立" control={<StyledRadio/>} label="独立"/>
                                    <FormControlLabel value="摇滚" control={<StyledRadio/>} label="摇滚"/>
                                    <FormControlLabel value="流行" control={<StyledRadio/>} label="流行"/>
                                    <FormControlLabel value="朋克" control={<StyledRadio/>} label="朋克"/>
                                    <FormControlLabel value="民谣" control={<StyledRadio/>} label="民谣"/>
                                    <FormControlLabel value="金属" control={<StyledRadio/>} label="金属"/>
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </TabPanel>
                    <TabPanel value={selectValue + value} index={1}>
                        <FormControl component="fieldset" style={{display: 'inline-block'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>排序方式:</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={sortValue}
                                            style={{display: 'inline-block'}} onChange={selectHandleChange.bind(this, 3)}>
                                    <FormControlLabel value="related" control={<StyledRadio/>} label="按相关度排序"/>
                                    <FormControlLabel value="hot" control={<StyledRadio/>} label="按热度排序"/>
                                    <FormControlLabel value='time' control={<StyledRadio/>} label="按时间排序" />
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </TabPanel>
                </AppBar>

            </div>
        );
}
