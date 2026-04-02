import { useEffect, useMemo, useState } from "react";

const services = [
  ["매물 분석", "이 매물이 실제로 가능한지 먼저 봅니다."],
  ["비용 검토", "숨은 비용까지 포함해 예산을 정리합니다."],
  ["오픈 준비", "무엇부터 해야 할지 순서대로 잡아드립니다."],
];

const categories = [
  ["카페", "입지와 동선이 매출을 좌우합니다."],
  ["스시 / 테이크어웨이", "작게 시작해도 구조가 중요합니다."],
  ["한식당", "주방 효율과 인건비를 먼저 봐야 합니다."],
  ["코리안 BBQ", "설비 비용이 커서 더 신중해야 합니다."],
  ["청소업체", "초기 비용보다 운영 구조가 더 중요합니다."],
];

const sampleCards = [
  ["property-report", "NAMU 샘플 - 매물 분석 리포트", "매물 진단용 1페이지 리포트", "01", "분석 리포트"],
  ["fit-assessment", "NAMU 샘플 - 업종 적합성 평가표", "업종별 적합도 비교 문서", "02", "판단 기준표"],
  ["opening-checklist", "NAMU 샘플 - 오픈 체크리스트", "오픈 전 준비 순서 문서", "03", "실행 체크리스트"],
  ["cost-table", "NAMU 샘플 - 예상 비용표", "예산 구조를 보는 비용 문서", "04", "예산 시뮬레이션"],
];

const scoreWidth = {
  높음: "88%",
  중간: "60%",
  "중간~높음": "72%",
  "매우 높음": "100%",
  낮음: "34%",
};

function useHashRoute() {
  const readHash = () => window.location.hash || "#home";
  const [hash, setHash] = useState(readHash());

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

  useEffect(() => {
    const shouldResetToTop =
      hash === "#home" ||
      hash === "#top" ||
      hash.startsWith("#/sample/");

    if (shouldResetToTop) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [hash]);

  if (sampleSlug) return <SamplePage slug={sampleSlug} />;
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
                <p className="mini-label">한국어로 정리해드리는 브리즈번 창업 파트너</p>
                <h1>브리즈번 비즈니스 창업, 매물 검토부터 오픈 준비까지</h1>
                <p className="hero-description">
                  카페, 스시, 한식당, 코리안 BBQ, 청소업체까지.
                  리스, 설비, 비용, 준비 순서를 한국어로 빠르게 정리해드립니다.
                </p>
                <div className="hero-proof">
                  <span><iconify-icon icon="solar:map-point-bold-duotone" /> Brisbane based</span>
                  <span><iconify-icon icon="solar:chat-round-call-bold-duotone" /> 한국어 상담</span>
                  <span><iconify-icon icon="solar:document-text-bold-duotone" /> 샘플 문서 4종 제공</span>
                </div>
                <div className="hero-actions">
                  <a className="cta-button cta-gold large" href="#contact">
                    <span>브리즈번 창업 상담 문의</span>
                    <span className="cta-icon"><iconify-icon icon="solar:arrow-right-linear" /></span>
                  </a>
                  <a className="cta-button cta-ghost large" href="#deliverables">
                    <span>고객용 샘플 문서 보기</span>
                    <span className="cta-icon"><iconify-icon icon="solar:document-text-linear" /></span>
                  </a>
                </div>
                <div className="hero-metrics compact-metrics">
                  <div className="metric-card"><p>검토 업종</p><strong>5가지</strong><span>외식업부터 서비스업까지</span></div>
                  <div className="metric-card"><p>지역 기반</p><strong>Brisbane</strong><span>현지 상황 중심 검토</span></div>
                  <div className="metric-card"><p>샘플 자료</p><strong>4종</strong><span>리포트부터 체크리스트까지</span></div>
                </div>
              </div>
              <div className="hero-visual">
                <div className="floating-chip chip-navy">리스, 설비, 동선, 예산</div>
                <div className="floating-chip chip-light">한국어로 빠르게 정리</div>
                <div className="hero-image-wrap">
                  <img src="https://picsum.photos/seed/namu-consultant/1000/1300" alt="브리즈번 비즈니스 컨설팅 무드 이미지" />
                </div>
                <div className="hero-visual-card">
                  <div className="hero-visual-top">
                    <span className="hero-doc-badge">Sample Preview</span>
                    <span className="hero-doc-code">NP-01</span>
                  </div>
                  <h3>매물 분석 리포트</h3>
                  <p>좋아 보이는 매물보다 실제로 가능한 구조인지부터 봅니다.</p>
                  <div className="hero-preview-list">
                    <span><iconify-icon icon="solar:check-circle-bold-duotone" /> 입지와 동선</span>
                    <span><iconify-icon icon="solar:check-circle-bold-duotone" /> 설비와 추가비용</span>
                    <span><iconify-icon icon="solar:check-circle-bold-duotone" /> 추천 업종 판단</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-overlap-cards compact-overlap">
              <article className="overlay-card"><p>매물 분석</p><h3>가능한지 먼저</h3><span>좋아 보이는 매물보다 실제 구조를 먼저 봅니다.</span></article>
              <article className="overlay-card raised"><p>비용 검토</p><h3>숨은 비용까지</h3><span>공사, 설비, 예비비까지 같이 계산합니다.</span></article>
              <article className="overlay-card"><p>오픈 준비</p><h3>순서를 정리</h3><span>무엇부터 해야 하는지 바로 보이게 정리합니다.</span></article>
            </div>
          </div>
        </section>

        <section className="section-block" id="about">
          <div className="container split-layout">
            <div className="section-copy compact-copy">
              <span className="eyebrow">Why NAMU</span>
              <h2>왜 NAMU인가요</h2>
              <p>창업은 좋아 보이는 매물을 찾는 일보다, 잘못된 계약과 불안한 비용을 피하는 일이 먼저입니다.</p>
              <div className="info-grid">
                <div className="info-card"><h3>현장 기준</h3><p>입지, 동선, 설비, 리스 조건을 함께 봅니다.</p></div>
                <div className="info-card"><h3>빠른 판단</h3><p>계약해도 되는지 아닌지 기준을 세워드립니다.</p></div>
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
              <p className="section-subcopy">처음 상담부터 검토, 비용 정리, 오픈 준비까지 세 단계로 나눠 진행합니다.</p>
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
              <div className="priority-panel">
                <p>우선 검토 추천</p>
                <strong>카페 / 스시 / 청소업체</strong>
                <span>초기 진입 설명이 쉽고 실제 분석 결과로 연결하기 좋은 업종입니다.</span>
              </div>
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
              <p>이전에 만든 구글드라이브 샘플 문서 흐름을 기준으로, 실제 고객 제출용처럼 보이도록 정리한 문서 미리보기입니다.</p>
            </div>
            <div className="sample-grid premium-sample-grid">
              {sampleCards.map(([slug, title, text, code, tag]) => (
                <a className="sample-card-link" href={`#/sample/${slug}`} key={slug}>
                  <article className="sample-card premium-sample-card">
                    <div className="sample-card-topline">
                      <p className="sample-kicker">Customer Sample</p>
                      <span className="sample-code">{code}</span>
                    </div>
                    <div className="sample-preview-sheet">
                      <div className="sample-preview-header">
                        <span className="sample-preview-dot" />
                        <span className="sample-preview-dot" />
                        <span className="sample-preview-dot" />
                      </div>
                      <div className="sample-preview-body sample-preview-body--lines">
                        <div className="sample-line sample-line-lg" />
                        <div className="sample-line" />
                        <div className="sample-line sample-line-short" />
                        <div className="sample-data-grid">
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                    <h3>{title}</h3>
                    <span>{text}</span>
                    <div className="sample-meta-line">
                      <span><iconify-icon icon="solar:document-text-bold-duotone" /> 문서형 결과물</span>
                      <span><iconify-icon icon="solar:stars-bold-duotone" /> {tag}</span>
                    </div>
                    <div className="sample-link-row"><strong>문서 보기</strong><iconify-icon icon="solar:arrow-right-up-linear" /></div>
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
              <p>보고 있는 매물, 원하는 업종, 예산, 시기를 보내주시면 어디부터 검토해야 하는지 먼저 정리해드립니다.</p>
              <div className="contact-box"><p>Contact Information</p><span>namu.au.partners@gmail.com</span><span>Brisbane, Australia</span></div>
            </div>
            <form className="contact-form" action="mailto:namu.au.partners@gmail.com" method="post" encType="text/plain">
              <label><span>이름</span><input type="text" name="name" placeholder="성함을 입력해주세요" required /></label>
              <label><span>연락처 또는 카카오톡</span><input type="text" name="contact" placeholder="연락 가능한 정보를 적어주세요" required /></label>
              <label><span>원하는 업종</span><select name="industry"><option>카페</option><option>스시 / 테이크어웨이</option><option>한식당</option><option>코리안 BBQ</option><option>청소업체</option><option>기타</option></select></label>
              <label><span>원하는 시기</span><input type="text" name="timing" placeholder="예: 3개월 이내" /></label>
              <label className="full"><span>현재 상황</span><textarea name="message" rows="6" placeholder="현재 보고 있는 매물이나 고민하고 있는 내용을 적어주세요" /></label>
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
            <div>
              <p className="brand-title">NAMU</p>
              <p className="brand-sub">Partners</p>
            </div>
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
              <div className="sample-summary-pills">
                {sample.pills.map((pill) => <span className="summary-pill" key={pill}>{pill}</span>)}
              </div>
            </div>
            <div className="sample-meta-grid">
              {sample.meta.map((item) => (
                <div className="sample-meta-card" key={item.label}>
                  <div className="meta-icon"><iconify-icon icon={item.icon} /></div>
                  <p>{item.label}</p>
                  <strong>{item.value}</strong>
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
                  <div className="section-icon"><iconify-icon icon={section.icon} /></div>
                  <div>
                    <p>{section.kicker}</p>
                    <h3>{section.heading}</h3>
                  </div>
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
    return (
      <div className="document-grid">
        {section.items.map((item) => (
          <div className="document-card" key={item.title}>
            <div className="document-card-top">
              {item.icon ? <span className="document-card-icon"><iconify-icon icon={item.icon} /></span> : null}
              {item.badge ? <span className="document-badge">{item.badge}</span> : null}
            </div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            {item.points ? <ul className="mini-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "list") {
    return (
      <ul className="document-list rich-list">
        {section.items.map((item) => {
          const value = typeof item === "string" ? { text: item, icon: "solar:check-circle-bold-duotone" } : item;
          return (
            <li key={value.text}>
              <span className="list-icon"><iconify-icon icon={value.icon} /></span>
              <span>{value.text}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  if (section.type === "checklist") {
    return (
      <div className="checklist-grid">
        {section.items.map((item) => (
          <div className="checklist-card" key={item.text}>
            <span className="check-icon"><iconify-icon icon={item.icon || "solar:verified-check-bold-duotone"} /></span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "table") {
    return (
      <div className="document-table-wrap">
        <table className="document-table">
          <thead>
            <tr>{section.columns.map((column) => <th key={column}>{column}</th>)}</tr>
          </thead>
          <tbody>
            {section.rows.map((row, index) => (
              <tr key={index}>{row.map((cell, cellIndex) => <td key={`${index}-${cellIndex}`}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (section.type === "score") {
    return (
      <div className="score-list">
        {section.items.map((item) => (
          <div className="score-row" key={item.label}>
            <div className="score-head">
              <div className="score-title">
                <span className="score-icon"><iconify-icon icon={item.icon} /></span>
                <span>{item.label}</span>
              </div>
              <strong>{item.score}</strong>
            </div>
            <div className="score-bar"><i style={{ width: scoreWidth[item.score] || item.score }} /></div>
            <div className="score-tags">{item.tags.map((tag) => <span className="score-tag" key={tag}>{tag}</span>)}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  }

  return <p className="document-paragraph">{section.text}</p>;
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-group">
          <span>월요일 - 금요일 9AM - 6PM</span>
          <span>Brisbane, QLD Australia</span>
        </div>
        <div className="topbar-group"><span>namu.au.partners@gmail.com</span></div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header-wrap">
      <div className="container header-shell">
        <a className="brand" href="#top">
          <div className="brand-mark">N</div>
          <div>
            <p className="brand-title">NAMU</p>
            <p className="brand-sub">Partners</p>
          </div>
        </a>
        <nav className="desktop-nav">
          <a href="#about">소개</a>
          <a href="#services">서비스</a>
          <a href="#categories">추천 업종</a>
          <a href="#deliverables">결과물</a>
          <a href="#contact">문의</a>
        </nav>
        <a className="cta-button cta-gold" href="#contact">
          <span>상담 요청하기</span>
          <span className="cta-icon"><iconify-icon icon="solar:arrow-right-up-linear" /></span>
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-shell">
        <div>
          <p className="footer-brand">NAMU Partners</p>
          <p className="footer-copy">브리즈번 기반 비즈니스 창업 및 오픈 세팅 파트너</p>
        </div>
        <div className="footer-links">
          <a href="#about">소개</a>
          <a href="#services">서비스</a>
          <a href="#categories">추천 업종</a>
          <a href="#deliverables">결과물</a>
          <a href="#contact">문의</a>
        </div>
      </div>
    </footer>
  );
}

const sampleMap = {
  "property-report": {
    title: "NAMU 샘플 - 매물 분석 리포트",
    summary: "이전에 정리한 구글드라이브 원본 흐름을 기준으로, 고객에게 보여줄 수 있는 1페이지 분석 리포트 형태로 재구성한 샘플입니다.",
    documentTitle: "NAMU Partners 샘플 매물 분석 리포트",
    documentCode: "NPR-01",
    pills: ["브리즈번 교외 상권", "카페 / 스시 적합", "고객 제출용 샘플"],
    meta: [
      { label: "검토 지역", value: "Brisbane, QLD", icon: "solar:map-point-bold-duotone" },
      { label: "매장 면적", value: "약 78sqm", icon: "solar:ruler-cross-pen-bold-duotone" },
      { label: "우선 추천", value: "카페 / 스시", icon: "solar:cup-hot-bold-duotone" },
    ],
    sections: [
      { kicker: "Scenario", heading: "샘플 시나리오", icon: "solar:document-text-bold-duotone", text: "브리즈번 북부 교외 상권 내 카페 또는 스시 테이크어웨이에 적합한 소형 리테일 매장을 가정한 리포트입니다." },
      { kicker: "Summary", heading: "매물 요약", icon: "solar:buildings-3-bold-duotone", type: "table", columns: ["항목", "내용"], rows: [["지역", "Brisbane, QLD"], ["형태", "1층 리테일 유닛"], ["면적", "약 78sqm"], ["현재 상태", "일부 호스피탈리티 시설 보유"], ["기존 강점 설비", "grease trap, exhaust canopy, cool room, front counter shell"]] },
      { kicker: "Evaluation", heading: "종합 평가", icon: "solar:chart-square-bold-duotone", type: "grid", items: [{ title: "전체 의견", icon: "solar:shield-check-bold-duotone", badge: "Overall", text: "리스 조건이 무난하고 기존 설비가 실제 사용 가능한 상태라면 충분히 검토할 만한 기회입니다." }, { title: "추천 업종 우선순위", icon: "solar:ranking-bold-duotone", badge: "Priority", text: "1) 중소형 카페  2) 스시 테이크어웨이  3) 간단한 한식 캐주얼 다이닝" }, { title: "이 매물이 괜찮은 이유", icon: "solar:stars-bold-duotone", badge: "Why It Works", text: "기존 인프라가 남아 있고 면적이 과하지 않아 owner-operator 모델에도 잘 맞습니다.", points: ["초기 공사비를 크게 줄일 가능성", "대형팀 없이도 운영 가능한 구조", "간단한 메뉴 구조와 권역 상권이 잘 맞음"] }] },
      { kicker: "Pros", heading: "장점", icon: "solar:like-bold-duotone", type: "list", items: [{ text: "기존 grease trap이 있으면 주요 배관 비용 절감 가능", icon: "solar:dropper-bold-duotone" }, { text: "기존 canopy가 usable하면 주방 설비비 절감 가능", icon: "solar:fire-bold-duotone" }, { text: "전면부가 간판 교체와 브랜드 리프레시에 적합", icon: "solar:gallery-circle-bold-duotone" }, { text: "소형 점포라 레스토랑보다 인력 부담이 낮음", icon: "solar:users-group-rounded-bold-duotone" }] },
      { kicker: "Risk", heading: "주요 리스크", icon: "solar:danger-triangle-bold-duotone", type: "list", items: [{ text: "canopy, 환기 용량, 배관 상태는 반드시 현장 검증 필요", icon: "solar:danger-bold-duotone" }, { text: "리스 조건에 따라 간판, fit-out 승인, 옵션 기간 차이가 큼", icon: "solar:document-add-bold-duotone" }, { text: "피크 시간 유동이 제한되면 dine-in 비중 높은 업종은 불리할 수 있음", icon: "solar:clock-circle-bold-duotone" }] },
    ],
  },
  "fit-assessment": {
    title: "NAMU 샘플 - 업종 적합성 평가표",
    summary: "브리즈번에서 어떤 업종이 더 현실적인지 빠르게 비교할 수 있도록, 이전 드라이브 원본의 구조를 바탕으로 정리한 판단용 문서입니다.",
    documentTitle: "NAMU Partners 샘플 업종 적합성 평가표",
    documentCode: "NFA-02",
    pills: ["업종 5개 비교", "진입 난이도 판단", "초기 추천 우선순위 포함"],
    meta: [
      { label: "비교 업종", value: "5가지", icon: "solar:layers-bold-duotone" },
      { label: "초기 추천", value: "카페 / 스시 / 청소업체", icon: "solar:medal-ribbons-star-bold-duotone" },
      { label: "사용 방식", value: "리드 상담용", icon: "solar:chat-round-call-bold-duotone" },
    ],
    sections: [
      { kicker: "Purpose", heading: "문서 목적", icon: "solar:target-bold-duotone", text: "브리즈번의 특정 매물 또는 예산 조건에 어떤 업종이 더 잘 맞는지 비교하기 위한 샘플 평가표입니다." },
      { kicker: "Industry Review", heading: "업종별 적합도 비교", icon: "solar:chart-2-bold-duotone", type: "score", items: [{ label: "카페", score: "높음", icon: "solar:cup-hot-bold-duotone", tags: ["공사 민감도 중간~높음", "인력 복잡도 중간", "마케팅 중요도 높음"], text: "수요와 브랜드 확장성이 좋지만, 마진 구조와 차별화 포인트를 분명히 잡아야 합니다." }, { label: "스시 / 테이크어웨이", score: "높음", icon: "solar:hamburger-menu-bold-duotone", tags: ["공사 민감도 중간", "인력 복잡도 중간", "회전 구조 중요"], text: "작은 공간에서도 효율적으로 운영 가능해 초기 진입 업종으로 설명하기 좋습니다." }, { label: "한식당", score: "중간", icon: "solar:plate-bold-duotone", tags: ["주방 난이도 높음", "인건비 부담 큼", "메뉴 설계 중요"], text: "수요 가능성은 있지만 주방 효율과 인력 운영 경험이 필요합니다." }, { label: "코리안 BBQ", score: "중간", icon: "solar:fire-square-bold-duotone", tags: ["설비 부담 매우 높음", "배기 중요", "브랜드 임팩트 큼"], text: "컨셉 파워는 강하지만 초기 시설 투자 부담이 커서 후순위로 검토하는 편이 안전합니다." }, { label: "청소업체", score: "높음", icon: "solar:broom-bold-duotone", tags: ["초기 비용 낮음", "운영 구조 중요", "확장성 있음"], text: "초기 투자금이 낮고 서비스업 구조로 설명하기 쉬워, 비외식업 대안으로 좋습니다." }] },
    ],
  },
  "opening-checklist": {
    title: "NAMU 샘플 - 오픈 체크리스트",
    summary: "실제 오픈 준비에 바로 적용할 수 있도록, 단계별 준비 항목을 고객용 문서처럼 다시 정리한 체크리스트 샘플입니다.",
    documentTitle: "NAMU Partners 샘플 오픈 체크리스트",
    documentCode: "NOC-03",
    pills: ["7단계 실행 흐름", "현장 체크 포함", "오픈 직전 점검까지"],
    meta: [
      { label: "문서 형식", value: "실행 체크리스트", icon: "solar:checklist-bold-duotone" },
      { label: "범위", value: "기획 ~ 오픈 직전", icon: "solar:calendar-bold-duotone" },
      { label: "용도", value: "내부 준비용", icon: "solar:notes-bold-duotone" },
    ],
    sections: [
      { kicker: "Phase 1", heading: "기획 단계", icon: "solar:pen-2-bold-duotone", type: "checklist", items: [{ text: "사업 컨셉 확정", icon: "solar:magic-stick-3-bold-duotone" }, { text: "타깃 고객 정의", icon: "solar:users-group-rounded-bold-duotone" }, { text: "예산 범위 확정", icon: "solar:wallet-money-bold-duotone" }, { text: "운영 구조 결정", icon: "solar:user-hand-up-bold-duotone" }] },
      { kicker: "Phase 2", heading: "매물 / 리스 검토", icon: "solar:document-text-bold-duotone", type: "checklist", items: [{ text: "리스 기간 및 옵션 확인", icon: "solar:document-add-bold-duotone" }, { text: "permitted use 확인", icon: "solar:shield-check-bold-duotone" }, { text: "간판 설치 조건 확인", icon: "solar:gallery-circle-bold-duotone" }, { text: "landlord fit-out 승인 여부 확인", icon: "solar:home-wifi-angle-bold-duotone" }, { text: "전기 / 가스 / 배수 / 환기 상태 확인", icon: "solar:bolt-circle-bold-duotone" }] },
      { kicker: "Phase 3", heading: "공사 / 설비 점검", icon: "solar:settings-bold-duotone", type: "checklist", items: [{ text: "grease trap 점검", icon: "solar:dropper-bold-duotone" }, { text: "exhaust canopy 점검", icon: "solar:fire-bold-duotone" }, { text: "배관 및 drainage 확인", icon: "solar:waterdrop-bold-duotone" }, { text: "전기 용량 확인", icon: "solar:bolt-bold-duotone" }, { text: "기존 장비 사용 가능 여부 확인", icon: "solar:cpu-bolt-bold-duotone" }] },
      { kicker: "Phase 4", heading: "사업 세팅", icon: "solar:case-round-bold-duotone", type: "checklist", items: [{ text: "ABN 및 사업 구조 확인", icon: "solar:card-bold-duotone" }, { text: "보험 가입", icon: "solar:shield-bold-duotone" }, { text: "council 및 관련 규정 확인", icon: "solar:document-bold-duotone" }, { text: "업종별 기본 허가 확인", icon: "solar:plate-bold-duotone" }, { text: "회계 / bookkeeping 구조 준비", icon: "solar:calculator-bold-duotone" }] },
    ],
  },
  "cost-table": {
    title: "NAMU 샘플 - 예상 비용표",
    summary: "브리즈번 소형 매장 창업을 기준으로, 이전에 만든 샘플 비용표 흐름을 유지하면서 고객용으로 보기 좋게 재구성한 문서입니다.",
    documentTitle: "NAMU Partners 샘플 예상 비용표",
    documentCode: "NCT-04",
    pills: ["AUD 기준", "초기 투자 + 월 운영비", "매출 예시 포함"],
    meta: [
      { label: "샘플 업종", value: "카페 / 스시", icon: "solar:shop-bold-duotone" },
      { label: "통화", value: "AUD", icon: "solar:wallet-money-bold-duotone" },
      { label: "가정", value: "기존 fit-out 일부 보유", icon: "solar:buildings-bold-duotone" },
    ],
    sections: [
      { kicker: "Concept", heading: "샘플 컨셉", icon: "solar:star-fall-2-bold-duotone", text: "브리즈번 내 소형 매장 기준이며, 일부 기존 시설이 남아 있는 상황을 가정했습니다." },
      { kicker: "Capex", heading: "초기 투자비 범위", icon: "solar:wallet-bold-duotone", type: "table", columns: ["항목", "예상 범위"], rows: [["권리금 또는 인수금", "AUD 20,000-45,000"], ["보증금 / bond", "AUD 8,000-15,000"], ["리프레시 공사", "AUD 15,000-35,000"], ["설비 추가 / 교체", "AUD 10,000-25,000"], ["간판 / 브랜딩", "AUD 3,000-8,000"], ["보험 / 허가 / 세팅", "AUD 3,000-8,000"], ["예비비", "AUD 2,000-6,000"], ["운영 준비비", "AUD 15,000-35,000"], ["예상 총 투자 범위", "AUD 76,000-177,000"]] },
      { kicker: "Opex", heading: "월 운영비 예시", icon: "solar:chart-bold-duotone", type: "table", columns: ["항목", "예상 금액"], rows: [["렌트", "AUD 4,500"], ["인건비", "AUD 12,000"], ["유틸리티", "AUD 1,200"], ["재료비", "AUD 9,000"], ["마케팅", "AUD 1,000"], ["기타 관리비", "AUD 1,300"], ["예상 월 운영비", "AUD 29,000"]] },
      { kicker: "Revenue", heading: "매출 예시", icon: "solar:graph-up-bold-duotone", type: "grid", items: [{ title: "목표 주 매출", icon: "solar:chart-square-bold-duotone", badge: "Weekly", text: "AUD 9,000" }, { title: "예상 월 매출", icon: "solar:graph-up-bold-duotone", badge: "Monthly", text: "AUD 39,000" }, { title: "예시 Gross Margin", icon: "solar:pie-chart-3-bold-duotone", badge: "Margin", text: "65%" }] },
    ],
  },
};

export default App;
