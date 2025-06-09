// src/App.js
import React, { useState } from 'react';

function App() {
  const [orders, setOrders] = useState([
    { date: '2025-06-07', income: 15.3 },
    { date: '2025-06-08', income: 23.5 },
    { date: '2025-06-09', income: 10.9 }
  ]);

  const [newOrderDate, setNewOrderDate] = useState('');
  const [newOrderIncome, setNewOrderIncome] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const totalIncome = orders.reduce((sum, order) => sum + (order.income - 3), 0).toFixed(2);

  const handleAddOrder = (e) => {
    e.preventDefault();
    if (newOrderDate && newOrderIncome) {
      const newOrder = {
        date: newOrderDate,
        income: parseFloat(newOrderIncome)
      };
      setOrders([...orders, newOrder]);
      setNewOrderDate('');
      setNewOrderIncome('');
      setShowAddForm(false);
    }
  };

  // SVG 图标组件
  const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const MotorcycleIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
      <circle cx="5" cy="15" r="2"></circle>
      <circle cx="19" cy="15" r="2"></circle>
      <path d="M7 15h10l1-7H14.5M17 5l-3 3H9.5"></path>
      <path d="M14 8h-3"></path>
      <path d="M6 12l3-3"></path>
    </svg>
  );

  const ChartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );

  const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const MoneyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
      <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
      <rect x="7" y="11" width="10" height="8" rx="2"></rect>
      <circle cx="12" cy="15" r="1"></circle>
    </svg>
  );

  return (
    <div style={styles.app}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <MotorcycleIcon />
          <h1 style={styles.title}>外卖收入统计</h1>
        </div>
        <div style={styles.headerStats}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>总订单</div>
            <div style={styles.statValue}>{orders.length}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>总收入</div>
            <div style={styles.statValue}>{totalIncome}元</div>
          </div>
        </div>
      </div>

      <div style={styles.contentContainer}>
        <div style={styles.contentCard}>
          <div style={styles.sectionHeader}>
            <CalendarIcon />
            <h2 style={styles.sectionTitle}>历史订单</h2>
            <button
              style={styles.addButton}
              onClick={() => setShowAddForm(!showAddForm)}
            >
              <PlusIcon /> 添加订单
            </button>
          </div>

          {showAddForm && (
            <form style={styles.addForm} onSubmit={handleAddOrder}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>日期</label>
                <input
                  type="date"
                  value={newOrderDate}
                  onChange={(e) => setNewOrderDate(e.target.value)}
                  style={styles.formInput}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>收入金额</label>
                <input
                  type="number"
                  value={newOrderIncome}
                  onChange={(e) => setNewOrderIncome(e.target.value)}
                  min="0"
                  step="0.1"
                  style={styles.formInput}
                  placeholder="输入收入金额"
                  required
                />
              </div>
              <div style={styles.formActions}>
                <button
                  type="button"
                  style={{ ...styles.button, ...styles.cancelButton }}
                  onClick={() => setShowAddForm(false)}
                >
                  取消
                </button>
                <button
                  type="submit"
                  style={{ ...styles.button, ...styles.submitButton }}
                >
                  添加
                </button>
              </div>
            </form>
          )}

          <div style={styles.ordersContainer}>
            {orders.map((order, index) => (
              <div key={index} style={styles.orderCard}>
                <div style={styles.orderDate}>
                  <CalendarIcon />
                  <span>{order.date}</span>
                </div>
                <div style={styles.orderInfo}>
                  <div style={styles.orderDetail}>
                    <span style={styles.detailLabel}>总收入:</span>
                    <span>{order.income.toFixed(2)}元</span>
                  </div>
                  <div style={styles.orderDetail}>
                    <span style={styles.detailLabel}>成本:</span>
                    <span>3.00元</span>
                  </div>
                  <div style={styles.orderDetail}>
                    <MoneyIcon />
                    <span style={styles.netIncome}>{(order.income - 3).toFixed(2)}元</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>订单总数:</span>
              <span style={styles.summaryValue}>{orders.length}单</span>
            </div>
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>总收入:</span>
              <span style={styles.summaryValue}>{totalIncome}元</span>
            </div>
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>平均日收入:</span>
              <span style={styles.summaryValue}>
                {(totalIncome / orders.length).toFixed(2)}元
              </span>
            </div>
          </div>
        </div>

        <div style={styles.contentCard}>
          <div style={styles.sectionHeader}>
            <ChartIcon />
            <h2 style={styles.sectionTitle}>收入分析</h2>
          </div>

          <div style={styles.chartContainer}>
            {orders.map((order, index) => {
              const netIncome = order.income - 3;
              const barWidth = (netIncome / 25) * 100;

              return (
                <div key={index} style={styles.chartBarContainer}>
                  <div style={styles.chartDate}>{order.date.split('-').slice(1).join('/')}</div>
                  <div style={styles.chartBarBackground}>
                    <div
                      style={{
                        ...styles.chartBar,
                        width: `${barWidth}%`,
                        backgroundColor: netIncome > 20 ? '#4CAF50' :
                          netIncome > 15 ? '#FFC107' : '#F44336'
                      }}
                    ></div>
                  </div>
                  <div style={styles.chartValue}>{netIncome.toFixed(2)}元</div>
                </div>
              );
            })}
          </div>

          <div style={styles.insights}>
            <h3 style={styles.insightsTitle}>收入洞察</h3>
            <ul style={styles.insightsList}>
              <li style={styles.insightItem}>
                最高收入日: {Math.max(...orders.map(o => o.income - 3)).toFixed(2)}元
              </li>
              <li style={styles.insightItem}>
                最低收入日: {Math.min(...orders.map(o => o.income - 3)).toFixed(2)}元
              </li>
              <li style={styles.insightItem}>
                收入波动: {(Math.max(...orders.map(o => o.income - 3)) -
                  Math.min(...orders.map(o => o.income - 3))).toFixed(2)}元
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <p>© 2025 外卖收入统计系统 | 数据更新于 {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)',
    fontFamily: '"Segoe UI", "微软雅黑", sans-serif',
    padding: '20px',
    color: '#333'
  },
  header: {
    background: 'linear-gradient(to right, #1976d2, #2196F3)',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
    padding: '20px',
    marginBottom: '30px',
    color: 'white'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  title: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 600,
    letterSpacing: '0.5px',
    marginLeft: '15px'
  },
  headerStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '15px 25px',
    borderRadius: '12px',
    minWidth: '120px',
    textAlign: 'center'
  },
  statLabel: {
    fontSize: '16px',
    opacity: 0.9,
    marginBottom: '5px'
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  contentContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '25px',
    marginBottom: '30px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  contentCard: {
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
    padding: '25px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
  },
  sectionTitle: {
    margin: 0,
    fontSize: '22px',
    fontWeight: 600,
    marginLeft: '12px',
    flexGrow: 1
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  addForm: {
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '25px',
    border: '1px solid #eee'
  },
  formGroup: {
    marginBottom: '18px'
  },
  formLabel: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 500,
    fontSize: '14px',
    color: '#555'
  },
  formInput: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '15px',
    transition: 'border 0.3s ease'
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '10px'
  },
  button: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '15px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  cancelButton: {
    background: '#f5f5f5',
    color: '#666'
  },
  submitButton: {
    background: '#2196F3',
    color: 'white'
  },
  ordersContainer: {
    marginBottom: '25px'
  },
  orderCard: {
    background: '#f9f9f9',
    borderRadius: '12px',
    padding: '18px',
    marginBottom: '15px',
    borderLeft: '4px solid #2196F3'
  },
  orderDate: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    fontWeight: 500,
    color: '#444'
  },
  orderInfo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px'
  },
  orderDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px'
  },
  detailLabel: {
    fontSize: '13px',
    color: '#777'
  },
  netIncome: {
    fontWeight: 'bold',
    color: '#388E3C',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#f0f7ff',
    padding: '18px',
    borderRadius: '12px',
    border: '1px solid #d1e7ff'
  },
  summaryItem: {
    textAlign: 'center'
  },
  summaryLabel: {
    display: 'block',
    fontSize: '14px',
    color: '#1976d2',
    marginBottom: '5px'
  },
  summaryValue: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#333'
  },
  chartContainer: {
    marginBottom: '30px'
  },
  chartBarContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px'
  },
  chartDate: {
    width: '70px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#555'
  },
  chartBarBackground: {
    flexGrow: 1,
    height: '24px',
    background: '#f0f0f0',
    borderRadius: '12px',
    margin: '0 15px',
    overflow: 'hidden'
  },
  chartBar: {
    height: '100%',
    borderRadius: '12px',
    transition: 'width 0.8s ease'
  },
  chartValue: {
    width: '70px',
    textAlign: 'right',
    fontWeight: 500,
    fontSize: '14px'
  },
  insights: {
    background: '#fff8e1',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #ffe082'
  },
  insightsTitle: {
    marginTop: 0,
    marginBottom: '15px',
    color: '#FF9800'
  },
  insightsList: {
    paddingLeft: '20px',
    margin: 0
  },
  insightItem: {
    marginBottom: '10px',
    lineHeight: 1.6
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    fontSize: '14px',
    color: '#777',
    borderTop: '1px solid #eee',
    maxWidth: '800px',
    margin: '0 auto'
  }
};

export default App;