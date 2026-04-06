import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'

const faqs = [
  {
    q: 'AI 인터뷰는 어떻게 진행되나요?',
    a: 'AI 페르소나와 자연스러운 대화를 나누듯 진행됩니다. 정해진 형식 없이 일상적인 주제로 대화하다 보면, AI가 여러분의 대화 스타일과 성향을 자동으로 분석해요. 보통 10~15분 정도 소요됩니다.',
  },
  {
    q: '프로필 사진 없이도 매칭이 되나요?',
    a: '네! SGChem은 외모가 아닌 대화 스타일과 성향을 기반으로 매칭합니다. 프로필 사진 없이도 궁합 점수와 매칭 이유를 제공하기 때문에, 첫 대화부터 공통점을 바탕으로 자연스럽게 시작할 수 있어요.',
  },
  {
    q: '궁합 점수는 어떤 기준으로 계산되나요?',
    a: 'AI가 분석한 두 사람의 대화 스타일, 성향(내향/외향), 유머 코드, 관심사 등을 종합적으로 비교해 0~100점 사이의 궁합 점수를 산출합니다. 점수와 함께 "왜 잘 맞는지" 이유도 함께 보여드려요.',
  },
  {
    q: '인터뷰 결과가 마음에 안 들면 다시 할 수 있나요?',
    a: '물론이에요! 인터뷰는 언제든지 다시 진행할 수 있습니다. 다만 새로운 인터뷰를 완료하면 이전 분석 결과가 최신 결과로 업데이트되니 참고해 주세요.',
  },
  {
    q: '매칭된 상대방의 정보는 어디까지 공개되나요?',
    a: '상대방의 대화 스타일 유형, 궁합 점수, 매칭 이유, AI가 요약한 성향 정보만 공개됩니다. 이름, 연락처 등 개인 식별 정보는 양측이 대화를 수락한 이후 단계적으로 공개되며, 개인정보 보호를 최우선으로 합니다.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq-page">
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <span className="logo-sg">SG</span>
            <span className="logo-chem">Chem</span>
          </Link>
        </div>
      </nav>

      <div className="faq-content">
        <div className="faq-hero">
          <span className="section-badge">FAQ</span>
          <h1>자주 묻는 <span className="highlight">질문</span></h1>
          <p>SGChem 서비스에 대해 궁금한 점을 모았어요.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>Q. {item.q}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>A. {item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>더 궁금한 점이 있으신가요?</p>
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
