import React from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu({ items, title }) {
  return (
    <div className="dropdown-menu">
      <h3>{title}</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <Link
              to={item.path}
              style={{ textDecoration: 'none', color: '#800080', fontWeight: 'bold' }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
