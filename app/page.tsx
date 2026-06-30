import {
  PROFILE,
  SKILLS,
  PROJECTS,
  LAST_UPDATED,
} from "@/lib/resume";
import PrintButton from "@/components/PrintButton";

export default function Page() {
  return (
    <main className="sheet">
      <header className="top">
        <div className="id">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="avatar" src={PROFILE.avatar} alt={PROFILE.name} />
          <div>
            <h1 className="name">{PROFILE.name}</h1>
            <p className="role">{PROFILE.title}</p>
            <div className="contact">
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              github.com/{PROFILE.github.split("/").pop()}
            </a>
            <span>{PROFILE.location}</span>
            </div>
          </div>
        </div>
        <PrintButton />
      </header>

      <section>
        <h2 className="sec-title">Summary</h2>
        <p className="summary">{PROFILE.summary}</p>
      </section>

      <section>
        <h2 className="sec-title">Skills</h2>
        <div className="skills">
          {SKILLS.map((s) => (
            <div key={s.group} style={{ display: "contents" }}>
              <div className="grp">{s.group}</div>
              <div className="chips">
                {s.items.map((it) => (
                  <span className="chip" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="sec-title">Selected Projects</h2>
        {PROJECTS.map((p) => (
          <article className="project" key={p.name}>
            <div className="p-head">
              <h3 className="p-name">{p.name}</h3>
              <span className="p-role">{p.role}</span>
            </div>
            <div className="p-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <p className="p-blurb">{p.blurb}</p>
            <ul className="p-list">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            {p.note && <p className="p-note">{p.note}</p>}
            <p className="p-stack">
              <strong>Stack:</strong> {p.stack.join(" · ")}
            </p>
            {p.links.length > 0 && (
              <div className="p-links">
                {p.links.map((l) => (
                  <a
                    className="p-link"
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      <footer className="foot">
        <span>Last updated {LAST_UPDATED}</span>
        <span>Built with Next.js · deployed on Vercel</span>
      </footer>
    </main>
  );
}
