import type { StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

declare module '@storybook/react' {
  export type StrictStoryObj<C extends React.FC<any>> = C extends ComponentType<infer P>
    ? { args?: P } & StoryObj<P>
    : never;
}
