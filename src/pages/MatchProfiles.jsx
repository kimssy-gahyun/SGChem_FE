import { useNavigate, Link } from 'react-router-dom'
import './MatchProfiles.css'

const MATCH_PROFILES = [
  {
    id: 1,
    name: '지훈',
    age: 27,
    job: '디자이너',
    type: '공감형',
    score: 94,
    emoji: '🌿',
    avatarClass: 'mp-av-purple',
    tags: ['따뜻함', '공감', '성실함'],
    intro: '대화가 잘 통하는 사람과 깊은 이야기 나누는 걸 좋아해요.',
    matchReason: '공감 능력과 경청 스타일이 서로 잘 맞아요. 대화 흐름이 자연스럽고 감정 표현 방식이 유사해요.',
  },
  {
    id: 2,
    name: '준혁',
    age: 25,
    job: '마케터',
    type: '유머형',
    score: 89,
    emoji: '😄',
    avatarClass: 'mp-av-yellow',
    tags: ['유머감각', '활발함', '솔직함'],
    intro: '웃음이 끊이지 않는 데이트 좋아하는 편이에요ㅋㅋ',
    matchReason: '유머 코드가 잘 맞고 대화를 주도하는 성향이 비슷해요. 함께 있으면 분위기가 밝아질 거예요.',
  },
  {
    id: 3,
    name: '태양',
    age: 28,
    job: '음악 프로듀서',
    type: '감성형',
    score: 85,
    emoji: '🎨',
    avatarClass: 'mp-av-orange',
    tags: ['감수성', '예술적', '다정함'],
    intro: '함께 음악 들으며 산책하는 게 이상적인 데이트예요.',
    matchReason: '감수성이 풍부한 대화 스타일이 서로를 잘 이해하게 해줘요. 공감대가 깊게 형성될 수 있어요.',
  },
  {
    id: 4,
    name: '현우',
    age: 26,
    job: '스타트업 개발자',
    type: '탐험형',
    score: 81,
    emoji: '🌏',
    avatarClass: 'mp-av-teal',
    tags: ['도전적', '자유로움', '호기심'],
    intro: '새로운 곳에서 새로운 사람 만나는 걸 즐겨요.',
    matchReason: '새로운 시도를 즐기는 성향이 비슷해요. 대화 주제가 다양하고 호기심이 서로를 자극할 거예요.',
  },
  {
    id: 5,
    name: '재민',
    age: 27,
    job: '교사',
    type: '공감형',
    score: 78,
    emoji: '☕',
    avatarClass: 'mp-av-brown',
    tags: ['따뜻함', '경청', '진지함'],
    intro: '카페에서 조용히 이야기 나누는 시간을 소중히 여겨요.',
    matchReason: '차분하고 진지한 대화를 좋아하는 점이 비슷해요. 깊이 있는 관계로 발전하기 좋아요.',
  },
  {
    id: 6,
    name: '도현',
    age: 29,
    job: '연구원',
    type: '논리형',
    score: 74,
    emoji: '💡',
    avatarClass: 'mp-av-blue',
    tags: ['분석적', '신중함', '지적'],
    intro: '깊이 있는 대화와 서로 성장할 수 있는 관계를 원해요.',
    matchReason: '지적 호기심을 자극하는 대화 스타일이 서로에게 자극이 돼요. 함께 성장할 수 있는 관계예요.',
  },
]

export default function MatchProfiles() {
  const navigate = useNavigate()

  return (
    <div className="mp-page">
      {/* ─── 헤더 ─── */}
      <header className="mp-header">
        <Link to="/" className="logo">
          <span className="logo-sg">SG</span>
          <span className="logo-chem">Chem</span>
        </Link>
      </header>

      {/* ─── 상단 타이틀 ─── */}
      <div className="mp-hero">
        <div className="mp-hero-badge">💜 케미 매칭 결과</div>
        <h1>성향이 잘 맞는 회원이에요</h1>
        <p>당신의 대화 성향 <strong>공감 · 유머형</strong>과<br />잘 어울리는 분들을 찾았어요</p>
      </div>

      {/* ─── 프로필 그리드 ─── */}
      <div className="mp-grid-wrap">
        <div className="mp-grid">
          {MATCH_PROFILES.map(profile => (
            <div key={profile.id} className="mp-card">

              {/* 오버레이가 적용되는 내부 영역 */}
              <div className="mp-card-inner">
                <div className="mp-card-top">
                  <div className={`mp-avatar ${profile.avatarClass}`}>
                    <span>{profile.emoji}</span>
                  </div>
                  <div className="mp-score-chip">
                    <span className="mp-score-num">{profile.score}</span>
                    <span className="mp-score-label">점</span>
                  </div>
                </div>

                <div className="mp-card-body">
                  <div className="mp-name-row">
                    <span className="mp-name">{profile.name}</span>
                    <span className="mp-age">{profile.age}세</span>
                    <span className="mp-job">{profile.job}</span>
                  </div>

                  <span className={`mp-type-badge ${profile.avatarClass}`}>{profile.type}</span>

                  <p className="mp-intro">{profile.intro}</p>

                  <div className="mp-tags">
                    {profile.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* 호버 시 매칭 이유 + 버튼 */}
                <div className="mp-reason-overlay">
                  <p className="mp-reason-title">💜 이런 점이 잘 맞아요</p>
                  <p className="mp-reason-text">{profile.matchReason}</p>
                  <button className="mp-chat-btn" onClick={() => navigate('/chat', { state: { profile } })}>
                    대화 시작하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
