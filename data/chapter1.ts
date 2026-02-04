import { Chapter } from '../types';

export const chapter1: Chapter = {
  id: 1,
  slug: 'management-sporting-events',
  name: 'Management of Sporting Events',
  description: 'Comprehensive study of planning, committee structures, tournament formats, and specific sports programmes.',
  topics: [
    {
      id: 'planning-core',
      title: 'Planning in Sports',
      description: 'The foundation of successful sports management.',
      content: [
        'Definition: Planning is the process of deciding in advance what is to be done, Who is to do it, How it is to be done and When it is to be done. (Page 15)',
        'Planning is an intellectual activity involving selection of the most viable processes from among alternatives.',
        'It is the foremost function in sports as it gives a view of future course of action.',
        'Strategic Planning: Long-term goals and policies (1-5 years).',
        'Tactical Planning: Medium-term targets and strategies (3-12 months).',
        'Operative Planning: Short-term daily execution and adjustments (1 day-3 months).'
      ],
      visualizations: [
        {
          id: 'v1',
          title: '6 Key Objectives of Planning (Page 15-16)',
          type: 'grid',
          data: [
            { label: 'Goal Oriented', desc: 'Gives direction and vision to events.' },
            { label: 'Policy Development', desc: 'Sets boundaries for overall conduct.' },
            { label: 'Economy', desc: 'Cost reduction through coordination.' },
            { label: 'Course of Action', desc: 'Fixes procedures and defining steps.' },
            { label: 'Rules & Regs', desc: 'Prepared and published well in advance.' },
            { label: 'Strategy', desc: 'Way to successfully achieve organizational goals.' }
          ]
        },
        {
          id: 'v1b',
          title: 'Planning Levels Hierarchy (Page 17)',
          type: 'table',
          data: {
            headers: ['Planning Level', 'Duration', 'Scope', 'Example'],
            rows: [
              ['Strategic', '1-5 years', 'Organization-wide goals', 'Sports policy for school'],
              ['Tactical', '3-12 months', 'Department/team goals', 'Annual tournament calendar'],
              ['Operative', '1 day-3 months', 'Daily execution', 'Daily training schedule']
            ]
          }
        }
      ]
    },
    {
      id: 'committees-detailed',
      title: 'Formation of Committees',
      description: 'Systematic and smooth conduct through specialized groups.',
      content: [
        'To organize any sports event, various committees are formed for systematic conduct.',
        'Organizing Committee Hierarchy: Top Level (Administrative Director/Principal), Middle Level (Convener/Dept Heads), Lower Level (Teachers/Officers).',
        'Administrative Director handles overall management, while the Executive Committee plans and directs.',
        'Technical Committee covers equipment and officials. Logistics handles transport and ceremonies.',
        'Marketing focuses on publicity and sponsorships. Finance provides financial oversight.',
        'Committee Coordination: All committees report to Executive Committee (Governing Body).',
        'Roles are distinct but interdependent for successful event execution.'
      ],
      visualizations: [
        {
          id: 'v1c',
          title: 'Committee Hierarchy (3-Tier Structure)',
          type: 'table',
          data: {
            headers: ['Level', 'Position', 'Responsibilities'],
            rows: [
              ['Top Level', 'Administrative Director / Principal', 'Overall management and final authority'],
              ['Middle Level', 'Convener / Dept Heads / Executive Committee', 'Planning, coordination, and direction'],
              ['Lower Level', 'Teachers / Finance Officers / Committee Members', 'Execution of specific functions']
            ]
          }
        },
        {
          id: 'v2',
          title: 'Technical Committee Phases (Page 19)',
          type: 'table',
          data: {
            headers: ['Stage', 'Primary Duty'],
            rows: [
              ['Pre-Event', 'Requisition for equipment, invitation to officials, fixture preparation.'],
              ['During-Event', 'Conducting matches, presence of jury, score sheets, refereeing.'],
              ['Post-Event', 'Cleaning and layout of fields, storing equipment, final reports.']
            ]
          }
        },
        {
          id: 'v3',
          title: 'Logistics Committee Phases (Page 19-20)',
          type: 'table',
          data: {
            headers: ['Stage', 'Primary Duty'],
            rows: [
              ['Pre-Event', 'Arrangement of chairs, tables, stationery, boarding, lodging.'],
              ['During-Event', 'Opening/Closing ceremonies, refreshments, medical aid, decoration.'],
              ['Post-Event', 'Supervising cleaning of venue, removing equipment.']
            ]
          }
        },
        {
          id: 'v4',
          title: 'Finance Committee Phases (Page 20)',
          type: 'table',
          data: {
            headers: ['Stage', 'Primary Duty'],
            rows: [
              ['Pre-Event', 'Preparing the budget, funds for equipment, sponsorship acquisition.'],
              ['During-Event', 'Check on outflow and inflow of finances, payments to vendors.'],
              ['Post-Event', 'Examination of all records for bill settlements and final audit.']
            ]
          }
        },
        {
          id: 'v5',
          title: 'Marketing Committee Phases (Page 21)',
          type: 'table',
          data: {
            headers: ['Stage', 'Primary Duty'],
            rows: [
              ['Pre-Event', 'Strategy for sponsorships and publicity, advertising plan.'],
              ['During-Event', 'Press releases, working with media, live coverage coordination.'],
              ['Post-Event', 'Final press release, event report, thank you notes to sponsors.']
            ]
          }
        }
      ]
    },
    {
      id: 'fixtures-logic',
      title: 'Tournament Formats & Fixtures',
      description: 'Arranging teams in systematic order for competitive activity.',
      content: [
        'Fixture: The programme listing which team plays whom, when, and where.',
        'Knock-Out: Player/team continues until defeated. Formula: N - 1 matches. Saves time and money but strong teams may lose early.',
        'Single League (Round Robin): All teams play every other team once. Formula: N(N-1)/2. Provides true winner but expensive.',
        'Double League: All teams play every other team TWICE (home and away). Formula: N(N-1). Most fair and comprehensive.',
        'Combination: Combines formats (e.g., League groups then Knockout finals) for large numbers or scattered venues.',
        'Bye: Privilege to advance to next round without playing first round.',
        'Seeding: Strategic placement of strong teams to prevent early meetings.',
        'Upper Half (UH) & Lower Half (LH): Bracket divisions for systematic placement.'
      ],
      visualizations: [
        {
          id: 'v6',
          title: 'Tournament Format Comparison',
          type: 'table',
          data: {
            headers: ['Format', 'Matches Formula', 'Advantages', 'Disadvantages'],
            rows: [
              ['Knock-out', 'N - 1', 'Fast, economical, exciting', 'Good teams may lose early'],
              ['Single League', 'N(N-1)/2', 'True winner, fair ranking', 'Expensive, time-consuming'],
              ['Double League', 'N(N-1)', 'Fairest result, home/away', 'Most expensive, very time-consuming'],
              ['Combination', 'Varies', 'Balanced, handles large groups', 'Complex to manage']
            ]
          }
        },
        {
          id: 'v6b',
          title: 'Knock-Out Calculations Master List (Page 26-27)',
          type: 'table',
          data: {
            headers: ['Parameter', 'Even N', 'Odd N'],
            rows: [
              ['Total Matches', 'N - 1', 'N - 1'],
              ['Teams in UH', 'N / 2', '(N + 1) / 2'],
              ['Teams in LH', 'N / 2', '(N - 1) / 2'],
              ['Total Byes (Nb)', 'Next 2ⁿ - N', 'Next 2ⁿ - N'],
              ['Byes in UH', 'Nb / 2', '(Nb - 1) / 2'],
              ['Byes in LH', 'Nb / 2', '(Nb + 1) / 2']
            ]
          }
        },
        {
          id: 'v6c',
          title: 'Worked Example: Bye Calculation (13 Teams) ⚠️ INVERSION TRAP',
          type: 'table',
          data: {
            headers: ['Step', 'Calculation', 'Result', 'Note'],
            rows: [
              ['1. Find Next 2ⁿ', 'Next power ≥ 13 is 2⁴', '16', 'Always round UP'],
              ['2. Total Byes', '16 - 13 = 3', '3 Byes', 'Nb = Byes needed'],
              ['3. UH Teams', '(13+1)/2', '7 Teams', 'UH gets MORE'],
              ['4. LH Teams', '(13-1)/2', '6 Teams', 'LH gets FEWER'],
              ['5. Byes in UH', '(3-1)/2 = 1', '1 Bye', 'UH gets FEWER (TRAP!)'],
              ['6. Byes in LH', '(3+1)/2 = 2', '2 Byes', 'LH gets MORE (TRAP!)']
            ]
          }
        },
        {
          id: 'v7',
          title: 'League Methods & Rounds',
          type: 'table',
          data: {
            headers: ['Method', 'Process', 'Formula', 'Rounds (6 teams)'],
            rows: [
              ['Cyclic', 'One fixed, others rotate clockwise', 'N(N-1)/2', 'N-1 = 5 rounds'],
              ['Staircase', 'Highest plays all, moves down', 'N(N-1)/2', 'N-1 = 5 rounds'],
              ['League (Even N)', 'All play all, even teams', 'N(N-1)/2', 'N-1 = 5 rounds'],
              ['League (Odd N)', 'All play all, one bye/round', 'N(N-1)/2', 'N = 5 rounds (with bye)']
            ]
          }
        },
        {
          id: 'v8',
          title: 'Points System in League',
          type: 'table',
          data: {
            headers: ['Result', 'Standard System', 'Alternate System'],
            rows: [
              ['Win', '2 points', '5 points'],
              ['Draw', '1 point', '3 points'],
              ['Loss', '0 points', '0 points']
            ]
          }
        },
        {
          id: 'v8b',
          title: 'Points Calculation Example (6 Teams Single League)',
          type: 'table',
          data: {
            headers: ['Team', 'Wins', 'Draws', 'Losses', 'Points', 'Rank'],
            rows: [
              ['A', '3', '1', '1', '(3×2)+(1×1)=7', '1st'],
              ['B', '3', '0', '2', '(3×2)+(0×1)=6', '2nd'],
              ['C', '2', '2', '1', '(2×2)+(2×1)=6', '2nd*'],
              ['D', '2', '1', '2', '(2×2)+(1×1)=5', '4th'],
              ['E', '1', '1', '3', '(1×2)+(1×1)=3', '5th'],
              ['F', '0', '1', '4', '(0×2)+(1×1)=1', '6th']
            ]
          }
        },
        {
          id: 'v9',
          title: 'Bye Allotment Order (Page 27)',
          type: 'flow',
          data: [
            '1st: Last of Lower Half (LH)',
            '2nd: First of Upper Half (UH)',
            '3rd: Last of Upper Half (UH)',
            '4th: First of Lower Half (LH)',
            '✓ This rotation ensures FAIR distribution'
          ]
        },
        {
          id: 'v9b',
          title: 'Cyclic Method Example (5 Teams)',
          type: 'table',
          data: {
            headers: ['Round', 'Bye', 'Match 1', 'Match 2'],
            rows: [
              ['Round 1', 'E', 'A vs B', 'C vs D'],
              ['Round 2', 'A', 'B vs C', 'D vs E'],
              ['Round 3', 'B', 'C vs D', 'E vs A'],
              ['Round 4', 'C', 'D vs E', 'A vs B'],
              ['Round 5', 'D', 'E vs A', 'B vs C']
            ]
          }
        }
      ]
    },
    {
      id: 'double-league-tournament',
      title: 'Double League Tournament',
      description: 'Each team plays every other team twice (home and away).',
      content: [
        'Double League: Tournament format where all teams play every other team TWICE.',
        'Each team plays one match at home and one match away against every opponent.',
        'Provides the FAIREST and most COMPREHENSIVE result of all formats.',
        'Formula for total matches: N(N-1) where N = number of teams.',
        'Example: 4 teams = 4(4-1) = 12 matches total.',
        'Advantages: Fairest result, home advantage analyzed, most reliable ranking.',
        'Disadvantages: Most expensive format, very time-consuming.',
        'Used in: National championships, professional leagues, major tournaments.'
      ],
      visualizations: [
        {
          id: 'v10',
          title: 'Double League vs Other Formats (6 Teams)',
          type: 'table',
          data: {
            headers: ['Format', 'Formula', 'Total Matches', 'Cost', 'Fairness'],
            rows: [
              ['Knock-out', 'N - 1', '5 matches', 'Low', 'Low'],
              ['Single League', 'N(N-1)/2', '15 matches', 'Medium', 'High'],
              ['Double League', 'N(N-1)', '30 matches', 'High', 'Highest']
            ]
          }
        },
        {
          id: 'v10b',
          title: 'Double League Sample (4 Teams)',
          type: 'table',
          data: {
            headers: ['Round', 'Home', 'Away'],
            rows: [
              ['1', 'A vs B', 'C vs D'],
              ['2', 'B vs A', 'D vs C'],
              ['3', 'A vs C', 'B vs D'],
              ['4', 'C vs A', 'D vs B'],
              ['5', 'A vs D', 'B vs C'],
              ['6', 'D vs A', 'C vs B']
            ]
          }
        }
      ]
    },
    {
      id: 'combination-tournament',
      title: 'Combination Tournament',
      description: 'Hybrid format combining League and Knock-out.',
      content: [
        'Combination: Merges two tournament formats to optimize for specific situations.',
        'Common format: Group League stage → Top teams advance to Knockout finals.',
        'Purpose: Handle large numbers, scattered venues, or balanced competition needs.',
        'Advantages: Fair group play, exciting finals, manageable groups.',
        'Disadvantages: Complex scheduling, longer duration, multiple playoff levels.',
        'Used in: Cricket World Cup, Football World Cup, Multi-venue tournaments.',
        'Example: 16 teams → 2 groups of 8 (League) → 4 qualifiers per group → Knockout finals.'
      ],
      visualizations: [
        {
          id: 'v11',
          title: 'Combination Tournament Structure',
          type: 'flow',
          data: [
            'Group Stage (League Format):',
            '  Pool A: 4 teams play all × all',
            '  Pool B: 4 teams play all × all',
            'Group Stage Results: Top 2 qualify from each',
            'Knockout Stage: Semifinals & Finals'
          ]
        },
        {
          id: 'v12',
          title: 'When to Use Each Format',
          type: 'table',
          data: {
            headers: ['Situation', 'Best Format', 'Reason'],
            rows: [
              ['Few teams (2-5)', 'Single League', 'All play all ensures fairness'],
              ['Many teams (8+)', 'Combination', 'Groups + knockout for efficiency'],
              ['Time-limited', 'Knock-out', 'Fast elimination, minimal matches'],
              ['High stakes', 'Double League', 'Home-away ensures fairness'],
              ['Varied skill levels', 'League First', 'Seeding before knockout']
            ]
          }
        }
      ]
    },
    {
      id: 'seeding-management',
      title: 'Seeding & Team Placement',
      description: 'Strategic placement for fair and balanced competition.',
      content: [
        'Seeding: Placing strong teams strategically to prevent early meetings.',
        'Purpose: Ensure strong teams meet only in later rounds.',
        'Method: Strong teams placed opposite (one in UH, one in LH).',
        'Example: Team A (Rank 1) in UH-1, Team B (Rank 2) in LH-1.',
        'Benefits: Quality finals, prevents upsets of top teams early.',
        'IMPORTANT: Seeding is FIXED at tournament start and does NOT change.'
      ],
      visualizations: [
        {
          id: 'v13',
          title: 'Seeding Strategy (8 Teams)',
          type: 'table',
          data: {
            headers: ['Rank', 'Seed', 'Position', 'Earliest Final Meeting'],
            rows: [
              ['1st (Best)', 'Seed 1', 'UH-1', 'Final vs Seed 2'],
              ['2nd', 'Seed 2', 'LH-1', 'Final vs Seed 1'],
              ['3rd', 'Seed 3', 'UH-2', 'Semifinal vs Seed 4'],
              ['4th', 'Seed 4', 'LH-2', 'Semifinal vs Seed 3']
            ]
          }
        }
      ]
    },
    {
      id: 'intra-extra-logic',
      title: 'Intramural & Extramural',
      description: 'Competitions within and beyond institution walls.',
      content: [
        'Intramural: Sports competitions "within the walls" of single institution (e.g., Inter-house).',
        'Focus: Mass participation, recreation, foundational skills, talent identification.',
        'Objective: Participation for all, all-round development, building interest.',
        'Extramural: Sports competitions "beyond walls" between institutions (e.g., Zonal, National).',
        'Focus: High performance, career building, inter-institutional competition.',
        'Objective: Success at highest level, lifting performance standards.',
        'Pipeline: Intramural (talent pool) → Selection → Training → Extramural (elite representation).',
        'Significance: Intramurals provide opportunity to identify and select Extramural players.'
      ],
      visualizations: [
        {
          id: 'v14',
          title: 'Intramural vs Extramural Comparison',
          type: 'table',
          data: {
            headers: ['Feature', 'Intramural', 'Extramural'],
            rows: [
              ['Location', 'Within institution walls', 'Between institutions (beyond walls)'],
              ['Participation', 'Mass (all students)', 'Selected (best performers)'],
              ['Goal', 'All-round development', 'Success at highest level'],
              ['Experience', 'Foundational skills', 'Inter-institutional exposure'],
              ['Example', 'Inter-house sports', 'Zonal/National tournament'],
              ['Type', 'Recreational', 'Competitive/Professional']
            ]
          }
        },
        {
          id: 'v15',
          title: 'Pipeline Model: Talent Identification',
          type: 'flow',
          data: [
            'Intramural Participation (All students)',
            'Coaches observe performance in competitive setting',
            'Talent Identification & Assessment',
            'Selection to School Team (Best performers)',
            'Training & Development',
            'Selection to Extramural (Inter-institutional)',
            'Regional/National Representation'
          ]
        }
      ]
    },
    {
      id: 'specific-programs-detailed',
      title: 'Specific Sports Programmes',
      description: 'Programmes for specific health or social purposes.',
      content: [
        'Specific programmes spread awareness and promote fitness among masses.',
        'Sports Day: Annual event to showcase students\' skills and organizational strength. (Page 38)',
        'Health Run: Conducted to improve health standards, no age bar or professional requirement.',
        'Run for Fun: Friendly races (sack race, lemon & spoon) spreading fitness message and joy.',
        'Run for Specific Cause: Awareness for social issues (cancer, cleanliness, environment) or charity.',
        'Run for Unity: Promotes integrity, brotherhood, and togetherness among people.',
        'Each requires planning with proper committees and logistics.'
      ],
      visualizations: [
        {
          id: 'v16',
          title: '5 Types of Specific Sports Programmes',
          type: 'grid',
          data: [
            { label: 'Sports Day', desc: 'Annual showcase of student abilities.' },
            { label: 'Health Run', desc: 'Improve health & awareness.' },
            { label: 'Run for Fun', desc: 'Fitness & joy for all ages.' },
            { label: 'Run for Cause', desc: 'Social issues & charity.' },
            { label: 'Run for Unity', desc: 'Brotherhood & national spirit.' }
          ]
        },
        {
          id: 'v17',
          title: 'Sports Day Objectives',
          type: 'flow',
          data: [
            'Annual Showcase of Talents',
            'Community Participation & Engagement',
            'Talent Assessment & Recognition',
            'Institutional Spirit & Pride'
          ]
        },
        {
          id: 'v18',
          title: 'Specific Programme Planning',
          type: 'table',
          data: {
            headers: ['Programme', 'Goal', 'Target Audience', 'Frequency'],
            rows: [
              ['Sports Day', 'Showcase abilities', 'Students & community', 'Annual'],
              ['Health Run', 'Improve standards', 'General public', 'Annual'],
              ['Run for Fun', 'Promote fitness', 'All age groups', 'Quarterly'],
              ['Run for Cause', 'Social awareness', 'Targeted group', 'Event-based'],
              ['Run for Unity', 'Brotherhood', 'Community', 'Annual']
            ]
          }
        }
      ]
    }
  ],
  flashcards: [
    // Definition Category (10)
    { id: 'f1', category: 'Definition', question: 'Define Planning in Sports.', answer: 'Process of deciding in advance what, who, how, and when an event is to be done.' },
    { id: 'f2', category: 'Definition', question: 'What is Fixture?', answer: 'Programme listing which team plays whom, when, and where.' },
    { id: 'f3', category: 'Definition', question: 'Define Bye.', answer: 'Privilege to advance to next round without playing in first round.' },
    { id: 'f4', category: 'Definition', question: 'What is Seeding?', answer: 'Strategic placement of strong teams to prevent early meetings.' },
    { id: 'f5', category: 'Definition', question: 'Define Intramural.', answer: 'Sports competitions within institution walls with mass participation.' },
    { id: 'f6', category: 'Definition', question: 'Define Extramural.', answer: 'Sports competitions between institutions focusing on high performance.' },
    { id: 'f7', category: 'Definition', question: 'What is Double League?', answer: 'Tournament where all teams play every opponent TWICE (home & away).' },
    { id: 'f8', category: 'Definition', question: 'What is Combination tournament?', answer: 'Hybrid format combining League groups and Knockout finals.' },
    { id: 'f9', category: 'Definition', question: 'What is Upper Half (UH)?', answer: 'Upper portion of bracket where teams placed systematically.' },
    { id: 'f10', category: 'Definition', question: 'What is Lower Half (LH)?', answer: 'Lower portion of bracket where teams placed systematically.' },

    // Theory/Logic Category (10)
    { id: 'f11', category: 'Theory', question: 'Why is Planning the foremost function?', answer: 'It provides direction, vision, and blueprint for all future actions.' },
    { id: 'f12', category: 'Theory', question: 'Why form committees?', answer: 'To divide responsibilities and ensure systematic, smooth event conduct.' },
    { id: 'f13', category: 'Theory', question: 'Why allocate byes?', answer: 'To ensure bracket has power of 2 teams for balanced competition.' },
    { id: 'f14', category: 'Theory', question: 'How does intramural help extramural?', answer: 'Provides talent identification and selection of best performers.' },
    { id: 'f15', category: 'Theory', question: 'Why place strong teams opposite?', answer: 'Prevents strong teams meeting early, ensures quality finals.' },
    { id: 'f16', category: 'Theory', question: 'What is relationship between planning levels?', answer: 'Strategic (1-5yr) → Tactical (3-12mo) → Operative (daily) hierarchy.' },
    { id: 'f17', category: 'Theory', question: 'Why League more expensive than Knockout?', answer: 'League requires more matches (all play all); Knockout eliminates each round.' },
    { id: 'f18', category: 'Theory', question: 'Why Double League fairest format?', answer: 'Home-away format removes home advantage bias, ensures fairness.' },
    { id: 'f19', category: 'Theory', question: 'When use Combination format?', answer: 'For large numbers or scattered venues needing balanced group + finals.' },
    { id: 'f20', category: 'Theory', question: 'Why specific sports programmes important?', answer: 'Spread awareness about health, social causes, and community unity.' },

    // Classification Category (10)
    { id: 'f21', category: 'Classification', question: 'Which committee handles equipment?', answer: 'Technical Committee (procurement, conduct, refereeing, fixtures).' },
    { id: 'f22', category: 'Classification', question: 'Which committee manages ceremonies?', answer: 'Logistics Committee (transportation, food, ceremonies, decoration).' },
    { id: 'f23', category: 'Classification', question: 'Which committee prepares budget?', answer: 'Finance Committee (budget preparation, payment oversight).' },
    { id: 'f24', category: 'Classification', question: 'Which committee handles publicity?', answer: 'Marketing Committee (sponsorships, media relations, press releases).' },
    { id: 'f25', category: 'Classification', question: 'Difference: Single vs Double League?', answer: 'Single: all play once. Double: all play twice (home & away).' },
    { id: 'f26', category: 'Classification', question: 'Which allows second chances?', answer: 'League (all play regardless of losses); Knockout eliminates on loss.' },
    { id: 'f27', category: 'Classification', question: 'Rank by fairness: Knockout, League, Double League.', answer: 'Most fair: Double League > Single League > Knockout.' },
    { id: 'f28', category: 'Classification', question: 'Which hierarchy level is "Convener"?', answer: 'Middle Level (between Admin Director and committee members).' },
    { id: 'f29', category: 'Classification', question: 'Committee hierarchy: who has final authority?', answer: 'Administrative Director / Principal (Top Level).' },
    { id: 'f30', category: 'Classification', question: 'Which committee reports to Executive Committee?', answer: 'All committees: Technical, Logistics, Finance, Marketing.' },

    // Calculation Category (15)
    { id: 'f31', category: 'Calculation', question: 'Formula: Knockout matches?', answer: 'N - 1 (where N = number of teams)' },
    { id: 'f32', category: 'Calculation', question: 'Formula: Single League matches?', answer: 'N(N-1)/2 (all play all once)' },
    { id: 'f33', category: 'Calculation', question: 'Formula: Double League matches?', answer: 'N(N-1) (all play all twice)' },
    { id: 'f34', category: 'Calculation', question: 'Next power of 2 for 11 teams?', answer: '16 (since 8 < 11 ≤ 16)' },
    { id: 'f35', category: 'Calculation', question: 'Byes for 11 teams?', answer: '16 - 11 = 5 byes' },
    { id: 'f36', category: 'Calculation', question: 'UH teams for 11 (odd)?', answer: '(11+1)/2 = 6 teams' },
    { id: 'f37', category: 'Calculation', question: 'LH teams for 11 (odd)?', answer: '(11-1)/2 = 5 teams' },
    { id: 'f38', category: 'Calculation', question: 'Byes in UH for 11 teams?', answer: '(5-1)/2 = 2 byes (INVERSION!)' },
    { id: 'f39', category: 'Calculation', question: 'Byes in LH for 11 teams?', answer: '(5+1)/2 = 3 byes (INVERSION!)' },
    { id: 'f40', category: 'Calculation', question: 'Knockout matches for 19 teams?', answer: '19 - 1 = 18 matches' },
    { id: 'f41', category: 'Calculation', question: 'Single League matches for 6 teams?', answer: '6(5)/2 = 15 matches' },
    { id: 'f42', category: 'Calculation', question: 'Double League matches for 4 teams?', answer: '4(3) = 12 matches' },
    { id: 'f43', category: 'Calculation', question: 'League rounds for even N (6 teams)?', answer: 'N - 1 = 5 rounds' },
    { id: 'f44', category: 'Calculation', question: 'League rounds for odd N (5 teams)?', answer: 'N = 5 rounds (with bye each)' },
    { id: 'f45', category: 'Calculation', question: 'Points for Win/Draw/Loss (standard)?', answer: 'Win=2, Draw=1, Loss=0' },

    // True/False Category (10)
    { id: 'f46', category: 'TrueFalse', question: 'T/F: All teams equal matches in knockout?', answer: 'False (teams eliminated play fewer).' },
    { id: 'f47', category: 'TrueFalse', question: 'T/F: Byes given to weak teams?', answer: 'False (to balance bracket structure).' },
    { id: 'f48', category: 'TrueFalse', question: 'T/F: Intramural & Extramural same goal?', answer: 'False (different focuses: mass vs elite).' },
    { id: 'f49', category: 'TrueFalse', question: 'T/F: Finance Committee pre-event only?', answer: 'False (all three phases).' },
    { id: 'f50', category: 'TrueFalse', question: 'T/F: League always true winner?', answer: 'True (all play all, definitive ranking).' },
    { id: 'f51', category: 'TrueFalse', question: 'T/F: Seeding changes during play?', answer: 'False (fixed at start, no change).' },
    { id: 'f52', category: 'TrueFalse', question: 'T/F: Planning only at start?', answer: 'False (all three levels throughout).' },
    { id: 'f53', category: 'TrueFalse', question: 'T/F: Double League less fair than Single?', answer: 'False (most fair: home & away).' },
    { id: 'f54', category: 'TrueFalse', question: 'T/F: Odd N: UH more, LH more byes (INVERSION)?', answer: 'True (critical exam trap!).' },
    { id: 'f55', category: 'TrueFalse', question: 'T/F: Next power always round up?', answer: 'True (for 13, next is 16 not 8).' },

    // Application Category (10)
    { id: 'f56', category: 'Application', question: '9 teams knockout: place strongest where?', answer: 'UH position 1 (top seed) to prevent early strong team meetings.' },
    { id: 'f57', category: 'Application', question: 'College fest: who handles equipment rental?', answer: 'Technical Committee requisitions and manages.' },
    { id: 'f58', category: 'Application', question: 'How identify extramural talent?', answer: 'Through intramural where all participate, select top performers.' },
    { id: 'f59', category: 'Application', question: 'Daily training schedule = which planning level?', answer: 'Operative Planning (short-term daily execution).' },
    { id: 'f60', category: 'Application', question: 'Schedule "Run for Cause" when?', answer: 'Based on cause timing (cleanliness before rain, environment on Earth Day).' },
    { id: 'f61', category: 'Application', question: '20 scattered teams: best format?', answer: 'Combination (League groups + Knockout finals) for efficiency.' },
    { id: 'f62', category: 'Application', question: 'Most matches guarantee = which format?', answer: 'Double League: N(N-1) ensures most comprehensive play.' },
    { id: 'f63', category: 'Application', question: 'Cyclic method: how ensure all play?', answer: 'One team fixed, others rotate clockwise each round.' },
    { id: 'f64', category: 'Application', question: 'Marketing Committee during event does what?', answer: 'Press releases, media coordination, publicity momentum.' },
    { id: 'f65', category: 'Application', question: '13 teams: how many remain after R1?', answer: 'Typically half advance (with bye placement dependent).' },
  ],
  sqp: [
    // 2025-26 Questions
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'The formula for total matches in a Double League tournament is:',
      markingScheme: 'Answer: N(N-1)\n\nExplanation: In a Double League tournament, each team plays against every other team twice—once as home and once as away. For N teams, each team plays (N-1) matches (against all other teams). Since each team plays (N-1) matches, total matches = N × (N-1).',
      aiExplanation: 'The Double League is a comprehensive tournament format where every team plays every other team in both home and away conditions. This ensures fair competition and complete data collection for ranking.\n\nWhy N(N-1)?\n• Total teams = N\n• Each team plays = (N-1) other teams\n• Each plays TWICE (home & away) = N(N-1)\n\nExample: 4 teams in Double League\n• Each team plays 3 opponents\n• Each team plays twice = 4 × 3 = 12 total matches\n• Verification: Team A vs B, C, D (3) + Team A vs B, C, D again (3) per team\n\nCommon Confusion:\n❌ N(N-1)/2 = Single League (each pair once)\n✅ N(N-1) = Double League (each pair twice)',
      questionNumber: '1',
      source: 'SQP-2025-26'
    },
    {
      id: 'q2',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Assertion (A): Planning is the foremost function in sports. Reason (R): Planning gives direction to events.',
      markingScheme: 'Answer: Both A and R true; R is correct explanation of A.\n\nExplanation: Planning is indeed the first management function because without planning, no event can be organized. Planning provides the blueprint, timeline, budget, and direction for all subsequent functions.',
      aiExplanation: 'This is an Assertion-Reason (A/R) question testing understanding of management functions hierarchy.\n\nAssertion (A): "Planning is the foremost function in sports"\n✅ TRUE - Planning comes first (temporal order). Before organizing, staffing, or controlling, you must have a plan.\n\nReason (R): "Planning gives direction to events"\n✅ TRUE - Plan = blueprint = direction\n\nRelationship: Does R explain A?\n✅ YES - Why is planning foremost? Because it gives direction. Without direction, no organizing is possible.\n\nThese questions test:\n• Management sequence knowledge\n• Causal relationships\n• Planning\'s foundational role in events',
      questionNumber: 'A/R',
      source: 'SQP-2025-26'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Why is League tournament better than Knockout for determining the best team?',
      markingScheme: 'Answer: League Tournament is superior because:\n1. Every team plays every other team (comprehensive data collection)\n2. True winner determined by rank based on complete performance record\n3. A single loss does not eliminate a team\n4. Provides most accurate ranking of all participating teams\n\nKnockout disadvantages:\n• Good teams may lose in early rounds due to one bad performance\n• Does not provide complete ranking of all teams\n• Luck plays a significant role in determining the winner',
      aiExplanation: 'This question tests understanding of tournament structures and their appropriateness for different objectives.\n\nWhy League > Knockout for "best team"?\n\n1. DATA COMPLETENESS:\n   League: Each team plays all others = N(N-1)/2 matches = complete data\n   Knockout: Each team plays until loss = minimum N-1 matches = incomplete data\n\n2. RANKING RELIABILITY:\n   League: Rank = Win % across all games = representative\n   Knockout: Winner = luck of bracket + skill\n   Example: Top 3 teams in same bracket section → one knocked out early\n\n3. SINGLE LOSS IMPACT:\n   League: One loss = reduced points, still continues\n   Knockout: One loss = ELIMINATION\n   Real scenario: Best team in early round loses to second-best = second-best becomes champion\n\n4. TRUE ABILITY MEASUREMENT:\n   League: Performance across many matchups = true ability\n   Knockout: Performance in few critical matches = variable\n\nSPORT APPLICATION:\n• Premier League (football): League used to find "best team"\n• World Cup: Knockout used to find "1 champion"',
      source: 'SQP-2025-26'
    },
    {
      id: 'q4',
      year: '2025-26',
      paperType: 'SQP',
      marks: 4,
      type: 'LA',
      question: 'Case Study: Draw knockout bracket for 13 teams. Calculate byes, distribution, and explain allotment order.',
      markingScheme: 'Step 1: Find next power of 2 greater than 13 = 2⁴ = 16\nStep 2: Calculate Byes = 16 - 13 = 3\nStep 3: Distribute teams:\n   • Upper Half (UH) = (13+1)/2 = 7 teams\n   • Lower Half (LH) = (13-1)/2 = 6 teams\nStep 4: Distribute Byes (INVERSION TRAP):\n   • Byes in UH = (3-1)/2 = 1 bye\n   • Byes in LH = (3+1)/2 = 2 byes\nStep 5: Allotment Order:\n   • Last ranked team → Last Lower Half\n   • First ranked team → First Upper Half\n   • Last Upper Half position\n   • First Lower Half position',
      aiExplanation: 'This is a comprehensive knockout bracket problem testing systematic understanding of bye distribution and fair allotment.\n\nSTEP-BY-STEP SOLUTION:\n\n(1) IDENTIFY POWER OF 2:\n    • 13 teams ≠ power of 2\n    • Next higher: 2⁴ = 16 (since 2³ = 8 < 13 < 16 = 2⁴)\n\n(2) CALCULATE BYES:\n    • Formula: Byes = 2ⁿ - N\n    • Byes = 16 - 13 = 3 teams get bye in first round\n\n(3) DIVIDE INTO HALVES:\n    • Total positions = 16 (next power of 2)\n    • UH = (13+1)/2 = 14/2 = 7 teams\n    • LH = (13-1)/2 = 12/2 = 6 teams\n    • Check: 7 + 6 = 13 ✓\n\n(4) THE INVERSION TRAP (Most tested concept):\n    • Fewer byes in UH: (3-1)/2 = 1 bye\n    • More byes in LH: (3+1)/2 = 2 byes\n    • LOGIC: More teams in UH → fewer need bye\n              Fewer teams in LH → more need bye\n\n(5) FAIR ALLOTMENT ORDER:\n    • Position 13 (Lowest) → Last position LH\n    • Position 1 (Highest) → First position UH\n    • Position 7 (Mid-low) → Last position UH\n    • Position 6 (Mid-high) → First position LH\n    • LOGIC: Ensures best vs best and weakest vs bye\n\nCOMMON MISTAKES:\n❌ Byes distributed as 2-1 (wrong inversion)\n❌ Not calculating UH/LH correctly\n❌ Wrong allotment order (strongest meets weakest early)\n\nEXAM TIPS:\n• Always show next power of 2 calculation\n• Memorize inversion formula: (n±1)/2\n• Show allotment logic for full marks',
      questionNumber: '31',
      source: 'SQP-2025-26'
    },

    // 2024-25 Questions
    {
      id: 'q5',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Total matches for 19 teams in knockout?',
      markingScheme: 'Answer: 18 matches\n\nExplanation: In a Knockout tournament, each match eliminates exactly one team. To determine one winner from 19 teams, we must eliminate 18 teams. Therefore, 18 matches are required.\n\nFormula: N - 1 = 19 - 1 = 18',
      aiExplanation: 'Knockout tournament mathematics:\n\nFundamental Concept: Each match = 1 elimination\n\nLogic:\n• Start with 19 teams\n• End with 1 winner\n• Teams to eliminate = 19 - 1 = 18\n• Each match eliminates exactly 1 team\n• Total matches = 18\n\nMathematical Proof:\n• Round 1: 19 teams → 9 matches (18 play, 1 bye) = 9 winners + 1 bye = 10 advance\n• Round 2: 10 teams → 5 matches = 5 winners\n• Round 3: 5 teams → 2 matches (4 play, 1 bye) = 2 winners + 1 bye = 3 advance\n• Round 4: 3 teams → 1 match (2 play, 1 bye) = 1 winner + 1 bye = 2 advance\n• Final: 2 teams → 1 match = 1 winner\n• Total: 9 + 5 + 2 + 1 + 1 = 18 matches ✓\n\nAlternative Formula: Sum of all eliminations = N - 1',
      questionNumber: '1',
      source: 'SQP-2024-25'
    },
    {
      id: 'q6',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Assertion: Knockout economical & fast. Reason: Eliminates one team per match.',
      markingScheme: 'Answer: Both A and R true; R explains A.\n\nExplanation: Knockout is economical because it requires only (N-1) matches compared to League\'s N(N-1)/2, thus needing fewer venues, officials, and time. It is fast because each match produces a definitive elimination with no team playing multiple matches unnecessarily.',
      aiExplanation: 'Testing understanding of Knockout tournament advantages:\n\nAssertion: "Knockout is economical & fast"\n✅ TRUE - Why?\n\nEconomical:\n• Fewer matches: N-1 (e.g., 16 teams = 15 matches)\n• League requires: N(N-1)/2 (e.g., 16 teams = 120 matches)\n• Fewer matches = fewer venues, fewer officials, less infrastructure\n• Cost reduction = economical ✓\n\nFast:\n• Rapid determination of winner (few rounds)\n• League takes long (all combinations played)\n• Single path to victory = quick progression\n• Fast ✓\n\nReason: "Eliminates one team per match"\n✅ TRUE - This is the defining mechanism\n\nRelationship: Does Reason explain Assertion?\n✅ YES - Why economical & fast? Because each match is decisive (one elimination):\n  → No wasted matches (all lead to winner)\n  → Fewer rounds needed\n  → Quick completion ✓\n\nComparison with League:\n• League: Some matches don\'t determine outcomes (teams already qualified/eliminated)\n• Knockout: Every match is crucial\n\nUSE CASES:\n• Knockout: Tournaments (cricket, tennis - find 1 champion)\n• League: Rankings (football - find best team)',
      questionNumber: '2',
      source: 'SQP-2024-25'
    },
    {
      id: 'q7',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Purpose of specific sports programmes? Give examples.',
      markingScheme: 'Answer: Specific Sports Programmes are organized to:\n1. Spread awareness about health, fitness, and social causes\n2. Encourage mass participation in sports and physical activity\n3. Promote social responsibility and community welfare\n4. Create positive behavioral changes\n\nExamples:\n1. "Health Run" or "Marathon" - Promotes fitness awareness and health consciousness\n2. "Run for a Cause" - Raises awareness for social issues (cancer, poverty, education)\n3. "Run for Unity" - Builds community bonding and social cohesion\n4. "Gender Equality Run" - Promotes women\'s participation and rights\n5. "Environmental Awareness Walk" - Advocates for environmental protection',
      aiExplanation: 'This question distinguishes between regular sports competitions and purpose-driven "specific sports programmes".\n\nDEFINITION:\nSpecific Sports Programmes = Sports events with a defined purpose BEYOND competition\n\nTWO-LEVEL PURPOSES:\n\n1. PRIMARY (Competitive):\n   • Determine winners\n   • Showcase athletic excellence\n   (Regular tournaments)\n\n2. SECONDARY (Specific Purpose):\n   • Awareness (health, social cause)\n   • Participation (mass involvement)\n   • Community (social bonds)\n   • Behavioral change\n\nEXAMPLE BREAKDOWN:\n\n"Health Run":\n✓ Surface purpose: Racing\n✓ Real purpose: Promote fitness awareness\n✓ Expected outcome: Increased participation, health consciousness\n\n"Run for a Cause":\n✓ Surface purpose: Racing\n✓ Real purpose: Raise funds/awareness for social issue\n✓ Example causes: Cancer research, poverty alleviation, education\n\n"Run for Unity":\n✓ Surface purpose: Racing\n✓ Real purpose: Build community bonds\n✓ Expected outcome: Social cohesion, intercommunal harmony\n\n"Women Empowerment Marathon":\n✓ Surface purpose: Racing\n✓ Real purpose: Promote gender equality\n✓ Expected outcome: Increased women participation, rights awareness\n\nKEY DIFFERENCE:\n| Regular Sports | Specific Sports |\n|---|---|\n| Only win | Win + purpose |\n| Competition | Competition + awareness |\n| Athletes | Everyone |\n| Entertainment | Education + entertainment |\n\nEXAM MARKING CRITERIA:\n✓ Identify 2-3 purposes (awareness, participation, social welfare)\n✓ Give 2-3 different examples\n✓ Explain connection between sport and purpose\n✓ Show understanding that specific ≠ regular',
      questionNumber: '25',
      source: 'SQP-2024-25'
    },
    {
      id: 'q8',
      year: '2024-25',
      paperType: 'SQP',
      marks: 4,
      type: 'LA',
      question: 'Case Study: Match committees to functions: Boarding, Ceremony, Ground, Equipment.',
      markingScheme: 'Answer: Sports Event Planning Committee Functions:\n\n1. BOARDING COMMITTEE → LOGISTICS FUNCTION\n   • Responsible for accommodation, food, transportation of participants\n   • Ensures comfort and welfare of visitors\n\n2. CEREMONY COMMITTEE → LOGISTICS & PROTOCOL FUNCTION\n   • Organizes opening/closing ceremonies\n   • Manages VIP reception and official protocols\n\n3. GROUND/VENUE COMMITTEE → TECHNICAL FUNCTION\n   • Maintains sports ground condition\n   • Arranges pitch preparation, markings, boundaries\n   • Ensures venue readiness\n\n4. EQUIPMENT COMMITTEE → TECHNICAL FUNCTION\n   • Manages sports equipment\n   • Ensures quality, maintenance, and availability\n   • Prepares equipment inventory\n\n5. FINANCE COMMITTEE (implicit) → FINANCIAL PLANNING\n6. MARKETING COMMITTEE (implicit) → PUBLICITY & SPONSORSHIP',
      aiExplanation: 'This question tests knowledge of Event Management Committee Structure and their functional categorization.\n\nFUNCTIONAL CATEGORIZATION OF SPORTS EVENT COMMITTEES:\n\nGROUP 1: LOGISTICS COMMITTEES\n├─ Boarding Committee\n│  ├─ Accommodation (hotels, hostels)\n│  ├─ Food & Catering\n│  ├─ Transportation\n│  └─ Welfare/Health\n│\n├─ Ceremony Committee\n│  ├─ Opening ceremony choreography\n│  ├─ Flag hoisting, national anthem\n│  ├─ VIP reception\n│  └─ Protocol management\n│\n└─ Purpose: Participant comfort + Image creation\n\nGROUP 2: TECHNICAL COMMITTEES\n├─ Ground/Venue Committee\n│  ├─ Field maintenance\n│  ├─ Pitch marking & boundaries\n│  ├─ Lighting arrangements\n│  └─ Seating/Spectator areas\n│\n├─ Equipment Committee\n│  ├─ Procurement\n│  ├─ Quality check\n│  ├─ Maintenance\n│  └─ Inventory management\n│\n└─ Purpose: Competition readiness + Fair play\n\nGROUP 3: ADMINISTRATIVE COMMITTEES\n├─ Finance Committee\n│  ├─ Budget preparation\n│  ├─ Fund management\n│  └─ Expense approval\n│\n├─ Marketing Committee\n│  ├─ Sponsorship\n│  ├─ Publicity\n│  ├─ Media management\n│  └─ Social media\n│\n└─ Purpose: Sustainability + Growth\n\nMATCHING EXPLAINED:\n\n1. Boarding → LOGISTICS\n   Why? People need comfort to perform\n   Failure impact: Participants unmotivated\n\n2. Ceremony → LOGISTICS + PROTOCOL\n   Why? Image building & protocol adherence\n   Failure impact: Event loses credibility\n\n3. Ground → TECHNICAL\n   Why? Venue quality determines fair play\n   Failure impact: Competition compromised\n\n4. Equipment → TECHNICAL\n   Why? Sports equipment is competition infrastructure\n   Failure impact: Games cannot proceed fairly\n\nINTERDEPENDENCIES:\n• Logistics committees must finish BEFORE competition starts\n• Technical committees work DURING competition\n• Administrative committees work THROUGHOUT\n\nEXAM TIPS:\n✓ Show functional grouping (Logistics/Technical)\n✓ Explain why each committee is in its group\n✓ Show understanding of event flow (pre/during/post)',
      questionNumber: '31',
      source: 'SQP-2024-25'
    },

    // 2023-24 Questions
    {
      id: 'q9',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Single League matches for 6 teams?',
      markingScheme: 'Answer: 15 matches\n\nExplanation: In a Single League tournament, each team plays every other team once. The formula is N(N-1)/2.\n\nCalculation: N(N-1)/2 = 6 × 5 / 2 = 30/2 = 15 matches',
      aiExplanation: 'Single League Tournament Formula:\n\nWhy N(N-1)/2?\n• Total teams = N = 6\n• Each team plays = N-1 = 5 opponents (once each)\n• Total if counted from each team perspective = N(N-1) = 30\n• But this counts each match twice (A vs B and B vs A are same match)\n• Actual matches = N(N-1)/2 = 30/2 = 15\n\nVerification by enumeration with 6 teams (A, B, C, D, E, F):\nRound 1: AB, CD, EF (3 matches)\nRound 2: AC, BD, CE, AF (4 matches) - Wait, let me recount...\n\nSystematic count:\n• Team A plays: B, C, D, E, F = 5 matches\n• Team B plays: C, D, E, F (A already counted) = 4 matches\n• Team C plays: D, E, F = 3 matches\n• Team D plays: E, F = 2 matches\n• Team E plays: F = 1 match\n• Total = 5+4+3+2+1 = 15 ✓\n\nComparison:\n• Single League: 6 teams = 15 matches\n• Double League: 6 teams = 6×5 = 30 matches\n• Knockout: 6 teams = 5 matches',
      questionNumber: '13',
      source: 'SQP-2023-24'
    },
    {
      id: 'q10',
      year: '2023-24',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which format best for true winner?',
      markingScheme: 'Answer: League Tournament\n\nExplanation: League Tournament is the best format for determining the true winner because every team plays every other team, providing a comprehensive performance record across multiple matches.',
      aiExplanation: '"True Winner" Question - Tests tournament format knowledge:\n\nWhy LEAGUE for true winner?\n\n1. COMPREHENSIVE DATA:\n   • League: All possible combinations tested\n   • Knockout: Partial data (early exits)\n\n2. NO EARLY ELIMINATION:\n   • League: One loss doesn\'t eliminate (continues ranking)\n   • Knockout: One loss = out (luck-dependent)\n\n3. RANKING RELIABILITY:\n   • League: Points from N-1 matches = representative\n   • Knockout: Points from 1-few matches = variable\n\n4. STATISTICAL SIGNIFICANCE:\n   • More matches = more reliable average\n   • 15 matches (6 teams league) > 5 matches (6 teams knockout)\n\nWHY NOT KNOCKOUT FOR "TRUE WINNER"?\n• Winner by luck: Best team eliminated early by second-best\n• Bracket-dependent: Same strength teams in different brackets\n• Single elimination: One bad day = championship lost\n\nWHY NOT COMBINATIONS FOR "TRUE WINNER"?\n• (Won\'t mention combinations as not standard format)\n\nREAL WORLD EXAMPLES:\n• NFL (USA Football): League = find best team → League champion = "true winner"\n• World Cup: Knockout = find 1 champion → Different objective\n\nDISTINCTION:\n• "Best team" = League format\n• "Championship" = Knockout format\n• Question asks "true winner" = League',
      questionNumber: '14',
      source: 'SQP-2023-24'
    },
    {
      id: 'q11',
      year: '2023-24',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      question: 'Differentiate Intramural and Extramural.',
      markingScheme: 'Answer: \n\nINTRAMURAL:\n• Competitions held WITHIN a single institution\n• Open to ALL students/members of that institution\n• Focus on mass participation and development\n• Primarily for fitness and enjoyment\n• Less competitive, more inclusive\n\nEXTRAMURAL:\n• Competitions held BETWEEN different institutions\n• Participation restricted to SELECTED/best players\n• Focus on high performance and excellence\n• Competitive at inter-institutional level\n• More rigorous selection criteria',
      aiExplanation: 'Distinguishing two fundamental levels of sports participation in educational institutions:\n\n| PARAMETER | INTRAMURAL | EXTRAMURAL |\n|-----------|-----------|----------|\n| **Location** | Within institution | Between institutions |\n| **Level** | Local | Inter-institutional |\n| **Participation** | ALL students | SELECTED best |\n| **Objective** | Development | Excellence |\n| **Inclusivity** | High (everyone) | Low (best only) |\n| **Competitiveness** | Low-Medium | High |\n| **Scope** | Mass sports | Elite sports |\n| **Examples** | School sports day, House competitions | Inter-school tournament, District championship |\n\nLOGIC FLOW:\n\nIntramural (From Latin "intra" = within, "mural" = wall):\n• LAYER 1 (Foundation): All students play = base building\n• Purpose: Identify talent, build fitness, enjoy sports\n• Result: Some excel, some participate\n\nExtramural (From Latin "extra" = outside, "mural" = wall):\n• LAYER 2 (Performance): Best from intramural represent school\n• Purpose: Compete at higher level, achieve excellence\n• Result: Find best team/player\n\nPYRAMID STRUCTURE:\n```\n         Champions (Nationals)\n              ↑\n         Extramural (Inter-school)\n              ↑\n         Intramural (All students)\n```\n\nEXAMPLE STUDENT JOURNEY:\n1. Joins school → Plays in intramural (house competition)\n2. Performs well → Selected for extramural (inter-school matches)\n3. Performs well → Selected for district/state tournaments\n\nWHY BOTH NEEDED:\n• Intramural: Democratization of sports (everyone gets chance)\n• Extramural: Excellence pursuit (best represent institution)\n\nKEY DIFFERENTIATION POINTS FOR EXAM:\n✓ Mention "within" vs "between"\n✓ Mention participation level (all vs selected)\n✓ Mention objective (development vs excellence)\n✓ Show understanding of progression (intramural → extramural)',
      questionNumber: 'Q12',
      source: 'SQP-2023-24'
    },
    {
      id: 'q12',
      year: '2023-24',
      paperType: 'SQP',
      marks: 4,
      type: 'LA',
      question: 'Case Study: Committees for Reception, Publicity, Equipment, Catering. Identify and explain pre-event roles.',
      markingScheme: 'Answer:\n\n1. RECEPTION COMMITTEE → LOGISTICS\n   • Greets participants, coaches, officials\n   • Manages check-in and registration\n   • Ensures participants feel welcome\n\n2. PUBLICITY COMMITTEE → MARKETING\n   • Media promotion and press releases\n   • Sponsorship management\n   • Public awareness campaigns\n   • Documentation (photography, videography)\n\n3. EQUIPMENT COMMITTEE → TECHNICAL\n   • Procurement and inventory\n   • Quality checks\n   • Maintenance and availability\n   • Safety verification\n\n4. CATERING COMMITTEE → LOGISTICS\n   • Food and beverage arrangements\n   • Meal planning for participants\n   • Dietary requirements\n   • Refreshments during event\n\nPre-event Roles:\n   • Reception: Coordination for smooth check-in\n   • Equipment: Verification and readiness\n   • Publicity: Advance promotion\n   • Catering: Planning and procurement',
      aiExplanation: 'Event Management Committee Functions - Pre-event Phase:\n\nCOMMITTEE CATEGORIZATION:\n\n┌─ LOGISTICS (Participant Comfort)\n│  ├─ Reception: First impression, welcome, registration\n│  │   └─ Pre-event: Prepare systems, briefing materials\n│  └─ Catering: Food/beverages, comfort, energy\n│      └─ Pre-event: Menu finalization, vendor coordination\n│\n├─ TECHNICAL (Competition Infrastructure)\n│  └─ Equipment: Sports gear, safety, fairness\n│      └─ Pre-event: Procurement, quality check, storage\n│\n└─ ADMINISTRATIVE (Visibility & Sponsorship)\n   └─ Publicity: Media, sponsorship, visibility\n       └─ Pre-event: Press releases, advance promotion, partnerships\n\nPRE-EVENT TIMELINE:\n\n3 Months Before:\n• Publicity: Announce event, invite sponsors\n• Catering: Quote vendors, finalize menus\n• Equipment: Identify needs, place orders\n• Reception: Design registration forms\n\n1 Month Before:\n• Publicity: Media briefings, sponsor contracts\n• Catering: Confirm vendor, finalize headcount\n• Equipment: Receive deliveries, quality check\n• Reception: Brief staff, prepare materials\n\n1 Week Before:\n• All committees: Final checks, dry runs\n• Reception: Arrange registration area\n• Equipment: Final inspection, equipment placement\n• Catering: Vendor briefing, timing confirmation\n• Publicity: Last-minute press releases\n\nEXAMPLE COORDINATION:\n\nRecognition Ceremony (all committees involved):\n• Reception: Seat dignitaries\n• Catering: Serve refreshments\n• Publicity: Photo/video documentation\n• Equipment: Provide podium, medals, trophies\n\nKEY LEARNING:\n✓ Understand functional grouping (Logistics/Technical/Admin)\n✓ Show pre-event preparation mindset\n✓ Demonstrate interdependency\n✓ Explain why each committee matters',
      questionNumber: '31',
      source: 'SQP-2023-24'
    },
    {
      id: 'q13',
      year: '2023-24',
      paperType: 'SQP',
      marks: 2,
      type: 'SA',
      question: 'Significance of bye allotment?',
      markingScheme: 'Answer: Bye Allotment Significance:\n\n1. BALANCING:\n   • Bye allotment balances the knockout bracket when number of teams is not a power of 2\n   • Ensures all first-round byes are distributed fairly\n\n2. FAIRNESS:\n   • Prevents bias by following systematic distribution\n   • Strong teams don\'t get unfair advantage\n   • No team is disadvantaged\n\n3. SEEDING INTEGRITY:\n   • Allotment order directly impacts tournament fairness\n   • Specific sequence (Last LH, First UH, Last UH, First LH) prevents bracket manipulation\n   • Ensures best teams are spread across bracket\n\n4. COMPETITIVENESS:\n   • Fair bracket = competitive matches in early rounds\n   • Teams progress based on merit, not bye placement\n   • Maintains tournament credibility',
      aiExplanation: 'Bye Allotment: The Strategic Distribution of Byes in Knockout Tournaments\n\nCONTEXT:\nWhen teams ≠ power of 2, some teams get a bye (free entry to next round). The question is: WHO gets byes and IN WHICH ORDER?\n\n4 SIGNIFICANCES:\n\n1️⃣ MATHEMATICAL BALANCING:\n   • Problem: 13 teams need to become power of 2\n   • Solution: Use 16 positions (2⁴)\n   • Byes required: 16 - 13 = 3\n   • Distribution: Ensure bracket is balanced (not all 3 in one half)\n   • Significance: Creates playable bracket structure\n\n2️⃣ FAIRNESS/EQUITY:\n   • If not done systematically: Strong team could get easy bye, weak team gets hard bye\n   • Allotment order ensures: No preferential treatment\n   • INVERSION LOGIC: Byes distributed opposite to team distribution\n     - Half with MORE teams → FEWER byes\n     - Half with FEWER teams → MORE byes\n     - Balances bracket difficulty\n   • Significance: Every team has equal chance\n\n3️⃣ SEEDING RANKING PROTECTION:\n   • Allotment sequence: Last LH (weakest team) → First UH (strongest) → Last UH → First LH\n   • Purpose: Strongest avoid strongest in early rounds\n   • Significance: Top-ranked team not knocked out by bye-receiver anomaly\n\n4️⃣ COMPETITIVE INTEGRITY:\n   • Fair bye distribution = tight matches throughout\n   • Champion crowned by merit, not bye luck\n   • Tournament results valid for ranking purposes\n   • Significance: Event credibility maintained\n\nEXAMPLE IMPACT:\n\n❌ WRONG (Random bye allotment):\n   • Team 13 (weakest) gets bye → advances undeserved\n   • Team 1 (strongest) plays in round 1\n   • Teams 2-7 might eliminate Team 1\n   • Wrong team becomes champion\n   • Significance LOST: Fairness compromised\n\n✅ RIGHT (Systematic allotment):\n   • Bye distributed by formula\n   • Strong teams spaced across bracket\n   • True champion likely to emerge\n   • Significance MAINTAINED: Tournament valid\n\nKEY POINTS FOR EXAM:\n✓ Mention "balance" (mathematical)\n✓ Mention "fairness" (ethical)\n✓ Mention "prevents advantage" (competitive)\n✓ Show understanding of inversion concept\n✓ Connect bye allotment to tournament credibility',
      source: 'SQP-2023-24'
    },
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 1: Management of Sporting Events',
    children: [
      {
        id: 'm2',
        label: 'Planning',
        children: [
          { id: 'm2a', label: 'Strategic (1-5yr)' },
          { id: 'm2b', label: 'Tactical (3-12mo)' },
          { id: 'm2c', label: 'Operative (Daily)' }
        ]
      },
      {
        id: 'm3',
        label: 'Committees',
        children: [
          { id: 'm3a', label: 'Hierarchy (Top/Mid/Low)' },
          { id: 'm3b', label: 'Technical' },
          { id: 'm3c', label: 'Logistics' },
          { id: 'm3d', label: 'Finance' },
          { id: 'm3e', label: 'Marketing' }
        ]
      },
      {
        id: 'm4',
        label: 'Tournaments',
        children: [
          { id: 'm4a', label: 'Knock-out' },
          { id: 'm4b', label: 'League (Single)' },
          { id: 'm4c', label: 'Double League' },
          { id: 'm4d', label: 'Combination' }
        ]
      },
      {
        id: 'm5',
        label: 'Fixtures & Byes',
        children: [
          { id: 'm5a', label: 'Bye Allotment' },
          { id: 'm5b', label: 'Seeding' },
          { id: 'm5c', label: 'Cyclic/Staircase' }
        ]
      },
      {
        id: 'm6',
        label: 'Intramural/Extramural',
        children: [
          { id: 'm6a', label: 'Intramural (Mass)' },
          { id: 'm6b', label: 'Extramural (Elite)' },
          { id: 'm6c', label: 'Pipeline' }
        ]
      },
      {
        id: 'm7',
        label: 'Specific Programmes',
        children: [
          { id: 'm7a', label: 'Sports Day' },
          { id: 'm7b', label: 'Health Run' },
          { id: 'm7c', label: 'Runs (Fun/Cause/Unity)' }
        ]
      }
    ]
  },
  cheatSheet: [
    {
      title: '🔢 KNOCK-OUT FORMULAS (CRITICAL!)',
      points: [
        'Matches = N - 1',
        'Byes = Next 2ⁿ - N',
        'UH teams (Odd) = (N+1)/2 → MORE teams',
        'LH teams (Odd) = (N-1)/2 → FEWER teams',
        'Byes UH (Odd) = (Nb-1)/2 → FEWER (INVERSION!)',
        'Byes LH (Odd) = (Nb+1)/2 → MORE (INVERSION!)',
        '⚠️ EXAM TRAP: Teams & Byes OPPOSITE in odd!'
      ]
    },
    {
      title: '🔢 LEAGUE FORMULAS',
      points: [
        'Single League = N(N-1)/2',
        'Double League = N(N-1) ← NEW!',
        'Rounds (Even) = N - 1',
        'Rounds (Odd) = N',
        'Points: Win=2, Draw=1, Loss=0'
      ]
    },
    {
      title: '⚡ TOURNAMENT COMPARISON',
      points: [
        'KNOCKOUT: Fast, economical, unfair (good teams lose early)',
        'SINGLE LEAGUE: True winner, expensive, time-consuming',
        'DOUBLE LEAGUE: Fairest (home/away), most expensive ← NEW!',
        'COMBINATION: Handles large groups efficiently ← NEW!'
      ]
    },
    {
      title: '🏛️ COMMITTEE HIERARCHY (3-TIER)',
      points: [
        'TOP: Admin Director / Principal',
        'MIDDLE: Convener / Dept Heads / Executive',
        'LOWER: Teachers / Officers / Members',
        'All report to Executive Committee'
      ]
    },
    {
      title: '📋 COMMITTEE FUNCTIONS',
      points: [
        'TECHNICAL: Equipment, Officials, Fixtures',
        'LOGISTICS: Transport, Food, Ceremonies',
        'FINANCE: Budget, Payments, Sponsorships',
        'MARKETING: Publicity, Media, Press Releases'
      ]
    },
    {
      title: '📍 BYE PLACEMENT ORDER (MEMORIZE)',
      points: [
        '1. Last of Lower Half',
        '2. First of Upper Half',
        '3. Last of Upper Half',
        '4. First of Lower Half'
      ]
    },
    {
      title: '🎓 INTRAMURAL vs EXTRAMURAL',
      points: [
        'INTRA: Within walls, mass, foundation',
        'EXTRA: Beyond walls, elite, high performance',
        'Pipeline: Intramural → Selection → Extramural'
      ]
    },
    {
      title: '🏃 SPECIFIC SPORTS PROGRAMMES',
      points: [
        'Sports Day: Annual showcase',
        'Health Run: Health improvement',
        'Run for Fun: Fitness & joy',
        'Run for Cause: Social awareness',
        'Run for Unity: Brotherhood'
      ]
    },
    {
      title: '⚡ PLANNING LEVELS',
      points: [
        'STRATEGIC: 1-5 years',
        'TACTICAL: 3-12 months',
        'OPERATIVE: Daily'
      ]
    },
    {
      title: '🎯 LEAGUE METHODS',
      points: [
        'CYCLIC: One fixed, others rotate',
        'STAIRCASE: Highest plays all, moves down',
        'Both use N(N-1)/2 formula'
      ]
    },
    {
      title: '⚠️ EXAM TRAPS',
      points: [
        '1. BYE INVERSION: Odd N - Teams UH>LH, Byes LH>UH (opposite!)',
        '2. NEXT POWER: Round UP not down (for 13, next=16)',
        '3. DOUBLE LEAGUE: N(N-1) not N(N-1)/2',
        '4. SEEDING FIXED: Cannot change mid-tournament',
        '5. LEAGUE FAIREST: Only League gives true winner'
      ]
    }
  ]
};
