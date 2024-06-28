import {
  amountStyle,
  containerStyle,
  subtitleStyle,
  textContainerStyle,
  titleStyle,
} from './styles';

interface BaseGoodsItemProps {
  imageComponent: React.ReactNode;
  subtitle: string;
  title: string;
  amount: string;
}

export const BaseGoodsItem = ({
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
