import React, { useState } from 'react';
import './App.css';

/**
 * Color palette and constants
 */
const COLORS = {
  primary: '#4F8A8B',
  secondary: '#FBD46D',
  accent: '#F76B8A',
  lightBG: '#FAFAFA',
  textDark: '#212121',
  textLight: '#4F8A8B',
  sectionBorder: '#e5e7eb',
  progressBG: '#e0ecec',
};

/**
 * Demo job role data (can be extended)
 */
const JOB_ROLES = [
  {
    label: 'Frontend Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Testing'],
  },
  {
    label: 'Data Analyst',
    skills: ['Python', 'Statistics', 'Data Visualization', 'SQL', 'Pandas'],
  },
  {
    label: 'Project Manager',
    skills: [
      'Communication',
      'Agile',
      'JIRA',
      'Risk Management',
      'Team Leadership',
    ],
  },
  {
    label: 'UX Designer',
    skills: [
      'UI Design',
      'Wireframing',
      'User Research',
      'Figma',
      'Prototyping',
    ],
  },
];

/**
 * Demo recommendations
 */
const RECOMMENDATIONS = {
  'React': [
    {
      text: 'React Official Docs',
      url: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      text: 'freeCodeCamp React Course',
      url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/#react',
    },
  ],
  'Testing': [
    {
      text: 'Jest Testing Intro',
      url: 'https://jestjs.io/docs/getting-started',
    },
    {
      text: 'React Testing Library',
      url: 'https://testing-library.com/docs/react-testing-library/intro/',
    },
  ],
  'Pandas': [
    {
      text: 'Pandas Documentation',
      url: 'https://pandas.pydata.org/docs/',
    },
    {
      text: 'Kaggle Pandas Tutorial',
      url: 'https://www.kaggle.com/learn/pandas',
    },
  ],
  'Risk Management': [
    {
      text: 'PMI Risk Management Guide',
      url: 'https://www.pmi.org/learning/library/implementing-risk-management-projects-8375',
    },
  ],
  'Figma': [
    {
      text: 'Figma Learn',
      url: 'https://help.figma.com/hc/en-us/categories/360002006113-Learn-Figma',
    },
  ],
  // Add more as needed
};


/**
 * HEADER: Vibrant & modern with title + subtitle
 */
function Header() {
  return (
    <header
      style={{
        background: `linear-gradient(90deg, ${COLORS.primary} 50%, ${COLORS.secondary} 100%)`,
        color: COLORS.lightBG,
        padding: '36px 0 20px 0',
        marginBottom: 0,
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)',
      }}
    >
      <div
        style={{
          maxWidth: 1050,
          margin: '0 auto',
          padding: '0 30px',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: 2,
            marginRight: 10,
            color: COLORS.secondary,
            textShadow: `0 1px 10px ${COLORS.primary}22`,
          }}>
            SkillBridge Analyzer
          </div>
          <span
            style={{
              padding: '3px 13px',
              background: COLORS.accent,
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: 1,
            }}
          >
            BETA
          </span>
        </div>
        <div
          style={{
            marginTop: 8,
            fontWeight: 400,
            fontSize: 18,
            letterSpacing: 0.3,
            color: COLORS.lightBG,
            opacity: 0.9,
          }}
        >
          Bridge the gap between your current skills and your dream job. Analyze. Upskill. Succeed.
        </div>
      </div>
    </header>
  );
}

/**
 * Skill Input form (allow add/remove/edit)
 */
function SkillInput({ userSkills, setUserSkills }) {
  const [newSkill, setNewSkill] = useState('');

  // PUBLIC_INTERFACE
  function handleAddSkill(e) {
    e.preventDefault();
    const skill = newSkill.trim();
    if (skill && !userSkills.includes(skill)) {
      setUserSkills([...userSkills, skill]);
    }
    setNewSkill('');
  }

  // PUBLIC_INTERFACE
  function handleRemoveSkill(skill) {
    setUserSkills(userSkills.filter(s => s !== skill));
  }

  return (
    <section>
      <h2 style={{
        color: COLORS.primary,
        marginBottom: 6,
        fontWeight: 700,
        fontSize: 21
      }}>Your Current Skills</h2>
      <form
        onSubmit={handleAddSkill}
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 14
        }}
      >
        <input
          type="text"
          placeholder="Add a skill, e.g. React"
          value={newSkill}
          onChange={e => setNewSkill(e.target.value)}
          style={{
            border: `1px solid ${COLORS.sectionBorder}`,
            borderRadius: 4,
            padding: '8px 11px',
            fontSize: 15,
            width: 0,
            flex: 1,
            outline: COLORS.primary,
            background: '#fff',
            color: COLORS.textDark,
          }}
        />
        <button
          type="submit"
          style={{
            background: COLORS.primary,
            color: 'white',
            border: 'none',
            borderRadius: 4,
            padding: '8px 20px',
            fontWeight: 600,
            fontSize: 15,
            cursor: 'pointer',
            transition: 'background 0.18s',
          }}
        >
          Add
        </button>
      </form>
      {/* List user skills with remove */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        minHeight: 32,
        marginBottom: 10,
      }}>
        {userSkills.map((skill, i) => (
          <span key={skill}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: COLORS.secondary,
              color: COLORS.textDark,
              borderRadius: 999,
              padding: '7px 15px',
              marginRight: 5,
              fontSize: 15,
              fontWeight: 500,
              border: `1px solid ${COLORS.primary}33`
            }}
          >
            {skill}
            <button
              onClick={() => handleRemoveSkill(skill)}
              aria-label={`Remove ${skill}`}
              style={{
                marginLeft: 8,
                border: 'none',
                background: 'transparent',
                color: COLORS.accent,
                fontSize: 18,
                cursor: 'pointer',
                fontWeight: 700,
                lineHeight: 0.7,
              }}
              type="button"
            >×</button>
          </span>
        ))}
        {userSkills.length === 0 && (
          <span style={{ color: "#888" }}>Add at least one skill to get started.</span>
        )}
      </div>
    </section>
  );
}

/**
 * Job Role selection dropdown
 */
function JobRoleSelector({ selectedJob, setSelectedJob }) {
  return (
    <section style={{ marginTop: 30 }}>
      <h2 style={{
        color: COLORS.primary,
        marginBottom: 6,
        fontWeight: 700,
        fontSize: 20
      }}>Target Job Role</h2>
      <select
        value={selectedJob || ''}
        onChange={(e) => setSelectedJob(e.target.value)}
        style={{
          background: "#fff",
          color: COLORS.textDark,
          border: `1px solid ${COLORS.sectionBorder}`,
          borderRadius: "4px",
          padding: "10px",
          fontSize: "16px",
          minWidth: 220,
        }}
      >
        <option value="" disabled>Select your target role</option>
        {JOB_ROLES.map(role => (
          <option key={role.label} value={role.label}>{role.label}</option>
        ))}
      </select>
    </section>
  );
}

/**
 * Gap Analysis display
 */
function GapAnalysis({ userSkills, selectedJob }) {
  if (!selectedJob) {
    return (
      <div style={{ fontSize: 19, color: COLORS.primary, paddingTop: 12 }}>
        <span role="img" aria-label="search">🔎</span> Select a job role to compare your skills.
      </div>
    );
  }
  const target = JOB_ROLES.find(j => j.label === selectedJob);
  const requiredSkills = target ? target.skills : [];
  const skillSet = new Set(userSkills.map(s => s.trim().toLowerCase()));

  const matched = requiredSkills.filter(
    skill => skillSet.has(skill.trim().toLowerCase())
  );
  const missing = requiredSkills.filter(
    skill => !skillSet.has(skill.trim().toLowerCase())
  );
  const extra = userSkills.filter(
    s => !requiredSkills.map(req => req.toLowerCase()).includes(s.trim().toLowerCase())
  );

  return (
    <section>
      <h2 style={{
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 10,
      }}>
        Gap Analysis Result
      </h2>
      <div style={{ marginBottom: 13 }}>
        <b>Matching Skills: </b>
        <span>
          {matched.length > 0
            ? matched.map(skill => (
              <span key={skill} style={{
                background: COLORS.primary,
                color: '#fff',
                padding: '6px 11px',
                borderRadius: 999,
                margin: '0 5px',
                fontSize: 15,
              }}>{skill}</span>
            ))
            : <span style={{ color: '#999' }}>None yet</span>
          }
        </span>
      </div>
      <div style={{ marginBottom: 13 }}>
        <b>Missing Skills: </b>
        <span>
          {missing.length > 0
            ? missing.map(skill => (
              <span key={skill} style={{
                background: COLORS.accent,
                color: '#fff',
                padding: '6px 11px',
                borderRadius: 999,
                margin: '0 5px',
                fontSize: 15,
              }}>{skill}</span>
            ))
            : <span style={{ color: '#16a34a', fontWeight: 500 }}>No major gaps! <span role="img" aria-label="tada">🎉</span></span>
          }
        </span>
      </div>
      {extra.length > 0 && (
        <div>
          <b>Additional skills you have:</b>{" "}
          {extra.map(skill => (
            <span key={skill} style={{
              background: COLORS.secondary,
              color: COLORS.textDark,
              padding: '5px 10px',
              borderRadius: 999,
              margin: '0 5px',
              fontSize: 14,
            }}>{skill}</span>
          ))}
        </div>
      )}
    </section>
  );
}

/**
 * Simple Chart using bars for skills coverage
 */
function SkillGapBarChart({ userSkills, selectedJob }) {
  if (!selectedJob) return null;
  const target = JOB_ROLES.find(j => j.label === selectedJob);
  const requiredSkills = target ? target.skills : [];

  const skillSet = new Set(userSkills.map(s => s.trim().toLowerCase()));

  return (
    <div style={{
      margin: '24px 0 0 0',
      background: COLORS.lightBG,
      border: `1px solid ${COLORS.sectionBorder}`,
      borderRadius: 8,
      padding: 18,
      boxShadow: '0 1px 12px 0 #5551'
    }}>
      <div style={{ fontWeight: 'bold', color: COLORS.primary, marginBottom: 9, fontSize: 17 }}>
        Visual Skill Coverage
      </div>
      <div>
        {requiredSkills.map(skill => {
          const hasSkill = skillSet.has(skill.trim().toLowerCase());
          return (
            <div key={skill} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 11,
            }}>
              <span style={{
                width: 110,
                fontSize: 15,
                fontWeight: 500,
                color: hasSkill ? COLORS.textLight : COLORS.accent,
                letterSpacing: 0.1
              }}>{skill}</span>
              <div style={{
                flex: 1,
                height: 17,
                background: COLORS.progressBG,
                borderRadius: 999,
                marginLeft: 14,
                position: "relative"
              }}>
                <div style={{
                  width: hasSkill ? "100%" : "0%",
                  background: hasSkill ? COLORS.primary : COLORS.accent,
                  height: "100%",
                  borderRadius: 999,
                  transition: 'width 0.33s',
                }}></div>
              </div>
              <span style={{
                marginLeft:13,
                fontSize: 17
              }}>
                {hasSkill ? "✅" : "❌"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Personalized Recommendations
 */
function Recommendations({ userSkills, selectedJob }) {
  if (!selectedJob) return null;
  const target = JOB_ROLES.find(j => j.label === selectedJob);
  const requiredSkills = target ? target.skills : [];
  const skillSet = new Set(userSkills.map(s => s.trim().toLowerCase()));

  const missing = requiredSkills.filter(
    skill => !skillSet.has(skill.trim().toLowerCase())
  );
  if (missing.length === 0)
    return (
      <div style={{
        background: COLORS.secondary,
        borderRadius: 8,
        marginTop: 20,
        padding: '18px 20px',
        color: COLORS.textDark,
        fontWeight: 500,
        fontSize: 17,
        boxShadow: '0 1px 10px 0 #0001'
      }}>
        Congratulations! You're ready for this role. No further recommendations.<span role="img" aria-label="trophy"> 🏆</span>
      </div>
    );

  return (
    <div style={{
      marginTop: 22,
      background: COLORS.lightBG,
      border: `1px dashed ${COLORS.accent}`,
      borderRadius: 10,
      padding: '18px 22px 15px 22px',
      boxShadow: '0 1px 10px 0 #0002'
    }}>
      <div style={{ color: COLORS.accent, fontWeight: 700, fontSize: 17, marginBottom: 7 }}>
        Personalized Recommendations
      </div>
      <div style={{ marginBottom: 8, fontSize: 15 }}>
        We've found resources to help you learn these skills:
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {missing.map(s => (
          <li key={s} style={{
            marginBottom: 9
          }}>
            <span style={{
              background: COLORS.accent,
              color: '#fff',
              borderRadius: 999,
              padding: '4px 12px',
              fontWeight: 500,
              fontSize: 15,
              marginRight: 8,
              display: 'inline-block'
            }}>{s}</span>

            <span>
              {(RECOMMENDATIONS[s] && RECOMMENDATIONS[s].map(link => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    color: COLORS.primary,
                    background: COLORS.secondary,
                    borderRadius: 5,
                    padding: '4px 10px',
                    textDecoration: 'none',
                    marginLeft: 7,
                    fontWeight: 500,
                    fontSize: 13,
                    transition: 'color 0.2s'
                  }}
                >{link.text}</a>
              )))
                || <span style={{ color: '#888', fontSize: 13 }}>Try searching "{s} tutorials" online.</span>
              }
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Progress Tracker for skill gap closure
 */
function ProgressTracker({ userSkills, selectedJob }) {
  if (!selectedJob) return null;

  const target = JOB_ROLES.find(j => j.label === selectedJob);
  const requiredSkills = target ? target.skills : [];
  const skillSet = new Set(userSkills.map(s => s.trim().toLowerCase()));

  const matched = requiredSkills.filter(skill =>
    skillSet.has(skill.trim().toLowerCase())
  );
  const percent = Math.round(
    matched.length / (requiredSkills.length || 1) * 100
  );

  return (
    <div style={{
      margin: '28px 0 0 0',
      padding: 0
    }}>
      <div style={{
        fontWeight: 'bold',
        color: COLORS.primary,
        fontSize: 16,
        marginBottom: 8
      }}>Your Progress</div>
      <div style={{
        background: COLORS.progressBG,
        borderRadius: 999,
        height: 22,
        width: '100%',
        overflow: 'hidden',
        marginBottom: 7
      }}>
        <div style={{
          width: `${percent}%`,
          background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.primary})`,
          height: '100%',
          borderRadius: 999,
          textAlign: "right",
          transition: "width 0.6s cubic-bezier(0.23,1,0.32,1)"
        }}>
          <span style={{
            padding: '0 12px',
            color: '#fff',
            fontWeight: 600,
            fontSize: 15,
            lineHeight: '22px',
          }}>{percent}%</span>
        </div>
      </div>
      <div style={{
        fontSize: 13,
        color: '#555'
      }}>
        {percent < 100
          ? <>You're just <b>{requiredSkills.length - matched.length}</b> skill(s) away from your goal!</>
          : <>All skills matched. Go land that job!</>
        }
      </div>
    </div>
  );
}


/**
 * Main Container
 */
function App() {
  // Skill state
  const [userSkills, setUserSkills] = useState([]);
  // Job selection state
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: COLORS.lightBG, color: COLORS.textDark, fontFamily: 'Inter, Arial, sans-serif' }}>
      <Header />
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        maxWidth: 1150,
        margin: '0 auto',
        padding: '48px 24px 40px 24px'
      }}>
        {/* Main content grid */}
        <div style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          gap: 44,
        }}>
          {/* Left: Inputs */}
          <div style={{
            flex: '0 0 335px',
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 20px 0 #0002',
            padding: '36px 23px 30px 23px',
            minWidth: 280,
            minHeight: 320,
            border: `1.5px solid ${COLORS.sectionBorder}`
          }}>
            <SkillInput userSkills={userSkills} setUserSkills={setUserSkills} />
            <JobRoleSelector selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            <div style={{ marginTop: 34, textAlign: "center" }}>
              <button
                className="btn"
                style={{
                  background: COLORS.accent,
                  fontWeight: 600,
                  fontSize: 16,
                  padding: '10px 25px',
                  borderRadius: 6,
                  marginTop: 16,
                  transition: "background 0.16s",
                  boxShadow: "0 1px 4px 0 #0001"
                }}
                onClick={() => {
                  if (!selectedJob) alert("Please select a job!");
                  else if (!userSkills.length) alert("Please add some skills first!");
                  // nothing else (purely illustrative, since everything live-updates)
                }}
              >Analyze Skill Gap</button>
            </div>
          </div>
          {/* Right: Analysis/results */}
          <div style={{
            flex: 1,
            minWidth: 320,
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 20px 0 #0001',
            padding: '36px 27px 32px 27px',
            border: `1.5px solid ${COLORS.sectionBorder}`,
            minHeight: 320
          }}>
            <GapAnalysis userSkills={userSkills} selectedJob={selectedJob} />
            <SkillGapBarChart userSkills={userSkills} selectedJob={selectedJob} />
            <ProgressTracker userSkills={userSkills} selectedJob={selectedJob} />
            <Recommendations userSkills={userSkills} selectedJob={selectedJob} />
            {/* CTA if nothing entered */}
            {!selectedJob &&
              <div style={{
                margin: '38px 0 0 0',
                color: COLORS.textLight,
                background: COLORS.progressBG,
                borderRadius: 8,
                padding: '14px 12px',
                fontSize: 15,
                textAlign: 'center',
              }}>
                Start by entering your skills and a target job role.<br />
                <span style={{ color: COLORS.accent }}>Skill gap analysis with recommendations will appear here!</span>
              </div>
            }
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        background: COLORS.lightBG,
        color: COLORS.primary,
        padding: '20px 8px',
        fontWeight: 500,
        fontSize: 15,
        borderTop: `1.5px solid ${COLORS.sectionBorder}`,
        marginTop: 40,
        letterSpacing: 1
      }}>
        Powered by <span style={{ color: COLORS.accent, fontWeight: 700 }}>SkillBridge</span> | Your upskilling companion 🚀
      </footer>
    </div>
  );
}

export default App;
