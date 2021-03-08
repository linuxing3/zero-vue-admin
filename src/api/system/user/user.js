import request from '@/utils/request'

/**
 * 根据用户名和密码登录
 * @param data
 * @returns {AxiosPromise}
 */
export function login(data) {
  return request({
    url: '/api/sys/user/login',
    method: 'post',
    data
  })
}

/**
 * 根据token获取用户信息
 * @returns {AxiosPromise}
 */
export function getInfo() {
  return request({
    url: '/api/sys/user/currentUser',
    method: 'get'
  })
}

/**
 * 退出登录
 * @returns {AxiosPromise}
 */
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

/**
 * 获取用户信息列表
 * @param query
 * @returns {AxiosPromise}
 */
export function queryUserList(query) {
  return request({
    url: '/api/sys/user/list',
    method: 'post',
    data: query
  })
}

/**
 * 添加用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function createUser(data) {
  return request({
    url: '/api/sys/user/add',
    method: 'post',
    data
  })
}

/**
 * 更新用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function updateUser(data) {
  return request({
    url: '/api/sys/user/update',
    method: 'post',
    data
  })
}

/**
 * 更新用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function updateUserRole(data) {
  return request({
    url: '/userRole/updateUserRole',
    method: 'post',
    data
  })
}

/**
 * 根据用户Id删除用户
 * @param id
 * @returns {AxiosPromise}
 */
export function deleteUser(data) {
  return request({
    url: '/user/delete/',
    method: 'post',
    data
  })
}
