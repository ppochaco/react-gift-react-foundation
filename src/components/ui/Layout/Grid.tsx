import { ReactNode } from 'react';

import { Column } from '@/types/uiTypes';

import { gridStyle } from './styles';

type GridProps = {
  gap?: number;
  columns?: Column;
  children: ReactNode;
};

export const Grid = ({
  gap = 0,
  columns = { initial: 1, lg: 4, md: 3, sm: 2 },
  children,
}: GridProps) => {
  return <div css={gridStyle(gap, columns)}>{children}</div>;
};
