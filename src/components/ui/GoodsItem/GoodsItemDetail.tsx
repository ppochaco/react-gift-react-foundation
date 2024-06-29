import {
  amountStyle,
  detailContainerStyle,
  subtitleStyle,
  titleStyle,
} from './styles';

interface GoodsItemDetailProps {
  subtitle: string;
  title: string;
  amount: string;
}

export const GoodsItemDetail = ({
  subtitle,
  title,
  amount,
}: GoodsItemDetailProps) => {
  return (
    <div css={detailContainerStyle}>
      <p css={subtitleStyle}>{subtitle}</p>
      <h2 css={titleStyle}>{title}</h2>
      <p css={amountStyle}>{amount}원</p>
    </div>
  );
};
