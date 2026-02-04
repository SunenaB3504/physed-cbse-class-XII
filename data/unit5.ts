import { Chapter } from '../types';

export const unit5: Chapter = {
  id: 5,
  slug: 'children-women-sports',
  name: 'Children & Women in Sports',
  description: 'Motor development, exercise guidelines by age, postural deformities, and special considerations for female athletes.',
  topics: [
    {
      id: 'motor-development',
      title: 'Motor Development',
      description: 'Progressive change in movement behavior throughout the lifecycle.',
      content: [
        'Definition: Continuous change in motor behavior brought about by interaction among task requirements, biology, and environment.',
        'Gross Motor Skills: Involvement of large muscle groups (Sitting, Walking, Running, Climbing).',
        'Fine Motor Skills: Precision movements using small muscles (Writing, catching, cutting with scissors).',
        'Domains: 1. Physical (Growth), 2. Cognitive (Intellect), 3. Affective (Social/Emotional), 4. Psychomotor (Movement).',
        'Factors Affecting Development: Genetic Factors, Nutrition, Physical Activities, Immunization, and Environment.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Stages of Motor Development',
          type: 'list',
          data: [
            'Infant: Reflexive movements, basic grasping.',
            'Early Childhood: Fundamental skills (running, jumping).',
            'Adolescence: Specialized skills, sport-specific training.',
            'Adulthood: Maintenance and peak performance.'
          ]
        }
      ]
    },
    {
      id: 'exercise-guidelines',
      title: 'Exercise Guidelines (WHO)',
      description: 'Physical activity recommendations for different age groups.',
      content: [
        'Under 5 Years: Active play, minimal sedentary time (<1hr restrained). 180 mins physical activity for 3-4 year olds.',
        'Children (5-17 Years): At least 60 mins/day of moderate-to-vigorous activity. Muscle/Bone strengthening 3 times/week.',
        'Adults (18-64 Years): 150-300 mins moderate or 75-150 mins vigorous activity per week.',
        'Seniors (65+): Focus on balance and functional ability. Similar duration to adults but adjusted for intensity.'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'WHO Activity Rubric',
          type: 'table',
          data: {
            headers: ['Age Group', 'Duration', 'Focus'],
            rows: [
              ['5-17', '60 mins/day', 'Aerobic + Bone Strengthening'],
              ['18-64', '150 mins/week', 'Aerobic + Muscle Maintenance'],
              ['65+', 'Varied', 'Balance, Fall Prevention']
            ]
          }
        }
      ]
    },
    {
      id: 'postural-deformities',
      title: 'Common Postural Deformities',
      description: 'Spinal and skeletal deviations and their corrective measures.',
      content: [
        'Kyphosis (Hunchback): Exaggerated posterior curvature of thoracic spine. Corrective: Bhujangasana, Chakrasana.',
        'Lordosis (Swayback): Exaggerated anterior curvature of lumbar spine. Corrective: Halasana, Paschimottanasana.',
        'Scoliosis: Lateral curvature of spine (S or C shape). Corrective: Trikonasana, Chin-ups.',
        'Knock Knees (Genu Valgum): Knees touch while ankles are apart. Corrective: Horse riding, Padmasana.',
        'Bow Legs (Genu Varum): Knees wide apart when feet are together. Corrective: Walking on inner edge of feet.',
        'Flat Foot: Loss of foot arch. Corrective: Walking on toes, Tadasana.',
        'Round Shoulders: Shoulders bent forward. Corrective: Dhanurasana, Chakrasana.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Spine Deformities',
          type: 'flow',
          data: [
            'Thoracic -> Kyphosis (Round Back)',
            'Lumbar -> Lordosis (Hollow Back)',
            'Lateral -> Scoliosis (Sideways)'
          ]
        }
      ]
    },
    {
      id: 'women-participation',
      title: 'Women in Sports',
      description: 'Analysis of constraints and the female athlete triad.',
      content: [
        'Constraints: Social (Traditional roles), Psychological (Low self-esteem), Economic (Lack of sponsorship), Physiological (Myths about frailty).',
        'Menarche: The onset of menstruation. Heavy training may sometimes delay it (Primary Amenorrhea).',
        'Menstrual Dysfunction: Irregular cycles due to intense training or low energy availability.',
        'Female Athlete Triad: A syndrome of three interrelated conditions: 1. Osteoporosis (Low bone mass), 2. Amenorrhea (Missed periods), 3. Disordered Eating (Low energy availability).'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'The Female Athlete Triad',
          type: 'grid',
          data: [
            { label: 'Osteoporosis', desc: 'Weak bones, risk of stress fractures.' },
            { label: 'Amenorrhea', desc: 'Cessation of menstrual cycle > 3 months.' },
            { label: 'Eating Disorder', desc: 'Anorexia, Bulimia, or caloric deficit.' }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Definition', question: 'Define Motor Development.', answer: 'Changes in motor behavior over the lifespan due to biology and environment interactions.' },
    { id: 'f2', category: 'Technical', question: 'Differentiate between Gross and Fine motor skills.', answer: 'Gross: Large muscle movements (Running). Fine: Small muscle precision (Writing).' },
    { id: 'f3', category: 'Age Guidelines', question: 'What is the WHO recommended activity duration for ages 5-17?', answer: 'At least 60 minutes of moderate-to-vigorous activity daily.' },
    { id: 'f4', category: 'Posture', question: 'What is Kyphosis?', answer: 'Exaggerated posterior curvature of the thoracic spine (Hunchback).' },
    { id: 'f5', category: 'Posture', question: 'Identify the deformity: Knees touch but ankles are apart.', answer: 'Knock Knees (Genu Valgum).' },
    { id: 'f6', category: 'Correction', question: 'Name a corrective asana for Lordosis.', answer: 'Halasana or Paschimottanasana.' },
    { id: 'f7', category: 'Correction', question: 'Which activity helps correct Flat Foot?', answer: 'Walking on toes, skipping, or picking up marbles with toes.' },
    { id: 'f8', category: 'Women', question: 'What is Menarche?', answer: 'The first occurrence of menstruation.' },
    { id: 'f9', category: 'Triad', question: 'Name the three components of the Female Athlete Triad.', answer: 'Osteoporosis, Amenorrhea, Disordered Eating (Low Energy Availability).' },
    { id: 'f10', category: 'Triad', question: 'What is Amenorrhea?', answer: 'The absence of menstruation for 3 months or more.' },
    { id: 'f11', category: 'Posture', question: 'What is Scoliosis?', answer: 'A lateral (sideways) curvature of the spine.' },
    { id: 'f12', category: 'Correction', question: 'Corrective measure for Bow Legs?', answer: 'Walking on the inner edge of the feet.' },
    { id: 'f13', category: 'Technical', question: 'Define Osteoporosis.', answer: 'A condition of low bone mineral density increasing fracture risk.' },
    { id: 'f14', category: 'Women', question: 'What is Anorexia Nervosa?', answer: 'An eating disorder characterized by restricted energy intake and intense fear of gaining weight.' },
    { id: 'f15', category: 'Women', question: 'What is Bulimia Nervosa?', answer: 'Binge eating followed by purging.' },
    { id: 'f16', category: 'Age Guidelines', question: 'WHO activity recommendation for Adults (18-64)?', answer: '150-300 mins moderate or 75-150 mins vigorous activity per week.' },
    { id: 'f17', category: 'Posture', question: 'What is Round Shoulders?', answer: 'Shoulders bent forward creating a curve in the upper back.' },
    { id: 'f18', category: 'Correction', question: 'Asana to correct Round Shoulders?', answer: 'Chakrasana or Dhanurasana.' },
    { id: 'f19', category: 'Definition', question: 'What are the 4 domains of Motor Development?', answer: 'Physical, Cognitive, Affective, Psychomotor.' },
    { id: 'f20', category: 'Factors', question: 'Name two factors affecting Motor Development.', answer: 'Nutrition and Genetic Factors.' },
    { id: 'f21', category: 'Technical', question: 'What is Tummy Time?', answer: 'Time spent by infants on their stomach to strengthen neck/shoulder muscles.' },
    { id: 'f22', category: 'Posture', question: 'What causes Rickets?', answer: 'Vitamin D, Calcium, or Phosphate deficiency.' },
    { id: 'f23', category: 'Triad', question: 'How are the components of the Triad related?', answer: 'Low energy (eating disorder) leads to menstrual loss (amenorrhea), which lowers estrogen, causing bone loss (osteoporosis).' },
    { id: 'f24', category: 'Women', question: 'What is Dysmenorrhea?', answer: 'Painful menstruation.' },
    { id: 'f25', category: 'Technical', question: 'What separates Gross from Fine motor skills?', answer: 'The size of the muscle groups involved.' },
    { id: 'f26', category: 'Correction', question: 'Best exercise for Knock Knees?', answer: 'Horse riding or placing a pillow between knees while standing.' },
    { id: 'f27', category: 'Posture', question: 'Scientific name for Knock Knees?', answer: 'Genu Valgum.' },
    { id: 'f28', category: 'Posture', question: 'Scientific name for Bow Legs?', answer: 'Genu Varum.' },
    { id: 'f29', category: 'Age Guidelines', question: 'Screen time limit for children under 2?', answer: 'Zero (No sedentary screen time recommended).' },
    { id: 'f30', category: 'Women', question: 'Social constraint examples for women in sports?', answer: 'Lack of family support, traditional gender roles.' },
    { id: 'f31', category: 'Technical', question: 'What is Menorrhagia?', answer: 'Abnormally heavy or prolonged bleeding during menstruation.' },
    { id: 'f32', category: 'Correction', question: 'Corrective measure for Scoliosis?', answer: 'Hanging on a horizontal bar.' },
    { id: 'f33', category: 'Technical', question: 'Define Cephalocaudal development.', answer: 'Development proceeding from head to toe.' },
    { id: 'f34', category: 'Technical', question: 'Define Proximodistal development.', answer: 'Development proceeding from the center of the body outward.' },
    { id: 'f35', category: 'Correction', question: 'Which Yoga Asana is good for Kyphosis?', answer: 'Bhujangasana (Cobra Pose).' },
    { id: 'f36', category: 'Correction', question: 'What is the "Inner Edge Walk" used for?', answer: 'Correcting Bow Legs.' },
    { id: 'f37', category: 'Women', question: 'Psychological constraint for women?', answer: 'Fear of failure, body image issues.' },
    { id: 'f38', category: 'Age Guidelines', question: 'Focus of exercise for 65+ age group?', answer: 'Functional balance and fall prevention.' },
    { id: 'f39', category: 'Triad', question: 'Primary cause of Functional Hypothalamic Amenorrhea?', answer: 'Energy deficit (burning more calories than consumed).' },
    { id: 'f40', category: 'Technical', question: 'What is "Bone Mineral Density"?', answer: 'The amount of bone mineral in bone tissue, a marker of bone health.' },
    { id: 'f41', category: 'Posture', question: 'What is "Text Neck"?', answer: 'Strain on the neck from looking down at devices (modern postural issue).' },
    { id: 'f42', category: 'Correction', question: 'Can Flat Foot be corrected in adulthood?', answer: 'Difficult, but arch supports and exercises can manage pain.' },
    { id: 'f43', category: 'Definition', question: 'What is Menopause?', answer: 'Permanent cessation of menstruation (usually age 45-55).' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2023-24',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Define Female Athlete Triad. Explain its three components in detail.',
      answer: 'Defined as a syndrome involving Osteoporosis, Amenorrhea, and Eating Disorders. Explanation of interrelation: Low energy leads to hormonal suppression.',
      aiExplanation: 'Teacher\'s Note: Start with the definition of the Triad. Draw a triangle diagram. Explain how "Low Energy Availability" is the driving factor. Mention that Amenorrhea is a protective mechanism where the body shuts down reproduction to save energy, which unfortunately reduces estrogen needed for bone density (Osteoporosis).'
    },
    {
      id: 'q2',
      year: '2022-23',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Differentiate between Menarche and Menopause.',
      answer: 'Menarche: First period (puberty). Menopause: Stopping of periods (mid-life).',
      aiExplanation: 'Focus on the "Lifecycle" aspect. Menarche marks the beginning of reproductive age (11-14 yrs), while Menopause marks the end (45-55 yrs). Mention that sports training can delay Menarche.'
    },
    {
      id: 'q3',
      year: '2024-25',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'List five common postural deformities and suggest one corrective yoga asana for each.',
      answer: '1. Kyphosis (Bhujangasana), 2. Lordosis (Paschimottanasana), 3. Scoliosis (Trikonasana), 4. Knock Knees (Padmasana), 5. Round Shoulders (Dhanurasana).',
      aiExplanation: 'This is a high-scoring question. Format your answer as a table: Column 1 "Deformity", Column 2 "Description", Column 3 "Corrective Asana".'
    },
    {
      id: 'q4',
      year: '2021-22',
      paperType: 'Term-1',
      marks: 1,
      type: 'MCQ',
      question: 'Genu Valgum is also known as:',
      answer: '(b) Knock Knees',
      aiExplanation: 'Mnemonic: "Gum" makes your knees stick together. Valgum = Keywords "Stick together" / Knock Knees.'
    },
    {
      id: 'q5',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Explain the factors affecting Motor Development in children.',
      answer: 'Genetics, Nutrition, Environment, Physical Activity, Sensory Impairments.',
      aiExplanation: 'Do not just list them. Explain "How". Example: "Nutrition" - Lack of protein affects muscle growth needed for motor skills. "Environment" - Open spaces encourage gross motor skills.'
    },
    {
      id: 'q6',
      year: '2020-21',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Suggest physical activity guidelines for children under 5 years of age.',
      answer: 'Tummy time for infants, active play for toddlers, 180 mins activity for 3-4 yrs.',
      aiExplanation: 'Reference the WHO guidelines. Key phrase: "Minimize sedentary screen time". Mention "Tummy Time" for infants as it builds neck strength.'
    },
    {
      id: 'q7',
      year: '2024-25',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which of the following is NOT a component of the Female Athlete Triad?',
      answer: '(d) Anemia',
      aiExplanation: 'The Triad is Bone, Period, and Food. Anemia (Iron deficiency) is common but not part of the clinical Triad definition.'
    },
    {
      id: 'q8',
      year: '2023-24',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Analyze the sociological and psychological constraints for women participation in sports in India.',
      answer: 'Social: Patriarchal mindset, safety concerns. Psych: Body image, confidence.',
      aiExplanation: 'Divide answer into two sections: Sociological (Family support, marriage pressure, safety) and Psychological (Fear of judgement, "Masculine" stereotype of muscles). End with a positive note on recent improvement (Mary Kom, PV Sindhu).'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 5: Children & Women',
    children: [
      {
        id: 'm2',
        label: 'Motor Dev',
        children: [{ id: 'm3', label: 'Gross vs Fine' }, { id: 'm4', label: 'Factors (Genes/Diet)' }]
      },
      {
        id: 'm5',
        label: 'Posture',
        children: [{ id: 'm6', label: 'Spine (Kypho/Lord/Scoli)' }, { id: 'm7', label: 'Legs (Knock/Bow/Flat)' }]
      },
      {
        id: 'm8',
        label: 'Women',
        children: [{ id: 'm9', label: 'Triad (Bone/Period/Food)' }, { id: 'm10', label: 'Menarche' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Deformity vs Correction', points: ['Kyphosis (Round Back) -> Bhujangasana', 'Lordosis (Sway Back) -> Halasana', 'Scoliosis (C-Shape) -> Trikonasana', 'Knock Knee (Genu Valgum) -> Horse Riding', 'Bow Legs (Genu Varum) -> Inner Edge Walk', 'Flat Foot -> Tipty Toe Walking'] },
    { title: 'The Triad Math', points: ['Low Calories + High Training = Low Energy Availability', 'Low Energy -> No Period (Amenorrhea)', 'No Period -> Low Estrogen -> Weak Bones (Osteoporosis)'] },
    { title: 'WHO Guidelines', points: ['< 5 Years: 180 mins active play', '5-17 Years: 60 mins/day Moderate-Vigorous', 'Adults: 150 mins/week Moderate'] }
  ]
};
