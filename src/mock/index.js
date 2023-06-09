//mock/index.js
import Mock from 'mockjs' //引入mockjs，npm已安装
import { Random,toJSONSchema } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
  timeout:500  //设置请求延时时间
})
const getdata = function(option){ //定义请求数据方法
  let datalist = [];
  var template = {
    'key|1-10': '★'
  }
  for (let i = 0; i < 20; i += 1) {
    const o = {  //mockjs模拟随机生成数据，生成20条
      recipeId: Random.guid(),
      billId: Random.string(10),
      orgId: Random.string('number', 8, 10),
      Date:Random.date('yyyy-MM-dd'),
      time:Random.time('A HH:mm:ss'),
      adress:Random.county(),
      viewName: Random.cword(4, 16), // 随机生成任意名称
      personName:toJSONSchema(template) ,
      reason: Random.csentence(10, 32),
    }
    datalist.push(o)
  }
  return{
    data:datalist
  }
}

const produceData = function (opt) {
  console.log("opt",opt);
  let articles = [];
  for(let i=0;i<10;i++){
    let newArticleObject = {
      title:Random.csentence(5,30),
      thumbnail_pic_s:Random.dataImage('150x50','微信:gis-dajianshi'),
      author_name:Random.range(10),
      date:Random.date()+''+Random.time(),
      email:Random.email(),
      name:Random.cname()
    }
    articles.push(newArticleObject)
  }
  return {
    data:articles
  }
}
Mock.mock('/name',/post|get/i,produceData)//当post 或者get 请求到news路由时MOCK会拦截请求并返回
Mock.mock('/user', /post|get/i,getdata) //调用模拟数据方法