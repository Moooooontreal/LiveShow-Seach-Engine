//取测试数据
let name = '7月9-10日 楠溪江•星巢秘境音乐节 ROCKTOWN'
let poster = 'https://s2.showstart.com/img/2022/0331/15/30/0336956b143a40d3a838c5aef6fa36b7_1200_1600_318954.0x0.png'
let tags = ['新派说唱','硬摇滚','流行摇滚','华语流行']
let time = '2022年7月9日'
tags = tags.join('/')
let city = '温州'
let address = '永嘉楠溪江滩地音乐公园'
let singers = [
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
let tmp = []
// 热度优先 / 风格优先
for(let i = 0; i < 5; i++) {
    tmp.push(singers[i].name)
}
let names = tmp.join('/')
if(singers.length > 5)
    names += '......'
let price = '¥788 - 2280'


let showTestData = {'name': name, poster: 'poster', 'tags': tags, 'city':city, 'address': address, 'price': price, 'names': names, 'time': time}


