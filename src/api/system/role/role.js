import request from '@/utils/request'

/**
 * 查询角色
 * @param query
 * @returns {AxiosPromise}
 */
export function queryRoleList(query) {
  return request({
    url: '/api/sys/role/list',
    method: 'post',
    data: query
  })
}

/**
 * 删除角色
 * @param id
 * @returns {AxiosPromise}
 */
export function deleteRole(data) {
  return request({
    url: '/api/sys/role/delete',
    method: 'post',
    data
  })
}

/**
 * 新增角色
 * @param data
 * @returns {AxiosPromise}
 */
export function createRole(data) {
  return request({
    url: '/api/sys/role/add',
    method: 'post',
    data
  })
}

/**
 * 更新角色
 * @param data
 * @returns {AxiosPromise}
 */
export function updateRole(data) {
  return request({
    url: '/api/sys/role/update',
    method: 'post',
    data
  })
}

