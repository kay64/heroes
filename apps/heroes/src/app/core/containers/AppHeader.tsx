import React from 'react';

import { Navigation } from '../components';
import UserButton from './UserButton';

const AppHeader: React.FC = () => {
  return <Navigation actions={<UserButton />} />;
};

export default AppHeader;
