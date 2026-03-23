import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', passwordConfirm: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: 실제 회원가입 API 연결
    console.log('회원가입 시도:', form)
  }

  return (
    <div className="login-page">
      <div className="login-bg-blob blob1" />
      <div className="login-bg-blob blob2" />

      <div className="login-card">
        <Link to="/" className="login-logo">
          <span className="logo-sg">SG</span>
          <span className="logo-chem">Chem</span>
        </Link>

        <h1 className="login-title">처음 만나서 반가워요 👋</h1>
        <p className="login-sub">가입하고 나의 케미를 찾아보세요</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>이름</label>
            <input
              type="text"
              name="name"
              placeholder="이름을 입력해주세요"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="input-group">
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호를 다시 입력해주세요"
              value={form.passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">회원가입</button>
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
          이미 계정이 있으신가요?{' '}
          <Link to="/login">로그인</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
