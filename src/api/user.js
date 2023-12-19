import request from '@/utils/request'

// 注册
export const userRegisterService = (user_id, user_password) =>
  request.post('/reg', { user_id, user_password })

// 登录
export const userLoginService = (user_id, user_password) =>
  request.post('/login', {
    user_id,
    user_password
  })
