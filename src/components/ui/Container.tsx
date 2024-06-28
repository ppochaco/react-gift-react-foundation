import { css } from '@emotion/react';
import React from 'react';

type FlexDirection = 'row' | 'column';
type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';
type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: string;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}

export const Container = ({
  children,
  maxWidth,
  flexDirection = 'row',
  justifyContent,
  alignItems,
  ...rest
}: ContainerProps) => {
  return (
    <div
      css={containerStyle(maxWidth, flexDirection, justifyContent, alignItems)}
      {...rest}
    >
      {children}
    </div>
  );
};

const containerStyle = (
  maxWidth?: string,
  flexDirection?: FlexDirection,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems
) =>
  css({
    display: 'flex',
    maxWidth,
    flexDirection,
    justifyContent,
    alignItems,
  });
