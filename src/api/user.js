import axios from '@/utils/request'

// 测试用户登陆
export function test_login(uid) {
  return axios({
    url: '/login_test/' + uid,
    method: 'get'
  })
}

// 用户登录
export function login(data) {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getInfo() {
  return axios({
    url: '/user/info',
    method: 'get'
  })
}

// 获取审核人, 用于申请绩效时审核
export function listAuditors() {
  return axios({
    url: '/user/getAuditors',
    method: 'get'
  })
}

// 获取用户本周周报
export function getReport() {
  return axios({
    url: '/report',
    method: 'get'
  })
}

// 更新用户权限
export function updateUserRole(data) {
  return axios({
    url: '/updaterole',
    method: 'post',
    data
  })
}

// 查询系统中所有用户
export function queryUser(data, page) {
  return axios({
    url: '/user/query/' + page,
    method: 'post',
    data
  })
}

// 查询用户详细
export function getUserDetail() {
  return axios({
    url: '/user/detail',
    method: 'get'
  })
}

// 查询用户详细
export function updateUserInfo(data) {
  return axios({
    url: '/user/update',
    method: 'post',
    data
  })
}
// 查询用户奖项
export function getUserPrizes() {
  return axios({
    url: '/prizeList',
    method: 'get'
  })
}
// 新建用户奖项
export function addPrize(data) {
  return axios({
    url: '/prize',
    method: 'put',
    data
  })
}

// 删除用户奖项
export function deletePrize(data) {
  return axios({
    url: '/prize',
    method: 'delete',
    data
  })
}

// 修改用户奖项
export function updatePrize(data) {
  return axios({
    url: '/prize/update',
    method: 'post',
    data
  })
}

// 查询用户固定资产
export function getUserProperties() {
  return axios({
    url: '/propertyList',
    method: 'get'
  })
}
// 新建用户查询用户固定资产
export function addProperty(data) {
  return axios({
    url: '/property',
    method: 'put',
    data
  })
}

// 删除用户查询用户固定资产
export function deleteProperty(data) {
  return axios({
    url: '/property',
    method: 'delete',
    data
  })
}

// 修改用户查询用户固定资产
export function updateProperty(data) {
  return axios({
    url: '/property/update',
    method: 'post',
    data
  })
}
