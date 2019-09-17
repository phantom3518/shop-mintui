import { get, post } from './axios.js'
// let bsae_api = process.env.BASE_API ? './' + process.env.BASE_API : '..'// 获取项目api请求地址
// 根据id获取用户信息
export const getSwiperList = (id) => {
  // returnget(`${bsae_api}/web/user/${id}`); //resfulapi风格
  return get(`http://www.liulongbin.top:3005/api/getlunbo`, { id: id }) // resfulapi风格
}

export const getNewList = () => {
  return get(`http://www.liulongbin.top:3005/api/getnewslist`)
}
export const getNewInfo = (id) => {
  return get(`http://www.liulongbin.top:3005/api/getnew/${id}`)
}
export const getComment = (id,key) => {
  return get(`http://www.liulongbin.top:3005/api/getcomments/${id}?pageindex=`+key)
}
export const postComment = (id,content) => {
  return post(`http://www.liulongbin.top:3005/api/postcomment/${id}`,{content})
}
export const getCategroy = () => {
  return get(`http://www.liulongbin.top:3005/api/getimgcategory`)
}
export const getImageList = (cateid) => {
  return get(`http://www.liulongbin.top:3005/api/getimages/${cateid}`)
}
export const getImageDetail = (imgid) => {
  return get(`http://www.liulongbin.top:3005/api/getimageInfo/${imgid}`)
}
export const getThumimages = (imgid) => {
  return get(`http://www.liulongbin.top:3005/api/getthumimages/${imgid}`)
}
export const getGoods = (number) => {
  return get(`http://www.liulongbin.top:3005/api/getgoods?pageindex`+number)
}
export const getInfo = (id) => {
  return get(`http://www.liulongbin.top:3005/api/goods/getinfo/${id}`)
}
export const getGoodsDesc = (id) => {
  return get(`http://www.liulongbin.top:3005/api/goods/getdesc/${id}`)
}



// export const postTest = (id) => {
//   return get(`http://yapi.demo.qunar.com/mock/94400/api/mint`,{id:id})
// }
