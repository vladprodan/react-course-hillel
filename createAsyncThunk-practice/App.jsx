import React, { useEffect, useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // TODO: replace data from store
  const loading = true;
  const error = null;
  const selectedUser = {};
  const users = []


  useEffect(() => {
    // TODO: get all users
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // TODO: update a user
      setEditMode(false);
      setEditId(null);
    } else {
      // TODO: create a user
    }
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, phone: user.phone });
    setEditMode(true);
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Видалити користувача?')) {
      // TODO: delete a user
    }
  };

  const handleViewUser = (id) => {
    // TODO: get detailed info about user
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Управління користувачами</h1>

      {error && <div style={{ color: 'red', marginBottom: '10px' }}>Помилка: {error}</div>}

      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>{editMode ? 'Редагувати користувача' : 'Створити користувача'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{ margin: '5px', padding: '8px', width: '200px' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ margin: '5px', padding: '8px', width: '200px' }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleInputChange}
            style={{ margin: '5px', padding: '8px', width: '200px' }}
          />
          <button type="submit" style={{ margin: '5px', padding: '8px 20px' }}>
            {editMode ? 'Оновити' : 'Створити'}
          </button>
          {editMode && (
            <button
              type="button"
              onClick={() => {
                setEditMode(false);
                setEditId(null);
                setFormData({ name: '', email: '', phone: '' });
              }}
              style={{ margin: '5px', padding: '8px 20px' }}
            >
              Скасувати
            </button>
          )}
        </form>
      </div>

      <div>
        <h2>Список користувачів</h2>
        {loading ? (
          <p>Завантаження...</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>ID</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Ім'я</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Email</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Телефон</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Дії</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.id}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.name}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.email}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.phone}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                    <button onClick={() => handleViewUser(user.id)} style={{ margin: '2px' }}>
                      Переглянути
                    </button>
                    <button onClick={() => handleEdit(user)} style={{ margin: '2px' }}>
                      Редагувати
                    </button>
                    <button onClick={() => handleDelete(user.id)} style={{ margin: '2px' }}>
                      Видалити
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selectedUser && (
        <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>Деталі користувача</h2>
          <p><strong>ID:</strong> {selectedUser.id}</p>
          <p><strong>Ім'я:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Телефон:</strong> {selectedUser.phone}</p>
          <p><strong>Вебсайт:</strong> {selectedUser.website}</p>
          <p><strong>Компанія:</strong> {selectedUser.company?.name}</p>
          <button onClick={() => {
            // TODO: close info 
          }}>Закрити</button>
        </div>
      )}
    </div>
  );
}

export default App;