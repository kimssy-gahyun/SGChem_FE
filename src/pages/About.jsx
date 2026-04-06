import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <span className="logo-sg">SG</span>
            <span className="logo-chem">Chem</span>
          </Link>
        </div>
      </nav>

      <div className="about-content">
        <div className="about-hero">
          <span className="section-badge">회사 소개</span>
          <h1>대화로 이어지는<br /><span className="highlight">진짜 인연</span>을 만듭니다</h1>
          <p>SGChem은 AI 기반 대화 분석으로 진정한 케미를 찾아드리는 소개팅 플랫폼입니다.</p>
        </div>

        <div className="about-section">
          <h2>미션</h2>
          <p>
            외모나 스펙이 아닌, 대화 스타일과 성향의 진짜 궁합으로<br />
            오래 이어지는 관계를 만드는 것이 SGChem의 미션입니다.
          </p>
        </div>

        <div className="about-section">
          <h2>우리가 하는 일</h2>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">🤖</div>
              <h3>AI 인터뷰</h3>
              <p>AI 페르소나와의 자연스러운 대화를 통해 사용자의 성향과 대화 스타일을 분석합니다.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">💞</div>
              <h3>케미 매칭</h3>
              <p>두 사람의 성향 데이터를 비교해 궁합 점수와 매칭 이유를 함께 제공합니다.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">💬</div>
              <h3>대화 연결</h3>
              <p>공통점을 먼저 확인하고 대화를 시작해 자연스럽게 관계가 이어집니다.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>팀 소개</h2>
          <p>
            SGChem은 AI, UX, 심리학 분야의 전문가들이 모여<br />
            더 의미있는 만남을 위한 기술을 개발하고 있습니다.
          </p>
        </div>

        <div className="about-cta">
          <Link to="/" className="btn-primary btn-lg">서비스 시작하기</Link>
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
