import { css } from '@emotion/react';

interface BaseGoodsItemProps {
  imageComponent: React.ReactNode;
  subtitle: string;
  title: string;
  amount: string;
}

const BaseGoodsItem = ({
  imageComponent,
  subtitle,
  title,
  amount,
}: BaseGoodsItemProps) => {
  return (
    <div css={containerStyle}>
      {imageComponent}
      <div css={textContainerStyle}>
        <p css={subtitleStyle}>{subtitle}</p>
        <h2 css={titleStyle}>{title}</h2>
        <p css={amountStyle}>{amount}원</p>
      </div>
    </div>
  );
};

export default BaseGoodsItem;

const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '8rem',
  gap: '1rem',
  alignItems: 'center',
  backgroundColor: '#ffffff',
});

const textContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const titleStyle = css({
  fontSize: '0.9rem',
  margin: '0 0 8px 0',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const subtitleStyle = css({
  fontSize: '0.9rem',
  color: '#757575',
  margin: '0 0 4px 0',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const amountStyle = css({
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: '#000000',
  margin: '0',
  wordBreak: 'break-all',
});
