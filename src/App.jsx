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

const scoreWidth = {
  "높음": "88%",
  "중간": "60%",
  "중간~높음": "72%",
  "매우 높음": "100%",
  "낮음": "34%",
};

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
                <p className="mini-label">한국인 창업자를 위한 브리즈번 현지 파트너</p>
                <h1>브리즈번 F&amp;B 창업, 매물 검토부터 오픈 준비까지</h1>
                <p className="hero-description">
                  카페, 스시, 한식당, 코리안 BBQ 창업을 준비할 때
                  리스, 설비, 비용, 오픈 순서를 한국어로 정리해드립니다.
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
              <article className="overlay-card"><p>매물 분석</p><h3>가능한지 먼저</h3><span>좋아 보이는 매물보다 실제 구조를 먼저 봅니다.</span></article>
              <article className="overlay-card raised"><p>비용 검토</p><h3>숨은 비용까지</h3><span>공사, 장비, 예비비까지 같이 계산합니다.</span></article>
              <article className="overlay-card"><p>오픈 준비</p><h3>순서를 정리</h3><span>무엇부터 해야 하는지 바로 보이게 정리합니다.</span></article>
            </div>
          </div>
        </section>

        <section className="section-block" id="about">
          <div className="container split-layout">
            <div className="section-copy compact-copy">
              <span className="eyebrow">Why NAMU</span>
              <h2>왜 NAMU인가요</h2>
              <p>창업은 좋은 매물을 찾는 일보다, 잘못된 계약과 불필요한 비용을 피하는 일이 먼저입니다.</p>
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
              <p className="section-subcopy">처음 상담부터 검토, 비용 정리, 오픈 준비까지 세 단계로 나눠서 진행합니다.</p>
            </div>
            <div className="services-grid compact-services">
              {services.map(([title, text], index) => (
                <article className={`service-card ${index === 2 ? "service-card-dark" : ""}`} key={title}>
                  <p className="card-number">0{index + 1}</p><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="categories">
          <div className="container categories-layout">
            <div className="section-copy compact-copy">
              <span className="eyebrow">Categories</span><h2>검토 가능한 업종</h2>
              <p>업종마다 보는 기준이 다릅니다. 먼저 맞는 구조인지부터 확인합니다.</p>
              <div className="priority-panel">
                <p>우선 검토 추천</p>
                <strong>카페 / 스시 / 청소업</strong>
                <span>초기 진입 설명이 쉽고 실제 분석 사례로 연결하기 좋은 업종입니다.</span>
              </div>
            </div>
            <div className="categories-grid compact-categories">
              {categories.map(([title, text], index) => (
                <article className={`category-card ${index === 3 ? "category-card-dark" : ""} ${index === 0 ? "category-wide" : ""}`} key={title}>
                  {index === 0 ? <p className="category-tag">대표 업종</p> : null}
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-navy" id="deliverables">
          <div className="container">
            <div className="section-copy white-copy compact-copy wide-copy">
              <span className="eyebrow dark">Samples</span><h2>상담 후 이런 자료를 받게 됩니다</h2>
              <p>실제 상담 후 전달할 문서 형식에 맞춰, 판단 근거와 숫자가 보이도록 정리한 샘플입니다.</p>
            </div>
            <div className="sample-grid">
              {sampleCards.map(([slug, title, text], index) => (
                <a className="sample-card-link" href={`#/sample/${slug}`} key={slug}>
                  <article className="sample-card">
                    <div className="sample-card-topline">
                      <p className="sample-kicker">Customer Sample</p>
                      <span className="sample-code">0{index + 1}</span>
                    </div>
                    <h3>{title}</h3>
                    <span>{text}</span>
                    <div className="sample-meta-line">
                      <span><iconify-icon icon="solar:document-text-bold-duotone" /> 문서형 결과물</span>
                      <span><iconify-icon icon="solar:stars-bold-duotone" /> 고객 제출용</span>
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
              <span className="eyebrow">Contact</span><h2>문의는 간단합니다</h2>
              <p>보고 있는 매물, 원하는 업종, 예산, 시기를 보내주시면 어디부터 검토해야 할지 먼저 정리해드립니다.</p>
              <div className="contact-box"><p>Contact Information</p><span>namu.au.partners@gmail.com</span><span>Brisbane, Australia</span></div>
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
          <a className="brand" href="#home"><div className="brand-mark">N</div><div><p className="brand-title">NAMU</p><p className="brand-sub">Partners</p></div></a>
          <a className="cta-button cta-navy" href="#home"><span>메인으로 돌아가기</span><span className="cta-icon"><iconify-icon icon="solar:arrow-left-linear" /></span></a>
        </div>
      </div>
      <main className="sample-main">
        <div className="container sample-layout">
          <section className="sample-hero-card">
            <div className="sample-hero-copy">
              <span className="eyebrow">NAMU Sample</span><h1>{sample.title}</h1><p>{sample.summary}</p>
              <div className="sample-summary-pills">{sample.pills.map((pill) => <span className="summary-pill" key={pill}>{pill}</span>)}</div>
            </div>
            <div className="sample-meta-grid">
              {sample.meta.map((item) => (
                <div className="sample-meta-card" key={item.label}>
                  <div className="meta-icon"><iconify-icon icon={item.icon} /></div>
                  <p>{item.label}</p><strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </section>
          <section className="document-shell">
            <div className="document-cover"><div><p className="document-kicker">Customer-facing sample</p><h2>{sample.documentTitle}</h2></div><span>{sample.documentCode}</span></div>
            {sample.sections.map((section) => (
              <section className="document-section" key={section.heading}>
                <div className="section-line" />
                <div className="document-section-head">
                  <div className="section-icon"><iconify-icon icon={section.icon} /></div>
                  <div><p>{section.kicker}</p><h3>{section.heading}</h3></div>
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
    return <div className="document-grid">{section.items.map((item) => <div className="document-card" key={item.title}><div className="document-card-top">{item.icon ? <span className="document-card-icon"><iconify-icon icon={item.icon} /></span> : null}{item.badge ? <span className="document-badge">{item.badge}</span> : null}</div><h4>{item.title}</h4><p>{item.text}</p>{item.points ? <ul className="mini-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}</div>)}</div>;
  }
  if (section.type === "list") {
    return <ul className="document-list rich-list">{section.items.map((item) => { const value = typeof item === "string" ? { text: item, icon: "solar:check-circle-bold-duotone" } : item; return <li key={value.text}><span className="list-icon"><iconify-icon icon={value.icon} /></span><span>{value.text}</span></li>; })}</ul>;
  }
  if (section.type === "checklist") {
    return <div className="checklist-grid">{section.items.map((item) => <div className="checklist-card" key={item.text}><span className="check-icon"><iconify-icon icon={item.icon || "solar:verified-check-bold-duotone"} /></span><p>{item.text}</p></div>)}</div>;
  }
  if (section.type === "table") {
    return <div className="document-table-wrap"><table className="document-table"><thead><tr>{section.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{section.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={`${index}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
  }
  if (section.type === "score") {
    return <div className="score-list">{section.items.map((item) => <div className="score-row" key={item.label}><div className="score-head"><div className="score-title"><span className="score-icon"><iconify-icon icon={item.icon} /></span><span>{item.label}</span></div><strong>{item.score}</strong></div><div className="score-bar"><i style={{ width: scoreWidth[item.score] || item.score }} /></div><div className="score-tags">{item.tags.map((tag) => <span className="score-tag" key={tag}>{tag}</span>)}</div><p>{item.text}</p></div>)}</div>;
  }
  return <p className="document-paragraph">{section.text}</p>;
}

function TopBar() {
  return <div className="topbar"><div className="container topbar-inner"><div className="topbar-group"><span>월요일 - 금요일 9AM - 6PM</span><span>Brisbane, QLD Australia</span></div><div className="topbar-group"><span>namu.au.partners@gmail.com</span></div></div></div>;
}

function Header() {
  return <header className="header-wrap"><div className="container header-shell"><a className="brand" href="#top"><div className="brand-mark">N</div><div><p className="brand-title">NAMU</p><p className="brand-sub">Partners</p></div></a><nav className="desktop-nav"><a href="#about">소개</a><a href="#services">서비스</a><a href="#categories">추천 업종</a><a href="#deliverables">결과물</a><a href="#contact">문의</a></nav><a className="cta-button cta-gold" href="#contact"><span>상담 요청하기</span><span className="cta-icon"><iconify-icon icon="solar:arrow-right-up-linear" /></span></a></div></header>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-shell"><div><p className="footer-brand">NAMU Partners</p><p className="footer-copy">브리즈번 기반 비즈니스 창업 및 오픈 세팅 파트너</p></div><div className="footer-links"><a href="#about">소개</a><a href="#services">서비스</a><a href="#categories">추천 업종</a><a href="#deliverables">결과물</a><a href="#contact">문의</a></div></div></footer>;
}

const sampleMap = {
  "property-report": {
    title: "NAMU 샘플 - 매물 분석 리포트",
    summary:
      "이전 구글드라이브 원본을 기준으로 정리한 고객용 매물 분석 샘플입니다. 검토 이유, 리스크, 투자 범위, 추천 고객 유형까지 한 번에 보여줍니다.",
    documentTitle: "NAMU Partners 샘플 매물 분석 리포트",
    documentCode: "NPR-01",
    pills: ["브리즈번 북부 교외 상권", "카페 / 스시 적합", "고객 제출용 샘플"],
    meta: [
      { label: "검토 지역", value: "Brisbane, QLD", icon: "solar:map-point-bold-duotone" },
      { label: "매장 면적", value: "약 78sqm", icon: "solar:ruler-cross-pen-bold-duotone" },
      { label: "우선 추천", value: "카페 / 스시", icon: "solar:cup-hot-bold-duotone" },
    ],
    sections: [
      {
        kicker: "Scenario",
        heading: "샘플 시나리오",
        icon: "solar:document-text-bold-duotone",
        text: "브리즈번 북부 교외 상권 내 카페 또는 스시 테이크어웨이에 적합한 소형 리테일 매장입니다.",
      },
      {
        kicker: "Summary",
        heading: "매물 요약",
        icon: "solar:buildings-3-bold-duotone",
        type: "table",
        columns: ["항목", "내용"],
        rows: [
          ["지역", "Brisbane, QLD"],
          ["형태", "1층 리테일 점포"],
          ["면적", "약 78sqm"],
          ["현재 상태", "일부 호스피탈리티 시설 잔존"],
          ["기존 강점 시설", "grease trap, exhaust canopy, cool room, front counter shell"],
        ],
      },
      {
        kicker: "Evaluation",
        heading: "종합 평가",
        icon: "solar:chart-square-bold-duotone",
        type: "grid",
        items: [
          {
            title: "전체 의견",
            icon: "solar:shield-check-bold-duotone",
            badge: "Overall",
            text: "리스 조건이 무난하고 기존 설비가 실제 사용 가능한 상태라면 충분히 검토할 만한 기회입니다.",
          },
          {
            title: "추천 업종 우선순위",
            icon: "solar:ranking-bold-duotone",
            badge: "Priority",
            text: "1) 테이크어웨이 중심 카페  2) 스시 테이크어웨이  3) 소형 한식 캐주얼 다이닝 또는 테이크어웨이",
          },
          {
            title: "이 매물이 괜찮은 이유",
            icon: "solar:stars-bold-duotone",
            badge: "Why It Works",
            text: "기존 호스피탈리티 인프라가 남아 있고, 면적이 과하지 않아 owner-operator 모델에 잘 맞습니다.",
            points: [
              "초기 공사비를 크게 줄일 가능성",
              "대형 홀 없이도 운영 가능한 구조",
              "간단한 메뉴 구조와 궁합이 좋음",
            ],
          },
        ],
      },
      {
        kicker: "Pros",
        heading: "장점",
        icon: "solar:like-bold-duotone",
        type: "list",
        items: [
          { text: "기존 grease trap이 유지된다면 주요 배관 및 승인 비용 절감 가능", icon: "solar:dropper-bold-duotone" },
          { text: "기존 exhaust canopy가 사용 가능하면 주방 설비비 절감 가능", icon: "solar:fire-bold-duotone" },
          { text: "전면부가 간판 교체와 브랜딩 리프레시에 적합함", icon: "solar:gallery-circle-bold-duotone" },
          { text: "소형 점포라 대형 레스토랑보다 인력 부담이 낮음", icon: "solar:users-group-rounded-bold-duotone" },
        ],
      },
      {
        kicker: "Risk",
        heading: "주요 리스크",
        icon: "solar:danger-triangle-bold-duotone",
        type: "list",
        items: [
          { text: "canopy, 전기 용량, 배관 상태는 반드시 현장 검증 필요", icon: "solar:danger-bold-duotone" },
          { text: "리스 조건에 따라 간판, fit-out 승인, 옵션 기간의 차이가 큼", icon: "solar:document-add-bold-duotone" },
          { text: "비피크 시간대 유동이 약하면 dine-in 비중 높은 업종은 불리할 수 있음", icon: "solar:clock-circle-bold-duotone" },
        ],
      },
      {
        kicker: "Investment",
        heading: "예상 초기 투자 범위",
        icon: "solar:wallet-money-bold-duotone",
        type: "table",
        columns: ["항목", "예상 범위"],
        rows: [
          ["권리금 또는 인수금", "AUD 20,000-45,000"],
          ["기본 리프레시 공사", "AUD 15,000-35,000"],
          ["장비 추가 또는 교체", "AUD 10,000-25,000"],
          ["간판 및 브랜딩", "AUD 3,000-8,000"],
          ["보험 / 인허가 / 기타 세팅", "AUD 3,000-8,000"],
          ["런칭 마케팅 및 기타", "AUD 2,000-6,000"],
          ["예상 총 투자 범위", "AUD 53,000-127,000"],
        ],
      },
      {
        kicker: "Best Fit",
        heading: "추천 고객 유형",
        icon: "solar:user-id-bold-duotone",
        type: "list",
        items: [
          { text: "브리즈번에서 현실적인 F&B 진입 기회를 찾는 한국인 창업자", icon: "solar:user-check-bold-duotone" },
          { text: "lean한 인력 구조로 운영하고 싶은 owner-operator", icon: "solar:case-round-bold-duotone" },
          { text: "takeaway 중심 매출 구조를 만들고 싶은 사업자", icon: "solar:shop-bold-duotone" },
        ],
      },
      {
        kicker: "Conclusion",
        heading: "결론",
        icon: "solar:check-read-bold-duotone",
        type: "grid",
        items: [
          {
            title: "본격 검토 조건",
            icon: "solar:clipboard-check-bold-duotone",
            text: "아래 조건이 맞을 때 본격 검토를 추천합니다.",
            points: ["리스 조건이 합리적일 것", "기존 서비스 설비가 실제로 사용 가능할 것", "최종 업종이 지역 수요와 운영 역량에 맞을 것"],
          },
          {
            title: "NAMU 코멘트",
            icon: "solar:pen-new-square-bold-duotone",
            text: "이 문서는 중개 의견서가 아니라, 런칭 전 사업성 및 리스크를 검토하는 샘플 분석 문서입니다.",
          },
        ],
      },
    ],
  },
  "fit-assessment": {
    title: "NAMU 샘플 - 업종 적합성 평가표",
    summary:
      "브리즈번에서 어떤 업종이 더 현실적인지 빠르게 비교하는 문서입니다. 원본 드라이브 문서의 항목과 우선순위를 그대로 살렸습니다.",
    documentTitle: "NAMU Partners 샘플 업종 적합성 평가표",
    documentCode: "NFA-02",
    pills: ["업종 5개 비교", "진입 난이도 판단", "초기 추천 우선순위 포함"],
    meta: [
      { label: "비교 업종", value: "5개", icon: "solar:layers-bold-duotone" },
      { label: "초기 추천", value: "카페 / 스시 / 청소업", icon: "solar:medal-ribbons-star-bold-duotone" },
      { label: "활용 방식", value: "리드 상담용", icon: "solar:chat-round-call-bold-duotone" },
    ],
    sections: [
      {
        kicker: "Purpose",
        heading: "목적",
        icon: "solar:target-bold-duotone",
        text: "브리즈번 내 특정 기회 또는 예비 창업자 조건에 어떤 업종이 더 적합한지 빠르게 비교하기 위한 샘플 문서입니다.",
      },
      {
        kicker: "Industry Review",
        heading: "업종별 적합성 비교",
        icon: "solar:chart-2-bold-duotone",
        type: "score",
        items: [
          {
            label: "카페",
            score: "높음",
            icon: "solar:cup-hot-bold-duotone",
            tags: ["공사 민감도 중간~높음", "인력 복잡도 중간", "마케팅 중요도 높음"],
            text: "강점은 지역 반복 수요가 크고 브랜딩 확장성이 좋다는 점입니다. 리스크는 마진 압박과 차별화 실패 위험이며, 커피 품질과 서비스 감각이 있는 운영자에게 적합합니다.",
          },
          {
            label: "스시 / 테이크어웨이",
            score: "높음",
            icon: "solar:hamburger-menu-bold-duotone",
            tags: ["공사 민감도 중간", "인력 복잡도 중간", "마케팅 중요도 중간"],
            text: "작은 공간에서도 효율적으로 운영 가능하다는 강점이 있습니다. 다만 품질 유지와 인력 의존도 관리는 중요하며, 빠른 회전과 단순 운영 구조를 선호하는 운영자에게 잘 맞습니다.",
          },
          {
            label: "한식당",
            score: "중간",
            icon: "solar:plate-bold-duotone",
            tags: ["공사 민감도 중간~높음", "인력 복잡도 높음", "마케팅 중요도 중간~높음"],
            text: "한식 수요 확대 가능성은 있지만 주방 복잡도와 인건비 부담이 큽니다. 메뉴 운영 역량과 주방 운영 경험이 있는 팀이 유리합니다.",
          },
          {
            label: "Korean BBQ",
            score: "중간",
            icon: "solar:fire-square-bold-duotone",
            tags: ["공사 민감도 매우 높음", "인력 복잡도 높음", "마케팅 중요도 높음"],
            text: "콘셉트 임팩트와 높은 객단가 잠재력은 크지만, 환기, 배기, 설비, 초기 투자비 부담이 큽니다. 자본력이 있고 destination concept를 만들고 싶은 사업자에게 적합합니다.",
          },
          {
            label: "청소업체",
            score: "높음",
            icon: "solar:broom-bold-duotone",
            tags: ["공사 민감도 낮음", "인력 복잡도 중간~높음", "마케팅 중요도 중간"],
            text: "초기 투자금이 낮고 F&B보다 진입이 쉽습니다. 다만 스케줄 관리, 인력 안정성, 품질 통제가 중요하며 낮은 초기 고정비로 서비스업에 진입하고 싶은 운영자에게 적합합니다.",
          },
        ],
      },
      {
        kicker: "Priority",
        heading: "NAMU Partners 초기 추천 우선순위",
        icon: "solar:trophy-bold-duotone",
        type: "list",
        items: [
          { text: "1) 카페", icon: "solar:cup-hot-bold-duotone" },
          { text: "2) 스시 / 테이크어웨이", icon: "solar:hamburger-menu-bold-duotone" },
          { text: "3) 청소업체", icon: "solar:broom-bold-duotone" },
        ],
      },
      {
        kicker: "Reason",
        heading: "이유",
        icon: "solar:lightbulb-bold-duotone",
        type: "list",
        items: [
          { text: "고객이 이해하기 쉬움", icon: "solar:users-group-rounded-bold-duotone" },
          { text: "분석 사례를 만들기 좋음", icon: "solar:document-add-bold-duotone" },
          { text: "Korean BBQ보다 초기 브랜드 단계에서 설명과 전환이 쉬움", icon: "solar:graph-up-bold-duotone" },
        ],
      },
      {
        kicker: "Use Case",
        heading: "활용 방식",
        icon: "solar:folder-with-files-bold-duotone",
        text: "이 평가표는 리드 상담 시 업종 적합도, 난이도, 투자 수준을 빠르게 설명하는 샘플 기준표로 사용합니다.",
      },
    ],
  },
  "opening-checklist": {
    title: "NAMU 샘플 - 오픈 체크리스트",
    summary:
      "실제 오픈 준비에 바로 적용할 수 있도록 드라이브 원본의 단계별 체크리스트를 문서형 화면으로 옮겼습니다.",
    documentTitle: "NAMU Partners 샘플 오픈 체크리스트",
    documentCode: "NOC-03",
    pills: ["7단계 실행 흐름", "현장 점검 포함", "오픈 직전 체크까지"],
    meta: [
      { label: "문서 형식", value: "실행 체크리스트", icon: "solar:checklist-bold-duotone" },
      { label: "범위", value: "기획 ~ 오픈 직전", icon: "solar:calendar-bold-duotone" },
      { label: "활용", value: "내부 준비용", icon: "solar:notes-bold-duotone" },
    ],
    sections: [
      {
        kicker: "Phase 1",
        heading: "기획 단계",
        icon: "solar:pen-2-bold-duotone",
        type: "checklist",
        items: [
          { text: "사업 콘셉트 확정", icon: "solar:magic-stick-3-bold-duotone" },
          { text: "타깃 고객 정의", icon: "solar:users-group-rounded-bold-duotone" },
          { text: "예산 범위 확정", icon: "solar:wallet-money-bold-duotone" },
          { text: "owner-operator인지 관리형 모델인지 결정", icon: "solar:user-hand-up-bold-duotone" },
        ],
      },
      {
        kicker: "Phase 2",
        heading: "매물 / 리스 검토",
        icon: "solar:document-text-bold-duotone",
        type: "checklist",
        items: [
          { text: "리스 기간 및 옵션 확인", icon: "solar:document-add-bold-duotone" },
          { text: "permitted use 확인", icon: "solar:shield-check-bold-duotone" },
          { text: "간판 설치 승인 조건 확인", icon: "solar:gallery-circle-bold-duotone" },
          { text: "landlord fit-out 승인 절차 확인", icon: "solar:home-wifi-angle-bold-duotone" },
          { text: "전기 / 가스 / 배수 / 환기 상태 확인", icon: "solar:bolt-circle-bold-duotone" },
        ],
      },
      {
        kicker: "Phase 3",
        heading: "공사 / 설비 점검",
        icon: "solar:settings-bold-duotone",
        type: "checklist",
        items: [
          { text: "grease trap 점검", icon: "solar:dropper-bold-duotone" },
          { text: "exhaust canopy 점검", icon: "solar:fire-bold-duotone" },
          { text: "배관 및 drainage 확인", icon: "solar:waterdrop-bold-duotone" },
          { text: "전기 용량 확인", icon: "solar:bolt-bold-duotone" },
          { text: "기존 장비 사용 가능 여부 확인", icon: "solar:cpu-bolt-bold-duotone" },
          { text: "fit-out 범위 및 견적 수집", icon: "solar:document-text-bold-duotone" },
        ],
      },
      {
        kicker: "Phase 4",
        heading: "사업 세팅",
        icon: "solar:case-round-bold-duotone",
        type: "checklist",
        items: [
          { text: "ABN 및 사업 구조 확인", icon: "solar:card-bold-duotone" },
          { text: "보험 가입", icon: "solar:shield-bold-duotone" },
          { text: "council 및 관련 규정 확인", icon: "solar:document-bold-duotone" },
          { text: "식품업 또는 업종별 기본 요건 확인", icon: "solar:plate-bold-duotone" },
          { text: "회계 및 bookkeeping 구조 준비", icon: "solar:calculator-bold-duotone" },
        ],
      },
      {
        kicker: "Phase 5",
        heading: "브랜드 / 운영 준비",
        icon: "solar:palette-bold-duotone",
        type: "checklist",
        items: [
          { text: "비즈니스명 및 브랜딩 방향 확정", icon: "solar:star-circle-bold-duotone" },
          { text: "메뉴 또는 서비스 패키지 확정", icon: "solar:clipboard-list-bold-duotone" },
          { text: "가격 전략 확정", icon: "solar:tag-price-bold-duotone" },
          { text: "POS 및 결제 시스템 준비", icon: "solar:card-transfer-bold-duotone" },
          { text: "간판, 메뉴판, 기본 인쇄물 준비", icon: "solar:gallery-send-bold-duotone" },
        ],
      },
      {
        kicker: "Phase 6",
        heading: "마케팅 런칭 준비",
        icon: "solar:rocket-bold-duotone",
        type: "checklist",
        items: [
          { text: "Google Business Profile 세팅", icon: "solar:global-bold-duotone" },
          { text: "인스타그램 계정 세팅", icon: "solar:camera-bold-duotone" },
          { text: "오픈용 사진 준비", icon: "solar:gallery-bold-duotone" },
          { text: "오픈 안내 문구 준비", icon: "solar:chat-round-dots-bold-duotone" },
          { text: "리뷰 요청 방식 준비", icon: "solar:chat-square-like-bold-duotone" },
        ],
      },
      {
        kicker: "Phase 7",
        heading: "오픈 직전 점검",
        icon: "solar:check-read-bold-duotone",
        type: "checklist",
        items: [
          { text: "현장 결함 재확인", icon: "solar:danger-circle-bold-duotone" },
          { text: "팀 스케줄 및 운영 시간 확정", icon: "solar:clock-circle-bold-duotone" },
          { text: "초기 재고 및 공급업체 확인", icon: "solar:box-bold-duotone" },
          { text: "고객 동선 테스트", icon: "solar:streets-map-point-bold-duotone" },
          { text: "최종 오픈 readiness 점검", icon: "solar:verified-check-bold-duotone" },
        ],
      },
      {
        kicker: "Comment",
        heading: "NAMU 코멘트",
        icon: "solar:pen-new-square-bold-duotone",
        text: "이 문서는 NAMU Partners가 런칭 전 어떤 수준까지 확인해야 하는지 보여주는 샘플 내부 체크리스트입니다.",
      },
    ],
  },
  "cost-table": {
    title: "NAMU 샘플 - 예상 비용표",
    summary:
      "브리즈번 소형 카페 또는 스시 테이크어웨이 진입 모델을 기준으로, 드라이브 원본의 숫자와 해석 포인트를 그대로 옮긴 비용 문서입니다.",
    documentTitle: "NAMU Partners 샘플 예상 비용표",
    documentCode: "NCT-04",
    pills: ["AUD 기준", "초기 투자비 + 월 운영비", "매출 예시 포함"],
    meta: [
      { label: "샘플 업종", value: "카페 / 스시", icon: "solar:shop-bold-duotone" },
      { label: "통화", value: "AUD", icon: "solar:wallet-money-bold-duotone" },
      { label: "가정", value: "기존 fit-out 일부 잔존", icon: "solar:buildings-bold-duotone" },
    ],
    sections: [
      {
        kicker: "Concept",
        heading: "샘플 콘셉트",
        icon: "solar:star-fall-2-bold-duotone",
        text: "브리즈번 내 소형 카페 또는 스시 테이크어웨이 진입 모델, 일부 기존 fit-out 잔존 가정입니다.",
      },
      {
        kicker: "Capex",
        heading: "초기 투자비 범위",
        icon: "solar:wallet-bold-duotone",
        type: "table",
        columns: ["항목", "예상 범위"],
        rows: [
          ["권리금 또는 인수금", "AUD 20,000-45,000"],
          ["보증금 / bond", "AUD 8,000-15,000"],
          ["리프레시 공사", "AUD 15,000-35,000"],
          ["장비 추가 / 교체", "AUD 10,000-25,000"],
          ["간판 / 브랜딩", "AUD 3,000-8,000"],
          ["보험 / 인허가 / 기타 세팅", "AUD 3,000-8,000"],
          ["런칭 마케팅", "AUD 2,000-6,000"],
          ["운영 예비비", "AUD 15,000-35,000"],
          ["예상 총 투자 범위", "AUD 76,000-177,000"],
        ],
      },
      {
        kicker: "Opex",
        heading: "월 운영비 예시",
        icon: "solar:chart-bold-duotone",
        type: "table",
        columns: ["항목", "예상 금액"],
        rows: [
          ["렌트", "AUD 4,500"],
          ["인건비", "AUD 12,000"],
          ["유틸리티", "AUD 1,200"],
          ["원가", "AUD 9,000"],
          ["마케팅", "AUD 1,000"],
          ["기타 관리비", "AUD 1,300"],
          ["예상 월 운영비", "AUD 29,000"],
        ],
      },
      {
        kicker: "Revenue",
        heading: "매출 예시",
        icon: "solar:graph-up-bold-duotone",
        type: "grid",
        items: [
          { title: "목표 주 매출", icon: "solar:chart-square-bold-duotone", badge: "Weekly", text: "AUD 9,000" },
          { title: "예상 월 매출", icon: "solar:graph-up-bold-duotone", badge: "Monthly", text: "AUD 39,000" },
          { title: "예시 Gross Margin", icon: "solar:pie-chart-3-bold-duotone", badge: "Margin", text: "65%" },
        ],
      },
      {
        kicker: "Insight",
        heading: "해석 포인트",
        icon: "solar:lightbulb-bold-duotone",
        text: "이 샘플은 리스 조건, 인력 구조, 기존 설비 상태가 투자 매력도에 얼마나 큰 영향을 주는지 보여줍니다. 기존 grease trap, canopy, 전기 용량이 살아 있으면 초기 투자비와 오픈 기간을 크게 줄일 수 있습니다.",
      },
      {
        kicker: "Usage",
        heading: "활용 방식",
        icon: "solar:folder-open-bold-duotone",
        type: "list",
        items: [
          { text: "실제 견적과 landlord 조건으로 숫자 교체", icon: "solar:document-text-bold-duotone" },
          { text: "업종별 장비 비용 추가", icon: "solar:widget-bold-duotone" },
          { text: "운영 시간에 따라 labour 가정 수정", icon: "solar:clock-circle-bold-duotone" },
          { text: "계약 전 break-even 민감도 재검토", icon: "solar:graph-new-up-bold-duotone" },
        ],
      },
    ],
  },
};

export default App;
