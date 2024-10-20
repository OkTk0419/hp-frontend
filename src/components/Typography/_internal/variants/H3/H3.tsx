import { Transition } from '@headlessui/react';

import { TypographyVariantProps, basicTransitionProps } from '../..';

export const H3 = ({ isShowing = true, children }: TypographyVariantProps) => {
  return (
    <Transition {...basicTransitionProps} show={isShowing}>
      <h3 className="text-xl font-bold">{children}</h3>
    </Transition>
  );
};
