import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='mx-8 md:mx-24'>{children}</div>;
};

export default Container;
