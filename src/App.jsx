import { useEffect, useMemo, useState } from "react";

const services = [
  ["매물 분석", "이 매물이 실제로 가능한지 봅니다."],
  ["비용 검토", "숨은 비용까지 계산합니다."],
  ["오픈 준비", "무엇부터 할지 순서대로 정리합니다."],
];

const categories = [
  ["카페", "입지와 동선이 핵심입니다."],
  ["스시 / 테이크어웨이", "작게 시작해도 구조가 중요합니다."],
  ["한식당", "주방 효율과 인건비를 먼저 봐야 합니다."],
  ["코리안 BBQ", "설비 투자비가 커서 더 신중해야 합니다."],
  ["청소업체", "초기 비용보다 운영 구조가 중요합니다."],
];

const sampleCards = [
  ["property-report", "NAMU 샘플 - 매물 분석 리포트", "매물 판단용 1페이지 리포트"],
  ["fit-assessment", "NAMU 샘플 - 업종 적합성 평가표", "업종별 적합도 비교 문서"],
  ["opening-checklist", "NAMU 샘플 - 오픈 체크리스트", "오픈 전 준비 순서 문서"],
  ["cost-table", "NAMU 샘플 - 예상 비용표", "예산 구조를 보는 비용 문서"],
];

function useHashRoute() {
  const readHash = () => window.location.hash || "#home";
  const [hash, setHash] = useState(readHash);

  useEffect(() => {
    const onHashChange = () => setHash(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}

function App() {
  const hash = useHashRoute();
  const sampleSlug = useMemo(() => {
    const match = hash.match(/^#\/sample\/(.+)$/);
    return match ? match[1] : null;
  }, [hash]);

  if (sampleSlug) {
    return <SamplePage slug={sampleSlug} />;
  }

  return <HomePage />;
}

function HomePage() {
  return (
    <div className="page-shell">
      <TopBar />
      <Header />

      <main id="top">
        <section className="hero-section">
          <div className="container">
            <div className="hero-shell">
              <div className="hero-copy">
                <span className="eyebrow dark">Brisbane Business Advisory</span>
                <p className="mini-label">매물 분석부터 오픈 준비까지</p>
                <h1>브리즈번 창업, 먼저 검토부터</h1>
                <p className="hero-description">
                  매물 분석, 비용 검토, 오픈 준비까지.
                  한국어로 빠르게 정리해드립니다.
                </p>
                <div className="hero-actions">
                  <a className="cta-button cta-gold large" href="#contact">
                    <span>매물 검토 문의하기</span>
                    <span className="cta-icon"><iconify-icon icon="solar:arrow-right-linear" /></span>
                  </a>
                  <a className="cta-button cta-ghost large" href="#deliverables">
                    <span>분석 샘플 보기</span>
                    <span className="cta-icon"><iconify-icon icon="solar:document-text-linear" /></span>
                  </a>
                </div>
                <div className="hero-metrics compact-metrics">
                  <div className="metric-card"><p>검토 업종</p><strong>5개</strong><span>F&amp;B와 서비스업</span></div>
                  <div className="metric-card"><p>지역 기반</p><strong>Brisbane</strong><span>현지 상황 기준</span></div>
                  <div className="metric-card"><p>샘플 자료</p><strong>4종</strong><span>리포트와 체크리스트</span></div>
                </div>
              </div>

              <div className="hero-visual">
                <div className="floating-chip chip-navy">리스, 설비, 동선, 예산</div>
                <div className="floating-chip chip-light">한국어로 빠르게 정리</div>
                <div className="hero-image-wrap">
                  <img src="https://picsum.photos/seed/namu-consultant/1000/1300" alt="브리즈번 비즈니스 컨설팅 무드 이미지" />
                </div>
              </div>
            </div>

            <div className="hero-overlap-cards compact-overlap">
              <article className="overlay-card">
                <p>매물 분석</p>
                <h3>가능한지 먼저</h3>
                <span>좋아 보이는 매물보다 실제 구조를 먼저 봅니다.</span>
              </article>
              <article className="overlay-card raised">
                <p>비용 검토</p>
                <h3>숨은 비용까지</h3>
                <span>공사, 장비, 예비비까지 같이 계산합니다.</span>
              </article>
              <article className="overlay-card">
                <p>오픈 준비</p>
                <h3>순서를 정리</h3>
                <span>무엇부터 해야 하는지 바로 보이게 정리합니다.</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section-block" id="about">
          <div className="container split-layout">
            <div className="section-copy compact-copy">
              <span className="eyebrow">Why NAMU</span>
              <h2>왜 NAMU인가요</h2>
              <p>좋아 보이는 매물을 찾는 것보다, 잘못된 결정을 피하는 게 더 중요합니다.</p>
              <div className="info-grid">
                <div className="info-card"><h3>현장 기준</h3><p>입지, 동선, 설비, 리스 조건을 같이 봅니다.</p></div>
                <div className="info-card"><h3>빠른 판단</h3><p>계약해도 되는지 아닌지 기준을 드립니다.</p></div>
                <div className="quote-card"><p>창업은 감보다 구조가 먼저입니다.</p></div>
              </div>
            </div>
            <div className="image-card"><img src="https://picsum.photos/seed/namu-meeting/900/1100" alt="브리즈번 창업 상담 이미지" /></div>
          </div>
        </section>

        <section className="section-block section-soft" id="services">
          <div className="container">
            <div className="section-head compact-head">
              <span className="eyebrow light">Service</span>
              <h2>이렇게 도와드립니다</h2>
            </div>
            <div className="services-grid compact-services">
              {services.map(([title, text], index) => (
                <article className={`service-card ${index === 2 ? "service-card-dark" : ""}`} key={title}>
                  <p className="card-number">0{index + 1}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="categories">
          <div className="container categories-layout">
            <div className="section-copy compact-copy">
              <span className="eyebrow">Categories</span>
              <h2>검토 가능한 업종</h2>
              <p>업종마다 보는 기준이 다릅니다. 먼저 맞는 구조인지부터 확인합니다.</p>
            </div>
            <div className="categories-grid compact-categories">
              {categories.map(([title, text], index) => (
                <article className={`category-card ${index === 3 ? "category-card-dark" : ""} ${index === 0 ? "category-wide" : ""}`} key={title}>
                  {index === 0 ? <p className="category-tag">대표 업종</p> : null}
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-navy" id="deliverables">
          <div className="container">
            <div className="section-copy white-copy compact-copy wide-copy">
              <span className="eyebrow dark">Samples</span>
              <h2>상담 후 이런 자료를 받게 됩니다</h2>
              <p>버튼을 누르면 각 샘플 문서를 실제 화면처럼 볼 수 있습니다.</p>
            </div>
            <div className="sample-grid">
              {sampleCards.map(([slug, title, text]) => (
                <a className="sample-card-link" href={`#/sample/${slug}`} key={slug}>
                  <article className="sample-card">
                    <p className="sample-kicker">Customer Sample</p>
                    <h3>{title}</h3>
                    <span>{text}</span>
                    <div className="sample-link-row">
                      <strong>문서 보기</strong>
                      <iconify-icon icon="solar:arrow-right-up-linear" />
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="contact">
          <div className="container contact-shell">
            <div className="section-copy compact-copy">
              <span className="eyebrow">Contact</span>
              <h2>문의는 간단합니다</h2>
              <p>업종, 매물, 예산, 시기만 보내주셔도 시작할 수 있습니다.</p>
              <div className="contact-box">
                <p>Contact Information</p>
                <span>namu.au.partners@gmail.com</span>
                <span>Brisbane, Australia</span>
              </div>
            </div>
            <form className="contact-form" action="mailto:namu.au.partners@gmail.com" method="post" encType="text/plain">
              <label><span>이름</span><input type="text" name="name" placeholder="성함을 입력해주세요" required /></label>
              <label><span>연락처 또는 카카오톡</span><input type="text" name="contact" placeholder="연락 가능한 정보를 남겨주세요" required /></label>
              <label><span>희망 업종</span><select name="industry"><option>카페</option><option>스시 / 테이크어웨이</option><option>한식당</option><option>코리안 BBQ</option><option>청소업체</option><option>기타</option></select></label>
              <label><span>희망 시기</span><input type="text" name="timing" placeholder="예: 3개월 이내" /></label>
              <label className="full"><span>현재 상황</span><textarea name="message" rows="6" placeholder="현재 보고 있는 매물이나 가장 큰 고민을 적어주세요." /></label>
              <div className="form-footer full"><p>현재는 이메일 전송 방식으로 연결되어 있습니다.</p><button className="cta-button cta-navy large" type="submit"><span>상담 문의 보내기</span><span className="cta-icon"><iconify-icon icon="solar:arrow-right-up-linear" /></span></button></div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SamplePage({ slug }) {
  const sample = sampleMap[slug] ?? sampleMap["property-report"];

  return (
    <div className="page-shell sample-page-shell">
      <TopBar />
      <div className="sample-header-wrap">
        <div className="container sample-header-shell">
          <a className="brand" href="#home">
            <div className="brand-mark">N</div>
            <div><p className="brand-title">NAMU</p><p className="brand-sub">Partners</p></div>
          </a>
          <a className="cta-button cta-navy" href="#home">
            <span>메인으로 돌아가기</span>
            <span className="cta-icon"><iconify-icon icon="solar:arrow-left-linear" /></span>
          </a>
        </div>
      </div>

      <main className="sample-main">
        <div className="container sample-layout">
          <section className="sample-hero-card">
            <div className="sample-hero-copy">
              <span className="eyebrow">NAMU Sample</span>
              <h1>{sample.title}</h1>
              <p>{sample.summary}</p>
            </div>
            <div className="sample-meta-grid">
              {sample.meta.map(([label, value]) => (
                <div className="sample-meta-card" key={label}>
                  <p>{label}</p>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="document-shell">
            <div className="document-cover">
              <div>
                <p className="document-kicker">Customer-facing sample</p>
                <h2>{sample.documentTitle}</h2>
              </div>
              <span>{sample.documentCode}</span>
            </div>

            {sample.sections.map((section) => (
              <section className="document-section" key={section.heading}>
                <div className="section-line" />
                <div className="document-section-head">
                  <p>{section.kicker}</p>
                  <h3>{section.heading}</h3>
                </div>
                {renderSection(section)}
              </section>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function renderSection(section) {
  if (section.type === "grid") {
    return <div className="document-grid">{section.items.map((item) => <div className="document-card" key={item.title}><h4>{item.title}</h4><p>{item.text}</p></div>)}</div>;
  }
  if (section.type === "list") {
    return <ul className="document-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>;
  }
  if (section.type === "table") {
    return (
      <div className="document-table-wrap">
        <table className="document-table">
          <thead><tr>{section.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
          <tbody>{section.rows.map((row, index) => <tr key={index}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  }
  if (section.type === "score") {
    return <div className="score-list">{section.items.map((item) => <div className="score-row" key={item.label}><div className="score-head"><span>{item.label}</span><strong>{item.score}/5</strong></div><div className="score-bar"><i style={{ width: `${item.score * 20}%` }} /></div><p>{item.text}</p></div>)}</div>;
  }
  return <p className="document-paragraph">{section.text}</p>;
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-group"><span>월요일 - 금요일 9AM - 6PM</span><span>Brisbane, QLD Australia</span></div>
        <div className="topbar-group"><span>namu.au.partners@gmail.com</span></div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header-wrap">
      <div className="container header-shell">
        <a className="brand" href="#top"><div className="brand-mark">N</div><div><p className="brand-title">NAMU</p><p className="brand-sub">Partners</p></div></a>
        <nav className="desktop-nav"><a href="#about">소개</a><a href="#services">서비스</a><a href="#categories">추천 업종</a><a href="#deliverables">결과물</a><a href="#contact">문의</a></nav>
        <a className="cta-button cta-gold" href="#contact"><span>상담 요청하기</span><span className="cta-icon"><iconify-icon icon="solar:arrow-right-up-linear" /></span></a>
      </div>
    </header>
  );
}

function Footer() {
  return <footer className="footer"><div className="container footer-shell"><div><p className="footer-brand">NAMU Partners</p><p className="footer-copy">브리즈번 기반 비즈니스 창업 및 오픈 세팅 파트너</p></div><div className="footer-links"><a href="#about">소개</a><a href="#services">서비스</a><a href="#categories">추천 업종</a><a href="#deliverables">결과물</a><a href="#contact">문의</a></div></div></footer>;
}

const sampleMap = {
  "property-report": {
    title: "NAMU 샘플 - 매물 분석 리포트",
    summary: "실제 매물을 검토할 때 어떤 기준으로 판단하는지 보여주는 고객용 샘플입니다.",
    documentTitle: "Property Analysis Report",
    documentCode: "NPR-01",
    meta: [["업종", "카페"], ["지역", "North Brisbane"], ["검토일", "March 2026"]],
    sections: [
      { kicker: "Overview", heading: "한눈에 보는 판단", type: "grid", items: [
        { title: "추천도", text: "조건부 추천. 입지는 괜찮지만 설비 점검이 먼저 필요합니다." },
        { title: "강점", text: "가시성이 좋고 기존 카페 구조를 활용할 수 있습니다." },
        { title: "주의점", text: "전력 용량과 임대 조건을 반드시 다시 확인해야 합니다." },
      ] },
      { kicker: "Key Notes", heading: "핵심 포인트", type: "list", items: [
        "상권은 무난하지만 임대 조건에 따라 수익성이 크게 달라질 수 있습니다.",
        "기존 커피 설비를 활용할 수 있으면 초기 비용을 줄일 수 있습니다.",
        "좌석형보다 테이크어웨이 중심 운영이 더 잘 맞는 구조입니다.",
      ] },
      { kicker: "Investment", heading: "예상 투자 범위", type: "table", columns: ["항목", "범위"], rows: [
        ["권리금 / 인수비", "AUD 35k - 60k"],
        ["기본 리프레시", "AUD 10k - 18k"],
        ["장비 보완", "AUD 8k - 15k"],
        ["오픈 예비비", "AUD 8k - 12k"],
      ] },
    ],
  },
  "fit-assessment": {
    title: "NAMU 샘플 - 업종 적합성 평가표",
    summary: "어떤 업종이 현재 예산과 구조, 운영 스타일에 더 맞는지 비교하는 문서입니다.",
    documentTitle: "Industry Fit Assessment",
    documentCode: "NFA-02",
    meta: [["예산", "중간"], ["운영 형태", "직접 운영"], ["비교 업종", "5개"]],
    sections: [
      { kicker: "Fit Score", heading: "업종별 적합도", type: "score", items: [
        { label: "카페", score: 4, text: "브리즈번에서 진입이 비교적 안정적이고 구조를 만들기 쉽습니다." },
        { label: "스시 / 테이크어웨이", score: 4, text: "공간 효율은 좋지만 위생과 운영 일관성이 중요합니다." },
        { label: "한식당", score: 3, text: "메뉴와 인건비 구조를 잘 잡아야 합니다." },
        { label: "코리안 BBQ", score: 2, text: "브랜드성은 강하지만 설비 부담이 큽니다." },
        { label: "청소업체", score: 4, text: "초기 투자비는 낮지만 운영 시스템이 중요합니다." },
      ] },
      { kicker: "Decision", heading: "추천 방향", text: "현재 조건에서는 카페 또는 스시 / 테이크어웨이부터 검토하는 것이 가장 현실적입니다." },
    ],
  },
  "opening-checklist": {
    title: "NAMU 샘플 - 오픈 체크리스트",
    summary: "계약 후 오픈까지 무엇을 어떤 순서로 준비해야 하는지 보여주는 실행 문서입니다.",
    documentTitle: "Opening Checklist",
    documentCode: "NOC-03",
    meta: [["형식", "실행 체크리스트"], ["구간", "계약 후 ~ 오픈 전"], ["우선순위", "순서 기준"]],
    sections: [
      { kicker: "Phase 1", heading: "계약 직후", type: "list", items: [
        "리스 조건 최종 확인",
        "기존 설비 작동 여부 점검",
        "추가 공사 필요 항목 정리",
      ] },
      { kicker: "Phase 2", heading: "오픈 준비", type: "list", items: [
        "간판 및 기본 브랜딩 준비",
        "메뉴 구조 또는 서비스 구조 정리",
        "Google Business Profile 등록",
      ] },
      { kicker: "Phase 3", heading: "오픈 직전", type: "list", items: [
        "현장 동선 최종 점검",
        "장비 및 소모품 체크",
        "기본 홍보 문구와 문의 동선 확인",
      ] },
    ],
  },
  "cost-table": {
    title: "NAMU 샘플 - 예상 비용표",
    summary: "창업 전 실제로 어느 정도 자금이 필요한지 구조적으로 보여주는 비용 문서입니다.",
    documentTitle: "Estimated Cost Table",
    documentCode: "NCT-04",
    meta: [["업종", "카페 기준"], ["통화", "AUD"], ["기준", "예시 범위"]],
    sections: [
      { kicker: "Cost Overview", heading: "예상 비용 구조", type: "table", columns: ["항목", "예상 범위", "메모"], rows: [
        ["권리금 / 인수비", "35k - 60k", "기존 매물 조건에 따라 차이"],
        ["보증금 / 리스", "8k - 16k", "계약 조건 확인 필요"],
        ["리노베이션", "10k - 25k", "컨셉과 기존 상태에 따라 다름"],
        ["장비 보완", "8k - 15k", "냉장, 커피, POS 포함 가능"],
        ["오픈 예비비", "8k - 12k", "예상 외 비용 대비"],
      ] },
      { kicker: "Summary", heading: "총 예산 메모", text: "예시 기준으로 보면 최소 약 AUD 69k 수준부터, 설비와 공사 조건에 따라 AUD 128k 이상까지도 열어두고 보는 것이 안전합니다." },
    ],
  },
};

export default App;
