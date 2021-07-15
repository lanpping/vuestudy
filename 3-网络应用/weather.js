 /*   天气接口
           1.请求地址：http://wthrcdn.etouch.cn/weather_mini
           2.请求方法：get
           3.请求的参数：city（查询的城市名）
           4.响应的内容：天气信息
*/
var app=new Vue({
    el:"#app",
    data:{
        city:'',
        weatherList:[]
    },
    methods:{
        searchWeather:function(){
            var that=this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city).then(
                function(response){
                   // console.log(response.data.data.forecast);
                   that.weatherList=response.data.data.forecast;
                }).catch(function(err){})
        },
        changeCity:function(city){
            this.city=city;
            this.searchWeather();
        }
    }
})