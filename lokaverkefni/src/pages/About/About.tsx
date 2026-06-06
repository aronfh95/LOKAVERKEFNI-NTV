import { companyInfo } from "../../data/companyInfo";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-subtitle">Um Litla Lemon</h2>

        <h1>Ferskleiki, gæði og notaleg upplifun</h1>

        <p>
          Litla Lemon er lítill og notalegur veitingarstaður þar sem ferskt
          hráefni og vönduð framsetning eru í aðalhlutverki.
        </p>

        <p>
          Markmiðið okkar er að bjóða upp á létta, fallega og bragðmikla rétti í
          rólegu og hlýlegu umhverfi.
        </p>

        <h2>Upplýsingar um fyrirtækið</h2>

        <table className="company-table">
          <tbody>
            {companyInfo.map((info) => (
              <tr key={info.label}>
                <th>{info.label}</th>
                <td>{info.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default About;
