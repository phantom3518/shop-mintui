import { get } from './axios.js'
// let bsae_api = process.env.BASE_API ? './' + process.env.BASE_API : '..'// 获取项目api请求地址
// 根据id获取用户信息
export const getSwiperList = (id) => {
  // returnget(`${bsae_api}/web/user/${id}`); //resfulapi风格
  return get(`http://www.liulongbin.top:3005/api/getlunbo`, { id: id }) // resfulapi风格
}

export const getNewList = () => {
  return get(`http://www.liulongbin.top:3005/api/getnewslist`) // resfulapi风格
}
export const getNewInfo = (id) => {
  return get(`http://www.liulongbin.top:3005/api/getnew/${id}`) // resfulapi风格
}
export const getComment = (id,key) => {
  return get(`http://www.liulongbin.top:3005/api/getcomments/${id}?pageindex=`+key) // resfulapi风格
}
