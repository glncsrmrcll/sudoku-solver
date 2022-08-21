import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        title: 'Sudoku Solver',
        callToAction: 'Solve a Sudoku!',
        lorem:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore aperiam cupiditate, qui maxime, aut consectetur illo voluptate error necessitatibus ad laudantium ullam? Fugiat reprehenderit provident eaque ipsum! Iste, esse accusantium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias voluptate eveniet officiis rem corrupti voluptatem odit perspiciatis, nam iste sint totam deleniti delectus magnam alias harum! Quasi, aut sunt.',
        notFound: 'Not found :(',
        weekly: 'Sing up to get weekly sudokus!',
        difficulty1: 'Easy',
        difficulty2: 'Medium',
        difficulty3: 'Hard',
        signUp: 'Sign Up',
        emailPlaceholder: 'jane.doe@gmail.com',
        subscribed:
          'Thank you for subscribing! We will send you {{diff}} sudokus weekly to {{email}}.',
        solve: 'Solve!',
        help: 'Let me help you solve a Sudoku!',
        reset: 'Reset',
        invalid: 'Invalid sudoku!',
        minError: 'You need to enter at least 17 values!',
        emailError: 'Please enter a correct email address',
      },
    },
  },
});
