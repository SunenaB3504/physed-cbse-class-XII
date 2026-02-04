
import { Chapter } from '../types';

export const unit8: Chapter = {
  id: 8,
  slug: 'biomechanics-sports',
  name: 'Biomechanics & Sports',
  description: 'Newton’s Laws of motion, types of equilibrium, center of gravity, and projectile trajectory in sporting activities.',
  topics: [
    {
      id: 'newton-laws',
      title: 'Newton’s Laws of Motion',
      description: 'The fundamental physical principles governing movement in sports.',
      content: [
        'Law of Inertia (1st Law): A body remains at rest or in uniform motion unless acted upon by an external force. Example: A football remains still until kicked.',
        'Law of Acceleration (2nd Law): The acceleration of an object is directly proportional to the force applied and inversely proportional to its mass. Example: Pushing a shot-put with more force for greater distance.',
        'Law of Reaction (3rd Law): For every action, there is an equal and opposite reaction. Example: A swimmer pushing back against the water to move forward.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Newton’s Laws in Sports',
          type: 'table',
          data: {
            headers: ['Law', 'Sporting Application'],
            rows: [
              ['Law of Inertia', 'Sprinting start (overcoming inertia of rest).'],
              ['Law of Acceleration', 'Increasing the speed of a cricket ball during a throw.'],
              ['Law of Reaction', 'The bounce of a basketball on the court.']
            ]
          }
        }
      ]
    },
    {
      id: 'equilibrium-cg',
      title: 'Equilibrium & Center of Gravity',
      description: 'Stability and balance factors in athletic performance.',
      content: [
        'Equilibrium: A state of balance. Static Equilibrium (body at rest) and Dynamic Equilibrium (body in motion).',
        'Center of Gravity (C.G.): An imaginary point where the entire weight of the body is concentrated.',
        'Stability Factors: Lower C.G., wider base of support, and keeping the line of gravity within the base of support increases stability.'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Types of Equilibrium',
          type: 'grid',
          data: [
            { label: 'Stable', desc: 'Body returns to original position after slight displacement (e.g., wrestling stance).' },
            { label: 'Unstable', desc: 'Body moves away from original position (e.g., handstand).' },
            { label: 'Neutral', desc: 'C.G. remains at the same height (e.g., ball rolling).' }
          ]
        },
        {
          id: 'v3',
          title: 'Stability Principles',
          type: 'flow',
          data: [
            'Lower the C.G.',
            'Widen the Base',
            'Align Line of Gravity',
            'Increase Mass'
          ]
        }
      ]
    },
    {
      id: 'friction-sports',
      title: 'Friction & Sports',
      description: 'The force resisting the relative motion of solid surfaces.',
      content: [
        'Types of Friction: Static Friction (preventing motion), Sliding Friction (rubbing), and Rolling Friction (wheels/balls).',
        'Advantages: Spikes in athletics for grip, chalk in gymnastics, rough surface of a basketball.',
        'Disadvantages: Wear and tear of equipment, heat production, and slowing down movement in some sports.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Friction Management',
          type: 'table',
          data: {
            headers: ['Method', 'Effect', 'Example'],
            rows: [
              ['Cleats/Spikes', 'Increases Friction', 'Football/Sprint shoes.'],
              ['Lubrication', 'Decreases Friction', 'Skiing wax.'],
              ['Chalk Powder', 'Increases Friction', 'Weightlifting/Gymnastics.'],
              ['Ball Bearings', 'Decreases Friction', 'Skateboarding wheels.']
            ]
          }
        }
      ]
    },
    {
      id: 'projectile-motion',
      title: 'Projectile in Sports',
      description: 'The path of an object thrown or kicked into the air.',
      content: [
        'Trajectory: The path followed by a projectile (Parabolic path).',
        'Factors Affecting Trajectory: Angle of release (Optimal is ~45° for distance), Initial Velocity, Height of release, Gravity, and Air Resistance.',
        'Examples: Javelin throw, Discus, Long Jump (body as projectile), and Basketball shooting.'
      ],
      visualizations: [
        {
          id: 'v5',
          title: 'Factors affecting Projectile Path',
          type: 'grid',
          data: [
            { label: 'Angle', desc: 'Determines height and horizontal distance.' },
            { label: 'Velocity', desc: 'Higher initial speed leads to greater range.' },
            { label: 'Gravity', desc: 'Pulls the object down to earth.' },
            { label: 'Air Resistance', desc: 'Affects the glide and speed of the object.' }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Technical', question: 'Define Biomechanics.', answer: 'The study of mechanical laws relating to the movement or structure of living organisms.' },
    { id: 'f2', category: 'Technical', question: 'Which Law is the "Law of Inertia"?', answer: 'Newton’s First Law of Motion.' },
    { id: 'f3', category: 'Technical', question: 'What is the optimal angle for maximum projectile range?', answer: '45 degrees (under ideal conditions).' },
    { id: 'f4', category: 'Technical', question: 'What happens to stability when the C.G. is lowered?', answer: 'Stability increases.' },
    { id: 'f5', category: 'Technical', question: 'Name the force that opposes the motion of a rolling ball.', answer: 'Rolling Friction.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'A swimmer pushes the water backwards to move forward. Which law is being applied?',
      answer: 'Newton’s Third Law of Motion',
      aiExplanation: 'Action (pushing water) and Reaction (moving forward) are equal and opposite.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Explain the factors that affect the trajectory of a projectile.',
      answer: 'Initial velocity, angle of release, gravity, and air resistance.',
      aiExplanation: 'These physical factors combined dictate the distance and height achieved by any object in flight.'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Define Equilibrium. Discuss the principles of stability and their application in wrestling.',
      answer: 'Equilibrium is state of balance. Stability: Lower C.G., wide base. Wrestlers stay low and wide to prevent being toppled.',
      aiExplanation: 'Understanding the center of gravity and base of support is critical for maintaining balance under external force.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 8: Biomechanics',
    children: [
      {
        id: 'm2',
        label: 'Newton’s Laws',
        children: [{ id: 'm3', label: '1: Inertia' }, { id: 'm4', label: '2: Acceleration' }, { id: 'm5', label: '3: Reaction' }]
      },
      {
        id: 'm6',
        label: 'Equilibrium',
        children: [{ id: 'm7', label: 'Static vs Dynamic' }, { id: 'm8', label: 'C.G. & Stability' }]
      },
      {
        id: 'm9',
        label: 'Forces',
        children: [{ id: 'm10', label: 'Friction' }, { id: 'm11', label: 'Projectile' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Newton Summary', points: ['1st: Stop/Start inertia', '2nd: More force = More speed', '3rd: Push back to go forward'] },
    { title: 'Stability Hacks', points: ['Stay low (Drop C.G.)', 'Stand wide (Increase Base)', 'Be heavy (Increase Mass)', 'Line of gravity must stay in base'] },
    { title: 'Projectile Tips', points: ['Path is a Parabola', 'Gravity pulls down', 'Air slows down', 'Velocity drives forward'] }
  ]
};
