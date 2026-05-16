// Screen 1 — CLIENT (single screen + payment sheet)

const { WFFrame, WFTopBar, WFTabBar, WFPin, WFText } = window.WF;

function ClientRental({ sheetOpen = true }) {
  return (
    <WFFrame screenLabel="01 Client · Текущая аренда">
      <WFTopBar title="Моя аренда" leading="logout" trailing="menu"/>

      {/* Bike hero card */}
      <div className="wf-card" style={{ position:'absolute', left:23, top:102, width:368, height:182, padding:21 }}>
        <div style={{display:'flex', gap:18}}>
          <div className="wf-square" style={{width:84, height:84, borderRadius:18, boxShadow:'inset 0 0 0 3px #34C759'}}/>
          <div style={{flex:1, paddingTop:6, display:'flex', flexDirection:'column', gap:8}}>
            <WFText w={70} h={9} tier={1}/>
            <WFText w={170} h={16} tier={3}/>
            <WFText w={120} h={10} tier={1}/>
          </div>
        </div>
        <div style={{position:'absolute', left:21, right:21, top:138, height:1, background:'#EDEDED'}}/>
        <div style={{position:'absolute', left:21, top:150, display:'flex', gap:40}}>
          <div style={{display:'flex', flexDirection:'column', gap:6}}>
            <WFText w={70} h={8} tier={1}/>
            <WFText w={92} h={12} tier={3}/>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:6}}>
            <WFText w={80} h={8} tier={1}/>
            <WFText w={70} h={12} tier={3}/>
          </div>
        </div>
        <WFPin n="A" x={-12} y={-12} note="Велосипед: фото, модель, SN, оплачено до, ставка/нед" side="right"/>
      </div>

      {/* Debt callout */}
      <div style={{
        position:'absolute', left:23, top:300, width:368, height:88,
        borderRadius:15, background:'#D63034',
        boxShadow:'0 20px 30px rgba(25,28,50,0.10)',
        padding:'18px 22px', color:'#fff', display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <div style={{display:'flex', flexDirection:'column', gap:8}}>
          <div style={{font:'700 11px/1 Inter,sans-serif', textTransform:'uppercase', letterSpacing:'0.06em', opacity:.85}}>Текущий долг</div>
          <div style={{font:'800 24px/1 Inter,sans-serif'}}>4 280 ₽</div>
        </div>
        <div style={{
          padding:'10px 14px', borderRadius:10,
          background:'rgba(255,255,255,0.18)', font:'600 12px/1 Inter,sans-serif',
        }}>Оплатить весь</div>
        <WFPin n="B" x={-12} y={-12} note="Красная плашка → зелёная если долга нет (Прибыль за период)" side="right"/>
      </div>

      {/* Quick-pay open trigger */}
      <div style={{position:'absolute', left:23, top:406, width:368, display:'flex', flexDirection:'column', gap:14}}>
        <div style={{font:'700 11px/1 Inter,sans-serif', textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--wf-label)'}}>Быстрая оплата</div>
        <div className="wf-btn" style={{width:'100%'}}>Выбрать тариф ↑</div>
        <div style={{font:'400 12px/1.45 Inter,sans-serif', color:'var(--wf-label)', textAlign:'center'}}>
          Тап → шторка снизу с тарифами<br/>(на этом экране открыта по умолчанию)
        </div>
      </div>

      {/* Bottom sheet — payment options */}
      {sheetOpen && (
        <div className="wf-sheet" style={{height: 358}}>
          <div className="wf-sheet__handle"/>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
            <div style={{font:'700 16px/1 Inter,sans-serif', color:'var(--wf-stroke)'}}>Оплата аренды</div>
            <div style={{font:'500 12px/1 Inter,sans-serif', color:'var(--wf-label)'}}>Закрыть ✕</div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            {['1 день · 580 ₽','1 неделя · 4 000 ₽','2 недели · 8 000 ₽','1 месяц · 16 000 ₽'].map((t, i) => (
              <div key={i} style={{
                height:72, borderRadius:14, background:'#FAFBFB',
                border: i===1 ? '2px solid #1f2937' : '1px solid #ececef',
                padding:'12px 14px', display:'flex', flexDirection:'column', justifyContent:'space-between',
                font:'700 13px/1 Inter,sans-serif', color: i===1 ? '#1f2937' : 'var(--wf-stroke)',
              }}>
                <div style={{font:'500 11px/1 Inter,sans-serif', color:'var(--wf-label)'}}>{t.split(' · ')[0]}</div>
                <div>{t.split(' · ')[1]}</div>
              </div>
            ))}
          </div>
          <div style={{height:14}}/>
          <div className="wf-btn wf-btn--danger" style={{width:'100%'}}>Оплатить весь долг · 4 280 ₽</div>
          <div style={{height:10}}/>
          <div className="wf-btn wf-btn--ghost" style={{width:'100%'}}>Оплатить выбранный · 4 000 ₽</div>
          <WFPin n="C" x={20} y={-12} note="Шторка: 4 тарифа (день/нед/2 нед/мес) + «весь долг» + выбранный" side="right"/>
        </div>
      )}
    </WFFrame>
  );
}

window.ClientRental = ClientRental;
