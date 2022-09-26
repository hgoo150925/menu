export const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map(({ id, title, price, img, desc }) => {
        return (
          <article key={id} className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
