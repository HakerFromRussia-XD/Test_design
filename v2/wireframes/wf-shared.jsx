// Shared wireframe primitives. Loaded once, used by every screen file.

const { useState, useEffect } = React;

function WFFrame({ children, app = true, screenLabel }) {
  return (
    <div className={`wf-frame ${app ? 'wf-frame--app' : ''}`} data-screen-label={screenLabel}>
      {children}
    </div>
  );
}

function WFTopBar({ title, leading = 'menu', trailing = 'menu' }) {
  const renderBtn = (kind) => {
    if (kind === 'none') return <div className="wf-topbar__spacer"/>;
    if (kind === 'back') {
      return (
        <div className="wf-topbar__btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
      );
    }
    if (kind === 'logout') {
      return (
        <div className="wf-topbar__btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </div>
      );
    }
    if (kind === 'plus') {
      return (
        <div className="wf-topbar__btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.4" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </div>
      );
    }
    if (kind === 'check') {
      return (
        <div className="wf-topbar__btn" style={{background:'#1f2937'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      );
    }
    // menu (•••)
    return (
      <div className="wf-topbar__btn wf-topbar__btn--ghost">
        <div style={{display:'flex', gap:3}}>
          <i style={{width:4,height:4,borderRadius:'50%',background:'#1f2937'}}/>
          <i style={{width:4,height:4,borderRadius:'50%',background:'#1f2937'}}/>
          <i style={{width:4,height:4,borderRadius:'50%',background:'#1f2937'}}/>
        </div>
      </div>
    );
  };
  return (
    <div className="wf-topbar">
      {renderBtn(leading)}
      <div className="wf-topbar__title">{title}</div>
      {renderBtn(trailing)}
    </div>
  );
}

function WFTabBar({ active = 'home' }) {
  return (
    <div className="wf-tabbar">
      <div className={`wf-tabbar__btn ${active === 'home' ? 'wf-tabbar__btn--active' : ''}`}/>
      <div className={`wf-tabbar__btn ${active === 'bikes' ? 'wf-tabbar__btn--active' : ''}`}/>
      <div className={`wf-tabbar__btn ${active === 'clients' ? 'wf-tabbar__btn--active' : ''}`}/>
      <div className={`wf-tabbar__btn ${active === 'settings' ? 'wf-tabbar__btn--active' : ''}`}/>
    </div>
  );
}

// Annotation pin with optional caption to the side.
function WFPin({ n, x, y, note, side = 'right' }) {
  return (
    <div className="wf-pin" style={{ left: x, top: y }}>
      {n}
      {note && (
        <div style={{
          position:'absolute', top: -2,
          [side === 'right' ? 'left' : 'right']: 32,
          width: 180, padding: '6px 10px',
          background: '#fff', borderRadius: 8,
          border: '1px solid #163580',
          font: '500 11px/1.35 Inter, sans-serif',
          color: '#1f2937', textAlign: 'left',
        }}>{note}</div>
      )}
    </div>
  );
}

// Greybox text bar — width × height with optional opacity tier
function WFText({ w, h = 10, tier = 1, style = {}, className = '' }) {
  const bg = tier === 1 ? 'var(--wf-fill-1)'
           : tier === 2 ? 'var(--wf-fill-2)'
           : 'var(--wf-fill-3)';
  return <div className={`wf-bar ${className}`} style={{ width: w, height: h, background: bg, ...style }}/>;
}

// Person row (used in lists) — thumb + 3 text lines + optional pill on right
function WFPersonRow({ ringColor = 'green', titleW = 140, lines = [120, 90], pill, x = 23, y = 0, onClickStatus }) {
  return (
    <div className="wf-card" style={{
      position:'absolute', left: x, top: y, width: 369, height: 110,
      padding: '21px 12px 21px 19px',
      display: 'flex', alignItems: 'center', gap: 16,
    }}>
      <div className={`wf-thumb wf-thumb--${ringColor}`} onClick={onClickStatus}/>
      <div style={{flex:1, display:'flex', flexDirection:'column', gap:8}}>
        <WFText w={titleW} h={13} tier={3}/>
        {lines.map((lw, i) => <WFText key={i} w={lw} h={10} tier={1}/>)}
      </div>
      {pill && (
        <div className={`wf-pill wf-pill--${pill.kind}`}>
          <div className="wf-pill__label">{pill.label}</div>
          <div className="wf-pill__value">{pill.value}</div>
        </div>
      )}
    </div>
  );
}

window.WF = { WFFrame, WFTopBar, WFTabBar, WFPin, WFText, WFPersonRow };
