import { ReactNode } from 'react';

import { GRID_DEFAULT_COLUMNS, GRID_DEFAULT_GAP } from '@/constants/styles';
import { Column } from '@/types/uiTypes';

import { gridStyle } from './styles';

type GridProps = {
  gap?: number;
  columns?: Column;
  children: ReactNode;
};

export const Grid = ({
  gap = GRID_DEFAULT_GAP,
  columns = GRID_DEFAULT_COLUMNS,
  children,
}: GridProps) => {
  return <div css={gridStyle(gap, columns)}>{children}</div>;
};
