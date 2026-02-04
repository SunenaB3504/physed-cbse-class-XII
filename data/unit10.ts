
import { Chapter } from '../types';

export const unit10: Chapter = {
  id: 10,
  slug: 'training-sports',
  name: 'Training in Sports',
  description: 'Concepts of training, cycle types, and methods to develop Strength, Endurance, Speed, Flexibility, and Coordinative Abilities.',
  topics: [
    {
      id: 'strength-development',
      title: 'Developing Strength',
      description: 'The ability of muscles to overcome resistance.',
      content: [
        'Isometric Exercises: Static exercises where muscle length stays constant (e.g., pushing a wall). Developed by Hettinger and Muller.',
        'Isotonic Exercises: Dynamic exercises involving movement (e.g., weightlifting). Developed by De Lorme.',
        'Isokinetic Exercises: Performed on specialized machines at a constant speed (e.g., Cybex machines). Developed by J.J. Perrine.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Strength Training Methods',
          type: 'table',
          data: {
            headers: ['Method', 'Movement', 'Muscle Length', 'Founder'],
            rows: [
              ['Isometric', 'Static (No movement)', 'Remains Same', 'Hettinger & Muller'],
              ['Isotonic', 'Dynamic (Movement)', 'Changes (Shortens/Lengthens)', 'De Lorme'],
              ['Isokinetic', 'Dynamic (Constant speed)', 'Changes', 'J.J. Perrine']
            ]
          }
        }
      ]
    },
    {
      id: 'endurance-speed',
      title: 'Endurance & Speed',
      description: 'Ability to sustain activity and perform movements at maximum rate.',
      content: [
        'Endurance Methods: Continuous Method (low intensity, long duration), Interval Method (work with recovery periods), and Fartlek Method (speed play in natural terrain).',
        'Speed Methods: Acceleration Runs (achieving max speed from stationary) and Pace Runs (maintaining max speed for duration).'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Endurance Training Comparison',
          type: 'table',
          data: {
            headers: ['Method', 'Intensity', 'Duration', 'Key Feature'],
            rows: [
              ['Continuous', 'Low (60-80%)', 'Very Long', 'No Rest periods.'],
              ['Interval', 'High (80-90%)', 'Medium', 'Incomplete recovery.'],
              ['Fartlek', 'Varying', 'Medium-Long', 'Speed play, natural terrain.']
            ]
          }
        },
        {
          id: 'v3',
          title: 'Speed Training Logic',
          type: 'grid',
          data: [
            { label: 'Acceleration', desc: '0 to Max Speed. Focus on power and technique.' },
            { label: 'Pace Runs', desc: 'Max speed maintenance. Focus on efficiency.' }
          ]
        }
      ]
    },
    {
      id: 'flexibility-coord',
      title: 'Flexibility & Coordinative Abilities',
      description: 'Range of motion and the ability to synchronize body movements.',
      content: [
        'Flexibility: Active (without help) and Passive (with external help). Methods include Ballistic, Static Stretching, and PNF (Proprioceptive Neuromuscular Facilitation).',
        'Coordinative Abilities: Orientation, Coupling, Reaction, Balance, Rhythm, Adaptation, and Differentiation abilities.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Types of Flexibility',
          type: 'flow',
          data: [
            'Active Flexibility (Static & Dynamic)',
            'Passive Flexibility (Higher range)'
          ]
        },
        {
          id: 'v5',
          title: '7 Coordinative Abilities',
          type: 'grid',
          data: [
            { label: 'Orientation', desc: 'Determining position in space/time.' },
            { label: 'Coupling', desc: 'Coordinating body part movements.' },
            { label: 'Reaction', desc: 'Quick response to signals.' },
            { label: 'Balance', desc: 'Maintaining equilibrium.' },
            { label: 'Rhythm', desc: 'External/Internal flow of movement.' },
            { label: 'Adaptation', desc: 'Changing movement based on situation.' },
            { label: 'Differentiation', desc: 'High degree of accuracy and economy.' }
          ]
        }
      ]
    },
    {
      id: 'circuit-training',
      title: 'Circuit Training',
      description: 'A series of exercises performed in a sequence with minimal rest.',
      content: [
        'Developed by Morgan and Adamson in 1953.',
        'Involves 5 to 10 stations where different muscle groups are worked alternately.',
        'Advantages: Time-efficient, improves both strength and endurance, can be customized for any sport.'
      ],
      visualizations: [
        {
          id: 'v6',
          title: 'Circuit Design Principles',
          type: 'flow',
          data: [
            '1. Select Stations',
            '2. Arrange Alternating Muscles',
            '3. Determine Work Time',
            '4. Set Recovery Time',
            '5. Monitor Progress'
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Technical', question: 'Who developed Isokinetic exercises?', answer: 'J.J. Perrine.' },
    { id: 'f2', category: 'Technical', question: 'What is "Speed Play" also known as?', answer: 'Fartlek Training.' },
    { id: 'f3', category: 'Technical', question: 'Define PNF stretching.', answer: 'Proprioceptive Neuromuscular Facilitation; advanced flexibility training using contraction/relaxation.' },
    { id: 'f4', category: 'Technical', question: 'Founder of Circuit Training?', answer: 'Morgan and Adamson.' },
    { id: 'f5', category: 'Technical', question: 'What is the duration of a Macrocycle?', answer: 'Several months to a year.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which method of training is best for developing endurance in natural surroundings?',
      answer: 'Fartlek Method',
      aiExplanation: 'Fartlek involves varying speed in natural terrain like woods or hills.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Explain the difference between Isometric and Isotonic exercises.',
      answer: 'Isometric: No movement, constant length. Isotonic: Visible movement, changing length.',
      aiExplanation: 'Both are vital for strength but differ in mechanical output and muscle contraction type.'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Define Flexibility. Discuss the various methods used to improve it.',
      answer: 'Flexibility is range of motion. Methods: Ballistic, Static, Dynamic, and PNF stretching.',
      aiExplanation: 'Improving flexibility reduces injury risk and enhances movement efficiency in sports.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 10: Training',
    children: [
      {
        id: 'm2',
        label: 'Components',
        children: [{ id: 'm3', label: 'Strength' }, { id: 'm4', label: 'Endurance' }, { id: 'm5', label: 'Speed' }, { id: 'm6', label: 'Flexibility' }]
      },
      {
        id: 'm7',
        label: 'Training Methods',
        children: [{ id: 'm8', label: 'Circuit Training' }, { id: 'm9', label: 'Cycle (Micro/Meso/Macro)' }]
      },
      {
        id: 'm10',
        label: 'Abilities',
        children: [{ id: 'm11', label: 'Coordinative' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Training Founders', points: ['Isometric: Hettinger/Muller', 'Isotonic: De Lorme', 'Isokinetic: Perrine', 'Circuit: Morgan/Adamson'] },
    { title: 'Cycle Durations', points: ['Micro: 3-10 days', 'Meso: 3-6 weeks', 'Macro: 3-12 months'] },
    { title: 'Endurance Quick Look', points: ['Continuous: Aerobic base', 'Interval: Recovery adaptation', 'Fartlek: Heart rate variance'] }
  ]
};
