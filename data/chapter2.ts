
import { Chapter } from '../types';

export const chapter2: Chapter = {
  id: 2,
  slug: 'yoga-preventive-lifestyle',
  name: 'Yogasanas as a Preventive Measure for Lifestyle Diseases',
  description: 'Management of Obesity, Diabetes, Asthma, Hypertension, and Back Pain through specific asanas.',
  topics: [
    {
      id: 'obesity-management',
      title: 'Obesity & Management',
      description: 'Obesity is a condition in which the body has accumulated so much fat that it might have a negative effect on health.',
      content: [
        'Obesity is defined as having a Body Mass Index (BMI) of 30 or higher.',
        'Primary asanas for obesity: Vajrasana, Hastasana, Trikonasana, and Ardha Matsyendrasana.',
        'Yoga helps in weight management by regulating metabolism and reducing stress-induced eating.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Trikonasana (Triangle Pose) Procedure',
          type: 'flow',
          data: [
            '1. Stand with legs 3-4 feet apart.',
            '2. Turn right foot 90 degrees out.',
            '3. Stretch arms sideways at shoulder level.',
            '4. Exhale, bend to the right, touching right foot with right hand.',
            '5. Look up at the left thumb.'
          ]
        },
        {
          id: 'v2',
          title: 'Obesity Asana Benefits',
          type: 'table',
          data: {
            headers: ['Asana', 'Specific Benefit'],
            rows: [
              ['Vajrasana', 'Improves digestion, can be done after meals.'],
              ['Trikonasana', 'Reduces waistline fat, improves flexibility.'],
              ['Ardha Matsyendrasana', 'Stimulates liver and kidneys, reduces belly fat.'],
              ['Hastasana', 'Stretches the entire body, tones abdominal muscles.']
            ]
          }
        }
      ]
    },
    {
      id: 'diabetes-asthma',
      title: 'Diabetes & Asthma',
      description: 'Management of blood glucose and respiratory health.',
      content: [
        'Diabetes: A condition where the body cannot produce or use insulin effectively.',
        'Asanas for Diabetes: Bhujangasana, Paschimottanasana, Pawanmuktasana, Ardha Matsyendrasana.',
        'Asthma: A chronic condition that affects the airways of the lungs.',
        'Asanas for Asthma: Chakrasana, Gomukhasana, Matsyasana, Parvatasana.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Bhujangasana (Cobra Pose)',
          type: 'flow',
          data: [
            '1. Lie prone (on stomach).',
            '2. Place palms under shoulders.',
            '3. Inhale, lift chest up while keeping navel on ground.',
            '4. Look upwards, hold breath.',
            '5. Exhale, slowly lower the body.'
          ]
        },
        {
          id: 'v4',
          title: 'Paschimottanasana Procedure',
          type: 'flow',
          data: [
            '1. Sit with legs stretched out.',
            '2. Inhale, raise arms up.',
            '3. Exhale, bend forward from hips.',
            '4. Try to hold toes with fingers.',
            '5. Rest forehead on knees.'
          ]
        },
        {
          id: 'v5',
          title: 'Contraindications Table',
          type: 'table',
          data: {
            headers: ['Asana', 'Avoid If...'],
            rows: [
              ['Bhujangasana', 'Pregnancy, hernia, or recent abdominal surgery.'],
              ['Chakrasana', 'High BP, heart problems, or vertigo.'],
              ['Pawanmuktasana', 'Severe back pain or abdominal injuries.'],
              ['Gomukhasana', 'Severe shoulder or knee injury.']
            ]
          }
        }
      ]
    },
    {
      id: 'hypertension-backpain',
      title: 'Hypertension & Back Pain',
      description: 'Regulating blood pressure and spinal health.',
      content: [
        'Hypertension: High blood pressure (above 140/90 mmHg).',
        'Asanas for Hypertension: Tadasana, Shavasana, Ardha Chakrasana, Pawanmuktasana.',
        'Back Pain: Discomfort in the lumbar, thoracic or cervical region.',
        'Asanas for Back Pain: Tadasana, Shalabhasana, Bhujangasana, Ushtrasana.'
      ],
      visualizations: [
        {
          id: 'v6',
          title: 'Ardha Chakrasana (Half Wheel Pose)',
          type: 'flow',
          data: [
            '1. Stand straight, feet together.',
            '2. Place hands on hips, thumbs at back.',
            '3. Inhale, tilt head back.',
            '4. Bend backwards while supporting the lower back.',
            '5. Breathe normally, then return.'
          ]
        },
        {
          id: 'v7',
          title: 'Shalabhasana (Locust Pose)',
          type: 'flow',
          data: [
            '1. Lie prone, arms at sides.',
            '2. Inhale, lift both legs up without bending knees.',
            '3. Keep chin on ground.',
            '4. Hold for 10-20 seconds.',
            '5. Exhale, lower legs slowly.'
          ]
        },
        {
          id: 'v8',
          title: 'Lifestyle Disease Summary',
          type: 'table',
          data: {
            headers: ['Disease', 'Primary Preventive Asanas'],
            rows: [
              ['Obesity', 'Vajrasana, Trikonasana, Ardha Matsyendrasana'],
              ['Diabetes', 'Bhujangasana, Pawanmuktasana, Paschimottanasana'],
              ['Asthma', 'Sukhasana, Chakrasana, Gomukhasana'],
              ['Hypertension', 'Tadasana, Shavasana, Ardha Chakrasana'],
              ['Back Pain', 'Tadasana, Bhujangasana, Ushtrasana']
            ]
          }
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Asana', question: 'Which asana is most effective for curing acidity and gas?', answer: 'Pawanmuktasana (Wind Relieving Pose).' },
    { id: 'f2', category: 'Asana', question: 'Contraindication of Tadasana?', answer: 'People suffering from low blood pressure or severe vertigo.' },
    { id: 'f3', category: 'Asana', question: 'Benefit of Bhujangasana for diabetics?', answer: 'It massages the pancreas and stimulates insulin secretion.' },
    { id: 'f4', category: 'Asana', question: 'Which asana is known as the "Spinal Twist"?', answer: 'Ardha Matsyendrasana.' },
    { id: 'f5', category: 'Asana', question: 'Best asana for hypertension and stress?', answer: 'Shavasana (Corpse Pose).' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Identify the asana where the body looks like a Cobra.',
      answer: 'Bhujangasana',
      explanation: 'Bhujang means cobra. The lifted chest and head resemble a cobra with its hood raised.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Explain the benefits and contraindications of Pawanmuktasana.',
      answer: 'Benefits: Relieves gas, improves digestion, tones abdominal muscles. Contra: Hernia, pregnancy, recent abdominal surgery.',
      explanation: 'Pawanmuktasana involves pressing knees against the abdomen, which aids in releasing trapped digestive gases.'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Define Asthma. Suggest any four asanas for its prevention and write the procedure of any one.',
      answer: 'Asthma is a respiratory condition. Asanas: Gomukhasana, Chakrasana, Matsyasana, Parvatasana. (Procedure of any one included).',
      explanation: 'Yoga improves lung capacity and strengthens the respiratory muscles, reducing the frequency of asthma attacks.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Yoga & Lifestyle',
    children: [
      {
        id: 'm2',
        label: 'Obesity',
        children: [{ id: 'm3', label: 'Vajrasana' }, { id: 'm4', label: 'Trikonasana' }, { id: 'm5', label: 'A. Matsyendrasana' }]
      },
      {
        id: 'm6',
        label: 'Diabetes',
        children: [{ id: 'm7', label: 'Bhujangasana' }, { id: 'm8', label: 'Paschimottanasana' }, { id: 'm9', label: 'Pawanmuktasana' }]
      },
      {
        id: 'm10',
        label: 'Asthma',
        children: [{ id: 'm11', label: 'Gomukhasana' }, { id: 'm12', label: 'Chakrasana' }, { id: 'm13', label: 'Matsyasana' }]
      },
      {
        id: 'm14',
        label: 'Hypertension',
        children: [{ id: 'm15', label: 'Tadasana' }, { id: 'm16', label: 'Shavasana' }, { id: 'm17', label: 'A. Chakrasana' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Asana Identification', points: ['Cobra: Bhujangasana', 'Triangle: Trikonasana', 'Spinal Twist: Ardha Matsyendrasana', 'Locust: Shalabhasana', 'Locust: Ushtrasana'] },
    { title: 'Common Contraindications', points: ['High BP: Avoid Chakrasana', 'Back Injury: Avoid Forward Bends', 'Hernia: Avoid Cobra/Bow', 'Vertigo: Avoid Tadasana/Standing Stretches'] },
    { title: 'Disease Targets', points: ['Pancreas: Mandukasana/Bhujangasana (Diabetes)', 'Lungs: Gomukhasana/Sukhasana (Asthma)', 'Heart: Shavasana (Hypertension)', 'Abdomen: Pawanmuktasana (Obesity)'] }
  ]
};
