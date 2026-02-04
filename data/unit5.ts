
import { Chapter } from '../types';

export const unit5: Chapter = {
  id: 5,
  slug: 'sports-nutrition',
  name: 'Sports & Nutrition',
  description: 'Balanced diet, macro and micro nutrients, nutritive/non-nutritive components, and weight management.',
  topics: [
    {
      id: 'balanced-diet',
      title: 'Balanced Diet & Nutrients',
      description: 'The foundation of physical performance and overall health.',
      content: [
        'Balanced Diet: A diet containing all essential nutrients (carbs, proteins, fats, vitamins, minerals, water) in correct proportions.',
        'Macro-nutrients: Needed in large quantities. Include Carbohydrates (Energy), Proteins (Building blocks), Fats (Storage), and Water.',
        'Micro-nutrients: Needed in small quantities. Include Vitamins and Minerals (Regulatory functions).',
        'Caloric Value: 1g Carb = 4 kcal, 1g Protein = 4 kcal, 1g Fat = 9 kcal.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Macro vs Micro Nutrients',
          type: 'table',
          data: {
            headers: ['Category', 'Nutrients', 'Function'],
            rows: [
              ['Macro', 'Carbohydrates', 'Primary energy source for muscle work.'],
              ['Macro', 'Proteins', 'Growth, repair of tissues, and enzymes.'],
              ['Macro', 'Fats', 'Insulation, organ protection, energy storage.'],
              ['Micro', 'Vitamins', 'Metabolic regulation and immunity.'],
              ['Micro', 'Minerals', 'Bone health (Ca), Oxygen transport (Fe).']
            ]
          }
        },
        {
          id: 'v2',
          title: 'Vitamin Classification',
          type: 'flow',
          data: [
            'Fat Soluble: A, D, E, K',
            'Water Soluble: B-Complex, C'
          ]
        }
      ]
    },
    {
      id: 'nutritive-components',
      title: 'Nutritive & Non-Nutritive Components',
      description: 'Elements of diet that provide energy vs those that perform other functions.',
      content: [
        'Nutritive: Carbs, Proteins, Fats, Vitamins, Minerals.',
        'Non-Nutritive: Fiber/Roughage (Digestion), Water (Temperature regulation), Flavor compounds, Color compounds, and Plant compounds.',
        'Roughage: Indigestible part of food that helps in bowel movement and prevents constipation.'
      ],
      visualizations: [
        {
          id: 'v3',
          title: 'Non-Nutritive Roles',
          type: 'grid',
          data: [
            { label: 'Fiber', desc: 'Prevents constipation and lowers cholesterol.' },
            { label: 'Water', desc: 'Maintains body temp and transports nutrients.' },
            { label: 'Flavors', desc: 'Stimulates appetite and digestive juices.' },
            { label: 'Pigments', desc: 'Provide antioxidants and visual appeal.' }
          ]
        }
      ]
    },
    {
      id: 'weight-management',
      title: 'Eating for Weight Control',
      description: 'Understanding BMI and maintaining a healthy body weight.',
      content: [
        'BMI (Body Mass Index) = Weight (kg) / [Height (m)]².',
        'Healthy Weight: Balancing calorie intake with calorie expenditure.',
        'Pitfalls of Dieting: Skipping meals, low-calorie intake, and liquid diets leading to health issues.',
        'Food Intolerance: Difficulty in digesting certain foods (e.g., lactose intolerance).'
      ],
      visualizations: [
        {
          id: 'v4',
          title: 'BMI Categories (WHO Standards)',
          type: 'table',
          data: {
            headers: ['BMI Range', 'Category'],
            rows: [
              ['< 18.5', 'Underweight'],
              ['18.5 - 24.9', 'Normal / Healthy'],
              ['25.0 - 29.9', 'Overweight'],
              ['30.0 - 34.9', 'Obesity Class I'],
              ['> 35.0', 'Obesity Class II/III']
            ]
          }
        }
      ]
    },
    {
      id: 'food-myths',
      title: 'Food Myths Debunked',
      description: 'Scientific evidence against common nutritional misconceptions.',
      content: [
        'Myth: Potatoes make you fat. Reality: Only excessive calories lead to weight gain; potatoes are nutrient-rich.',
        'Myth: Don’t drink water during meals. Reality: Water aids digestion and doesn’t dilute enzymes significantly.',
        'Myth: Skipping meals helps weight loss. Reality: It lowers metabolism and leads to overeating later.',
        'Myth: Vegetarian diet can’t build muscle. Reality: Plant-based proteins are effective if properly combined.'
      ],
      visualizations: [
        {
          id: 'v5',
          title: 'Common Myth Busters',
          type: 'grid',
          data: [
            { label: 'Myth 1', desc: 'Eating at night causes weight gain. (False: Total calories matter most).' },
            { label: 'Myth 2', desc: 'Fat-free food is healthy. (False: Often high in sugar for flavor).' },
            { label: 'Myth 3', desc: 'Fruit juices = Whole fruit. (False: Whole fruit has essential fiber).' }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Technical', question: 'How many calories does 1 gram of fat provide?', answer: '9 kcal.' },
    { id: 'f2', category: 'Technical', question: 'Name the two water-soluble vitamins.', answer: 'Vitamin B-Complex and Vitamin C.' },
    { id: 'f3', category: 'Technical', question: 'What is the formula for BMI?', answer: 'Weight (kg) / Height (m)².' },
    { id: 'f4', category: 'Injury', question: 'Deficiency of Vitamin D causes?', answer: 'Rickets (children) or Osteomalacia (adults).' },
    { id: 'f5', category: 'Technical', question: 'What is the "Normal" BMI range?', answer: '18.5 to 24.9.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2025-26',
      paperType: 'SQP',
      marks: 1,
      type: 'MCQ',
      question: 'Which nutrient is known as the "Body Builder"?',
      answer: 'Proteins',
      aiExplanation: 'Proteins are essential for the growth and repair of body tissues.'
    },
    {
      id: 'q2',
      year: '2024-25',
      paperType: 'Board',
      marks: 3,
      type: 'SA',
      question: 'Briefly explain any three food myths prevalent in society.',
      answer: '1. Potatoes make you fat. 2. Drinking water during meals. 3. Skipping meals.',
      aiExplanation: 'Knowledge of nutritional science helps in debunking these and promoting healthy eating habits.'
    },
    {
      id: 'q3',
      year: '2025-26',
      paperType: 'SQP',
      marks: 5,
      type: 'LA',
      question: 'What is a balanced diet? Explain the functions of any four macro-nutrients.',
      answer: 'Balanced diet contains all nutrients. Carbs (Energy), Proteins (Repair), Fats (Storage), Water (Regulator).',
      aiExplanation: 'A balanced diet ensures optimal physiological function and performance in athletes.'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 5: Sports & Nutrition',
    children: [
      {
        id: 'm2',
        label: 'Nutrients',
        children: [{ id: 'm3', label: 'Macro (Carbs/Prot/Fat)' }, { id: 'm4', label: 'Micro (Vit/Min)' }]
      },
      {
        id: 'm5',
        label: 'Components',
        children: [{ id: 'm6', label: 'Nutritive' }, { id: 'm7', label: 'Non-Nutritive (Fiber)' }]
      },
      {
        id: 'm8',
        label: 'Weight Control',
        children: [{ id: 'm9', label: 'BMI' }, { id: 'm10', label: 'Food Myths' }]
      }
    ]
  },
  cheatSheet: [
    { title: 'Calorie Count', points: ['Carbs: 4 kcal/g', 'Proteins: 4 kcal/g', 'Fats: 9 kcal/g', 'Alcohol: 7 kcal/g (Non-nutritive)'] },
    { title: 'Vitamin Deficiencies', points: ['A: Night Blindness', 'B1: Beri Beri', 'C: Scurvy', 'D: Rickets', 'K: Blood clotting issues'] },
    { title: 'Mineral Functions', points: ['Calcium: Bone/Teeth strength', 'Iron: Hemoglobin formation', 'Iodine: Thyroid health', 'Sodium: Water balance'] }
  ]
};
