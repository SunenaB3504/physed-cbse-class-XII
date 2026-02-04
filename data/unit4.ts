
import { Chapter } from '../types';

export const unit4: Chapter = {
  id: 4,
  slug: 'sports-cwsn',
  name: 'Physical Education & Sports for CWSN',
  description: 'Adaptive physical education, disability sports organizations, and strategies for inclusion of children with special needs.',
  topics: [
    {
      id: 'disability-orgs',
      title: 'Disability Sports Organizations',
      description: 'Major global and national bodies promoting sports for the differently-abled.',
      content: [
        'Special Olympics Bharat: National federation recognized by Special Olympics International, focusing on intellectual disabilities.',
        'Paralympics: Multi-sport events for athletes with physical impairments (limb deficiency, impaired muscle power, etc.).',
        'Deaflympics: International Olympic Committee-sanctioned event for deaf athletes where communication is through visual signals.',
        'Classification: A system used in disability sports to ensure fair competition by grouping athletes with similar functional limitations.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Organization Comparison',
          type: 'table',
          data: {
            headers: ['Organization', 'Target Group', 'Key Characteristic'],
            rows: [
              ['Special Olympics', 'Intellectual Disabilities', 'Year-round training and competition.'],
              ['Paralympics', 'Physical Impairments', 'Highest level of athletic excellence.'],
              ['Deaflympics', 'Hearing Impairment', 'Visual cues instead of auditory signals.']
            ]
          }
        },
        {
          id: 'v2',
          title: 'Special Olympics Bharat Motto',
          type: 'grid',
          data: [
            { label: 'The Oath', desc: '"Let me win. But if I cannot win, let me be brave in the attempt."' }
          ]
        }
      ]
    },
    {
      id: 'inclusion-concept',
      title: 'Concept of Inclusion',
      description: 'Integrating children with disabilities into general physical education settings.',
      content: [
        'Inclusion: The practice of educating students with disabilities in regular classrooms alongside their non-disabled peers.',
        'Need for Inclusion: Promoting social interaction, boosting self-esteem, and fostering empathy among regular students.',
        'Implementation: Requires modified curriculum, trained staff, and accessible infrastructure.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Benefits of Inclusion',
          type: 'grid',
          data: [
            { label: 'Social Skill', desc: 'Interaction with peers reduces isolation.' },
            { label: 'Psychological', desc: 'Improved self-confidence and body image.' },
            { label: 'Physical', desc: 'Enhanced motor skills and fitness levels.' },
            { label: 'Academic', desc: 'Better focus and cognitive engagement.' }
          ]
        }
      ]
    },
    {
      id: 'adaptive-strategies',
      title: 'Strategies for Physical Activity',
      description: 'Methods to make physical activities accessible and effective for CWSN.',
      content: [
        'Modified Equipment: Using lighter balls, larger targets, or brightly colored objects.',
        'Rule Modification: Allowing extra bounces in tennis or reducing court size.',
        'Instructional Design: Using visual aids, sign language, or physical guidance (hand-over-hand).',
        'Environmental Adjustment: Ensuring ramps, smooth surfaces, and distraction-free areas.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Implementation Checklist',
          type: 'flow',
          data: [
            '1. Medical Assessment',
            '2. Goal Setting (IEP)',
            '3. Equipment Modification',
            '4. Simplified Instructions',
            '5. Safe Participation'
          ]
        },
        {
          id: 'v5',
          title: 'Assistive Technology',
          type: 'table',
          data: {
            headers: ['Technology', 'Usage in Sports'],
            rows: [
              ['Prosthetics', 'High-performance running blades for amputees.'],
              ['Wheelchairs', 'Specialized lightweight chairs for racing/basketball.'],
              ['Auditory Balls', 'Balls with bells for visually impaired athletes.'],
              ['Visual Cues', 'Strobe lights replacing starting guns for deaf athletes.']
            ]
          }
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Technical', question: 'What is the motto of Special Olympics?', answer: 'Let me win. But if I cannot win, let me be brave in the attempt.' },
    { id: 'f2', category: 'Technical', question: 'Who is eligible for Deaflympics?', answer: 'Athletes with hearing loss of at least 55 decibels in their better ear.' },
    { id: 'f3', category: 'Technical', question: 'Define Adaptive Physical Education.', answer: 'A modified program of physical activities designed to meet the unique needs of individuals with disabilities.' },
    { id: 'f4', category: 'Management', question: 'What is the full form of IEP?', answer: 'Individualized Education Program.' },
    { id: 'f5', category: 'Technical', question: 'Name one strategy to make activities accessible for visually impaired.', answer: 'Using sound-emitting balls or tactile boundaries.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which organization is responsible for the Paralympic Games?',
      answer: 'International Paralympic Committee (IPC)',
      aiExplanation: 'The IPC is the global governing body for the Paralympic movement.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Explain any three strategies to make physical activities accessible for CWSN.',
      answer: '1. Modified equipment. 2. Simplified instructions. 3. Accessible environment.',
      aiExplanation: 'Adaptations must be specific to the disability type to ensure safety and engagement.'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Define Inclusion. Discuss its need and implementation in Physical Education.',
      answer: 'Inclusion is integrating CWSN in regular settings. Need: Social, Psychological. Implementation: Staff training, infrastructure, curriculum.',
      aiExplanation: 'Inclusion fosters a sense of belonging and prepares all students for a diverse society.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 4: CWSN Sports',
    children: [
      {
        id: 'm2',
        label: 'Organizations',
        children: [{ id: 'm3', label: 'Sp. Olympics Bharat' }, { id: 'm4', label: 'Paralympics' }, { id: 'm5', label: 'Deaflympics' }]
      },
      {
        id: 'm6',
        label: 'Key Concepts',
        children: [{ id: 'm7', label: 'Inclusion' }, { id: 'm8', label: 'Adaptive PE' }, { id: 'm9', label: 'Assistive Tech' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Org Quick Facts', points: ['Special Olympics = Intellectual', 'Paralympics = Physical', 'Deaflympics = 55dB+ Hearing loss', 'IOC recognized = Deaflympics'] },
    { title: 'Inclusion Pillars', points: ['Acceptance (Social)', 'Accessibility (Physical)', 'Adaptation (Curricular)', 'Assistance (Staff)'] },
    { title: 'Modification Tips', points: ['Lighter/Bigger equipment', 'Visual/Tactile instructions', 'Shorter duration/Rest intervals', 'Barrier-free environment'] }
  ]
};
