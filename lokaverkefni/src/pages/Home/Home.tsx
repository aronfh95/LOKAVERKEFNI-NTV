import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="home-subtitle">Ferskt • Létt • Lúxus</p>

        <h1>Velkomin á Litla Lemon</h1>

        <p className="home-text">
          Notalegur veitingastaður með fersku hráefnum, sítrónukeim og fallegri
          upplifun.
        </p>

        <Link className="home-btn" to="/menu">
          Skoða matseðil
        </Link>
      </div>
    </section>
  );
}

export default Home;
