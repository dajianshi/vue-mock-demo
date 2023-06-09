let BASEURL = "";
if (process.env.NODE_ENV === "production") {
  BASEURL = "http://116.236.59.98:8016";
} else if (process.env.NODE_ENV === "test") {
  BASEURL = "http://116.236.59.98:8016";
} else {
  BASEURL = "http://116.236.59.98:8016";
}
const api = {
  user: `/thailand/api/v1/user/login`, //用户登录post
  userList: `/thailand/api/v1/user`, //用户列表get
  terminal: `/thailand/api/v1/terminal`, //终端列表get，增加POSt，更改PUT 删除/:id
  terminalInfo: `/thailand/api/v1/terminal/ship/`, //:id  GET 获取终端船舶绑定的信息，绑定弹窗
  terminalBind:`/thailand/api/v1/terminal/bind/`, //绑定终端:terminalId   POST方法
  terminalUnbind:`/thailand/api/v1/terminal/unbind/`, //绑定终端:Id   PUT方法
  shipSearch:`/thailand/api/v1/terminal/ship/search`, //搜索船舶 param：srcAddress
  track:`/thailand/api/v1/trajectory/history`,  //历史轨迹列表 post方法
  newPoints:`/thailand/api/v1/terminal/new/points`,//获取区域范围内的点，做Marker。POST方法

  group: `/thailand/api/v1/group`, //搜索分组列表get 删除分组 delete  ：id  修改分组 put  添加分组 post
  groupOneAdd: `/thailand/api/v1/group/terminal/`, //终端分组批量添加终端post :id
  groupOneList: `/thailand/api/v1/group/terminal/`, //获取终端分组中的终端get:id
  groupFreedom: `/thailand/api/v1/group/terminal/freedom`, //获取终端分组中的终端get:id 

  reportDay: `/thailand/api/v1/message/statistics/day/count`, //终端消息按天半月统计get
  reportTerminal: `/thailand/api/v1/message/statistics/terminal/count`, //终端消息按终端半月统计get   
  reportActive: `/thailand/api/v1/message/statistics/active/terminal`, //近半个月终端活跃统计get  
  reportMonth: `/thailand/api/v1/message/statistics/flow/day`, //终端流量统计（30天）  
  reportYear: `/thailand/api/v1/message/statistics/flow/moth`, //终端流量统计（12个月）
  reportGuanji: `/thailand/api/v1/message/statistics/abnormal/shutdown/terminal`, //终端非法关机统计
  reportHuoyue: `/thailand/api/v1/message/statistics/type/terminal/active/days`, //终端活跃天数
  reportShuliang: `/thailand/api/v1/message/statistics/type/terminal/count`, //终端消息数量统计
  reportLiuliang: `/thailand/api/v1/message/statistics/type/flow/terminal`, //终端消息流量统计
  reportAlert: `/thailand/api/v1/message/statistics/geofence/event/terminal`, //围栏告警消息统计
  

  sos: `/thailand/api/v1/geofence/events/sos`, //获取列表get
  alarm: `/thailand/api/v1/geofence/events`, //获取列表get， 删除警告/:id delete
  alarmProcess: `/thailand/api/v1/geofence/events/process/`,  //获取处理意见:id get , 保存处理意见 :id post
  alarmRead: `/thailand/api/v1/geofence/events/read/status`  ,//更改已读状态
 
  getfence: `/thailand/api/v1/geofence/rule`  ,//围栏列表GET，增加POST，更改：PUT， 删除/:id  DELETE
  fence: `/thailand/api/v1/geofence/rule`  ,//围栏列表GET，增加POST，更改：PUT， 删除/:id  DELETE
  fenceOne: `/thailand/api/v1/geofence/rule/terminal/`  ,//获取GET，:id,  增加删除POST，:id
  fenceFreedom: `/thailand/api/v1/geofence/rule/terminal/freedom/`  ,//:id  GET获取未在当前电子围栏中的终端
  
  password: `/thailand/api/v1/user/password`  ,//POST 修改密码
  image:`/thailand/api/upload`  ,//POST 上传图片
  imageName:`/thailand/api/v1/file/`  ,//+图片名
	
  // filesDelete: `${BASEURL}/bpm-portal-server/api/file/`, //图片附件删除
};
export default api;
