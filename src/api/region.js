import request from '@/utils/request'

export function tree() {
  return request({
    url: '/api/hobbit-user/region/tree',
    method: 'get'
  })
}

export function detail(query) {
  return request({
    url: '/api/hobbit-user/region/detail',
    method: 'get',
    params: query
  })
}

export function submit(data) {
  return request({
    url: '/api/hobbit-user/region/submit',
    method: 'post',
    data
  })
}

export function remove(query) {
  return request({
    url: '/api/hobbit-user/region/remove',
    method: 'get',
    params: query
  })
}
