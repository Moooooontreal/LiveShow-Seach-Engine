import axios from 'axios';
//api

//搜索
function search(params) {
    //搜索包含信息
    params = {
        'input': '音乐节',
        'isAdvanced': true,
        'city': '杭州',
        //待商讨
        'time': '',
        'style': '独立',
    }
    axios.post('http://172.20.10.2:8080/search/', params)
        .then((response) => {
            console.log("response: ", response)
            return response.data
        })
}

//查询歌手
function getPerformerInfo(id){
    axios.get(`http://172.20.10.2:8080/performer/${id}`)
        .then((response) => {
            console.log(response.data)
        })
}

//查询演出
function getLiveInfo(id){
    axios.get(`http://172.20.10.2:8080/live/${id}`)
        .then((response) => {
            console.log(response.data)
        })
}

const Api={
    searchPlayer: 'http://172.20.10.2:8080/search/player/',
    searchTeam:'http://172.20.10.2:8080/search/team/',
    searchNews:'http://172.20.10.2:8080/search/news/',
    searchAll:'http://172.20.10.2:8080/search/all/',
    complete:'http://172.20.10.2:8080/search/suggest/all/'
}



export default Api;