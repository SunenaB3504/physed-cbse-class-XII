
import { Chapter } from '../types';

export const unit2: Chapter = {
  id: 2,
  slug: 'children-women-sports',
  name: 'Children & Women in Sports',
  description: 'Analysis of postural deformities, their corrective measures, and specific health considerations for women athletes.',
  topics: [
    {
      id: 'postural-deformities',
      title: 'Common Postural Deformities',
      description: 'Physical misalignments of the skeletal structure and their corrective exercises.',
      content: [
        'Postural deformities occur due to weak muscles, improper footwear, or congenital factors.',
        'Knock Knees (Genu Valgum): Knees touch each other in normal standing position.',
        'Flat Foot (Pes Planus): Absence of the longitudinal arch of the foot.',
        'Kyphosis: Excessive outward curvature of the spine, causing hunching of the back.',
        'Lordosis: Increased forward curve in the lumbar region (sway back).',
        'Scoliosis: Lateral (sideways) curvature of the spine.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Deformities vs. Corrective Measures',
          type: 'table',
          data: {
            headers: ['Deformity', 'Corrective Exercise/Measure'],
            rows: [
              ['Knock Knees', 'Horse Riding, keeping pillow between knees while sleeping.'],
              ['Flat Foot', 'Walking on heels/toes, picking marbles with toes.'],
              ['Round Shoulders', 'Chakrasana, Dhanurasana, holding horizontal bar.'],
              ['Kyphosis', 'Swimming (backstroke), Bhujangasana.'],
              ['Lordosis', 'Paschimottanasana, Halasana, Sit-ups.'],
              ['Bow Legs', 'Walking on inner edge of feet, Garudasana.']
            ]
          }
        },
        {
          id: 'v2',
          title: 'Types of Spinal Curves',
          type: 'grid',
          data: [
            { label: 'Kyphosis', desc: 'Thoracic region (Upper back) - Hunch back.' },
            { label: 'Lordosis', desc: 'Lumbar region (Lower back) - Sway back.' },
            { label: 'Scoliosis', desc: 'Sideways curve (C or S shape).' }
          ]
        }
      ]
    },
    {
      id: 'women-considerations',
      title: 'Women in Sports: Special Considerations',
      description: 'Biological milestones and physiological abnormalities in female athletes.',
      content: [
        'Menarche: The first occurrence of menstruation, marking the start of reproductive age (typically 12-15 years).',
        'Menstrual Dysfunction: Abnormalities in the menstrual cycle including pain (dysmenorrhea) or irregularity.',
        'Impact of Exercise: Moderate exercise can alleviate symptoms, but excessive training may lead to disorders.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Menstrual Cycle Abnormalities',
          type: 'table',
          data: {
            headers: ['Term', 'Definition'],
            rows: [
              ['Amenorrhea', 'Absence of menstrual periods for 3+ months.'],
              ['Dysmenorrhea', 'Painful menstruation involving abdominal cramps.'],
              ['Menorrhagia', 'Heavy or prolonged menstrual bleeding.'],
              ['Oligomenorrhea', 'Infrequent menstrual periods.']
            ]
          }
        }
      ]
    },
    {
      id: 'athlete-triad',
      title: 'Female Athlete Triad',
      description: 'A serious health syndrome involving three interrelated conditions.',
      content: [
        'Osteoporosis: Low bone mineral density and deterioration of bone tissue, leading to fractures.',
        'Amenorrhea: Absence of menstruation due to low energy availability or excessive physical stress.',
        'Eating Disorders: Psychological conditions like Anorexia Nervosa (fear of weight gain) and Bulimia Nervosa (binge/purge cycle).'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'The Triad Components (Triangle)',
          type: 'grid',
          data: [
            { label: 'Energy Deficiency', desc: 'Low calorie intake vs high expenditure.' },
            { label: 'Menstrual Disturbance', desc: 'Hormonal imbalances leading to Amenorrhea.' },
            { label: 'Bone Loss', desc: 'Lowered estrogen leads to Osteoporosis.' }
          ]
        },
        {
          id: 'v5',
          title: 'Eating Disorders Comparison',
          type: 'table',
          data: {
            headers: ['Condition', 'Primary Symptom', 'Behavior'],
            rows: [
              ['Anorexia Nervosa', 'Self-Starvation', 'Distorted body image, refusal to eat.'],
              ['Bulimia Nervosa', 'Binge & Purge', 'Eating large amounts then vomiting/laxatives.']
            ]
          }
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Technical', question: 'What is Genu Valgum commonly known as?', answer: 'Knock Knees.' },
    { id: 'f2', category: 'Technical', question: 'Which spinal deformity is known as "Hollow Back"?', answer: 'Lordosis.' },
    { id: 'f3', category: 'Technical', question: 'Define Menarche.', answer: 'The first occurrence of menstruation in a female.' },
    { id: 'f4', category: 'Injury', question: 'Which corrective exercise is best for Round Shoulders?', answer: 'Chakrasana or Dhanurasana.' },
    { id: 'f5', category: 'Technical', question: 'What is Primary Amenorrhea?', answer: 'When a girl has not started her periods by the age of 15.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which of the following is NOT a component of the Female Athlete Triad?',
      answer: 'Hypertension',
      explanation: 'The Triad consists of Osteoporosis, Amenorrhea, and Eating Disorders.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Differentiate between Anorexia Nervosa and Bulimia Nervosa.',
      answer: 'Anorexia involves self-starvation and intense fear of weight gain, while Bulimia involves cycles of overeating followed by purging.',
      explanation: 'Both are serious eating disorders but have different behavioral patterns regarding food consumption and elimination.'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'What are postural deformities? List any four and suggest corrective measures for them.',
      answer: 'Deformities: Knock Knees (Pillow exercise), Flat Foot (Tarsal exercise), Scoliosis (Hanging on bars), Kyphosis (Bhujangasana).',
      explanation: 'Postural deformities are misalignments that can be corrected through targeted physical therapy and yogic asanas.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 2: Children & Women',
    children: [
      {
        id: 'm2',
        label: 'Deformities',
        children: [{ id: 'm3', label: 'Spinal (Ky/Lo/Sc)' }, { id: 'm4', label: 'Foot (Flat)' }, { id: 'm5', label: 'Legs (Knock/Bow)' }]
      },
      {
        id: 'm6',
        label: 'Women Health',
        children: [{ id: 'm7', label: 'Menarche' }, { id: 'm8', label: 'Menstrual Cycle' }, { id: 'm9', label: 'Triad' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Deformity Cheat Codes', points: ['Kyphosis = Back hump', 'Lordosis = Inward curve', 'Scoliosis = S/C shape', 'Knock Knees = Genu Valgum', 'Bow Legs = Genu Varum'] },
    { title: 'Corrective Exercises', points: ['Flat Foot: Toe walking', 'Knock Knees: Horse riding', 'Lordosis: Halasana', 'Round Shoulders: Dhanurasana'] },
    { title: 'Triad Quick Facts', points: ['Amenorrhea = No periods', 'Osteoporosis = Brittle bones', 'Anorexia = No eating', 'Bulimia = Binge/Purge'] }
  ]
};
