
import { Chapter } from '../types';

export const unit9: Chapter = {
  id: 9,
  slug: 'psychology-sports',
  name: 'Psychology & Sports',
  description: 'Big Five personality theory, motivation techniques, exercise adherence strategies, and aggression in sports.',
  topics: [
    {
      id: 'personality-theory',
      title: 'Personality & Big Five Theory',
      description: 'Understanding individual differences through the lens of psychological traits.',
      content: [
        'Definition: Personality is the dynamic organization within the individual of those psychophysical systems that determine their unique adjustment to their environment.',
        'Big Five Model (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
        'Jung’s Classification: Introverts (reserved, shy), Extroverts (social, outgoing), and Ambiverts (mixture of both).'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'The Big Five Model (OCEAN)',
          type: 'table',
          data: {
            headers: ['Trait', 'High Score Characteristics', 'Low Score Characteristics'],
            rows: [
              ['Openness', 'Curious, imaginative, creative.', 'Conventional, prefers routine.'],
              ['Conscientiousness', 'Organized, dependable, disciplined.', 'Careless, impulsive, disorganized.'],
              ['Extraversion', 'Outgoing, talkative, energetic.', 'Reserved, quiet, solitary.'],
              ['Agreeableness', 'Trusting, helpful, empathetic.', 'Skeptical, competitive, stubborn.'],
              ['Neuroticism', 'Anxious, moody, sensitive.', 'Secure, confident, calm.']
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
        'Intrinsic Motivation: Internal drive, love for the sport, personal satisfaction, and mastery.',
        'Extrinsic Motivation: Driven by external rewards like medals, cash prizes, fame, or avoiding punishment.',
        'Techniques: Goal setting, feedback, social support, positive self-talk, and rewards.'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Intrinsic vs Extrinsic Motivation',
          type: 'grid',
          data: [
            { label: 'Intrinsic', desc: 'Enjoyment, Interest, Personal Challenge, Satisfaction.' },
            { label: 'Extrinsic', desc: 'Trophies, Social Status, Money, Fear of Failure.' }
          ]
        },
        {
          id: 'v3',
          title: 'Effective Goal Setting (SMART)',
          type: 'flow',
          data: [
            'Specific: Clear and defined.',
            'Measurable: Trackable progress.',
            'Achievable: Realistic targets.',
            'Relevant: Aligned with long-term vision.',
            'Time-bound: Deadlines for completion.'
          ]
        }
      ]
    },
    {
      id: 'exercise-adherence',
      title: 'Exercise Adherence',
      description: 'Reasons for starting and strategies for maintaining a regular exercise program.',
      content: [
        'Benefits: Improved health, stress management, social interaction, and weight control.',
        'Barriers: Lack of time, lack of energy, lack of motivation, and injury fears.',
        'Strategies: Setting realistic goals, finding a partner, making it fun, and tracking progress.'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'Strategies for Adherence',
          type: 'table',
          data: {
            headers: ['Strategy', 'Implementation'],
            rows: [
              ['Social Support', 'Exercising with friends or in groups.'],
              ['Behavioral Contracts', 'Signing a commitment to oneself.'],
              ['Prompting', 'Setting reminders on phones or post-its.'],
              ['Reward Systems', 'Treating oneself after hitting a milestone.']
            ]
          }
        }
      ]
    },
    {
      id: 'aggression-sports',
      title: 'Aggression in Sports',
      description: 'Classification of aggressive behaviors in competitive environments.',
      content: [
        'Hostile Aggression: Primary goal is to cause injury or physical harm to an opponent. Often accompanied by anger.',
        'Instrumental Aggression: Behavior intended to harm but as a means to achieve a non-aggressive goal (e.g., tackling hard to win the ball).',
        'Assertive Behavior: Playing hard and with high intensity within the rules, without intent to harm.'
      ],
      visualizations: [
        {
          id: 'v5',
          title: 'Types of Aggression Matrix',
          type: 'grid',
          data: [
            { label: 'Hostile', desc: 'Intent to harm, driven by anger (Retaliation).' },
            { label: 'Instrumental', desc: 'Intent to harm for a tactical goal (Strategic foul).' },
            { label: 'Assertive', desc: 'High intensity, no intent to harm (Clean hard play).' }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Technical', question: 'What does "O" stand for in the Big Five theory?', answer: 'Openness.' },
    { id: 'f2', category: 'Technical', question: 'Differentiate between Hostile and Instrumental aggression.', answer: 'Hostile is purely to harm; Instrumental is to harm as a means to achieve a goal.' },
    { id: 'f3', category: 'Technical', question: 'Define Intrinsic Motivation.', answer: 'Motivation that comes from within an individual based on personal satisfaction.' },
    { id: 'f4', category: 'Technical', question: 'What is the full form of OCEAN in personality?', answer: 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.' },
    { id: 'f5', category: 'Technical', question: 'Which trait is linked to anxiety and moodiness?', answer: 'Neuroticism.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which trait of the Big Five theory characterizes someone who is disciplined and organized?',
      answer: 'Conscientiousness',
      aiExplanation: 'Conscientious individuals are thorough, careful, and vigilant in their tasks.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Briefly explain any three strategies to enhance exercise adherence.',
      answer: '1. Goal setting. 2. Social support. 3. Fun and variety.',
      aiExplanation: 'Maintaining an exercise routine requires both psychological motivation and environmental support.'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'Define Personality. Explain the Big Five Theory of personality in detail.',
      answer: 'Personality is unique adjustment. Explain OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.',
      aiExplanation: 'The OCEAN model is the most widely accepted theory for describing human personality traits in modern psychology.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 9: Psychology',
    children: [
      {
        id: 'm2',
        label: 'Personality',
        children: [{ id: 'm3', label: 'Big Five (OCEAN)' }, { id: 'm4', label: 'Jung Classification' }]
      },
      {
        id: 'm5',
        label: 'Motivation',
        children: [{ id: 'm6', label: 'Intrinsic vs Extrinsic' }, { id: 'm7', label: 'Techniques' }]
      },
      {
        id: 'm8',
        label: 'Aggression',
        children: [{ id: 'm9', label: 'Hostile' }, { id: 'm10', label: 'Instrumental' }, { id: 'm11', label: 'Assertive' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Big Five (OCEAN)', points: ['O: Openness (Creative)', 'C: Conscientiousness (Disciplined)', 'E: Extraversion (Social)', 'A: Agreeableness (Trusting)', 'N: Neuroticism (Moody)'] },
    { title: 'Aggression Types', points: ['Hostile: Injury + Anger', 'Instrumental: Injury for Goal', 'Assertive: Hard play, No harm'] },
    { title: 'Motivation Hacks', points: ['Set SMART goals', 'Positive Self-talk', 'Use External rewards wisely', 'Find Intrinsic joy'] }
  ]
};
