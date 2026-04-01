import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { content } from "../../lib/content";

export default function Page() {
  const data = content.ru;

  return (
    <>
      <Header />

      <main style={{ maxWidth: 1100, margin: "40px auto", padding: "0 20px" }}>
        <h1>{data.heroTitle}</h1>
        <p>{data.heroText}</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 20,
            marginTop: 40
          }}
        >
          {data.topics.map((item) => (
            <a key={item.title} href={item.href}>
              <b>{item.title}</b>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
