import { useState } from 'react';

import { Categories } from './Categories';
import { Menu } from './Menu';

import { menu } from './data';

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu menu={menuItems} />
      </section>
    </main>
  );
}

export default App;
