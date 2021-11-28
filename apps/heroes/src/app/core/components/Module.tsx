import React from 'react';

export type ModuleProps = {
  element: React.FC;
};

const Module: React.FC<ModuleProps> = (props) => {
  const { element: ModuleComponent } = props;

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <ModuleComponent />
    </React.Suspense>
  );
};

export default Module;
