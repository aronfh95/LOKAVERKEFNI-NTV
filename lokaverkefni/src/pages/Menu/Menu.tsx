import { MenuItem } from "../../data/menuItems";
import "./Menu.css";

function Menu() {
  return (
    <section className="menu">
      <div className="menu-paper">
        <h1>Matseðill</h1>

        {MenuItem.map((category) => (
          <div className="menu-section" key={category.category}>
            <h2>{category.category}</h2>

            {category.items.map((item) => (
              <div className="menu-item" key={item.name}>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
