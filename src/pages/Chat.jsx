import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import './Chat.css'

const ALL_PROFILES = [
  {
    id: 1,
    name: '지훈',
    age: 27,
    job: '디자이너',
    type: '공감형',
    emoji: '🌿',
    avatarClass: 'mp-av-purple',
  },
  {
    id: 2,
    name: '준혁',
    age: 25,
    job: '마케터',
    type: '유머형',
    emoji: '😄',
    avatarClass: 'mp-av-yellow',
  },
  {
    id: 3,
    name: '태양',
    age: 28,
    job: '음악 프로듀서',
    type: '감성형',
    emoji: '🎨',
    avatarClass: 'mp-av-orange',
  },
  {
    id: 4,
    name: '현우',
    age: 26,
    job: '스타트업 개발자',
    type: '탐험형',
    emoji: '🌏',
    avatarClass: 'mp-av-teal',
  },
  {
    id: 5,
    name: '재민',
    age: 27,
    job: '교사',
    type: '공감형',
    emoji: '☕',
    avatarClass: 'mp-av-brown',
  },
  {
    id: 6,
    name: '도현',
    age: 29,
    job: '연구원',
    type: '논리형',
    emoji: '💡',
    avatarClass: 'mp-av-blue',
  },
]

const AUTO_REPLIES = [
  '오, 정말요? 저도 비슷한 경험이 있어요 😊',
  '그렇군요! 더 자세히 이야기해줄 수 있어요?',
  '완전 공감돼요ㅋㅋ 저도 그런 편이거든요',
  '오늘 날씨도 좋은데 이런 이야기 나누니까 좋네요!',
  '하하 맞아요, 저도 그 생각 해본 적 있어요',
  '진짜요? 신기하다, 저도 그거 좋아하는데!',
]

const SUGGESTIONS = [
  '안녕하세요! 프로필 보고 연락드려요 😊',
  '반갑습니다! 어떤 취미 있으세요?',
  '안녕하세요~ 요즘 뭐하고 지내세요?',
  '처음 뵙겠습니다! 좋은 인연이 됐으면 해요',
]

export default function Chat() {
  const navigate = useNavigate()
  const location = useLocation()
  const initialProfile = location.state?.profile

  const [activeId, setActiveId] = useState(initialProfile?.id ?? ALL_PROFILES[0].id)
  const [allMessages, setAllMessages] = useState({})
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const activeProfile = ALL_PROFILES.find(p => p.id === activeId)
  const messages = allMessages[activeId] ?? []
  const hasStarted = messages.length > 0

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [allMessages, isTyping, activeId])

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeId])

  const switchChat = id => {
    setActiveId(id)
    setInputText('')
    setIsTyping(false)
  }

  const sendMessage = (text = inputText.trim()) => {
    if (!text || isTyping) return

    setAllMessages(prev => ({
      ...prev,
      [activeId]: [...(prev[activeId] ?? []), { role: 'user', text }],
    }))
    setInputText('')
    setIsTyping(true)

    setTimeout(() => {
      const reply = AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)]
      setAllMessages(prev => ({
        ...prev,
        [activeId]: [...(prev[activeId] ?? []), { role: 'other', text: reply }],
      }))
      setIsTyping(false)
    }, 1200)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const getLastMessage = profileId => {
    const msgs = allMessages[profileId]
    if (!msgs || msgs.length === 0) return '대화를 시작해보세요'
    const last = msgs[msgs.length - 1]
    return last.role === 'user' ? `나: ${last.text}` : last.text
  }

  return (
    <div className="ch-page">

      {/* ─── 헤더 ─── */}
      <header className="ch-header">
        <Link to="/" className="logo">
          <span className="logo-sg">SG</span>
          <span className="logo-chem">Chem</span>
        </Link>
        <button className="ch-back-btn" onClick={() => navigate('/match-profiles')}>목록</button>
      </header>

      {/* ─── 바디 (사이드바 + 채팅) ─── */}
      <div className="ch-body">

        {/* 대화 목록 사이드바 */}
        <aside className="ch-sidebar">
          <div className="ch-sidebar-title">대화 목록</div>
          <ul className="ch-room-list">
            {ALL_PROFILES.map(p => {
              const lastMsg = getLastMessage(p.id)
              const isActive = p.id === activeId
              const msgs = allMessages[p.id] ?? []
              const unread = msgs.filter(m => m.role === 'other').length > 0 && !isActive ? msgs.filter(m => m.role === 'other').length : 0

              return (
                <li
                  key={p.id}
                  className={`ch-room-item ${isActive ? 'active' : ''}`}
                  onClick={() => switchChat(p.id)}
                >
                  <div className={`ch-room-av ${p.avatarClass}`}>{p.emoji}</div>
                  <div className="ch-room-info">
                    <div className="ch-room-top">
                      <span className="ch-room-name">{p.name}</span>
                      {unread > 0 && <span className="ch-unread">{unread}</span>}
                    </div>
                    <p className="ch-room-preview">{lastMsg}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </aside>

        {/* 채팅 메인 */}
        <div className="ch-main">

          {/* 대화상대 프로필 바 */}
          <div className="ch-profile-bar">
            <div className={`ch-header-av ${activeProfile.avatarClass}`}>{activeProfile.emoji}</div>
            <div className="ch-header-info">
              <span className="ch-header-name">{activeProfile.name}</span>
              <span className="ch-header-sub">{activeProfile.age}세 · {activeProfile.job}</span>
            </div>
          </div>

          {/* 추천 멘트 */}
          {!hasStarted && (
            <div className="ch-suggestions">
              <p className="ch-suggestions-label">첫 인사를 건네볼까요?</p>
              <div className="ch-suggestions-list">
                {SUGGESTIONS.map((s, i) => (
                  <button key={i} className="ch-suggestion-chip" onClick={() => sendMessage(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 메시지 */}
          <div className="ch-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`ch-msg ch-msg-${msg.role}`}>
                {msg.role === 'other' && (
                  <div className={`ch-msg-av ${activeProfile.avatarClass}`}>{activeProfile.emoji}</div>
                )}
                <div className="ch-bubble">{msg.text}</div>
                {msg.role === 'user' && (
                  <div className="ch-msg-av ch-user-av">나</div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="ch-msg ch-msg-other">
                <div className={`ch-msg-av ${activeProfile.avatarClass}`}>{activeProfile.emoji}</div>
                <div className="ch-bubble ch-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 입력창 */}
          <div className="ch-input-area">
            <textarea
              ref={inputRef}
              className="ch-input"
              placeholder="메시지 입력... (Enter로 전송)"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              className="ch-send-btn"
              onClick={() => sendMessage()}
              disabled={!inputText.trim() || isTyping}
            >
              전송
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
