import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: 실제 비밀번호 재설정 API 연결
    console.log('비밀번호 찾기 요청:', email)
    setSubmitted(true)
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

        {submitted ? (
          <>
            <h1 className="login-title">이메일을 확인해주세요 📩</h1>
            <p className="login-sub">입력하신 이메일로 비밀번호 재설정 링크를 보내드렸어요.</p>
            <Link to="/login" className="login-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '16px' }}>
              로그인으로 돌아가기
            </Link>
          </>
        ) : (
          <>
            <h1 className="login-title">비밀번호를 잊으셨나요? 🔑</h1>
            <p className="login-sub">가입한 이메일을 입력하면 재설정 링크를 보내드릴게요.</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>이메일</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-btn">재설정 링크 보내기</button>
            </form>
          </>
        )}

        <p className="signup-link" style={{ marginTop: '24px' }}>
          <Link to="/login">← 로그인으로 돌아가기</Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
