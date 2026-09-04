import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#f1f1f1",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <section
        id="center"
        style={{ textAlign: "center", padding: "2rem 1rem" }}
      >
        <div
          className="hero"
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "1.5rem",
          }}
        >
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt=""
            style={{ display: "block", margin: "0 auto" }}
          />
          <img
            src={reactLogo}
            className="framework"
            alt="React logo"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "40px",
            }}
          />
          <img
            src={viteLogo}
            className="vite"
            alt="Vite logo"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              width: "40px",
            }}
          />
        </div>
        <div>
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              color: "#ffffff",
            }}
          >
            Get started
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#aaa" }}>
            Edit{" "}
            <code
              style={{
                backgroundColor: "#222",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              src/App.jsx
            </code>{" "}
            and save to test{" "}
            <code
              style={{
                backgroundColor: "#222",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              HMR
            </code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
          style={{
            marginTop: "1.5rem",
            padding: "0.6rem 1.2rem",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "8px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "#fff",
            transition: "background 0.2s",
          }}
        >
          Count is {count}
        </button>
      </section>

      <div
        className="ticks"
        style={{ height: "2px", backgroundColor: "#333", margin: "2rem 0" }}
      ></div>

      <section
        id="next-steps"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          padding: "1rem",
        }}
      >
        <div
          id="docs"
          style={{
            background: "#1e1e1e",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            minWidth: "250px",
            border: "1px solid #2a2a2a",
          }}
        >
          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
            style={{
              width: "24px",
              height: "24px",
              marginBottom: "0.5rem",
              fill: "#fff",
            }}
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2
            style={{
              fontSize: "1.3rem",
              marginBottom: "0.5rem",
              color: "#fff",
            }}
          >
            Documentation
          </h2>
          <p style={{ color: "#aaa", marginBottom: "1rem" }}>
            Your questions, answered
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            <li>
              <a
                href="https://vite.dev/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "#ddd",
                }}
              >
                <img
                  className="logo"
                  src={viteLogo}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                Explore Vite
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "#ddd",
                }}
              >
                <img
                  className="button-icon"
                  src={reactLogo}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div
          id="social"
          style={{
            background: "#1e1e1e",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            minWidth: "250px",
            border: "1px solid #2a2a2a",
          }}
        >
          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
            style={{
              width: "24px",
              height: "24px",
              marginBottom: "0.5rem",
              fill: "#fff",
            }}
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2
            style={{
              fontSize: "1.3rem",
              marginBottom: "0.5rem",
              color: "#fff",
            }}
          >
            Connect with us
          </h2>
          <p style={{ color: "#aaa", marginBottom: "1rem" }}>
            Join the Vite community
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            <li>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "#ddd",
                }}
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  style={{ width: "20px", height: "20px", fill: "#fff" }}
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "#ddd",
                }}
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  style={{ width: "20px", height: "20px", fill: "#fff" }}
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://x.com/vite_js"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "#ddd",
                }}
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  style={{ width: "20px", height: "20px", fill: "#fff" }}
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "#ddd",
                }}
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  style={{ width: "20px", height: "20px", fill: "#fff" }}
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div
        className="ticks"
        style={{ height: "2px", backgroundColor: "#333", margin: "2rem 0" }}
      ></div>
      <section id="spacer" style={{ height: "50px" }}></section>
    </div>
  );
}

export default App;
