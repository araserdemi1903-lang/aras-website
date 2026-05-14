import "./App.css";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const navButton = {
    color: "white",
    background: "rgba(0,0,0,0.7)",
    padding: "12px 25px",
    borderRadius: "12px",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
  };

  const pageStyle = {
    minHeight: "100vh",
    padding: "120px 60px",
    backgroundImage: "url('/projefoto7.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    overflowY: "auto",
    color: "white",
  };

  const contentBox = {
    background: "rgba(0,0,0,0.65)",
    padding: "50px",
    borderRadius: "25px",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        overflowX: "hidden",
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
        <button style={navButton} onClick={() => setPage("home")}>
          Home
        </button>

        <button style={navButton} onClick={() => setPage("video")}>
          Video
        </button>

        <button style={navButton} onClick={() => setPage("story")}>
          Story
        </button>

        <button style={navButton} onClick={() => setPage("opinion")}>
          Opinion Essay
        </button>

        <button style={navButton} onClick={() => setPage("future")}>
          Future Plans
        </button>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div
          style={{
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <section
            style={{
              height: "100vh",
              backgroundImage: "url('/projefoto6.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "70px",
                top: "110px",
              }}
            >
              <h1
                style={{
                  fontSize: "170px",
                  margin: "0",
                  letterSpacing: "20px",
                  color: "black",
                }}
              >
                ARAS
              </h1>

              <p
                style={{
                  fontSize: "38px",
                  letterSpacing: "8px",
                  lineHeight: "1.6",
                  color: "white",
                }}
              >
                NİŞANTAŞI ANATOLIAN
                <br />
                HIGH SCHOOL STUDENT
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                height: "300px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(0,0,0,1))",
              }}
            />
          </section>

          {/* ABOUT WEBSITE */}
          <section
            style={{
              minHeight: "100vh",
              background: "black",
              padding: "120px 80px",
              textAlign: "center",
              color: "white",
            }}
          >
            <h1
              style={{
                fontSize: "80px",
                marginBottom: "60px",
                letterSpacing: "8px",
              }}
            >
              ABOUT THIS WEBSITE
            </h1>

            <p
              style={{
                fontSize: "32px",
                lineHeight: "2.1",
                maxWidth: "1300px",
                margin: "auto",
              }}
            >
              This website includes many things about myself like my school,
              my future plans, my interests, my memories, my personal thoughts,
              my story, the things I enjoy, and many other details about my
              life.
            </p>

            <p
              style={{
                marginTop: "80px",
                fontSize: "24px",
                opacity: "0.7",
              }}
            >
              Use the navigation buttons above to explore the website.
            </p>
          </section>
        </div>
      )}

      {/* VIDEO */}
      {page === "video" && (
        <div style={pageStyle}>
          <div style={contentBox}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "70px",
                marginBottom: "40px",
              }}
            >
              VIDEO
            </h1>

            <p
              style={{
                textAlign: "center",
                fontSize: "28px",
                lineHeight: "2",
              }}
            >
              Here there is my video,this video telling a lot of thing about
              myself,I hope you enjoy it.
            </p>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <iframe
                src="https://www.youtube.com/embed/VuX_ziSs7jQ"
                width="900"
                height="500"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "20px",
                  border: "none",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* STORY */}
      {page === "story" && (
        <div style={pageStyle}>
          <div style={contentBox}>
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
Not erased.
The day before the exam, everyone was panicking.
At home, Leo was silent. The room was dark, only the glow of the screen lighting his face.
But he was not “studying.”
He was rewatching how people think.
The teachers’ habits when creating questions…
The mistakes students usually make…
Which types of problems freeze the mind…
And more importantly:
How people collapse under pressure.
Leo didn’t write anything in his notebook.
Because everything was already in his mind.
The exam day arrived.
The school was louder than usual, but for Leo, the sound felt distant—like a dull noise from far away.
As if he wasn’t really there.
As if he was only observing.
The exam started.
Papers were handed out.
Within minutes, a slight panic spread across the classroom. Pens moved faster, breathing changed, some students stared blankly at the page.
Leo lowered his head.
And began writing.
Slow.
Controlled.
Emotionless.
It was not like he was solving the questions.
It was like he was copying something that already existed.
As time passed, the classroom became quieter.
Only Leo was still writing.
At one point, even the teacher looked at him.
For a long time.
Not like looking at a normal child.
But like trying to understand something.
And failing.
The exam ended.
Leo was the first to submit his paper.
He stood up.
Left his seat.
And walked out without looking back.
A week later, the results were announced.
Leo had the highest score.
But no one was surprised.
By then, being surprised about him felt pointless.
During lunch break, one of the boys who used to bully him approached.
This time there was no mockery.
Only uneasy curiosity.
“How did you do it?” he asked.
Leo stopped.
Didn’t answer for a long time.
Then slowly turned his head.
Made eye contact.
And for the first time, his voice was colder:
“I didn’t do anything.”
A silence followed.
The boy didn’t understand.
Leo continued:
“I only watched what people would do before they did it.”
He paused.
“And you… were always the same.”
That day, no one talked about him in the hallways.
Because to talk about him, you first had to understand him.
And Leo no longer tried to be understood.
He only observed.
As if one day, everyone’s story would end.
And he… already knew the ending.`}
            </p>
          </div>
        </div>
      )}

      {/* OPINION */}
      {page === "opinion" && (
        <div style={pageStyle}>
          <div style={contentBox}>
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
First, let’s talk about the needs of young people. Youth can adapt quickly to changes and innovations in the world. As the future of our society, they need new experiences to improve themselves and learn new skills. Usually, young people have a lot of energy. They do different activities every day to use this energy, and traveling is one of them. Traveling helps them stay active, have fun, and learn new things at the same time. This means traveling is more than just a hobby.

Some older people think that traveling too much is a waste of money or bad for the future. They might try to stop young people because they think the youth do not have enough experience or savings. However, young people are aware of life, and they follow their feelings and logic. High school and university years are usually the best times to travel. These trips also help them practice and learn foreign languages.

In short, traveling is very important for young people. It might have some small disadvantages, but it is still very beneficial.

Thank you for reading.`}
            </p>
          </div>
        </div>
      )}

      {/* FUTURE */}
      {page === "future" && (
        <div style={pageStyle}>
          <div style={contentBox}>
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
{`First of all, I don't have an extremely detailed plan for the future. When people ask me this question, I usually say "I want to be an engineer," but I only say this to finish the conversation quickly. Yes, it is my professional goal, but I want other things too.

As I mentioned in my website video, I want to learn Spanish in addition to English and live there for at least one period. This is something I really want to do. But there is one thing that is different from all my other wishes: becoming a congress member of Beşiktaş. Even if that doesn't happen, I want at least a membership where I can support the club.

Beşiktaş is a very important matter for me. I have been connected to this club since I was a child, and of course, I want to support them when I grow up.

Thank you for reading.`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}