import { Link } from 'react-router-dom'

export default function ComingSoon() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', textAlign: 'center', padding: '24px' }}>
      <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚧</div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#111', marginBottom: '12px' }}>서비스 준비중입니다</h1>
      <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>
        더 나은 서비스로 곧 찾아뵙겠습니다.<br />조금만 기다려 주세요!
      </p>
      <Link to="/" style={{ background: '#7c3aed', color: '#fff', padding: '12px 28px', borderRadius: '10px', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' }}>
        홈으로 돌아가기
      </Link>
    </div>
  )
}
