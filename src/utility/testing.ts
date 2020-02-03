import { createEvent, fireEvent } from '@testing-library/dom';

export const closeDrawer = (baseElement: HTMLElement) => {
  const antContentWrapper = baseElement.querySelector(
    '.ant-drawer-content-wrapper',
  );

  if (!antContentWrapper) {
    throw new Error(
      'Could not find an element with class "ant-drawer-content-wrapper"',
    );
  }

  const ev = createEvent.transitionEnd(antContentWrapper);
  // @ts-ignore
  ev.propertyName = 'transform';
  fireEvent(antContentWrapper, ev);

  const closeButton = baseElement.querySelector('.ant-drawer-close')!;
  fireEvent.click(closeButton);
};
