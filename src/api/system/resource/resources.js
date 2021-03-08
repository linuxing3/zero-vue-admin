import request from '@/utils/request'

/**
 * 查询菜单列表
 * @param query
 * @returns {AxiosPromise}
 */
export function queryMenuList(query) {
  return request({
    url: '/api/sys/menu/list',
    method: 'post',
    data: query
  })
}

/**
 * 删除菜单
 * @param id
 * @returns {AxiosPromise}
 */
export function deleteResources(id) {
  return request({
    url: '/api/sys/menu/delete/',
    method: 'post',
    data: {id:id}
  })
}

/**
 * 创建菜单
 * @param data
 * @returns {AxiosPromise}
 */
export function createResources(data) {
  return request({
    url: '/api/sys/menu/add',
    method: 'post',
    data
  })
}

/**
 * 更新菜单
 * @param data
 * @returns {AxiosPromise}
 */
export function updateResources(data) {
  return request({
    url: '/api/sys/menu/update',
    method: 'post',
    data
  })
}
