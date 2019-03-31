import reactLogo from '../assets/logo/react-logo.svg';
import todosLogo from '../assets/logo/todos-logo.svg';
import reduxLogo from '../assets/logo/redux-logo.svg';

export default [
  {
    linkClassName: 'App-logo-link-react',
    logo: reactLogo,
    logoAlt: 'React Logo',
    href: 'https://reactjs.org',
    external: true,
    text: 'Learn React'
  },
  {
    linkClassName: 'App-logo-link-todos',
    logo: todosLogo,
    logoAlt: 'Todos logo',
    href: '/todos',
    external: false,
    text: 'Todos'
  },
  {
    linkClassName: 'App-logo-link-redux',
    logo: reduxLogo,
    logoAlt: 'Redux Logo',
    href: 'https://redux.js.org',
    external: true,
    text: 'Learn Redux'
  }
];
