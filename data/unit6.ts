
import { Chapter } from '../types';

export const unit6: Chapter = {
  id: 6,
  slug: 'test-measurement',
  name: 'Test & Measurement in Sports',
  description: 'Fitness testing protocols including SAI Khelo India, Harvard Step Test, and Rikli & Jones Senior Citizen Fitness Test.',
  topics: [
    {
      id: 'khelo-india',
      title: 'SAI Khelo India Fitness Test',
      description: 'Standardized fitness battery for school-going children in India.',
      content: [
        'Age Group 5-8 Years (Class 1-3): Focuses on fundamental movement skills. Tests include BMI, Flamingo Balance Test, and Plate Tapping Test.',
        'Age Group 9-18 Years (Class 4-12): Focuses on physical fitness components. Tests include BMI, 50m Dash (Speed), 600m Run/Walk (Endurance), Sit & Reach (Flexibility), and Strength tests.',
        'Strength Tests (9-18 yrs): Abdominal Partial Curl Up (Core), Push-Ups for Boys, and Modified Push-Ups for Girls.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'SAI Khelo India Test Battery',
          type: 'table',
          data: {
            headers: ['Component', 'Test Name (9-18 Years)', 'Purpose'],
            rows: [
              ['Body Composition', 'BMI', 'Healthy weight assessment.'],
              ['Speed', '50m Dash', 'Acceleration and speed.'],
              ['Endurance', '600m Run/Walk', 'Aerobic capacity.'],
              ['Flexibility', 'Sit & Reach', 'Lower back and hamstring flexibility.'],
              ['Core Strength', 'Partial Curl Up', 'Abdominal endurance.'],
              ['Upper Body Strength', 'Push-Ups (B) / Mod. Push-Ups (G)', 'Muscular strength.']
            ]
          }
        },
        {
          id: 'v2',
          title: 'Tests for Younger Kids (5-8 Yrs)',
          type: 'grid',
          data: [
            { label: 'BMI', desc: 'Height and weight measurement.' },
            { label: 'Flamingo Balance', desc: 'Static balance on one leg.' },
            { label: 'Plate Tapping', desc: 'Limb movement speed and coordination.' }
          ]
        }
      ]
    },
    {
      id: 'cardio-fitness',
      title: 'Measurement of Cardiovascular Fitness',
      description: 'Efficiency of heart and lungs to supply oxygen during activity.',
      content: [
        'Harvard Step Test: Developed by Brouha (1943). Measures aerobic fitness by stepping up and down a 20-inch bench for 5 minutes (or until exhaustion).',
        'Pulse Recovery: Heart rate is measured at 1-1.5 min, 2-2.5 min, and 3-3.5 min after the test.',
        'Fitness Index Score: (100 × Duration in seconds) / (2 × Sum of pulse counts in recovery).',
        'Rockport One Mile Test: Walking one mile as fast as possible to estimate VO2 Max based on time, heart rate, age, and weight.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Harvard Step Test Formulas',
          type: 'table',
          data: {
            headers: ['Version', 'Formula'],
            rows: [
              ['Long Form Index', '(100 × Test Duration in Sec) / (2 × Sum of 3 Pulse Counts)'],
              ['Short Form Index', '(100 × Test Duration in Sec) / (5.5 × Pulse Count 1)']
            ]
          }
        }
      ]
    },
    {
      id: 'senior-citizen-test',
      title: 'Rikli & Jones: Senior Citizen Fitness Test',
      description: 'Functional fitness battery designed for older adults (60+ years).',
      content: [
        'Purpose: To assess the functional capacity of seniors to perform activities of daily living (ADLs).',
        'Chair Stand Test: Measures lower body strength.',
        'Arm Curl Test: Measures upper body strength (5lb for women, 8lb for men).',
        'Chair Sit & Reach: Measures lower body flexibility.',
        'Back Scratch Test: Measures upper body (shoulder) flexibility.',
        '8-Foot Up & Go: Measures agility and dynamic balance.',
        '6-Minute Walk Test: Measures aerobic endurance.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Functional Fitness Matrix',
          type: 'table',
          data: {
            headers: ['Test Name', 'Component Measured'],
            rows: [
              ['Chair Stand', 'Lower Body Strength'],
              ['Arm Curl', 'Upper Body Strength'],
              ['Chair Sit & Reach', 'Lower Body Flexibility'],
              ['Back Scratch', 'Upper Body Flexibility'],
              ['8-Foot Up & Go', 'Agility / Dynamic Balance'],
              ['6-Minute Walk', 'Aerobic Endurance']
            ]
          }
        },
        {
          id: 'v5',
          title: 'Equipment Needed',
          type: 'grid',
          data: [
            { label: 'Chair Stand', desc: 'Straight back chair (no arms).' },
            { label: 'Arm Curl', desc: '5lb and 8lb dumbbells + Stopwatch.' },
            { label: '8-Foot Up & Go', desc: 'Cone, chair, and clear 8ft path.' }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Technical', question: 'Who developed the Senior Citizen Fitness Test?', answer: 'Rikli and Jones.' },
    { id: 'f2', category: 'Technical', question: 'What is the bench height for the Harvard Step Test?', answer: '20 inches (50.8 cm).' },
    { id: 'f3', category: 'Technical', question: 'Which test measures agility in senior citizens?', answer: '8-Foot Up & Go Test.' },
    { id: 'f4', category: 'Technical', question: 'Plate Tapping test is for which age group?', answer: '5-8 years (Class 1-3).' },
    { id: 'f5', category: 'Technical', question: 'What does the Back Scratch test measure?', answer: 'Upper body (shoulder) flexibility.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which test is used to measure upper body strength in senior citizens?',
      answer: 'Arm Curl Test',
      aiExplanation: 'Arm Curl test uses dumbbells to measure muscular endurance and strength of the biceps.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Calculate the fitness index for a student who completed the Harvard Step test for 5 minutes and had recovery pulse counts of 80, 70, and 60.',
      answer: 'Score = (300 * 100) / (2 * 210) = 30000 / 420 = 71.42',
      aiExplanation: 'Fitness Index = (Duration in sec * 100) / (2 * Sum of 3 recovery pulses).'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Explain the Rikli & Jones Senior Citizen Fitness Test battery in detail.',
      answer: 'Include: Chair Stand (Lower Strength), Arm Curl (Upper Strength), Chair Sit & Reach (Lower Flex), Back Scratch (Upper Flex), 8-ft Up & Go (Agility), 6-Min Walk (Endurance).',
      aiExplanation: 'Functional fitness is vital for seniors to maintain independence and perform daily tasks without assistance.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 6: Test & Measurement',
    children: [
      {
        id: 'm2',
        label: 'Khelo India',
        children: [{ id: 'm3', label: '5-8 Yrs (Balance)' }, { id: 'm4', label: '9-18 Yrs (Fitness)' }]
      },
      {
        id: 'm5',
        label: 'Cardio Tests',
        children: [{ id: 'm6', label: 'Harvard Step' }, { id: 'm7', label: 'Rockport 1-Mile' }]
      },
      {
        id: 'm8',
        label: 'Senior Citizens',
        children: [{ id: 'm9', label: 'Rikli & Jones' }, { id: 'm10', label: 'Functional Fitness' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Harvard Formula', points: ['Duration (sec) x 100 / (2 x Sum of Pulses)', 'Pulses taken at 1-1.5, 2-2.5, 3-3.5 mins'] },
    { title: 'Senior Citizen Weights', points: ['Arm Curl Men: 8 lbs', 'Arm Curl Women: 5 lbs'] },
    { title: 'Flexibility Tests', points: ['Junior (9-18): Sit & Reach', 'Senior: Chair Sit & Reach', 'Upper Body Senior: Back Scratch'] }
  ]
};
