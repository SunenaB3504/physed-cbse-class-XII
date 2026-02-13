import { Chapter } from '../types';

export const unit9: Chapter = {
  id: 9,
  slug: 'psychology-sports',
  name: 'Psychology & Sports',
  description: 'Personality theories, motivation techniques, exercise adherence strategies, and aggression types in sports.',
  topics: [
    {
      id: 'personality-theory',
      title: 'Personality & Big Five Theory',
      description: 'Understanding individual differences through psychological traits.',
      content: [
        'Definition: The dynamic organization within the individual of those psychophysical systems that determine their unique adjustment to the environment.',
        'Sheldon’s Classification (Somatotypes):',
        '• Endomorph: Pear-shaped, wide hips, round. Personality (Viscerotonic): Relaxed, sociable, loves comfort/food.',
        '• Mesomorph: Muscular, broad shoulders, wedge-shaped. Personality (Somatotonic): Active, aggressive, adventurous, dominant.',
        '• Ectomorph: Thin, fine-boned, narrow chest. Personality (Cerebrotonic): Introverted, thoughtful, inhibited, sensitive.',
        'Jung’s Classification: 1. Introverts (Focus on inner thoughts, reserved), 2. Extroverts (Focus on external world, social, energetic), 3. Ambiverts (Balanced mix).',
        'Big Five Model (OCEAN):',
        '• Openness: Imagination, creativity, curiosity. (Low: Traditional).',
        '• Conscientiousness: Discipline, organization, dependability. (Low: Impulsive).',
        '• Extraversion: Social, talkative, assertive. (Low: Quiet/Introverted).',
        '• Agreeableness: Trusting, helpful, cooperative. (Low: Skeptical/Competitive).',
        '• Neuroticism: Emotional instability, anxiety, moodiness. (Low: Stable/Calm).'
      ],
      visualizations: [
        {
          id: 'v0',
          title: 'Sheldon’s Body Types',
          type: 'grid',
          data: [
            { label: 'Endomorph', desc: 'Round/Fat -> Relaxed (Viscerotonic)' },
            { label: 'Mesomorph', desc: 'Muscular -> Aggressive (Somatotonic)' },
            { label: 'Ectomorph', desc: 'Thin -> Introverted (Cerebrotonic)' }
          ]
        },
        {
          id: 'v1',
          title: 'The Big Five (OCEAN) Traits',
          type: 'table',
          data: {
            headers: ['Trait', 'High Score', 'Low Score'],
            rows: [
              ['Openness', 'Creative, Curious', 'Routine-oriented'],
              ['Conscientiousness', 'Organized, Disciplined', 'Careless, Impulsive'],
              ['Extraversion', 'Social, Energetic', 'Reserved, Solitary'],
              ['Agreeableness', 'Friendly, Compassionate', 'Analytical, Detached'],
              ['Neuroticism', 'Anxious, Sensitive', 'Calm, Confident']
            ]
          }
        }
      ]
    },
    {
      id: 'motivation-tech',
      title: 'Motivation: Types & Techniques',
      description: 'The internal and external forces that drive athletic performance.',
      content: [
        'Motivation Cycle: Need -> Drive -> Arousal -> Goal-directed Behavior -> Achievement -> Reduction of Arousal.',
        'Types of Motivation:',
        '• Intrinsic: Internal drive (Enjoyment, Satisfaction, Curiosity). "I play because I love it."',
        '• Extrinsic: External rewards (Medals, Money, Praise, Avoiding Punishment). "I play to win the trophy."',
        'Techniques to Enhance Motivation:',
        '1. Goal Setting (SMART Goals).',
        '2. Reinforcement (Positive rewards/praise).',
        '3. Knowledge of Progress (Feedback).',
        '4. Social Support (Team cohesion).',
        '5. Positive Self-Talk.'
      ],
      visualizations: [
        {
          id: 'v1-cycle',
          title: 'Motivation Cycle',
          type: 'flow',
          data: [
            'Need (Lack of something)',
            'Drive (State of tension)',
            'Arousal (Action)',
            'Goal Achievement',
            'Reduction of Drive'
          ]
        },
        {
          id: 'v2',
          title: 'Intrinsic vs Extrinsic',
          type: 'grid',
          data: [
            { label: 'Intrinsic', desc: 'Flow state, Love for game, Internal mastery.' },
            { label: 'Extrinsic', desc: 'Medals, Fame, Sponsorships, Fear of coach.' }
          ]
        },
        {
          id: 'v3',
          title: 'SMART Goals',
          type: 'flow',
          data: [
            'Specific',
            'Measurable',
            'Achievable',
            'Relevant',
            'Time-Bound'
          ]
        }
      ]
    },
    {
      id: 'exercise-adherence',
      title: 'Exercise Adherence',
      description: 'Strategies to maintain a regular exercise routine.',
      content: [
        'Definition: Checking the stickiness/faithfulness to an exercise program.',
        'Common Barriers: Lack of time, Fatigue, Lack of motivation, Cost, Injury.',
        'Strategies for Adherence:',
        '1. Simple Routines: Start easy to build habit.',
        '2. Social Support: Workout buddies or group classes.',
        '3. Progress Tracking: Apps or journals.',
        '4. Variety: Mixing activities to prevent boredom.',
        '5. Reward System: Treating oneself for milestones.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Adherence Strategies',
          type: 'list',
          data: [
            'Make it fun (Variety)',
            'Set small goals (Progress)',
            'Get a buddy (Accountability)',
            'Schedule it (Priority)'
          ]
        }
      ]
    },
    {
      id: 'aggression-sports',
      title: 'Aggression in Sports',
      description: 'Physical or verbal behavior intended to cause harm.',
      content: [
        '1. Hostile Aggression (Reactive): Primary goal is to inflict injury/psychological harm. Driven by anger/frustration. (e.g., Punching a player after a foul).',
        '2. Instrumental Aggression: Intent to harm is present, but as a means to a goal (winning). (e.g., A rugby tackle to stop a try).',
        '3. Assertive Behavior: Often confused with aggression. High intensity, forceful play within the rules, no intent to harm. (e.g., Hard rebounding in basketball).'
      ],
      visualizations: [
        {
          id: 'v5',
          title: 'Aggression Spectrum',
          type: 'table',
          data: {
            headers: ['Type', 'Goal', 'Emotion', 'Rules'],
            rows: [
              ['Hostile', 'To Harm', 'Anger', 'Violated'],
              ['Instrumental', 'To Win', 'Focused', 'Often Violated'],
              ['Assertive', 'To Dominate', 'Controlled', 'Respected']
            ]
          }
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Personality', question: 'What does "O" stand for in OCEAN?', answer: 'Openness.' },
    { id: 'f2', category: 'Personality', question: 'Who classified personality into Introverts and Extroverts?', answer: 'C.G. Jung.' },
    { id: 'f3', category: 'Motivation', question: 'Define Intrinsic Motivation.', answer: 'Motivation driven by internal satisfaction or love for the activity.' },
    { id: 'f4', category: 'Motivation', question: 'What is Extrinsic Motivation?', answer: 'Motivation driven by external rewards like money, fame, or awards.' },
    { id: 'f5', category: 'Aggression', question: 'Primary goal of Hostile Aggression?', answer: 'To inflict physical or psychological harm on someone.' },
    { id: 'f6', category: 'Aggression', question: 'What is Instrumental Aggression?', answer: 'Aggressive behavior used as a tool to achieve a non-aggressive goal (winning).' },
    { id: 'f7', category: 'Personality', question: 'Characteristics of Neuroticism?', answer: 'Anxiety, moodiness, emotional instability, sadness.' },
    { id: 'f8', category: 'Motivation', question: 'What does SMART stand for?', answer: 'Specific, Measurable, Achievable, Relevant, Time-bound.' },
    { id: 'f9', category: 'Aggression', question: 'Is Assertive Behavior considered aggression?', answer: 'Technically no, because there is no intent to harm.' },
    { id: 'f10', category: 'Personality', question: 'What is an Ambivert?', answer: 'A person who exhibits a balance of introverted and extroverted traits.' },
    { id: 'f11', category: 'Adherence', question: 'A common barrier to exercise adherence?', answer: 'Lack of time / Fatigue / Lack of facilities.' },
    { id: 'f12', category: 'Personality', question: 'Trait associated with being organized and disciplined?', answer: 'Conscientiousness.' },
    { id: 'f13', category: 'Personality', question: 'Trait associated with being cooperative and trusting?', answer: 'Agreeableness.' },
    { id: 'f14', category: 'Motivation', question: 'Example of Positive Self-Talk?', answer: '"I can do this", "Focus on the ball", "Keep going".' },
    { id: 'f15', category: 'Definition', question: 'Define "Personality".', answer: 'The dynamic organization of psychophysical systems determining unique adjustment to the environment.' },
    { id: 'f16', category: 'Aggression', question: 'Sledging in cricket is an example of?', answer: 'Often Hostile or Instrumental Aggression (verbal).' },
    { id: 'f17', category: 'Adherence', question: 'How does "Social Support" help adherence?', answer: 'Provides accountability, motivation, and makes exercise more enjoyable.' },
    { id: 'f18', category: 'Motivation', question: 'Is "Fear of Punishment" intrinsic or extrinsic?', answer: 'Extrinsic.' },
    { id: 'f19', category: 'Personality', question: 'High score in Extraversion means?', answer: 'Talkative, energetic, assertive, social.' },
    { id: 'f20', category: 'Aggression', question: 'A boxer punching an opponent to win points?', answer: 'Instrumental Aggression (Harm is essential to winning, but winning is the goal).' },
    { id: 'f21', category: 'Motivation', question: 'What is "Knowledge of Progress"?', answer: 'Feedback on performance (e.g., timing, score) that motivates improvement.' },
    { id: 'f22', category: 'General', question: 'What is Sports Psychology?', answer: 'Study of how psychological factors affect performance and how participation affects psychology.' },
    { id: 'f23', category: 'Adherence', question: 'Strategy: Signing a contract with yourself.', answer: 'Behavioral Contract.' },
    { id: 'f24', category: 'Personality', question: 'Jung: A person interested in their own thoughts?', answer: 'Introvert.' },
    { id: 'f25', category: 'Aggression', question: 'Cause of Hostile Aggression?', answer: 'Frustration, anger, desire for revenge.' },
    { id: 'f26', category: 'Personality', question: 'Low score in Openness means?', answer: 'Practical, conventional, prefers routine.' },
    { id: 'f27', category: 'Motivation', question: 'Why is Goal Setting effective?', answer: 'It provides direction, focus, and a standard for measuring success.' },
    { id: 'f28', category: 'Adherence', question: 'What is "Prompting"?', answer: 'Using cues (alarms, notes, gym bag by door) to trigger exercise behavior.' },
    { id: 'f29', category: 'Personality', question: 'Is personality static or dynamic?', answer: 'Dynamic (it can change/evolve).' },
    { id: 'f30', category: 'Aggression', question: 'Playing hard within rules is?', answer: 'Assertive Behavior.' },
    { id: 'f31', category: 'Motivation', question: 'Technique: Visualizing success.', answer: 'Imagery / Mental Practice.' },
    { id: 'f32', category: 'Personality', question: 'People who initiate conversation easily are likely?', answer: 'Extroverts.' },
    { id: 'f33', category: 'Adherence', question: 'Effect of high intensity on adherence for beginners?', answer: 'Usually negative (too hard -> quit). Start low intensity.' },
    { id: 'f34', category: 'Aggression', question: 'Who defined the Frustration-Aggression theory?', answer: 'Often attributed to Dollard et al.' },
    { id: 'f35', category: 'Motivation', question: 'Are cash prizes intrinsic?', answer: 'No, Extrinsic.' },
    { id: 'f36', category: 'Personality', question: 'Which Big Five trait helps in team cohesion?', answer: 'Agreeableness.' },
    { id: 'f37', category: 'Personality', question: 'Which Big Five trait helps in rigorous training?', answer: 'Conscientiousness.' },
    { id: 'f2a', category: 'Personality', question: 'Sheldon: Body type that is muscular and wedge-shaped?', answer: 'Mesomorph.' },
    { id: 'f2b', category: 'Personality', question: 'Sheldon: Personality type of an Endomorph?', answer: 'Viscerotonic (Sociable, relaxed, lover of comfort).' },
    { id: 'f2c', category: 'Personality', question: 'Sheldon: Body type that is thin and narrow?', answer: 'Ectomorph.' },
    { id: 'f3a', category: 'Motivation', question: 'First stage of the Motivation Cycle?', answer: 'Need.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2023-24',
      paperType: 'Board',
      marks: 1,
      type: 'MCQ',
      question: 'Which of the following is NOT a Big Five personality trait?',
      answer: '(d) Aggressiveness',
      aiExplanation: 'The Big Five are Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism (OCEAN). Aggressiveness is not one of them.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Differentiate between Intrinsic and Extrinsic motivation with examples.',
      answer: 'Intrinsic: Internal satisfaction (Running for joy). Extrinsic: External reward (Running for a medal).',
      aiExplanation: 'Key Difference: The source of the drive (Internal vs External). Intrinsic is generally more sustainable.'
    },
    {
      id: 'q3',
      year: '2022-23',
      paperType: 'Board',
      marks: 5,
      type: 'LA',
      question: 'Explain Jung’s Classification of Personality.',
      answer: '1. Introverts (Inner focused, shy). 2. Extroverts (Outer focused, social). 3. Ambiverts (Balanced).',
      aiExplanation: 'Teacher\'s Voice - Scoring Breakdown (5 Marks):\n1. **Introverts (1.5 Marks):** Explain traits (shy, reflective) and focus (inner thoughts/ideas). Mention sports suitability (individual sports like Archery).\n2. **Extroverts (1.5 Marks):** Explain traits (social, talkative) and focus (external world/people). Mention sports suitability (team sports like Football).\n3. **Ambiverts (1 Mark):** Explain that they possess a balance of both traits depending on the situation.\n4. **Examples (1 Mark):** Provide clear examples for each category to secure the final mark.'
    },
    {
      id: 'q4',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Punching a player in anger after a foul is an example of:',
      answer: '(a) Hostile Aggression',
      aiExplanation: 'The primary intent is harm, driven by anger. Instrumental aggression would be "strategic" harm.'
    },
    {
      id: 'q5',
      year: '2023-24',
      paperType: 'SQP',
      marks: 3,
      type: 'SA',
      question: 'Suggest three strategies to increase Exercise Adherence.',
      answer: 'Social Support (Group classes), Goal Setting (Tracking progress), Making it Fun (Variety).',
      aiExplanation: 'Focus on overcoming barriers like boredom and lack of accountability.'
    },
    {
      id: 'q6',
      year: '2021-22',
      paperType: 'Term-1',
      marks: 4,
      type: 'Case',
      question: 'Rahul is a calm, organized, and hard-working athlete. He follows his training schedule strictly. 1. Identify the Big Five trait. 2. Explain it.',
      answer: '1. Conscientiousness. 2. It reflects self-discipline, organization, and dependability.',
      aiExplanation: 'The keywords "organized" and "schedule" point directly to Conscientiousness.'
    },
    {
      id: 'q7',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'What is Aggression? Explain Instrumental Aggression.',
      answer: 'Aggression: Behavior to harm. Instrumental: Harming to achieve a goal (e.g., tackle to stop a score), not out of anger.',
      aiExplanation: 'Crucial distinction: Instrumental aggression is "business-like" or tactical. Hostile is emotional.'
    },
    {
      id: 'q8',
      year: '2022-23',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Describe the Big Five Personality Theory (OCEAN).',
      answer: 'Openness (Creative), Conscientiousness (Disciplined), Extraversion (Social), Agreeableness (Helpful), Neuroticism (Anxious).',
      aiExplanation: 'Teacher\'s Voice - Acronym Strategy (5 Marks):\nUse the acronym **OCEAN** to structure your answer. Award 1 mark for each trait:\n1. **O - Openness:** Imagination, curiosity, and willingness to try new sports.\n2. **C - Conscientiousness:** Self-discipline, organization, and dedication to training.\n3. **E - Extraversion:** Sociability, energy, and leadership in team settings.\n4. **A - Agreeableness:** Trust, cooperation, and team cohesion.\n5. **N - Neuroticism:** Emotional stability vs instability (anxiety under pressure).'
    },
    {
      id: 'q9',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Self-talk and Goal Setting are types of:',
      answer: '(b) Motivation Techniques',
      aiExplanation: 'These are psychological strategies used to enhance focus and drive behavior (motivation).'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 9: Psychology',
    children: [
      {
        id: 'm2',
        label: 'Personality',
        children: [{ id: 'm3', label: 'Big Five (OCEAN)' }, { id: 'm4', label: 'Jung Traits' }]
      },
      {
        id: 'm5',
        label: 'Motivation',
        children: [{ id: 'm6', label: 'Intrinsic/Extrinsic' }, { id: 'm7', label: 'Techniques (SMART)' }]
      },
      {
        id: 'm8',
        label: 'Aggression',
        children: [{ id: 'm9', label: 'Hostile vs Instrumental' }, { id: 'm10', label: 'Assertive Play' }]
      },
      {
        id: 'm11',
        label: 'Adherence',
        children: [{ id: 'm12', label: 'Strategies' }, { id: 'm13', label: 'Barriers' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Sheldon’s Types', points: ['Endo (Fat) = Viscerotonic (Relaxed)', 'Meso (Muscle) = Somatotonic (Active)', 'Ecto (Thin) = Cerebrotonic (Introvert)'] },
    { title: 'OCEAN Traits', points: ['O: Creative', 'C: Organized', 'E: Social', 'A: Helpful', 'N: Anxious'] },
    { title: 'Jung Traits', points: ['Introvert: Inner-focused', 'Extrovert: Outer-focused', 'Ambivert: Balanced'] },
    { title: 'Aggression', points: ['Hostile = Anger + Harm', 'Instrumental = Goal + Harm', 'Assertive = No Harm'] },
    { title: 'Motivation Cycle', points: ['Need -> Drive -> Arousal -> Goal -> Reduction'] },
    { title: 'Motivation', points: ['Intrinsic = Love', 'Extrinsic = Reward'] }
  ]
};
