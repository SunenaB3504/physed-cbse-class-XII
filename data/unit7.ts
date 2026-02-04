
import { Chapter } from '../types';

export const unit7: Chapter = {
  id: 7,
  slug: 'physiology-injuries',
  name: 'Physiology & Injuries in Sports',
  description: 'Physiological factors of fitness, effects of exercise on body systems, and management of sports injuries.',
  topics: [
    {
      id: 'physio-factors',
      title: 'Physiological Factors of Fitness',
      description: 'Internal biological factors that determine an individual’s physical capabilities.',
      content: [
        'Strength: Determined by muscle size (hypertrophy), muscle composition (white fibers), and nerve impulses.',
        'Speed: Determined by explosive strength, muscle composition (fast-twitch fibers), and flexibility.',
        'Endurance: Determined by aerobic capacity (VO2 Max), lactate threshold, and glycogen storage.',
        'Flexibility: Determined by joint structure, ligament elasticity, and muscle temperature.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Fitness Components & Determinants',
          type: 'table',
          data: {
            headers: ['Component', 'Primary Physiological Determinant'],
            rows: [
              ['Strength', 'Muscle cross-sectional area (size) & fast fibers.'],
              ['Speed', 'Percentage of Fast Twitch (White) fibers.'],
              ['Endurance', 'Aerobic capacity and Hemoglobin levels.'],
              ['Flexibility', 'Elasticity of ligaments and tendons.']
            ]
          }
        }
      ]
    },
    {
      id: 'exercise-effects',
      title: 'Effects of Exercise on Body Systems',
      description: 'Long-term physiological adaptations to regular physical activity.',
      content: [
        'Muscular System: Increase in muscle size, strength, and capillary density; improved coordination.',
        'Cardio-Respiratory System: Heart hypertrophy (Athletes heart), increased stroke volume, decreased resting heart rate (Bradycardia).',
        'Lungs: Increased tidal volume, vital capacity, and improved gas exchange efficiency.'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Cardio-Respiratory Adaptations',
          type: 'grid',
          data: [
            { label: 'Stroke Volume', desc: 'Amount of blood pumped per beat increases.' },
            { label: 'Cardiac Output', desc: 'Total blood volume per minute increases during work.' },
            { label: 'Resting HR', desc: 'Decreases (Bradycardia) as the heart becomes efficient.' },
            { label: 'Vital Capacity', desc: 'Max volume of air exhaled after max inhalation increases.' }
          ]
        }
      ]
    },
    {
      id: 'injury-classification',
      title: 'Classification of Sports Injuries',
      description: 'Categorizing injuries based on the type of tissue affected.',
      content: [
        'Soft Tissue Injuries (STI): Damage to muscles, ligaments, and tendons. Includes Abrasion (skin scrape), Contusion (bruise), Sprain (ligament), and Strain (muscle/tendon).',
        'Bone Injuries: Fractures (Simple, Compound, Greenstick, Comminuted, Stress).',
        'Joint Injuries: Dislocations (Lower jaw, shoulder, hip, wrist).'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Soft Tissue Injury Types',
          type: 'table',
          data: {
            headers: ['Injury', 'Definition', 'Common Site'],
            rows: [
              ['Abrasion', 'Scraping of the skin surface.', 'Elbows, Knees'],
              ['Contusion', 'Crushing of soft tissue (bruise).', 'Muscle belly'],
              ['Sprain', 'Tear or overstretch of a ligament.', 'Ankle, Wrist'],
              ['Strain', 'Tear or overstretch of a muscle/tendon.', 'Hamstring, Groin'],
              ['Laceration', 'Deep cut or tear in the skin.', 'Face, Limbs']
            ]
          }
        },
        {
          id: 'v4',
          title: 'Types of Fractures',
          type: 'grid',
          data: [
            { label: 'Greenstick', desc: 'Bone bends and cracks (common in children).' },
            { label: 'Comminuted', desc: 'Bone breaks into three or more pieces.' },
            { label: 'Transverse', desc: 'The break is at a right angle to the bone axis.' },
            { label: 'Stress', desc: 'Small crack due to overuse or repetitive force.' }
          ]
        }
      ]
    },
    {
      id: 'first-aid',
      title: 'First Aid & RICER',
      description: 'Immediate care given to an injured person before professional help arrives.',
      content: [
        'Aims: Preserve life, prevent condition from worsening, and promote recovery.',
        'RICER Procedure: Rest, Ice, Compression, Elevation, Referral.',
        'PRICED: Protection, Rest, Ice, Compression, Elevation, Diagnosis.',
        'Management of STI: Immediate cold application to reduce swelling and pain.'
      ],
      visualizations: [
        {
          id: 'v5',
          title: 'RICER Protocol Flow',
          type: 'flow',
          data: [
            'Rest: Stop activity immediately.',
            'Ice: Apply for 15-20 mins every 2 hours.',
            'Compression: Wrap with elastic bandage.',
            'Elevation: Keep injury above heart level.',
            'Referral: Consult a specialist for diagnosis.'
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Injury', question: 'What is a Sprain?', answer: 'An injury to a ligament caused by overstretching or tearing.' },
    { id: 'f2', category: 'Technical', question: 'What is Cardiac Hypertrophy?', answer: 'Increase in the size of the heart muscle, often seen in endurance athletes.' },
    { id: 'f3', category: 'Technical', question: 'Which fiber type is responsible for explosive speed?', answer: 'White Fast Twitch Fibers.' },
    { id: 'f4', category: 'Injury', question: 'Define Contusion.', answer: 'A muscle injury where a direct blow causes bleeding under the skin without breaking it.' },
    { id: 'f5', category: 'Injury', question: 'What does "E" stand for in RICER?', answer: 'Elevation.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which of the following is a joint injury?',
      answer: 'Dislocation',
      aiExplanation: 'Dislocation is the displacement of bone surfaces in a joint, while others like Sprain are soft tissue injuries.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Explain the difference between a Strain and a Sprain.',
      answer: 'A Strain is an injury to a muscle or tendon, whereas a Sprain is an injury to a ligament.',
      aiExplanation: 'Both involve overstretching but affect different types of connective tissue.'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'What are the effects of regular exercise on the cardio-respiratory system?',
      answer: 'Increased stroke volume, decreased resting HR, increased vital capacity, better gas exchange, and heart hypertrophy.',
      aiExplanation: 'Regular training leads to functional and structural changes that improve aerobic efficiency.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 7: Physiology & Injuries',
    children: [
      {
        id: 'm2',
        label: 'Physiology',
        children: [{ id: 'm3', label: 'Fitness Factors' }, { id: 'm4', label: 'Exercise Effects' }]
      },
      {
        id: 'm5',
        label: 'Injuries',
        children: [{ id: 'm6', label: 'Soft Tissue' }, { id: 'm7', label: 'Bone/Joint' }]
      },
      {
        id: 'm8',
        label: 'Management',
        children: [{ id: 'm9', label: 'RICER' }, { id: 'm10', label: 'First Aid' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Injury Quick List', points: ['Sprain = Ligament', 'Strain = Muscle', 'Abrasion = Scrape', 'Contusion = Bruise', 'Laceration = Cut'] },
    { title: 'Fracture Types', points: ['Greenstick: Bent (Kids)', 'Comminuted: Many pieces', 'Stress: Overuse crack', 'Compound: Skin broken'] },
    { title: 'Exercise Adaptations', points: ['Hypertrophy: Bigger muscles/heart', 'Bradycardia: Lower resting HR', 'Capillarization: More blood vessels'] }
  ]
};
