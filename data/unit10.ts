import { Chapter } from '../types';

export const unit10: Chapter = {
  id: 10,
  slug: 'training-sports',
  name: 'Training in Sports',
  description: 'Concepts of training, cycle types, and methods to develop Strength, Endurance, Speed, Flexibility, and Coordinative Abilities.',
  topics: [
    {
      id: 'training-intro',
      title: 'Introduction to Sports Training',
      description: 'The systematic process of preparing athletes for highest performance.',
      content: [
        'Definition: A planned and controlled process in which, for achieving a goal, changes in complex motor coordination, physical performance, and behavior are made.',
        'Principles: Continuity, Overload, Specificity, Progression, Individual Differences, Active Involvement, Variety.',
        'Training Cycles:',
        '1. Micro Cycle: Shortest duration (3-10 days, usually 1 week). Focus on immediate specific goals.',
        '2. Meso Cycle: Medium duration (3-6 weeks). Focus on specific fitness components.',
        '3. Macro Cycle: Longest duration (3-12 months). Focus on overall periodization (Prep, Competition, Transition).'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Periodization Cycles',
          type: 'table',
          data: {
            headers: ['Cycle', 'Duration', 'Purpose'],
            rows: [
              ['Micro', '3 - 10 Days', 'Immediate acute training load.'],
              ['Meso', '3 - 6 Weeks', 'Development of specific abilities.'],
              ['Macro', '3 - 12 Months', 'Overall season planning.']
            ]
          }
        }
      ]
    },
    {
      id: 'strength-development',
      title: 'Developing Strength',
      description: 'The ability of muscles to overcome resistance.',
      content: [
        '1. Isometric Exercises (Hettinger & Muller, 1953): "Iso" (Same) + "Metric" (Length). Static contraction. No visible movement. Best for rehab and static strength.',
        '2. Isotonic Exercises (De Lorme, 1945): "Iso" (Same) + "Tonic" (Tension). Dynamic contraction with movement. Concentric (Shortening) and Eccentric (Lengthening) phases. Best for hypertrophy.',
        '3. Isokinetic Exercises (J.J. Perrine, 1968): "Iso" (Same) + "Kinetic" (Motion). Constant speed with variable resistance. Requires machines (Cybex). Best for sports power.'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Strength Training Matrix',
          type: 'grid',
          data: [
            { label: 'Isometric', desc: 'Static (Pushing Wall). Zero work done physically.' },
            { label: 'Isotonic', desc: 'Dynamic (Dumbbell Curl). Development of work capacity.' },
            { label: 'Isokinetic', desc: 'Machine (Cybex). Max resistance at all angles.' }
          ]
        }
      ]
    },
    {
      id: 'endurance-development',
      title: 'Developing Endurance',
      description: 'Ability to resist fatigue for a long duration.',
      content: [
        '1. Continuous Method: Exercise for long duration without break. Low Intensity (130-160 BPM). builds aerobic base/glycogen storage.',
        '2. Interval Method (Bikila): Effort + Recovery phases. "Work-Rest-Work". High intensity (180 BPM) with partial recovery. Develops anaerobic capacity.',
        '3. Fartlek Method (Gosta Holmer): "Speed Play". Variable pace in natural terrain. Heart rate fluctuates (140-180 BPM). Self-disciplined.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Interval Training Logic',
          type: 'flow',
          data: [
            'Sprint 400m',
            'Jog/Walk (Recovery)',
            'HR drops to 120',
            'Sprint 400m again'
          ]
        }
      ]
    },
    {
      id: 'speed-flexibility',
      title: 'Speed & Flexibility',
      description: 'Methods to enhance quickness and range of motion.',
      content: [
        'Speed Development:',
        '• Acceleration Runs: Sprinting from a stationary start to achieve top speed (Concept of explosive power).',
        '• Pace Runs: Maintaining maximum speed for a set distance (Concept of speed endurance).',
        'Flexibility Methods:',
        '• Ballistic: Bouncing movements (Risky, old school).',
        '• Static: Stretching and holding (Safe, cooling down).',
        '• Dynamic: Controlled movement through range (Warm up).',
        '• PNF (Proprioceptive Neuromuscular Facilitation): Contract-Relax method (Most effective).'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Coordinative Abilities',
          type: 'list',
          data: [
            'Orientation (Position in space)',
            'Coupling (Linking movements)',
            'Reaction (Response speed)',
            'Balance (Equilibrium)',
            'Rhythm (Timing)',
            'Adaptation (Adjusting to change)',
            'Differentiation (Precision)'
          ]
        }
      ]
    },
    {
      id: 'circuit-training',
      title: 'Circuit Training',
      description: 'A method combining strength and endurance.',
      content: [
        'Design: 6-10 stations arranged in a circle.',
        'Principle: Alternate muscle groups (Upper Body -> Lower Body -> Core) to allow local muscle recovery while keeping heart rate high.',
        'Benefit: High density training, time efficient, develops general fitness.'
      ],
      visualizations: [
        {
          id: 'v5',
          title: 'Sample Circuit',
          type: 'grid',
          data: [
            { label: 'Station 1', desc: 'Jumping Jacks (Cardio)' },
            { label: 'Station 2', desc: 'Push Ups (Upper)' },
            { label: 'Station 3', desc: 'Squats (Lower)' },
            { label: 'Station 4', desc: 'Crunches (Core)' },
            { label: 'Station 5', desc: 'Skipping (Cardio)' }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Strength', question: 'Who developed Isometric exercises?', answer: 'Hettinger and Muller (1953).' },
    { id: 'f2', category: 'Strength', question: 'What characterizes Isokinetic exercises?', answer: 'Constant speed of movement with varying resistance.' },
    { id: 'f3', category: 'Endurance', question: 'Meaning of "Fartlek"?', answer: 'Speed Play (Swedish).' },
    { id: 'f4', category: 'Cycles', question: 'Duration of a Micro Cycle?', answer: '3 to 10 days (typically 1 week).' },
    { id: 'f5', category: 'Endurance', question: 'Key feature of Interval Training?', answer: 'Incomplete recovery between work intervals.' },
    { id: 'f6', category: 'Flexibility', question: 'What is PNF?', answer: 'Proprioceptive Neuromuscular Facilitation (Contract-Relax method).' },
    { id: 'f7', category: 'Cycles', question: 'What is a Meso Cycle?', answer: 'A training cycle of medium duration (3 to 6 weeks).' },
    { id: 'f8', category: 'Coordination', question: 'Ability to determine body position in space is?', answer: 'Orientation Ability.' },
    { id: 'f9', category: 'Strength', question: 'Pushing against a wall is an example of?', answer: 'Isometric Exercise.' },
    { id: 'f10', category: 'Strength', question: 'Lifting a dumbbell is?', answer: 'Isotonic Exercise.' },
    { id: 'f11', category: 'Speed', question: 'Purpose of Pace Runs?', answer: 'To maintain maximum speed for a longer distance (Speed Endurance).' },
    { id: 'f12', category: 'Coordination', question: 'Ability to combine movements of different body parts?', answer: 'Coupling Ability.' },
    { id: 'f13', category: 'Endurance', question: 'Heart rate range in Continuous Method?', answer: '140-160 BPM (Aerobic zone).' },
    { id: 'f14', category: 'Circuit', question: 'Main design principle of Circuit Training?', answer: 'Alternating muscle groups to delay local fatigue.' },
    { id: 'f15', category: 'Strength', question: 'Who developed Isotonic exercises?', answer: 'De Lorme (1945).' },
    { id: 'f16', category: 'Principles', question: 'Principle of "Overload"?', answer: 'Training load must exceed normal daily demand to cause adaptation.' },
    { id: 'f17', category: 'Coordination', question: 'Simple vs Complex Reaction Time?', answer: 'Simple: 1 stimulus, 1 response. Complex: Multiple choices.' },
    { id: 'f18', category: 'Flexibility', question: 'Why is Ballistic stretching risky?', answer: 'It uses momentum/bouncing which can trigger the stretch reflex and tear muscle.' },
    { id: 'f19', category: 'Speed', question: 'Acceleration runs start from?', answer: 'A stationary or slow moving position.' },
    { id: 'f20', category: 'Cycles', question: 'Longest training cycle?', answer: 'Macro Cycle (3-12 months).' },
    { id: 'f21', category: 'Strength', question: 'Work done in Isometric exercise?', answer: 'Technically zero (Force x Distance, distance is 0).' },
    { id: 'f22', category: 'Definition', question: 'Define Sports Training.', answer: 'Scientific process of preparing an athlete for high performance.' },
    { id: 'f23', category: 'Endurance', question: 'Fartlek training improves?', answer: 'Both Aerobic and Anaerobic endurance.' },
    { id: 'f24', category: 'Speed', question: 'Reaction ability depends on?', answer: 'Central Nervous System (CNS) processing speed.' },
    { id: 'f25', category: 'Coordination', question: 'Rhythm Ability definition?', answer: 'Ability to perceive and reproduce movement rhythm (timing).' },
    { id: 'f26', category: 'Strength', question: 'Concentric vs Eccentric?', answer: 'Concentric: Muscle shortens. Eccentric: Muscle lengthens.' },
    { id: 'f27', category: 'Cycles', question: 'Goal of Transition Period?', answer: 'Recovery and rest (Active rest).' },
    { id: 'f28', category: 'Circuit', question: 'Developed by?', answer: 'Morgan and Adamson (University of Leeds).' },
    { id: 'f29', category: 'Coordination', question: 'Differentiation Ability indicates?', answer: 'High precision and economy of movement.' },
    { id: 'f30', category: 'Endurance', question: 'Recovery heart rate in Interval Method?', answer: '120-140 BPM before starting next rep.' },
    { id: 'f31', category: 'Principles', question: 'Principle of Specificity?', answer: 'Training must match the demands of the sport.' },
    { id: 'f32', category: 'Flexibility', question: 'Active vs Passive Flexibility?', answer: 'Active: Self-movement. Passive: With external help (partner/gravity).' },
    { id: 'f33', category: 'Strength', question: 'Best method for explosive power?', answer: 'Isokinetic (or Plyometrics).' },
    { id: 'f34', category: 'Speed', question: 'Main factor limiting speed?', answer: 'Genetic (fast twitch fibers).' },
    { id: 'f35', category: 'Endurance', question: 'Example of Fartlek?', answer: 'Jogging, then sprinting up a hill, then walking, in a park.' },
    { id: 'f36', category: 'Coordination', question: 'Balance ability is crucial for?', answer: 'Gymnastics, Skating, Skiing.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2023-24',
      paperType: 'Board',
      marks: 1,
      type: 'MCQ',
      question: 'Which training method was developed by Gosta Holmer?',
      answer: '(c) Fartlek Method',
      aiExplanation: 'Fartlek means "Speed Play" in Swedish.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Differentiate between Meso Cycle and Macro Cycle.',
      answer: 'Meso: Medium (3-6 weeks), specific focus. Macro: Long (3-12 months), overall season plan.',
      aiExplanation: 'Mention duration and purpose for both.'
    },
    {
      id: 'q3',
      year: '2022-23',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Explain the Interval Training Method. How does it help in developing endurance?',
      answer: 'Work-Rest principle. High intensity intervals with incomplete recovery. Adapts heart to recover quickly.',
      aiExplanation: 'Key is "Incomplete Recovery" which forces the heart to work harder.'
    },
    {
      id: 'q4',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Static contraction of muscle is seen in:',
      answer: '(a) Isometric Exercise',
      aiExplanation: 'In isometric, muscle length does not change visibly.'
    },
    {
      id: 'q5',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'What are Coordinative Abilities? List any four.',
      answer: 'Abilities of CNS to control motor actions. Orientation, Coupling, Reaction, Balance.',
      aiExplanation: 'Focus on the brain-muscle connection aspect.'
    },
    {
      id: 'q6',
      year: '2021-22',
      paperType: 'Term-1',
      marks: 4,
      type: 'Case',
      question: 'A coach plans a training session with 8 stations. Athletes move from Station A (Pushups) to Station B (Squats) without rest. 1. Identify method. 2. Benefit?',
      answer: '1. Circuit Training. 2. Improves strength and endurance simultaneously.',
      aiExplanation: 'The rotation and alternating muscle groups are the signature of Circuit Training.'
    },
    {
      id: 'q7',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Explain Isokinetic exercises with examples.',
      answer: 'Machine-based Exercises. Constant speed, max resistance throughout range. Example: Cybex knee extension.',
      aiExplanation: 'Must mention "specialized machines" as they are not possible with free weights.'
    },
    {
      id: 'q8',
      year: '2022-23',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Define Flexibility. Explain PNF and Static Stretching methods.',
      answer: 'Range of motion. PNF: Contract-Relax technique. Static: Holding a stretch for 10-30s.',
      aiExplanation: 'PNF is the most advanced and effective method for increasing range of motion.'
    },
    {
      id: 'q9',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Acceleration runs are used to improve:',
      answer: '(b) Speed',
      aiExplanation: 'Specifically, the ability to reach top speed from zero.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 10: Training',
    children: [
      {
        id: 'm2',
        label: 'Strength',
        children: [{ id: 'm3', label: 'Iso-Metric/Tonic/Kinetic' }]
      },
      {
        id: 'm4',
        label: 'Endurance',
        children: [{ id: 'm5', label: 'Continuous/Interval/Fartlek' }]
      },
      {
        id: 'm6',
        label: 'Cycles',
        children: [{ id: 'm7', label: 'Micro' }, { id: 'm8', label: 'Meso' }, { id: 'm9', label: 'Macro' }]
      },
      {
        id: 'm10',
        label: 'Coordination',
        children: [{ id: 'm11', label: '7 Types (Orientation etc)' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Training Founders', points: ['Isometric: Hettinger/Muller', 'Isotonic: De Lorme', 'Isokinetic: Perrine', 'Circuit: Morgan/Adamson'] },
    { title: 'Cycles', points: ['Micro: Days (Acute)', 'Meso: Weeks (Specific)', 'Macro: Months (Season)'] },
    { title: 'Coordination', points: ['Coupling', 'Orientation', 'Reaction', 'Balance', 'Rhythm', 'Adaptation', 'Differentiation'] }
  ]
};
