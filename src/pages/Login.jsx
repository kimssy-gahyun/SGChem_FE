import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: 실제 로그인 API 연결
    console.log('로그인 시도:', form)
  }

  return (
    <div className="login-page">
      <div className="login-bg-blob blob1" />
      <div className="login-bg-blob blob2" />

      <div className="login-card">
        {/* 로고 */}
        <Link to="/" className="login-logo">
          <span className="logo-sg">SG</span>
          <span className="logo-chem">Chem</span>
        </Link>

        <h1 className="login-title">다시 만나서 반가워요 👋</h1>
        <p className="login-sub">로그인하고 나의 케미를 찾아보세요</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              <span>자동 로그인</span>
            </label>
            <a href="#" className="forgot">비밀번호 찾기</a>
          </div>

          <button type="submit" className="login-btn">로그인</button>
        </form>

        <div className="divider"><span>또는</span></div>

        <div className="social-btns">
          <button className="social-btn kakao">
            <span className="social-icon">💬</span> 카카오로 시작하기
          </button>
          <button className="social-btn google">
            <span className="social-icon">🔍</span> 구글로 시작하기
          </button>
        </div>

        <p className="signup-link">
          아직 계정이 없으신가요?{' '}
          <a href="#">회원가입</a>
        </p>
      </div>
    </div>
  )
}

export default Login
