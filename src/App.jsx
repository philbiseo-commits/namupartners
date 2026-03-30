const services = [
  ["01", "매물 및 입지 분석", "매물의 첫인상보다 가시성, 동선, 설비 상태, 리스 조건, 운영 적합성을 먼저 봅니다."],
  ["02", "예산 및 비용 예측", "권리금, 장비, 공사, 예비비까지 한 구조로 정리해 실제 비용을 읽습니다."],
  ["03", "오픈 세팅 가이드", "오픈 전 체크리스트와 기본 브랜딩, 운영 준비 순서를 실행 기준으로 연결합니다."],
];

const categories = [
  ["대표 업종", "카페", "반복 수요는 강하지만 입지 흐름과 장비 구성, 좌석 동선, 인건비 설계에 따라 수익성이 크게 달라집니다.", "wide"],
  ["", "스시 / 테이크어웨이", "작은 공간도 가능하지만 프렙과 냉장 설비, 위생 동선, 일관된 운영이 중요합니다.", ""],
  ["", "한식당", "메뉴 복잡도와 주방 효율, 인건비 구조를 더 정교하게 설계해야 합니다.", ""],
  ["", "코리안 BBQ", "브랜드 임팩트는 크지만 후드와 배기, 설비 투자비 때문에 진입 기준이 더 엄격합니다.", "dark"],
  ["", "청소업체", "초기 투자비는 낮지만 스케줄 운영, 인력 안정성, 반복 고객 확보가 핵심입니다.", ""],
];

const deliverables = [
  ["샘플 01", "매물 분석 리포트", "업종 적합성, 강점, 리스크, 예상 투자 범위를 한 장으로 정리합니다."],
  ["샘플 02", "예상 비용표", "권리금, 공사, 장비, 예비비까지 한 구조로 계산합니다."],
  ["샘플 03", "업종 적합성 평가표", "난이도, 투자비, 인력 구조, 적합도를 한눈에 비교할 수 있습니다."],
  ["샘플 04", "오픈 체크리스트", "리스 검토부터 오픈 전 세팅까지 순서대로 정리합니다."],
];

function App() {
  return (
    <div className="page-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-group"><span>월요일 - 금요일 9AM - 6PM</span><span>Brisbane, QLD Australia</span></div>
          <div className="topbar-group"><span>namu.au.partners@gmail.com</span></div>
        </div>
      </div>

      <header className="header-wrap">
        <div className="container header-shell">
          <a className="brand" href="#top">
            <div className="brand-mark">N</div>
            <div><p className="brand-title">NAMU</p><p className="brand-sub">Partners</p></div>
          </a>
          <nav className="desktop-nav">
            <a href="#about">소개</a><a href="#services">서비스</a><a href="#categories">추천 업종</a><a href="#deliverables">결과물</a><a href="#contact">문의</a>
          </nav>
          <a className="cta-button cta-gold" href="#contact"><span>상담 요청하기</span><span className="cta-icon"><iconify-icon icon="solar:arrow-right-up-linear" /></span></a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container">
            <div className="hero-shell">
              <div className="hero-copy">
                <span className="eyebrow dark">Brisbane Business Advisory</span>
                <p className="mini-label">매물 분석부터 오픈 준비까지</p>
                <h1>브리즈번 창업은 <span>판단</span>이 먼저입니다</h1>
                <p className="hero-description">NAMU Partners는 브리즈번에서 카페, 스시, 한식당, 코리안 BBQ, 청소업 진입을 검토하는 한국인 고객에게 매물 상태와 비용 구조, 오픈 순서를 더 명확하게 읽을 수 있는 기준을 제공합니다.</p>
                <div className="hero-actions">
                  <a className="cta-button cta-gold large" href="#contact"><span>1:1 창업 상담 요청</span><span className="cta-icon"><iconify-icon icon="solar:arrow-right-linear" /></span></a>
                  <a className="cta-button cta-ghost large" href="#deliverables"><span>샘플 결과물 보기</span><span className="cta-icon"><iconify-icon icon="solar:document-text-linear" /></span></a>
                </div>
                <div className="hero-metrics">
                  <div className="metric-card"><p>중점 업종</p><strong>5개</strong><span>F&B와 서비스업 중심</span></div>
                  <div className="metric-card"><p>지역 기반</p><strong>Brisbane</strong><span>현지 상황에 맞춘 판단</span></div>
                  <div className="metric-card"><p>제공 자료</p><strong>4종</strong><span>리포트, 비용표, 체크리스트</span></div>
                </div>
              </div>
              <div className="hero-visual">
                <div className="floating-chip chip-navy">리스, 설비, 동선, 예산</div>
                <div className="floating-chip chip-light">실행 가능한 다음 단계 제안</div>
                <div className="hero-image-wrap"><img src="https://picsum.photos/seed/namu-consultant/1000/1300" alt="브리즈번 비즈니스 컨설팅 무드 이미지" /></div>
              </div>
            </div>
            <div className="hero-overlap-cards">
              <article className="overlay-card"><p>매물 분석</p><h3>Site Read</h3><span>보이는 정보보다 실제 리스크가 먼저 보이도록 설계합니다.</span></article>
              <article className="overlay-card raised"><p>비용 구조</p><h3>Budget Fit</h3><span>권리금, 장비, 공사, 예비비를 한 구조로 읽습니다.</span></article>
              <article className="overlay-card"><p>오픈 준비</p><h3>Launch Path</h3><span>계약 이후 어떤 순서로 움직여야 하는지 명확하게 정리합니다.</span></article>
            </div>
          </div>
        </section>

        <section className="section-block" id="about">
          <div className="container split-layout">
            <div className="section-copy">
              <span className="eyebrow">Brisbane business is safer with NAMU</span>
              <h2>창업은 감이 아니라 <span>구조로 판단</span>해야 합니다</h2>
              <p>NAMU Partners는 브리즈번에서 비즈니스를 시작하려는 분들이 좋은 매물을 찾는 것보다 나쁜 결정을 피하는 데 더 집중합니다. 같은 매물도 누가 보고 어떤 기준으로 판단하느냐에 따라 결과가 크게 달라집니다.</p>
              <div className="info-grid">
                <div className="info-card"><h3>현장 중심 검토</h3><p>입지, 동선, 기존 설비, 계약 조건을 같이 봐야 실제 난이도가 보입니다.</p></div>
                <div className="info-card"><h3>실행 가능한 판단</h3><p>계약해도 되는지, 더 지켜봐야 하는지, 다른 업종이 맞는지까지 판단합니다.</p></div>
                <div className="quote-card"><p>좋아 보이는 매물을 찾는 것보다, 실제로 감당 가능한 구조인지 먼저 판단하는 것이 더 중요합니다.</p></div>
              </div>
            </div>
            <div className="image-card"><img src="https://picsum.photos/seed/namu-meeting/900/1100" alt="브리즈번 창업 상담 이미지" /></div>
          </div>
        </section>

        <section className="section-block section-soft" id="services">
          <div className="container">
            <div className="section-head"><span className="eyebrow light">Service Structure</span><h2>NAMU는 창업 준비를 세 단계로 정리합니다</h2></div>
            <div className="services-grid">{services.map(([n, t, d], i) => <article className={`service-card ${i === 2 ? "service-card-dark" : ""}`} key={t}><p className="card-number">{n}</p><h3>{t}</h3><p>{d}</p></article>)}</div>
          </div>
        </section>

        <section className="section-block" id="categories">
          <div className="container categories-layout">
            <div className="section-copy compact"><span className="eyebrow">Business Categories</span><h2>브리즈번에서 한국인이 검토해볼 업종들</h2><p>모든 업종이 같은 방식으로 시작되지는 않습니다. 투자비와 설비 부담, 인력 구조, 수익화 방식이 다른 만큼 업종별로 보는 기준도 달라야 합니다.</p></div>
            <div className="categories-grid">{categories.map(([tag, title, desc, tone]) => <article className={`category-card ${tone === "dark" ? "category-card-dark" : ""} ${tone === "wide" ? "category-wide" : ""}`} key={title}>{tag ? <p className="category-tag">{tag}</p> : null}<h3>{title}</h3><p>{desc}</p></article>)}</div>
          </div>
        </section>

        <section className="section-block section-navy" id="deliverables">
          <div className="container deliverables-layout">
            <div className="section-copy white-copy"><span className="eyebrow dark">Deliverables</span><h2>조언보다 자료가 남아야 다음 판단이 쉬워집니다</h2><p>NAMU는 대화만 하고 끝나지 않습니다. 실제 검토와 실행을 이어갈 수 있도록 문서 형태의 샘플 결과물을 준비합니다.</p><div className="deliverables-grid">{deliverables.map(([label, title, text]) => <article className="deliverable-card" key={label}><p>{label}</p><h3>{title}</h3><span>{text}</span></article>)}</div></div>
            <aside className="example-panel"><p className="example-label">Example Review Lens</p><h3>좋은 매물처럼 보여도 바로 계약하면 안 되는 경우</h3><ul><li>기존 시설은 있어 보이지만 전력 용량이 부족해 추가 공사비가 크게 발생할 수 있습니다.</li><li>리스 조건이 까다로우면 초기 비용보다 이후 운영 리스크가 더 커질 수 있습니다.</li><li>예산이 맞아도 업종 적합성이 낮으면 오픈 후 구조가 흔들릴 수 있습니다.</li></ul></aside>
          </div>
        </section>

        <section className="section-block" id="contact">
          <div className="container contact-shell">
            <div className="section-copy compact"><span className="eyebrow">Contact</span><h2>브리즈번 창업을 더 정확하게 검토해보고 싶다면</h2><p>희망 업종, 현재 보고 있는 매물, 예산 범위, 가장 큰 고민을 남겨주세요. NAMU Partners가 다음 판단에 필요한 기준을 정리해드립니다.</p><div className="contact-box"><p>Contact Information</p><span>namu.au.partners@gmail.com</span><span>Brisbane, Australia</span></div></div>
            <form className="contact-form" action="mailto:namu.au.partners@gmail.com" method="post" encType="text/plain">
              <label><span>이름</span><input type="text" name="name" placeholder="성함을 입력해주세요" required /></label>
              <label><span>연락처 또는 카카오톡</span><input type="text" name="contact" placeholder="연락 가능한 정보를 남겨주세요" required /></label>
              <label><span>희망 업종</span><select name="industry"><option>카페</option><option>스시 / 테이크어웨이</option><option>한식당</option><option>코리안 BBQ</option><option>청소업체</option><option>기타</option></select></label>
              <label><span>희망 시기</span><input type="text" name="timing" placeholder="예: 3개월 이내" /></label>
              <label className="full"><span>현재 상황</span><textarea name="message" rows="6" placeholder="현재 보고 있는 매물, 예산 범위, 가장 큰 고민, 원하는 방향을 적어주세요." /></label>
              <div className="form-footer full"><p>현재는 이메일 전송 방식으로 연결되어 있으며, 이후 폼 서비스로 확장 가능합니다.</p><button className="cta-button cta-navy large" type="submit"><span>상담 문의 보내기</span><span className="cta-icon"><iconify-icon icon="solar:arrow-right-up-linear" /></span></button></div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-shell"><div><p className="footer-brand">NAMU Partners</p><p className="footer-copy">브리즈번 기반 비즈니스 창업 및 오픈 세팅 파트너</p></div><div className="footer-links"><a href="#about">소개</a><a href="#services">서비스</a><a href="#categories">추천 업종</a><a href="#deliverables">결과물</a><a href="#contact">문의</a></div></div></footer>
    </div>
  );
}

export default App;
