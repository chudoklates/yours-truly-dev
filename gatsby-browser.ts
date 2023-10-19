import ReactDOM from 'react-dom/client';
import wrapper from './src/wrapper';

export const wrapPageElement = wrapper;

export const replaceHydrateFunction = () => {
  return (element: React.ReactNode, container: Element | DocumentFragment) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};
