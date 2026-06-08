import { Menu, Spin } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardComponent from './components/Card';

const App = () => {
  const [currency, setCurrency] = useState([]);
  const [currencyId, setCurrencyId] = useState(1);
  const [currencyData, setCurrencyData] = useState([]);

  const fetchCurrency = () => {
    axios.get('http://127.0.0.1:8000/cryptocurrency').then(resp => {
      const currencyResp = resp.data;
      console.log(currencyResp)
      const menuItems = [
        {
          key: 'item1',
          label: 'Список криптовалют',
          type: 'group',
          children: currencyResp && currencyResp.length > 0 
            ? currencyResp.map(c => ({ 
                label: c.name,
                key: c.id,
                icon: <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${c.id}.png`} alt={c.name} style={{ width: 16, height: 16 }} />
              }))
            : [{ label: 'Нет данных', key: 'empty' }]
        },
      ];
      setCurrency(menuItems);
    });
  };

  useEffect(() => { fetchCurrency(); }, []);
  useEffect(() => {
    const fetchCurrencyData = () => {
      axios.get(`http://127.0.0.1:8000/cryptocurrency/${currencyId}`).then(resp => {
        setCurrencyData(resp.data);
      });
    };
    
    fetchCurrencyData();
  }, [currencyId]);

  const onClick = e => {
    // console.log('click ', e);
    setCurrencyId(e.key)
  };

  return (
    <div className='flex'>
      <Menu
        onClick={onClick}
        style={{ width: 256, backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={currency}
        className='h-screen overflow-scroll'
      />
      <div className='mx-auto my-auto'>
        {currencyData ? <CardComponent currency={currencyData}/> : <Spin size="large"/>}
      </div>
    </div>
  );
};

export default App;