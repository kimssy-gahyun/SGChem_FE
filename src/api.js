const BASE_URL = 'http://localhost:8000/api/v1'

function getToken() {
  return localStorage.getItem('access_token')
}

async function request(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...options.headers }
  const token = getToken()
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.detail || '서버 오류가 발생했습니다.')
  }
  return res.json()
}

export const api = {
  login: (email, password) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  register: (data) =>
    request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getMe: () => request('/users/me'),

  updateMe: (data) =>
    request('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),

  getCandidates: () => request('/matching/candidates'),

  getCompatibility: (targetId) => request(`/matching/compatibility/${targetId}`),

  getIcebreaker: (targetId) => request(`/matching/icebreaker/${targetId}`),
}
