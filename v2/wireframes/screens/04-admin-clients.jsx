// Screens 5 (Все клиенты), 6 (Карточка клиента), 7 (Новый клиент)

const { WFFrame, WFTopBar, WFTabBar, WFPin, WFText, WFPersonRow } = window.WF;

function AdminAllClients() {
  return (
    <WFFrame screenLabel="05 Admin · Все клиенты">
      <WFTopBar title="Клиенты" leading="logout" trailing="plus"/>

      <div style={{position:'absolute', left:23, top:102, width:368, display:'flex', flexDirection:'column', gap:10}}>
        <div className="wf-search">
          <div className="wf-search__icon"/>
          <span>Поиск: ФИО, телефон, паспорт</span>
        </div>
        <div style={{display:'flex', gap:8}}>
          <div className="wf-chip wf-chip--active">Все<span className="wf-chip__count">42</span></div>
          <div className="wf-chip">Должники<span className="wf-chip__count">3</span></div>
          <div className="wf-chip">Активные<span className="wf-chip__count">14</span></div>
        </div>
      </div>
      <WFPin n="1" x={395} y={120} note="Поиск по 3 ключам сразу + 2 фильтра" side="left"/>

      <div style={{position:'absolute', left:23, top:206, font:'700 11px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.08em'}}>А</div>
      <WFPersonRow x={23} y={228} ringColor="green" titleW={140} lines={[120,90]} pill={{kind:'profit', label:'Активн.', value:'1'}}/>
      <WFPersonRow x={23} y={353} ringColor="yellow" titleW={150} lines={[130,80]} pill={{kind:'debt', label:'Долг', value:'4 280'}}/>
      <div style={{position:'absolute', left:23, top:478, font:'700 11px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.08em'}}>И</div>
      <WFPersonRow x={23} y={500} ringColor="green" titleW={130} lines={[110,90]} pill={{kind:'profit', label:'Активн.', value:'2'}}/>
      <WFPersonRow x={23} y={625} ringColor="magenta" titleW={140} lines={[140,80]}/>
      <WFPin n="2" x={395} y={210} note="Группировка по букве (A→Я)" side="left"/>
      <WFPin n="3" x={395} y={695} note="«+» в топ-баре → новый клиент (экран 7)" side="left"/>

      <WFTabBar active="clients"/>
    </WFFrame>
  );
}

function AdminClientCard() {
  return (
    <WFFrame screenLabel="06 Admin · Карточка клиента">
      <WFTopBar title="Клиент" leading="back" trailing="menu"/>

      <div className="wf-card" style={{position:'absolute', left:23, top:102, width:368, height:128, padding:'18px 22px', display:'flex', alignItems:'center', gap:14}}>
        <div className="wf-circle" style={{width:64, height:64}}/>
        <div style={{flex:1, display:'flex', flexDirection:'column', gap:6}}>
          <WFText w={170} h={15} tier={3}/>
          <WFText w={120} h={10} tier={1}/>
          <div className="wf-pill wf-pill--profit" style={{minWidth:0, padding:'4px 10px', alignSelf:'flex-start', marginTop:6}}>
            <div className="wf-pill__value" style={{fontSize:11}}>Активный клиент</div>
          </div>
        </div>
      </div>
      <WFPin n="1" x={-12} y={90} note="Шапка: фото + ФИО + статус" side="right"/>

      <div style={{position:'absolute', left:23, top:246, width:368, font:'700 11px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.08em'}}>Контакты</div>
      <div style={{position:'absolute', left:23, top:266, width:368, display:'flex', flexDirection:'column', gap:8}}>
        {['Телефон','Паспорт','Адрес','Логин'].map((l,i) => (
          <div key={i} style={{display:'flex', justifyContent:'space-between', padding:'10px 14px', background:'#fff', borderRadius:10, border:'1px solid #ececef'}}>
            <span style={{font:'500 12px/1 Inter,sans-serif', color:'var(--wf-label)'}}>{l}</span>
            <WFText w={120} h={11} tier={3}/>
          </div>
        ))}
      </div>

      <div style={{position:'absolute', left:23, top:466, width:368, font:'700 11px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.08em'}}>Документы</div>
      <div style={{position:'absolute', left:23, top:486, width:368, display:'flex', flexDirection:'column', gap:8}}>
        {['Видео приёма/передачи →','Договор аренды →','Комментарий'].map((l,i) => (
          <div key={i} style={{display:'flex', justifyContent:'space-between', padding:'10px 14px', background:'#fff', borderRadius:10, border:'1px dashed var(--wf-stroke-soft)'}}>
            <span style={{font:'500 12px/1 Inter,sans-serif', color:'var(--wf-stroke)'}}>{l}</span>
          </div>
        ))}
      </div>
      <WFPin n="2" x={395} y={486} note="Опциональные ссылки/поля — пунктир" side="left"/>

      <div style={{position:'absolute', left:23, top:638, width:368, font:'700 11px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.08em'}}>Аренды клиента</div>
      <WFPersonRow x={23} y={660} ringColor="yellow" titleW={130} lines={[140,80]} pill={{kind:'debt', label:'Долг', value:'4 280'}}/>

      <WFTabBar active="clients"/>
    </WFFrame>
  );
}

function AdminNewClient() {
  return (
    <WFFrame screenLabel="07 Admin · Новый клиент">
      <WFTopBar title="Новый клиент" leading="back" trailing="check"/>

      <div style={{position:'absolute', left:23, top:102, width:368, display:'flex', flexDirection:'column', gap:18}}>
        <div style={{font:'700 11px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.08em'}}>Обязательные</div>
        {[
          'ФИО','Телефон','Паспорт серия','Паспорт номер','Адрес','Логин','Пароль (сгенерировать ↻)',
        ].map((l,i) => (
          <div key={i} className="wf-input">
            <div style={{flex:1, display:'flex', flexDirection:'column', gap:4}}>
              <div className="wf-input__label">{l}</div>
              <div className="wf-input__value">введите…</div>
            </div>
          </div>
        ))}
        <WFPin n="1" x={395} y={140} note="Логин/пароль — кнопка «сгенерировать»" side="left"/>

        <div style={{font:'700 11px/1 Inter,sans-serif', color:'var(--wf-label)', textTransform:'uppercase', letterSpacing:'0.08em', marginTop:6}}>Опционально</div>
        {['Ссылка на видео приёма','Ссылка на договор','Комментарий'].map((l,i) => (
          <div key={i} className="wf-input" style={{borderStyle:'dashed', borderColor:'var(--wf-stroke-soft)'}}>
            <div style={{flex:1, display:'flex', flexDirection:'column', gap:4}}>
              <div className="wf-input__label">{l}</div>
              <div className="wf-input__value">не обязательно</div>
            </div>
          </div>
        ))}
        <WFPin n="2" x={395} y={690} note="Опц. блок: видео, договор, коммент — пунктирная рамка" side="left"/>
      </div>

      <WFTabBar active="clients"/>
    </WFFrame>
  );
}

window.AdminAllClients = AdminAllClients;
window.AdminClientCard = AdminClientCard;
window.AdminNewClient = AdminNewClient;
