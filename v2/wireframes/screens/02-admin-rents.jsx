// Screen 2 — Admin · Все аренды (список = дашборд)
// Screen 3 — Admin · Поп-овер смены статуса

const { WFFrame, WFTopBar, WFTabBar, WFPin, WFText, WFPersonRow } = window.WF;

function AdminAllRents() {
  return (
    <WFFrame screenLabel="02 Admin · Все аренды (дашборд)">
      <WFTopBar title="Все аренды" leading="logout" trailing="menu"/>

      {/* Dashboard summary tiles */}
      <div style={{position:'absolute', left:23, top:102, width:368, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10}}>
        <div className="wf-stat">
          <div className="wf-stat__label">Активных</div>
          <div className="wf-stat__value">12</div>
        </div>
        <div className="wf-stat">
          <div className="wf-stat__label">Долг общий</div>
          <div className="wf-stat__value wf-stat__value--debt">38 400 ₽</div>
        </div>
        <div className="wf-stat">
          <div className="wf-stat__label">За месяц</div>
          <div className="wf-stat__value wf-stat__value--profit">+124 K</div>
        </div>
      </div>
      <WFPin n="1" x={395} y={120} note="Сводка по аренде наверху — долг общий, активные, прибыль" side="left"/>

      {/* Search + filter chips */}
      <div style={{position:'absolute', left:23, top:194, width:368, display:'flex', flexDirection:'column', gap:10}}>
        <div className="wf-search">
          <div className="wf-search__icon"/>
          <span>Поиск по клиенту, велосипеду…</span>
        </div>
        <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          <div className="wf-chip wf-chip--active">Все<span className="wf-chip__count">14</span></div>
          <div className="wf-chip">Долгосрочные<span className="wf-chip__count">8</span></div>
          <div className="wf-chip">Должники<span className="wf-chip__count">3</span></div>
          <div className="wf-chip">У меня<span className="wf-chip__count">2</span></div>
        </div>
      </div>
      <WFPin n="2" x={395} y={210} note="Чипы статусов = быстрый фильтр (зел/жёлт/фиол)" side="left"/>

      {/* Rentals list */}
      <div style={{position:'absolute', left:0, top:300, right:0, bottom:86, overflow:'hidden', padding:'0 0 8px'}}>
        <WFPersonRow x={23} y={0} ringColor="green" titleW={150} lines={[140,90]} pill={{kind:'profit', label:'Прибыль', value:'12 400'}}/>
        <WFPersonRow x={23} y={125} ringColor="yellow" titleW={130} lines={[150,80]} pill={{kind:'debt', label:'Долг', value:'4 280'}}/>
        <WFPersonRow x={23} y={250} ringColor="magenta" titleW={140} lines={[120,100]} pill={{kind:'neutral', label:'У меня', value:'—'}}/>
        <WFPersonRow x={23} y={375} ringColor="green" titleW={160} lines={[130,90]} pill={{kind:'profit', label:'Прибыль', value:'8 200'}}/>
      </div>
      <WFPin n="3" x={5} y={310} note="Карточка: фото велика (рамка = статус), ФИО, велосипед, оплачено до, плашка справа" side="right"/>
      <WFPin n="4" x={70} y={335} note="ТАП на иконку → поп-овер смены статуса (см. экран 3)" side="right"/>

      <WFTabBar active="home"/>
    </WFFrame>
  );
}

function AdminStatusPopover() {
  return (
    <WFFrame screenLabel="03 Admin · Смена статуса аренды">
      <WFTopBar title="Все аренды" leading="logout" trailing="menu"/>
      <div style={{position:'absolute', left:23, top:102, right:23, bottom:140, opacity:.5}}>
        <div className="wf-stat" style={{height:60, marginBottom:12}}><div className="wf-bar" style={{width:120,height:8}}/></div>
        <WFPersonRow x={0} y={70} ringColor="yellow" titleW={130} lines={[150,80]} pill={{kind:'debt', label:'Долг', value:'4 280'}}/>
      </div>

      {/* Dimmed overlay */}
      <div style={{position:'absolute', inset:0, background:'rgba(20,23,24,0.35)'}}/>

      {/* The popover */}
      <div className="wf-popover" style={{ left: 70, top: 195 }}>
        <div className="wf-popover__row">
          <div className="wf-popover__dot" style={{borderColor:'#34C759'}}/>
          <div>Долгосрочная аренда</div>
        </div>
        <div className="wf-popover__row" style={{background:'#f3f4f6'}}>
          <div className="wf-popover__dot" style={{borderColor:'#FFCC00'}}/>
          <div>Вернут в течении недели</div>
        </div>
        <div className="wf-popover__row">
          <div className="wf-popover__dot" style={{borderColor:'#CB30E0'}}/>
          <div>Велосипед у меня</div>
        </div>
      </div>
      <WFPin n="1" x={285} y={195} note="3 статуса = 3 цвета рамки. Тап → меняется ring" side="left"/>
      <WFPin n="2" x={285} y={245} note="Текущий выделен заливкой" side="left"/>

      <WFTabBar active="home"/>
    </WFFrame>
  );
}

window.AdminAllRents = AdminAllRents;
window.AdminStatusPopover = AdminStatusPopover;
