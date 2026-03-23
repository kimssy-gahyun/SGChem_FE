import { useState } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function MainPage() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">

      {/* ─── 네비게이션 ─── */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <span className="logo-sg">SG</span>
            <span className="logo-chem">Chem</span>
          </Link>
          <div className="nav-links">
            <a href="#features">서비스 특징</a>
            <a href="#how">이용 흐름</a>
            <a href="#ai">AI 분석</a>
            <a href="#reviews">후기</a>
          </div>
          <div className="nav-btns">
            <button className="btn-ghost" onClick={() => navigate('/login')}>로그인</button>
            <button className="btn-primary" onClick={() => navigate('/signup')}>회원가입</button>
          </div>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>서비스 특징</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>이용 흐름</a>
          <a href="#ai" onClick={() => setMenuOpen(false)}>AI 분석</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>후기</a>
          <div className="mobile-menu-btns">
            <button className="btn-ghost-dark w-full" onClick={() => { navigate('/login'); setMenuOpen(false) }}>로그인</button>
            <button className="btn-primary w-full" onClick={() => { navigate('/signup'); setMenuOpen(false) }}>회원가입</button>
          </div>
        </div>
      </nav>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      {/* ─── 히어로 ─── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-badge">💬 대화로 찾는 진짜 케미</span>
            <h1>
              외모 말고,{' '}
              <span className="highlight-white">대화 스타일</span>로<br />
              매칭되는 소개팅
            </h1>
            <p className="hero-desc">
              SGChem은 AI와의 대화 인터뷰를 통해<br />
              당신의 성향과 대화 스타일을 분석하고,<br />
              진짜 케미가 맞는 상대를 찾아드립니다.
            </p>
            <div className="hero-actions">
              <button className="btn-white btn-lg">AI 인터뷰 시작하기</button>
              <a href="#problem" className="btn-outline btn-lg">서비스 소개</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="card card-back">
              <div className="card-avatar purple-av" />
              <div className="card-body">
                <div className="card-bar w60" />
                <div className="card-bar w40" />
                <div className="tag-row">
                  <span className="tag">공감형</span>
                  <span className="tag">내향적</span>
                </div>
              </div>
            </div>
            <div className="card card-front">
              <div className="card-avatar pink-av" />
              <div className="card-body">
                <div className="card-bar w60" />
                <div className="card-bar w40" />
                <div className="tag-row">
                  <span className="tag">유머형</span>
                  <span className="tag">외향적</span>
                  <span className="tag">여행</span>
                </div>
              </div>
              <div className="match-chip">💜 케미 84점 매칭</div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>대화 기반</strong>
              <span>성향 분석 매칭</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>AI 인터뷰</strong>
              <span>맞춤 질문 생성</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>궁합 점수</strong>
              <span>매칭 이유 제공</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 문제 정의 ─── */}
      <section className="problem" id="problem">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-badge">기존 소개팅의 문제</span>
            <h2>왜 매칭 후에도<br /><span className="highlight">대화가 이어지지 않을까요?</span></h2>
            <p>많은 소개팅 서비스가 외모와 프로필 중심으로 매칭을 진행하지만,<br />실제 대화 성향과 스타일이 맞지 않아 대화 지속률이 낮습니다.</p>
          </div>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">😐</div>
              <h3>외모·프로필 중심 매칭</h3>
              <p>실제 성향이나 대화 스타일을 반영한 매칭 기능이 부족합니다.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">😶</div>
              <h3>첫 대화의 어색함</h3>
              <p>공통점을 모른 채 시작하는 첫 메시지는 어렵고 부담스럽습니다.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📉</div>
              <h3>낮은 대화 지속률</h3>
              <p>성향이 맞지 않는 매칭은 금세 대화가 끊기고 만족도를 낮춥니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 서비스 특징 ─── */}
      <section className="features" id="features">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-badge">SGChem의 해결책</span>
            <h2>대화 인터뷰로 찾는<br /><span className="highlight">진짜 케미 매칭</span></h2>
            <p>AI와의 자연스러운 대화 인터뷰를 통해 당신의 성향을 파악하고,<br />진짜 잘 맞는 사람을 연결해드립니다.</p>
          </div>
          <div className="feat-grid">
            <div className="feat-card">
              <div className="feat-icon">🤖</div>
              <h3>AI 인터뷰 기반 매칭</h3>
              <p>프로필 입력 대신 AI 페르소나와 자유롭게 대화하며 나의 성향을 자연스럽게 드러내요.</p>
            </div>
            <div className="feat-card feat-card-accent">
              <div className="feat-icon">🧠</div>
              <h3>대화 스타일 분석</h3>
              <p>AI가 대화 내용을 분석해 유머형·공감형·논리형 등 나만의 대화 스타일을 도출해요.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon">💞</div>
              <h3>궁합 기반 추천</h3>
              <p>두 사람의 성향 데이터를 비교해 궁합 점수와 매칭 이유를 함께 제공해요.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon">💬</div>
              <h3>대화 지속률 향상</h3>
              <p>공통점과 케미를 먼저 확인하고 대화를 시작하기 때문에 자연스럽게 이어져요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 이용 흐름 ─── */}
      <section className="how" id="how">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-badge">이용 흐름</span>
            <h2>5단계로 완성되는<br /><span className="highlight">나의 케미 매칭</span></h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>가입 및<br />프로필 입력</h3>
              <p>기본 정보를 입력하고 서비스를 시작해요.</p>
            </div>
            <div className="step-connector"><span /></div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>AI 페르소나와<br />대화 인터뷰</h3>
              <p>AI가 맞춤 질문을 생성해 자연스럽게 대화를 이끌어요.</p>
            </div>
            <div className="step-connector"><span /></div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>대화 내용<br />성향 분석</h3>
              <p>대화 스타일, 성향, 관심사를 AI가 자동으로 분석해요.</p>
            </div>
            <div className="step-connector"><span /></div>
            <div className="step">
              <div className="step-num">04</div>
              <h3>궁합 점수<br />계산</h3>
              <p>두 사람의 성향 데이터를 비교해 궁합을 수치화해요.</p>
            </div>
            <div className="step-connector"><span /></div>
            <div className="step">
              <div className="step-num">05</div>
              <h3>매칭 추천<br />& 대화 시작</h3>
              <p>궁합이 높은 상대를 추천받고 대화를 시작해요!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI 분석 방식 ─── */}
      <section className="ai-section" id="ai">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-badge">AI 활용 방식</span>
            <h2>AI가 대화를 분석하는<br /><span className="highlight">4가지 방법</span></h2>
            <p>생성형 AI를 활용해 더 정확하고 의미있는 매칭을 만들어요.</p>
          </div>
          <div className="ai-grid">
            <div className="ai-card">
              <div className="ai-num">1</div>
              <div className="ai-content">
                <h3>인터뷰 질문 생성</h3>
                <p>AI가 맞춤형 대화 질문을 생성해 자연스럽게 성향을 파악해요.</p>
                <div className="ai-example">
                  <span className="example-label">예시 질문</span>
                  <p>"주말에는 보통 어떤 활동을 즐기시나요?"</p>
                  <p>"어떤 스타일의 여행을 선호하시나요?"</p>
                </div>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-num">2</div>
              <div className="ai-content">
                <h3>대화 내용 분석</h3>
                <p>사용자 응답을 분석해 대화 스타일과 성향 정보를 도출해요.</p>
                <div className="ai-example">
                  <span className="example-label">분석 결과 예시</span>
                  <p>대화 스타일: <strong>유머형</strong></p>
                  <p>성향: <strong>외향적</strong> · 관심사: <strong>여행 / 음식</strong></p>
                </div>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-num">3</div>
              <div className="ai-content">
                <h3>성향 요약 생성</h3>
                <p>AI가 대화 데이터를 기반으로 사용자 성향을 문장으로 요약해요.</p>
                <div className="ai-example">
                  <span className="example-label">요약 예시</span>
                  <p>"대화를 적극적으로 이어가는 스타일이며 유머와 공감 중심의 대화를 선호합니다."</p>
                </div>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-num">4</div>
              <div className="ai-content">
                <h3>궁합 분석</h3>
                <p>두 사용자의 성향 데이터를 비교해 궁합 점수와 매칭 이유를 제공해요.</p>
                <div className="ai-example">
                  <span className="example-label">궁합 결과 예시</span>
                  <p>궁합 점수: <strong>84점</strong></p>
                  <p>이유: <strong>대화 스타일 유사 · 관심사 공통</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 후기 ─── */}
      <section className="reviews" id="reviews">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-badge">실제 후기</span>
            <h2>SGChem으로 만난<br /><span className="highlight">두 사람</span></h2>
          </div>
          <div className="review-grid">
            <div className="review-card">
              <p className="review-quote">"AI 인터뷰가 생각보다 재밌었어요. 대화하다 보니 나도 몰랐던 내 성향을 발견했고, 그걸 바탕으로 매칭된 상대와 정말 잘 맞았어요!"</p>
              <div className="reviewer">
                <div className="reviewer-av pink-av-sm" />
                <div>
                  <strong>김지은</strong>
                  <span>26세 · 디자이너</span>
                </div>
              </div>
            </div>
            <div className="review-card review-card-accent">
              <p className="review-quote">"프로필 사진 없이 대화 스타일로만 매칭한다는 게 신선했어요. 궁합 이유도 보여줘서 첫 대화 시작이 훨씬 자연스러웠어요."</p>
              <div className="reviewer">
                <div className="reviewer-av purple-av-sm" />
                <div>
                  <strong>이민준</strong>
                  <span>29세 · 개발자</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <p className="review-quote">"케미 점수 84점이었는데 진짜로 대화 스타일이 딱 맞았어요. 공통 관심사도 AI가 먼저 알려줘서 어색함 없이 대화할 수 있었어요."</p>
              <div className="reviewer">
                <div className="reviewer-av pink-av-sm" />
                <div>
                  <strong>박소연</strong>
                  <span>24세 · 대학원생</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta">
        <div className="cta-inner">
          <h2>AI와 대화를 시작하고<br /><span className="highlight-white">나의 케미를 찾아보세요</span></h2>
          <p>프로필 사진 없이, 대화만으로 연결되는 소개팅.</p>
          <button className="btn-white btn-xl">AI 인터뷰 무료 시작 →</button>
        </div>
      </section>

      {/* ─── 푸터 ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <Link to="/" className="logo">
              <span className="logo-sg">SG</span>
              <span className="logo-chem">Chem</span>
            </Link>
            <p>대화 기반 AI 소개팅 플랫폼</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <strong>서비스</strong>
              <a href="#">AI 인터뷰</a>
              <a href="#">케미 매칭</a>
              <a href="#">프리미엄</a>
            </div>
            <div className="footer-col">
              <strong>회사</strong>
              <a href="#">소개</a>
              <a href="#">블로그</a>
              <a href="#">채용</a>
            </div>
            <div className="footer-col">
              <strong>지원</strong>
              <a href="#">FAQ</a>
              <a href="#">고객센터</a>
              <a href="#">개인정보처리방침</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 SGChem. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
