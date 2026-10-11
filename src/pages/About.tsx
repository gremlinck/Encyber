import CtaBand from '../components/CtaBand'

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h1>Security for the infrastructure the world runs on.</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2">
          <div className="prose">
            <p>
              Power grids, water plants, factories, ports and hospitals depend on operational technology that is more connected, and more targeted, every year. Most of the organizations running it do not have a dedicated OT security team.
            </p>
            <p>
              ENCYBER exists to close that gap. We train the people who operate these systems, assess where they are exposed, and advise on what to fix first. Alongside our services we are building Varo AI, a decision intelligence product for OT security teams.
            </p>
            <p>
              ENCYBER is headquartered in Busan, Republic of Korea, and works with organizations in Korea and the United States.
            </p>
          </div>
          <div>
            <div className="person">
              <h3>Christine Kim</h3>
              <div className="role">Founder & CEO</div>
              <p>
                Christine has spent 19 years in OT/ICS and enterprise cybersecurity across Korea and Asia-Pacific, working with industrial operators, critical infrastructure owners and security teams. She is the author of <em>The Digital Pandemic</em>.
              </p>
            </div>
            <div className="person">
              <h3>Michele Chubirka</h3>
              <div className="role">Advisor</div>
              <p>Security architect and industry advisor.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight section-line">
        <div className="wrap">
          <ul className="facts">
            <li><strong>Lighthouse Network 2026</strong><span>First international company selected · Richmond, Virginia</span></li>
            <li><strong>SelectUSA 2026 Finalist</strong><span>U.S. Department of Commerce Investment Summit</span></li>
            <li><strong>Microsoft for Startups</strong><span>Program member</span></li>
          </ul>
        </div>
      </section>

      <CtaBand
        heading="Work with us."
        body="Training, assessments, consulting or a Varo AI demo. Start with a conversation."
      />
    </>
  )
}
