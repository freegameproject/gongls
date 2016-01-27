// 百度地图API功能
	var map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(116.404, 39.915),6);
	// 编写自定义函数,创建标注
	function addMarker(point){
	  var marker = new BMap.Marker(point);
	  map.addOverlay(marker);
	}
	//addMarker(new BMap.Point(118.06,24.27));
  map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
	map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
	map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
	map.enableScrollWheelZoom();                            //启用滚轮放大缩小
	map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
	map.disable3DBuilding();
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

  // 创建地址解析器实例
var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上,并调整地图视野

function addCity(cityName,cityAddress){
  myGeo.getPoint(cityAddress, function(point){
    if (point) {
      //map.centerAndZoom(point, 16);
      map.addOverlay(new BMap.Marker(point));
    }else{
      //alert("您选择地址没有解析到结果!");
    }
  }, cityName);
}

addCity('北京','北京');
addCity('厦门','厦门');
addCity('三亚','三亚湾');

addMarker(new BMap.Point(100.29,13.5));

addMarker(new BMap.Point(100.87,12.92));
