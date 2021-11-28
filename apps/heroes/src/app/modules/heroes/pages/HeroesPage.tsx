import React from 'react';

import { Button, TextField } from '../../../shared';
import Layout from '../components/Layout';

const HeroesPage: React.FC = () => {
  return (
    <Layout
      title="Heroes"
      counter={2}
      actions={
        <>
          <Button label="Create" onClick={() => alert('CREATE')} />
          <TextField placeholder="Search" />
        </>
      }
      list={<div>list</div>}
      content={<div>content</div>}
    />
  );
};

export default HeroesPage;
