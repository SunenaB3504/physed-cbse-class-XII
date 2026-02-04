
import { Chapter } from '../types';

export const chapter3: Chapter = {
  id: 3,
  slug: 'yoga-lifestyle',
  name: 'Yoga as Preventive Measure for Lifestyle Disease',
  description: 'Detailed analysis of asanas for Obesity, Diabetes, Asthma, Hypertension, and Back Pain.',
  topics: [
    {
      id: 'intro',
      title: 'Yoga vs Exercise',
      description: 'Understanding why yoga is distinct from general physical exercise.',
      content: [
        'Yoga slows down respiration and metabolic rates.',
        'It arrests catabolism whereas exercise promotes it.',
        'Designed to affect internal organs and glands specifically.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Yoga vs General Exercise',
          type: 'table',
          data: {
            headers: ['Feature', 'Yoga', 'Exercise'],
            rows: [
              ['Metabolic Rate', 'Slows down', 'Speeds up'],
              ['Oxygen Consumption', 'Decreases', 'Increases'],
              ['Internal Glands', 'Stimulated specifically', 'General activation'],
              ['Body Temp', 'Stays stable', 'Rises']
            ]
          }
        }
      ]
    },
    {
      id: 'hypertension',
      title: 'Asanas for Hypertension',
      description: 'Management of high blood pressure through specific yogic postures.',
      content: [
        'Hypertension is BP > 140/90 mmHg.',
        'Beneficial asanas: Tadasana, Vajrasana, Pavan Muktasana, Ardha Chakrasana.',
        'Savasana is crucial for relaxation and blood pressure normalization.'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Tadasana (Mountain Pose)',
          type: 'flow',
          data: ['Stand erect, feet together', 'Interlock fingers, place on head', 'Inhale, raise heels and stretch up', 'Hold for 5-10 secs', 'Exhale, return heels and arms']
        },
        {
          id: 'v3',
          title: 'Hypertension Asana Benefits',
          type: 'table',
          data: {
            headers: ['Asana', 'Specific Benefit'],
            rows: [
              ['Tadasana', 'Improves posture, reduces laziness.'],
              ['Vajrasana', 'Improves digestion (can be done after meals).'],
              ['Pavan Muktasana', 'Relieves abdominal gas/wind.'],
              ['Ardha Chakrasana', 'Increases lung capacity, treats congestion.']
            ]
          }
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Asana', question: 'Which asana is also known as the "Cobra Pose"?', answer: 'Bhujangasana' },
    { id: 'f2', category: 'Asana', question: 'Name an asana beneficial for curing flat foot.', answer: 'Vajrasana or Adhomukhasavasana.' },
    { id: 'f3', category: 'Asana', question: 'Which asana is contraindicated for those with vertigo?', answer: 'Tadasana' },
    { id: 'f4', category: 'Asana', question: 'What is the Sanskrit meaning of "Vajra"?', answer: 'Thunderbolt' },
    { id: 'f5', category: 'Asana', question: 'Which asana should be avoided during pregnancy?', answer: 'Ardha Matsyendrasana (due to abdominal twist).' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2023-24',
      paperType: 'Board',
      marks: 1,
      type: 'MCQ',
      question: 'Identify the asana shown (knees to chest lying down).',
      answer: 'Pawanmuktasana',
      explanation: 'Pawanmuktasana involves lying on the back and pulling knees to the chest to release gas.'
    },
    {
      id: 'q2',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Discuss asanas helpful for a person suffering from Hypertension. Write procedure and contraindications for Tadasana.',
      answer: 'Asanas: Tadasana, Vajrasana, etc. Tadasana Procedure: Stand erect, heels up... Contra: Vertigo.',
      explanation: 'Tadasana stretches the entire body, regulating circulatory systems and calming the mind.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Lifestyle Diseases',
    children: [
      { id: 'm2', label: 'Obesity', children: [{ id: 'm3', label: 'Vajrasana' }, { id: 'm4', label: 'Trikonasana' }] },
      { id: 'm5', label: 'Diabetes', children: [{ id: 'm6', label: 'Bhujangasana' }, { id: 'm7', label: 'Pavan Muktasana' }] },
      { id: 'm8', label: 'Asthma', children: [{ id: 'm9', label: 'Sukhasana' }, { id: 'm10', label: 'Chakrasana' }] }
    ]
  },
  cheatSheet: [
    { title: 'Obesity Asanas', points: ['Vajrasana', 'Hastasana', 'Trikonasana', 'Ardh Matsyendrasana'] },
    { title: 'Diabetes Key Symptoms', points: ['Polyuria (Excessive urination)', 'Polydipsia (Excessive thirst)', 'Polyphagia (Increased appetite)'] }
  ]
};
