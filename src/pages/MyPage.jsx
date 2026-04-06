import { Link } from 'react-router-dom'
import './MyPage.css'

const mockUser = {
  name: '김지은',
  age: 26,
  job: '디자이너',
  bio: '대화를 즐기고 여행과 음식을 사랑하는 사람입니다.',
  style: '유머형',
  tendency: '외향적',
  interests: ['여행', '음식', '영화', '음악'],
  chemyScore: 84,
  interviewDone: true,
}

export default function MyPage() {
  return (
    <div className="mypage-page">
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <span className="logo-sg">SG</span>
            <span className="logo-chem">Chem</span>
          </Link>
        </div>
      </nav>

      <div className="mypage-content">
        <div className="mypage-hero">
          <span className="section-badge">마이페이지</span>
          <h1>내 <span className="highlight">프로필</span></h1>
        </div>

        {/* 프로필 카드 */}
        <div className="profile-card">
          <div className="profile-avatar">🌸</div>
          <div className="profile-info">
            <h2>{mockUser.name}</h2>
            <p>{mockUser.age}세 · {mockUser.job}</p>
            <p className="profile-bio">{mockUser.bio}</p>
          </div>
        </div>

        {/* 대화 스타일 분석 */}
        <div className="mypage-section">
          <h3>대화 스타일 분석</h3>
          {mockUser.interviewDone ? (
            <div className="style-grid">
              <div className="style-item">
                <span className="style-label">대화 스타일</span>
                <span className="style-value style-purple">{mockUser.style}</span>
              </div>
              <div className="style-item">
                <span className="style-label">성향</span>
                <span className="style-value style-pink">{mockUser.tendency}</span>
              </div>
              <div className="style-item">
                <span className="style-label">평균 궁합 점수</span>
                <span className="style-value style-purple">{mockUser.chemyScore}점</span>
              </div>
            </div>
          ) : (
            <div className="interview-nudge">
              <p>아직 AI 인터뷰를 완료하지 않았어요.</p>
              <Link to="/interview" className="btn-primary">AI 인터뷰 시작하기</Link>
            </div>
          )}
        </div>

        {/* 관심사 */}
        <div className="mypage-section">
          <h3>관심사</h3>
          <div className="interest-tags">
            {mockUser.interests.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="mypage-actions">
          <Link to="/interview" className="btn-primary btn-lg">AI 인터뷰 다시하기</Link>
          <Link to="/" className="btn-ghost-outline btn-lg">홈으로</Link>
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
