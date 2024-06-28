import { css } from '@emotion/react';

type GridProps = {
  gap?: number;
  columns?: number;
  children: React.ReactNode;
};

export const Grid = ({ gap = 0, columns = 1, children }: GridProps) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        gap: ${gap}px;
      `}
    >
      {children}
    </div>
  );
};
