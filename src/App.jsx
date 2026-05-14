
import "./App.css";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "white",
        scrollBehavior: "smooth",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          zIndex: "1000",
        }}
      >
        {[
          ["home", "Home"],
          ["video", "Video"],
          ["story", "Story"],
          ["opinion", "Opinion Essay"],
          ["future", "Future Plans"],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              textDecoration: "none",
              color: "white",
              background: "rgba(0,0,0,0.7)",
              padding: "12px 25px",
              borderRadius: "12px",
              fontSize: "18px",
              transition: "0.3s",
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* HOME */}
      <section
        id="home"
        style={{
          height: "100vh",
          backgroundImage: "url('/projefoto6.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "120px",
            top: "250px",
            color: "black",
          }}
        >
          <h1
            style={{
              fontSize: "170px",
              margin: "0",
              letterSpacing: "20px",
            }}
          >
            ARAS
          </h1>

          <p
            style={{
              fontSize: "38px",
              letterSpacing: "8px",
              lineHeight: "1.6",
            }}
          >
            NİŞANTAŞI ANATOLIAN
            <br />
            HIGH SCHOOL STUDENT
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section
        id="video"
        style={{
          minHeight: "100vh",
          padding: "120px 40px",
          textAlign: "center",
          backgroundImage: "url('/projefoto7.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.65)",
            padding: "50px",
            borderRadius: "25px",
          }}
        >
          <h1 style={{ fontSize: "70px", marginBottom: "40px" }}>
            VIDEO
          </h1>

          <p style={{ fontSize: "28px", lineHeight: "2" }}>
            Here, there is my video.
          </p>

          <p style={{ fontSize: "24px", lineHeight: "2" }}>
            This video is telling my life, my interests,
            my school, and some important things about me.
          </p>

          <p style={{ fontSize: "24px", lineHeight: "2" }}>
            I hope you enjoy watching it.
          </p>

          <iframe
            src="https://www.youtube.com/embed/VuX_ziSs7jQ"
            width="900"
            height="500"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              marginTop: "40px",
              borderRadius: "20px",
              border: "none",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        style={{
          minHeight: "100vh",
          padding: "120px 60px",
          backgroundImage: "url('/projefoto7.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            padding: "60px",
            borderRadius: "25px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "70px",
              marginBottom: "60px",
            }}
          >
            STORY
          </h1>

          <p
            style={{
              fontSize: "25px",
              lineHeight: "2.2",
              whiteSpace: "pre-line",
            }}
          >
{`Silent Genius – Cold Version
Leo was ten years old.
But no one ever truly saw him as a normal child.
Because when he smiled, his eyes didn’t smile.
Because when he spoke, there was no emotion in his voice—only information.
The children at school excluded him. That was nothing new to him. What was strange was how little he seemed to care.
It was as if he wasn’t looking at people… but at patterns.
And those patterns were being stored in his mind.
Not erased.`}
          </p>
        </div>
      </section>

      {/* OPINION ESSAY */}
      <section
        id="opinion"
        style={{
          minHeight: "100vh",
          padding: "120px 60px",
          backgroundImage: "url('/projefoto7.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            padding: "60px",
            borderRadius: "25px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "70px",
              marginBottom: "60px",
            }}
          >
            OPINION ESSAY
          </h1>

          <p
            style={{
              fontSize: "26px",
              lineHeight: "2.2",
              whiteSpace: "pre-line",
            }}
          >
{`Is Traveling Good for Young People?
First, let’s talk about the needs of young people.`}
          </p>
        </div>
      </section>

      {/* FUTURE PLANS */}
      <section
        id="future"
        style={{
          minHeight: "100vh",
          padding: "120px 60px",
          backgroundImage: "url('/projefoto7.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            padding: "60px",
            borderRadius: "25px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "70px",
              marginBottom: "60px",
            }}
          >
            FUTURE PLANS
          </h1>

          <p
            style={{
              fontSize: "26px",
              lineHeight: "2.2",
              whiteSpace: "pre-line",
            }}
          >
{`First of all, I don't have an extremely detailed plan for the future.`}
          </p>
        </div>
      </section>
    </div>
  );
}
```

