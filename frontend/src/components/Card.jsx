import { Card } from 'antd';

function CardComponent(props) {

  const {currency} = props

  return (
    <div>
       <Card title={
        <div className='flex items-center gap-3'>
            <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${currency.id}.png`}/>
            <span>{currency?.name}</span>
        </div>
       } variant="borderless" style={{ width: 420, backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <p><strong>Цена:</strong> ${currency?.quote?.USD?.price?.toLocaleString()}</p>
        <p><strong>Рыночная капитализация:</strong> ${currency?.quote?.USD?.market_cap?.toLocaleString()}</p>
        <p><strong>Объём 24ч:</strong> ${currency?.quote?.USD?.volume_24h?.toLocaleString()}</p>
        <p><strong>Изменение 24ч:</strong> <span className={currency?.quote?.USD?.percent_change_24h >= 0 ? 'text-green-500' : 'text-red-500'}>{currency?.quote?.USD?.percent_change_24h}%</span></p>
        <p><strong>Изменение 7д:</strong> <span className={currency?.quote?.USD?.percent_change_7d >= 0 ? 'text-green-500' : 'text-red-500'}>{currency?.quote?.USD?.percent_change_7d}%</span></p>
        </Card>
    </div>
  )
}

export default CardComponent
