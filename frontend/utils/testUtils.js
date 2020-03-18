import { render } from '@testing-library/react';

export const renderModal = (props, Component, renderOverride) => {
  const renderMethod = renderOverride || render;
  return renderMethod(
    <div id='portals'>
      <Component {...props} />
    </div>
  );
};
