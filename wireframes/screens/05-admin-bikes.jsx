// Screens 8 (Все велосипеды), 9 (Новый велосипед)

const { WFFrame, WFTopBar, WFTabBar, WFPin, WFText } = window.WF;

function BikeRow({ y, ringColor = 'green', titleW = 150 }) {
  return (
    <div className="wf-card" style={{position:'absolute', left:23, top:y, width:368, height:96, padding:'16px 16px', display:'flex', alignItems:'center', gap:14}}>
      <div className="wf-square" style={{width:64, height:64, borderRadius:14, boxShadow:`inset 0 0 0 3px ${ringColor === 'green' ? '#34C759' : ringColor === 'yellow' ? '#FFCC00' : '#CB30E0'}`}}/>
      <div style={{flex:1, display:'flex', flexDirection:'column', gap:6}}>
        <WFText w={titleW} h={13} tier={3}/>
        <WFText w={120} h={10} tier={1}/>
        <WFText w={90} h={9} tier={1}/>
      </div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6}}>
        <WFText w={70} h={12} tier={3}/>
        <WFText w={50} h={9}/>
      </div>
    </div>
  );
}

function AdminAllBikes() {
  return (
    <WFFrame screenLabel="08 Admin · Все велосипеды">
      <WFTopBar title="Велосипеды" leading="logout" trailing="plus"/>

      <div style={{position:'absolute', left:23, top:102, width:368, display:'flex', gap:8}}>
        <div className="wf-stat" style={{flex:1}}>
          <div className="wf-stat__label">Свободны</div>
          <div className="wf-stat__value">5</div>
        </div>
        <div className="wf-stat" style={{flex:1}}>
          <div className="wf-stat__label">В аренде</div>
          <div className="wf-stat__value wf-stat__value--profit">12</div>
        </div>
        <div className="wf-stat" style={{flex:1}}>
          <div className="wf-stat__label">Всего</div>
          <div className="wf-stat__value">17</div>
        </div>
      </div>

      {/* Group: Свободные */}
      <div style={{position:'absolute', left:23, top:194, width:368}} className="wf-section-head">
        <span>Свободные · 5</span><span style={{font:'500 11px Inter,sans-serif', color:'var(--wf-label)'}}>сорт.</span>
      </div>
      <BikeRow y={216} ringColor="green"/>
      <BikeRow y={326} ringColor="green" titleW={130}/>
      <WFPin n="1" x={395} y={216} note="Группировка: свободные / в аренде" side="left"/>

      {/* Group: В аренде */}
      <div style={{position:'absolute', left:23, top:436, width:368}} className="wf-section-head">
        <span>В аренде · 12</span>
      </div>
      <BikeRow y={458} ringColor="yellow"/>
      <BikeRow y={568} ringColor="magenta" titleW={140}/>
      <WFPin n="2" x={5} y={458} note="Карточка велика: фото с рамкой статуса, модель, SN, ставка / арендатор" side="right"/>

      <WFTabBar active="bikes"/>
    </WFFrame>
  );
}

function AdminNewBike() {
  return (
    <WFFrame screenLabel="09 Admin · Новый велосипед">
      <WFTopBar title="Новый велосипед" leading="back" trailing="check"/>

      {/* Photo upload */}
      <div style={{position:'absolute', left:23, top:102, width:368, height:160}}
           className="wf-square" />
      <div style={{position:'absolute', left:0, top:200, width:414, textAlign:'center', font:'500 12px/1 Inter,sans-serif', color:'var(--wf-label)'}}>Загрузить фото</div>
      <WFPin n="1" x={395} y={120} note="Слот фото велосипеда" side="left"/>

      <div style={{position:'absolute', left:23, top:282, width:368, display:'flex', flexDirection:'column', gap:14}}>
        <div style={{font:'700 11px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.08em'}}>Обязательные</div>
        {['Название/модель','Серийный номер / VIN','Серийный номер мотора','Недельная ставка W (₽)'].map((l,i) => (
          <div key={i} className="wf-input">
            <div style={{flex:1, display:'flex', flexDirection:'column', gap:4}}>
              <div className="wf-input__label">{l}</div>
              <div className="wf-input__value">введите…</div>
            </div>
          </div>
        ))}
        <WFPin n="2" x={395} y={400} note="Ставка W → расчёт день/нед/мес автоматический" side="left"/>

        <div style={{font:'700 11px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.08em', marginTop:4}}>Опционально</div>
        {['Серийный номер АКБ 1','Серийный номер АКБ 2'].map((l,i) => (
          <div key={i} className="wf-input" style={{borderStyle:'dashed', borderColor:'var(--wf-stroke-soft)'}}>
            <div style={{flex:1, display:'flex', flexDirection:'column', gap:4}}>
              <div className="wf-input__label">{l}</div>
              <div className="wf-input__value">не обязательно</div>
            </div>
          </div>
        ))}
        <WFPin n="3" x={395} y={645} note="2 АКБ — опционально" side="left"/>
      </div>

      <WFTabBar active="bikes"/>
    </WFFrame>
  );
}

window.AdminAllBikes = AdminAllBikes;
window.AdminNewBike = AdminNewBike;
