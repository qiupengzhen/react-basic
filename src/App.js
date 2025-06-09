// 可以放在 App.js 或其他需要的地方

const orders = [
  { date: '2025-06-07', income: 15.3 },
  { date: '2025-06-08', income: 23.5 },
  { date: '2025-06-09', income: 10.9 }
];
let i = (orders.reduce((sum, order) => sum + order.income, 0) - (3 * orders.length)).toFixed(2);

function App() {
  return (
    <div
      className="App"
      style={{
        maxWidth: 400,
        margin: '40px auto',
        padding: 24,
        borderRadius: 12,
        background: '#f9f9f9',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        fontFamily: '微软雅黑, Arial, sans-serif'
      }}
    >
      <h1 style={{ color: '#1976d2', textAlign: 'center', marginBottom: 8 }}>Welcome to my world</h1>
      <h2 style={{ color: '#388e3c', textAlign: 'center', marginTop: 0, marginBottom: 24 }}>外卖搬砖</h2>
      <ul style={{ padding: 0, listStyle: 'none', marginBottom: 24 }}>
        {orders.map((order, index) => (
          <li
            key={index}
            style={{
              background: '#fff',
              marginBottom: 12,
              padding: '10px 16px',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 16
            }}
          >
            <span>{order.date}</span>
            <span style={{ color: '#d32f2f' }}>收入: {(order.income - 3).toFixed(2)}元</span>
          </li>
        ))}
      </ul>
      <div
        style={{
          textAlign: 'right',
          fontWeight: 'bold',
          fontSize: 18,
          color: '#1976d2'
        }}
      >
        总收入：{i}元
      </div>
    </div>
  );
}
export default App;
