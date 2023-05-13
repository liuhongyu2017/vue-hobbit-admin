import request from '@/utils/request'

export function tree() {
  return request({
    url: '/api/hobbit-user/dept/tree',
    method: 'get'
  })
}

export function treeTable() {
  return request({
    url: '/api/hobbit-user/dept/tree/table',
    method: 'get'
  })
}
