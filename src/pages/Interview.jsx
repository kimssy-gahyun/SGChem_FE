import { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Interview.css'

// 유저가 여성이면 대화상대는 남성 5명으로 고정
const PERSONAS = [
  {
    id: 0,
    name: '지훈',
    type: '공감형',
    emoji: '🌿',
    avatarClass: 'av-purple',
    greeting: '안녕하세요! 저는 지훈이에요 🌿 오늘 어떤 하루 보내셨어요? 편하게 이야기해요!',
    questions: [
      '요즘 가장 즐겁거나 설레는 일이 있다면 무엇인가요?',
      '힘든 일이 생겼을 때 주로 어떻게 해소하시나요?',
      '주변 친구들이 나를 어떤 사람이라고 설명하던가요?',
    ],
  },
  {
    id: 1,
    name: '준혁',
    type: '유머형',
    emoji: '😄',
    avatarClass: 'av-yellow',
    greeting: '야호~ 저 준혁이에요 😄 솔직히 저 좀 재밌는 편이거든요ㅋㅋ 어떤 유머 스타일을 좋아하세요?',
    questions: [
      '주말에 친구들이랑 보통 어떻게 시간을 보내세요?',
      '처음 만나는 사람과 어색한 분위기를 풀 때 어떻게 하세요?',
      '지금까지 가장 웃겼던 에피소드를 하나만 공유해주신다면요?',
    ],
  },
  {
    id: 2,
    name: '민준',
    type: '논리형',
    emoji: '💡',
    avatarClass: 'av-blue',
    greeting: '안녕하세요, 민준입니다. 관심 분야나 요즘 열중하고 있는 것이 있다면 이야기해볼까요?',
    questions: [
      '최근에 새롭게 배우거나 관심 갖게 된 분야가 있나요?',
      '중요한 결정을 할 때 어떤 방식으로 판단하시나요?',
      '이상적인 대화 상대는 어떤 사람이라고 생각하세요?',
    ],
  },
  {
    id: 3,
    name: '태양',
    type: '감성형',
    emoji: '🎨',
    avatarClass: 'av-orange',
    greeting: '안녕하세요, 태양이에요 🎨 음악이나 영화, 좋아하시는 것 있으세요? 요즘 어떤 것에 빠져 계세요?',
    questions: [
      '최근에 감동받은 콘텐츠(영화, 음악, 책 등)가 있나요?',
      '혼자만의 시간에는 주로 무엇을 하며 지내세요?',
      '어떤 분위기의 공간이나 장소를 특히 좋아하세요?',
    ],
  },
  {
    id: 4,
    name: '승우',
    type: '탐험형',
    emoji: '🌏',
    avatarClass: 'av-teal',
    greeting: '안녕하세요! 저는 승우예요 🌏 새로운 것 도전하기 좋아하세요? 가장 기억에 남는 경험이 있다면요?',
    questions: [
      '버킷리스트에 있는 것 중 하나만 말해주신다면?',
      '여행을 간다면 어떤 스타일로 다니시나요?',
      '낯선 사람과 처음 만날 때 어떤 감정이 드세요?',
    ],
  },
]

// 대화 분석 결과 (실제 서비스에서는 대화 내용 기반으로 산출)
const MOCK_SCORES = [
  { personaId: 0, score: 91 },
  { personaId: 1, score: 84 },
  { personaId: 3, score: 77 },
  { personaId: 4, score: 65 },
  { personaId: 2, score: 52 },
]

const MIN_TO_ADVANCE = 2

export default function Interview() {
  const navigate = useNavigate()
  const [currentIdx, setCurrentIdx] = useState(0)
  const [conversations, setConversations] = useState(
    PERSONAS.map((p, i) => ({
      messages: i === 0 ? [{ role: 'ai', text: p.greeting }] : [],
      questionIdx: 0,
    }))
  )
  const [inputText, setInputText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const persona = PERSONAS[currentIdx]
  const currentConv = conversations[currentIdx]
  const userMsgCount = currentConv.messages.filter(m => m.role === 'user').length
  const canAdvance = userMsgCount >= MIN_TO_ADVANCE && !isTyping

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [conversations, isTyping])

  const sendMessage = () => {
    const text = inputText.trim()
    if (!text || isTyping) return

    setConversations(prev =>
      prev.map((conv, i) =>
        i !== currentIdx ? conv : { ...conv, messages: [...conv.messages, { role: 'user', text }] }
      )
    )
    setInputText('')
    setIsTyping(true)

    setTimeout(() => {
      setConversations(prev =>
        prev.map((conv, i) => {
          if (i !== currentIdx) return conv
          const q = persona.questions[conv.questionIdx % persona.questions.length]
          return {
            messages: [...conv.messages, { role: 'ai', text: q }],
            questionIdx: conv.questionIdx + 1,
          }
        })
      )
      setIsTyping(false)
    }, 1200)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const advanceToNext = () => {
    if (currentIdx >= PERSONAS.length - 1) {
      setIsComplete(true)
      return
    }
    setIsTransitioning(true)
    setTimeout(() => {
      const nextIdx = currentIdx + 1
      setConversations(prev =>
        prev.map((conv, i) =>
          i !== nextIdx ? conv : { messages: [{ role: 'ai', text: PERSONAS[nextIdx].greeting }], questionIdx: 0 }
        )
      )
      setCurrentIdx(nextIdx)
      setIsTransitioning(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }, 600)
  }

  if (isComplete) return <CompleteScreen onNavigate={navigate} />

  return (
    <div className="iv-page">
      {/* ─── 헤더 ─── */}
      <header className="iv-header">
        <Link to="/" className="logo">
          <span className="logo-sg">SG</span>
          <span className="logo-chem">Chem</span>
        </Link>
      </header>

      {/* ─── 진행 상태 표시 (헤더 아래) ─── */}
      <div className="iv-status-bar">
        <span className="iv-status-dot" />
        <span className="iv-status-title">대화 진행 중</span>
        <span className="iv-status-count">{currentIdx + 1}<small>/{PERSONAS.length}</small></span>
      </div>

      {/* ─── 페르소나 스텝 ─── */}
      <div className="iv-steps-bar">
        {PERSONAS.map((p, i) => (
          <div key={p.id} className="iv-step-wrap">
            <div className={`iv-step-dot ${i < currentIdx ? 'done' : i === currentIdx ? 'active' : ''}`}>
              {i < currentIdx ? '✓' : p.emoji}
            </div>
            <span className={`iv-step-label ${i === currentIdx ? 'active' : ''}`}>{p.name}</span>
            {i < PERSONAS.length - 1 && (
              <div className={`iv-step-line ${i < currentIdx ? 'done' : ''}`} />
            )}
          </div>
        ))}
      </div>

      {/* ─── 메인 ─── */}
      <div className={`iv-main ${isTransitioning ? 'iv-transitioning' : ''}`}>

        {/* 대화상대 사이드카드 */}
        <aside className="iv-sidebar">
          <div className={`iv-big-avatar ${persona.avatarClass}`}>
            <span>{persona.emoji}</span>
          </div>
          <h2 className="iv-persona-name">{persona.name}</h2>

          <div className="iv-progress-mini">
            <div
              className="iv-progress-bar"
              style={{ width: `${Math.min((userMsgCount / MIN_TO_ADVANCE) * 100, 100)}%` }}
            />
          </div>
          <p className="iv-progress-hint">
            {canAdvance ? '다음 대화상대로 이동할 수 있어요!' : `${userMsgCount}/${MIN_TO_ADVANCE} 대화 중`}
          </p>

          <button
            className={`iv-next-btn ${canAdvance ? 'ready' : ''}`}
            onClick={advanceToNext}
            disabled={!canAdvance}
          >
            {currentIdx < PERSONAS.length - 1
              ? `다음 대화상대 (${PERSONAS[currentIdx + 1]?.name}) →`
              : '✨ 대화 완료!'}
          </button>
        </aside>

        {/* 채팅 창 */}
        <section className="iv-chat">
          <div className="iv-messages">
            {currentConv.messages.map((msg, idx) => (
              <div key={idx} className={`iv-msg iv-msg-${msg.role}`}>
                {msg.role === 'ai' && (
                  <div className={`iv-msg-av ${persona.avatarClass}`}>{persona.emoji}</div>
                )}
                <div className="iv-bubble">{msg.text}</div>
                {msg.role === 'user' && (
                  <div className="iv-msg-av iv-user-av">나</div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="iv-msg iv-msg-ai">
                <div className={`iv-msg-av ${persona.avatarClass}`}>{persona.emoji}</div>
                <div className="iv-bubble iv-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 모바일용 advance 버튼 */}
          {canAdvance && (
            <div className="iv-mobile-advance">
              <button className="iv-next-btn ready" onClick={advanceToNext}>
                {currentIdx < PERSONAS.length - 1
                  ? `다음 대화상대 (${PERSONAS[currentIdx + 1]?.name}) →`
                  : '✨ 대화 완료!'}
              </button>
            </div>
          )}

          <div className="iv-input-area">
            <textarea
              ref={inputRef}
              className="iv-input"
              placeholder="메시지 입력... (Enter로 전송)"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              className="iv-send-btn"
              onClick={sendMessage}
              disabled={!inputText.trim() || isTyping}
            >
              전송
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

function CompleteScreen({ onNavigate }) {
  const [analyzing, setAnalyzing] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setAnalyzing(false), 2800)
    return () => clearTimeout(t)
  }, [])

  const sortedScores = [...MOCK_SCORES].sort((a, b) => b.score - a.score)

  return (
    <div className="iv-complete-page">
      {analyzing ? (
        <div className="iv-analyzing">
          <div className="iv-spinner" />
          <h2>대화를 분석하고 있어요</h2>
          <p>5명과의 대화를 기반으로<br />당신의 성향을 파악하고 있습니다</p>
          <div className="iv-analyze-dots">
            <span /><span /><span />
          </div>
        </div>
      ) : (
        <div className="iv-report-card">
          <div className="iv-result-badge">💜 성향 분석 완료</div>

          <h2 className="iv-report-title">대화 결과</h2>

          {/* 페르소나별 케미 점수 */}
          <div className="iv-persona-scores">
            {sortedScores.map((item, i) => {
              const p = PERSONAS.find(p => p.id === item.personaId)
              const isBest = i === 0
              const isWorst = i === sortedScores.length - 1
              return (
                <div
                  key={item.personaId}
                  className={`iv-score-row ${isBest ? 'best' : isWorst ? 'worst' : ''}`}
                >
                  <div className={`iv-score-av ${p.avatarClass}`}>{p.emoji}</div>
                  <div className="iv-score-name-wrap">
                    {isBest && <span className="iv-rank-badge best-badge">최고 케미 ❤️</span>}
                    {isWorst && <span className="iv-rank-badge worst-badge">미스매치 💔</span>}
                    <span className="iv-score-name">{p.name}</span>
                  </div>
                  <div className="iv-score-bar-wrap">
                    <div
                      className="iv-score-bar-fill"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <span className="iv-score-num">{item.score}<small>점</small></span>
                </div>
              )
            })}
          </div>

          {/* 나의 성향 */}
          <div className="iv-my-type-section">
            <h3>나의 대화 성향</h3>
            <div className="iv-result-type">공감 · 유머형</div>
            <p className="iv-result-desc">
              대화를 적극적으로 이끌어가며 상대방의 감정에 잘 공감하는 스타일이에요.<br />
              유머와 따뜻함을 함께 갖춘 매력적인 대화 상대입니다.
            </p>
            <div className="iv-result-tags">
              <span>공감형</span>
              <span>유머 감각</span>
              <span>적극적</span>
              <span>따뜻함</span>
            </div>
          </div>

          <button className="iv-match-btn" onClick={() => onNavigate('/match-profiles')}>
            나와 성향이 맞는 사람 보기 →
          </button>
        </div>
      )}
    </div>
  )
}
