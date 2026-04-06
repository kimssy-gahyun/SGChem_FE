import { Link } from 'react-router-dom'
import './Team.css'

const members = [
  {
    name: '김정연',
    role: '조장',
    avatar: '👑',
    color: 'purple',
  },
  {
    name: '김가현',
    role: '팀원',
    avatar: '🌸',
    color: 'pink',
  },
  {
    name: '박재현',
    role: '팀원',
    avatar: '⚡',
    color: 'blue',
  },
]

export default function Team() {
  return (
    <div className="team-page">
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <span className="logo-sg">SG</span>
            <span className="logo-chem">Chem</span>
          </Link>
        </div>
      </nav>

      <div className="team-content">
        <div className="team-hero">
          <span className="section-badge">팀 소개</span>
          <h1><span className="highlight">서강연애조작단</span></h1>
          <p>SGChem을 만든 사람들을 소개합니다.</p>
        </div>

        <div className="team-cards">
          {members.map((m) => (
            <div key={m.name} className={`team-card team-card-${m.color}`}>
              <div className={`team-avatar team-avatar-${m.color}`}>{m.avatar}</div>
              <div className="team-info">
                <h2>{m.name}</h2>
                <span className={`team-badge-role team-badge-${m.color}`}>{m.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="team-recruit">
          <div className="recruit-badge">🙋 팀원 모집 중</div>
          <h2>서강연애조작단과 함께하실<br />팀원을 구합니다!</h2>
          <p>
            대화 기반 AI 소개팅 서비스를 함께 만들어갈 분을 찾고 있어요.<br />
            열정 있는 분이라면 누구든 환영합니다!
          </p>
          <div className="recruit-cards">
            <div className="recruit-card">
              <span>💻</span>
              <strong>개발자</strong>
              <p>프론트엔드 / 백엔드</p>
            </div>
            <div className="recruit-card">
              <span>🎨</span>
              <strong>디자이너</strong>
              <p>UI/UX 디자인</p>
            </div>
            <div className="recruit-card">
              <span>📢</span>
              <strong>기획 / 마케팅</strong>
              <p>서비스 기획 및 홍보</p>
            </div>
          </div>
        </div>

        <div className="team-cta">
          <Link to="/" className="btn-primary btn-lg">홈으로 돌아가기</Link>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-bottom">
          <p>© 2026 SGChem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
