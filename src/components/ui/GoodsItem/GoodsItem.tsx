import { Image } from '@/components/ui/Image/Image';

import { GoodsItemDetail } from './GoodsItemDetail';
import { containerStyle } from './styles';

interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
}

export const GoodsItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
}: GoodsItemProps) => {
  return (
    <div css={containerStyle}>
      <Image width="8rem" src={imageSrc} ratio="square" radius={5} />
      <GoodsItemDetail subtitle={subtitle} title={title} amount={amount} />
    </div>
  );
};
