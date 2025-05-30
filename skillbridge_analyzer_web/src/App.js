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
function StepIndicator({ currentStep, steps }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 38,
      gap: 0,
    }}>
      {steps.map((step, idx) => (
        <React.Fragment key={step.label}>
          <div style={{
            background: currentStep === idx
              ? `linear-gradient(90deg, ${COLORS.primary} 80%, ${COLORS.accent})`
              : `linear-gradient(120deg, ${COLORS.secondary}, #fff 60%)`,
            color: currentStep === idx ? '#fff' : COLORS.primary,
            border: currentStep === idx ? `3.5px solid ${COLORS.accent}` : `1.5px solid ${COLORS.primary}33`,
            borderRadius: 99,
            width: 44,
            minWidth: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 22,
            marginRight: 0,
            boxShadow: currentStep === idx ? '0 2px 10px #F76B8A55' : '0 0px 0px #0000',
            transition: 'all 0.2s'
          }}>{idx + 1}</div>
          {idx < steps.length - 1 && (
            <div style={{
              flex: 1,
              height: 0,
              borderTop: currentStep > idx
                ? `3px solid ${COLORS.primary}`
                : `3px dotted ${COLORS.accent}`,
              margin: '0 7px 0 7px',
              minWidth: 25,
              maxWidth: 90,
              borderRadius: 2
            }}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function StepTitle({ icon, color, text }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 24
    }}>
      <span style={{
        padding: "8px 13px",
        fontSize: 27,
        borderRadius: "14px",
        background: color,
        color: "#fff",
        boxShadow: '0 2px 10px 0 #3332'
      }}>{icon}</span>
      <span style={{
        fontWeight: 700,
        fontSize: 23,
        color,
        letterSpacing: "1.5px",
        textShadow: `0 1px 10px ${color}26`
      }}>{text}</span>
    </div>
  );
}

/**
 * Config for steps
 */
const MAIN_STEPS = [
  {
    label: "Skill Assessment",
    render: ({ userSkills, setUserSkills }) => (
      <>
        <StepTitle icon="🎯" color={COLORS.primary} text="Skill Assessment" />
        <SkillInput userSkills={userSkills} setUserSkills={setUserSkills} />
        <div className="step-helper" style={{
          background: COLORS.secondary,
          color: COLORS.primary,
          borderRadius: 9,
          fontWeight: 500,
          fontSize: 15,
          marginTop: 18,
          padding: '8px 16px'
        }}>
          List your current skills (add at least one).
        </div>
      </>
    )
  },
  {
    label: "Job Role Selection",
    render: ({ selectedJob, setSelectedJob }) => (
      <>
        <StepTitle icon="💼" color={COLORS.accent} text="Job Role Selection" />
        <JobRoleSelector selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
        <div className="step-helper" style={{
          background: COLORS.secondary,
          color: COLORS.primary,
          borderRadius: 9,
          fontWeight: 500,
          fontSize: 15,
          marginTop: 24,
          padding: '9px 16px'
        }}>
          Choose the job role you’re targeting!
        </div>
      </>
    )
  },
  {
    label: "Gap Analysis",
    render: ({ userSkills, selectedJob }) => (
      <>
        <StepTitle icon="🔍" color={COLORS.primary} text="Skill Gap Analysis" />
        <GapAnalysis userSkills={userSkills} selectedJob={selectedJob} />
        <SkillGapBarChart userSkills={userSkills} selectedJob={selectedJob} />
      </>
    )
  },
  {
    label: "Recommendations",
    render: ({ userSkills, selectedJob }) => (
      <>
        <StepTitle icon="✨" color={COLORS.accent} text="Recommendations" />
        <Recommendations userSkills={userSkills} selectedJob={selectedJob} />
      </>
    )
  },
  {
    label: "Progress Tracking",
    render: ({ userSkills, selectedJob }) => (
      <>
        <StepTitle icon="🚀" color={COLORS.secondary} text="Progress Tracking" />
        <ProgressTracker userSkills={userSkills} selectedJob={selectedJob} />
        <div className="step-helper" style={{
          background: COLORS.primary,
          color: "#fff",
          borderRadius: 9,
          fontWeight: 500,
          fontSize: 15,
          marginTop: 26,
          padding: '12px 16px'
        }}>
          Track your progress as you close the gap!
        </div>
      </>
    )
  }
];

function App() {
  // Skill state
  const [userSkills, setUserSkills] = useState([]);
  // Job selection state
  const [selectedJob, setSelectedJob] = useState(null);

  // Stepper state
  const [stepIdx, setStepIdx] = useState(0);

  // Rules for advancing steps
  function canAdvance(currentStep) {
    if (currentStep === 0) return userSkills.length > 0;
    if (currentStep === 1) return !!selectedJob;
    // Gap, recs, progress - permit advancing regardless (could optionally require a job/skills)
    return true;
  }

  function handleNext() {
    if (stepIdx < MAIN_STEPS.length - 1) {
      setStepIdx((prev) => prev + 1);
    }
  }
  function handleBack() {
    if (stepIdx > 0) setStepIdx((prev) => prev - 1);
  }

  // Render props for all
  const stepProps = {
    userSkills, setUserSkills,
    selectedJob, setSelectedJob,
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: COLORS.lightBG,
      color: COLORS.textDark,
      fontFamily: 'Inter, Arial, sans-serif',
      position: 'relative'
    }}>
      <Header />
      <main style={{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxWidth: 760,
        margin: '0 auto',
        padding: '38px 8px 36px 8px'
      }}>
        {/* STEP PROGRESS INDICATOR */}
        <StepIndicator currentStep={stepIdx} steps={MAIN_STEPS} />

        {/* Main vibrant card for current step */}
        <div style={{
          width: "100%",
          maxWidth: 580,
          background: '#fff',
          borderRadius: 17,
          boxShadow: '0 3px 30px 0 #4F8A8B18, 0 2px 10px 0 #F76B8A1A',
          padding: '42px 32px 38px 32px',
          minHeight: 318,
          border: `2.5px solid ${COLORS.secondary}`,
          marginBottom: 18,
        }}>
          {MAIN_STEPS[stepIdx].render(stepProps)}

          {/* Gap error displays for stepper navigation integrity */}
          {stepIdx === 0 && userSkills.length === 0 && (
            <div style={{ color: COLORS.accent, marginTop: 22, fontWeight: 600 }}>
              Please add at least one skill to proceed.
            </div>
          )}
          {stepIdx === 1 && !selectedJob && (
            <div style={{ color: COLORS.accent, marginTop: 22, fontWeight: 600 }}>
              Please select a target job role to proceed.
            </div>
          )}

          {/* Navigation buttons */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 38
          }}>
            <button
              className="btn btn-large"
              style={{
                background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})`,
                color: "#fff",
                fontWeight: 700,
                fontSize: 17,
                padding: "11px 30px",
                borderRadius: 10,
                border: "none",
                opacity: stepIdx === 0 ? 0.6 : 1,
                pointerEvents: stepIdx === 0 ? 'none' : 'auto',
                boxShadow: '0 1px 6px 0 #4F8A8B33',
                transition: 'all 0.2s'
              }}
              onClick={handleBack}
            >
              ← Back
            </button>
            {stepIdx < MAIN_STEPS.length - 1 ? (
              <button
                className="btn btn-large"
                style={{
                  background: canAdvance(stepIdx)
                    ? `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.primary})`
                    : `${COLORS.sectionBorder}`,
                  color: canAdvance(stepIdx) ? "#fff" : "#bbb",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "11px 34px",
                  borderRadius: 10,
                  border: "none",
                  opacity: canAdvance(stepIdx) ? 1 : 0.5,
                  cursor: canAdvance(stepIdx) ? "pointer" : "not-allowed",
                  boxShadow: canAdvance(stepIdx) ? '0 1px 8px 0 #F76B8A44' : 'none',
                  marginLeft: 14,
                  transition: 'all 0.18s'
                }}
                disabled={!canAdvance(stepIdx)}
                onClick={handleNext}
              >
                Next →
              </button>
            ) : (
              <button
                className="btn btn-large"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.secondary}, ${COLORS.primary})`,
                  color: COLORS.accent,
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "11px 34px",
                  borderRadius: 10,
                  border: "none",
                  boxShadow: '0 2px 8px 0 #F76B8A33',
                  marginLeft: 14,
                  transition: 'all 0.15s',
                  animation: "winner 0.9s infinite alternate"
                }}
                disabled
              >
                🎉 Done!
              </button>
            )}
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
      {/* Vibrant confetti styles for finish */}
      <style>{`
        @keyframes winner {
          0% { box-shadow: 0 2px 10px #FBD46D77; transform: scale(1);}
          100% { box-shadow: 0 2px 18px #F76B8A99; transform: scale(1.06);}
        }
      `}
      </style>
    </div>
  );
}

export default App;
