// Screen 4 — Admin · Детали аренды (журнал + действия)

const { WFFrame, WFTopBar, WFTabBar, WFPin, WFText } = window.WF;

function AdminRentDetail() {
  return (
    <WFFrame screenLabel="04 Admin · Детали аренды">
      <WFTopBar title="Аренда" leading="back" trailing="menu"/>

      {/* Bike + status */}
      <div className="wf-card" style={{position:'absolute', left:23, top:102, width:368, height:140, padding:18, display:'flex', gap:14, alignItems:'center'}}>
        <div className="wf-square" style={{width:80, height:80, borderRadius:18, boxShadow:'inset 0 0 0 3px #FFCC00'}}/>
        <div style={{flex:1, display:'flex', flexDirection:'column', gap:8}}>
          <WFText w={60} h={8} tier={1}/>
          <WFText w={170} h={14} tier={3}/>
          <WFText w={120} h={9} tier={1}/>
          <div style={{display:'flex', gap:14, marginTop:6}}>
            <div style={{display:'flex', flexDirection:'column', gap:4}}>
              <WFText w={50} h={8}/>
              <WFText w={70} h={11} tier={3}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:4}}>
              <WFText w={60} h={8}/>
              <WFText w={60} h={11} tier={3}/>
            </div>
          </div>
        </div>
        <WFPin n="1" x={-12} y={-12} note="Велосипед + статус (цвет рамки переключается тапом)" side="right"/>
      </div>

      {/* Renter row -> opens client card */}
      <div className="wf-card" style={{position:'absolute', left:23, top:258, width:368, height:78, padding:'14px 18px', display:'flex', alignItems:'center', gap:14}}>
        <div className="wf-circle" style={{width:46, height:46}}/>
        <div style={{flex:1, display:'flex', flexDirection:'column', gap:6}}>
          <div style={{font:'600 10px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.06em'}}>Арендатор</div>
          <WFText w={150} h={13} tier={3}/>
          <WFText w={90} h={9} tier={1}/>
        </div>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="#A7A7AB" strokeWidth="2.04" strokeLinecap="round"><polyline points="1 1 7 7 1 13"/></svg>
        <WFPin n="2" x={-12} y={-12} note="Тап → карточка клиента (экран 7)" side="right"/>
      </div>

      {/* Debt + journal header */}
      <div style={{position:'absolute', left:23, top:352, width:368, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="wf-pill wf-pill--debt" style={{minWidth:120, padding:'10px 16px'}}>
          <div className="wf-pill__label">Текущий долг</div>
          <div className="wf-pill__value" style={{fontSize:18}}>4 280 ₽</div>
        </div>
        <div className="wf-section-head">Журнал</div>
      </div>

      {/* Ledger entries */}
      <div style={{position:'absolute', left:23, top:418, width:368, display:'flex', flexDirection:'column', gap:8}}>
        {[
          {k:'PAYMENT', v:'+4 000 ₽', d:'12 апр'},
          {k:'CHARGE', v:'−4 000 ₽', d:'05 апр'},
          {k:'ADJUSTMENT', v:'−1 020 ₽', d:'02 апр'},
          {k:'PAYMENT', v:'+8 000 ₽', d:'29 мар'},
        ].map((e, i) => (
          <div key={i} style={{display:'flex', alignItems:'center', gap:12, padding:'10px 14px', background:'#fff', borderRadius:10, border:'1px solid #ececef'}}>
            <div style={{font:'700 10px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.06em', width:90}}>{e.k}</div>
            <div style={{flex:1, font:'700 13px/1 Inter,sans-serif', color: e.v.startsWith('+') ? '#238F47' : '#D63034'}}>{e.v}</div>
            <div style={{font:'500 11px/1 Inter,sans-serif', color:'var(--wf-label)'}}>{e.d}</div>
          </div>
        ))}
      </div>
      <WFPin n="3" x={395} y={418} note="Журнал: CHARGE / PAYMENT / ADJUSTMENT — формула долга" side="left"/>

      {/* Action bar */}
      <div style={{position:'absolute', left:23, right:23, bottom:106, display:'flex', gap:8}}>
        <div className="wf-btn wf-btn--ghost" style={{flex:1}}>+ Корректировка</div>
        <div className="wf-btn wf-btn--danger" style={{flex:1}}>Завершить</div>
      </div>
      <WFPin n="4" x={5} y={780} note="Действия: корректировка (sheet) и завершение аренды" side="right"/>

      <WFTabBar active="home"/>
    </WFFrame>
  );
}

window.AdminRentDetail = AdminRentDetail;
