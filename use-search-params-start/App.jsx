const mockProducts = [
  { id: 1, name: 'iPhone 14', price: 999, available: true, category: 'phones' },
  { id: 2, name: 'Samsung Galaxy S23', price: 899, available: true, category: 'phones' },
  { id: 3, name: 'Google Pixel 7', price: 599, available: false, category: 'phones' },
  { id: 4, name: 'MacBook Pro', price: 1999, available: true, category: 'laptops' },
  { id: 5, name: 'Dell XPS 13', price: 1299, available: true, category: 'laptops' },
  { id: 6, name: 'HP Pavilion', price: 799, available: false, category: 'laptops' },
  { id: 7, name: 'iPad Air', price: 599, available: true, category: 'tablets' },
  { id: 8, name: 'Surface Pro 9', price: 1099, available: true, category: 'tablets' },
  { id: 9, name: 'Kindle Paperwhite', price: 149, available: true, category: 'ebooks' },
  { id: 10, name: 'AirPods Pro', price: 249, available: false, category: 'accessories' },
  { id: 11, name: 'Magic Keyboard', price: 349, available: true, category: 'accessories' },
  { id: 12, name: 'Wireless Mouse', price: 79, available: true, category: 'accessories' }
];


const App = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Каталог продуктів</h1>
        </div>

        <div className="filters-panel">
          <div className="filters-header">
            Фільтри
          </div>

          <div className="filters-grid">
            <div className="filter-group">
              <label className="filter-label">Пошук</label>
              <div className="search-wrapper">
                <input
                  type="text"

                  placeholder="Назва або категорія..."
                  className="search-input"
                />
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Ціновий діапазон</label>
              <select
                className="price-select"
              >
                <option value="all">Всі ціни</option>
                <option value="low">До $500</option>
                <option value="medium">$500 - $1000</option>
                <option value="high">Від $1000</option>
              </select>
            </div>

            <div className="filter-group">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="available"
                />
                <label htmlFor="available" className="checkbox-label">
                  Тільки доступні товари
                </label>
              </div>
            </div>
          </div>

          <div className="filters-footer">
            <p className="results-count">
              Знайдено товарів: <strong>{mockProducts.length}</strong>
            </p>
            <button className="clear-button">
              Очистити фільтри
            </button>
          </div>
        </div>

        {mockProducts.length > 0 ? (
          <div className="products-grid">
            {mockProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-header">
                  <h3 className="product-title">{product.name}</h3>
                  <span className={`availability-badge ${product.available ? 'available' : 'unavailable'}`}>
                    {product.available ? 'Доступний' : 'Немає в наявності'}
                  </span>
                </div>

                <p className="product-category">{product.category}</p>

                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button
                    disabled={!product.available}
                    className={`buy-button ${product.available ? 'available' : 'unavailable'}`}
                  >
                    {product.available ? 'Купити' : 'Недоступно'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>Товарів не знайдено</h3>
            <p>Спробуйте змінити параметри фільтрації</p>
            <button className="reset-button">
              Скинути фільтри
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default App;