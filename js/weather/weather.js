var localStorage= new Object();
localStorage.cityId='';
function getWeather(){
if(!localStorage.cityId){
var cityId='';
var userLatLng = new google.maps.LatLng(geoip_latitude(), geoip_longitude());
var geocoder = new GClientGeocoder();
geocoder.getLocations(userLatLng, function(response){
if (!response || response.Status.code != 200) {
app.debug("no results from reverse geocoding!");
}
else {
var node = response.Placemark[0];
var area = node.AddressDetails.Country.AdministrativeArea;
var province = area.AdministrativeAreaName.replace('省','');
var city = area.Locality.LocalityName.replace('市','');
$.ajax({
    url: 'http://service.weather.com.cn/plugin/data/city.xml',
    async: false,
    dataType: 'text',  
    success: function(text){
    var arr = text.split(',');  
    for(var i=0;i <arr.length;i++){
    var arr2 = arr[i].split('|');
    var pid = 0;
    if(arr2[1] == province){
      pid = arr2[0];
      break;  
    }
    }
    if(pid){
    $.ajax({  
    url: 'http://service.weather.com.cn/plugin/data/city'+pid+'.xml',
    async: false,
    dataType: 'text',  
    success: function(text){
    var arr = text.split(',');  
    for(var i=0;i <arr.length;i++){
    var arr2 = arr[i].split('|');
    if(arr2[1] == city){
      cityId = arr2[0];
      break;  
    }
    }
    }  
  });
    } 
    }  
 });
cityId = '101'+cityId+(/^0[1-4].*$/.exec(cityId)?'00':'01');
localStorage.cityId = cityId;
_getWeather(localStorage.cityId);
}
});
}else{
_getWeather(localStorage.cityId);    
}
}

function _getWeather(cityId){
$.ajax({  
    url: 'http://www.weather.com.cn/html/weather/'+cityId+'.shtml',
    async: false,
    dataType: 'html',  
    success: function(html){
    html = html.replace(/<script(.|\s)*?\/script>/g, "");
    var div = $("<div/>").append(html);
    $('#weather').html($('div.weatherYubao',div).html());
    div.remove();
    $('#weather img').attr('src',function(i,v){return 'http://www.weather.com.cn'+v});
    $('#weather h1.weatheH1 span').remove();
    $('#weather td').removeAttr('style').each(function(){if($('a',this).length)$(this).html($('a',this).html())});
    $('#weather table.yuBaoTable').each(function(i){$(this).addClass('day'+(i+1))});
    $('#weather table.yuBaoTable tr').hover(function(){$(this).addClass('highlight')},function(){$(this).removeClass('highlight')});
    } 
  });
}

function refresh(){
$('#weather').text('数据加载中...');
delete(localStorage.cityId);
getWeather();
}

getWeather();
