import { RankedImage } from '../Image/RankingImage';
import { GoodsItemDetail } from './GoodsItemDetail';
import { containerStyle } from './styles';

interface RankingGoodsItemProps {
  rank: number;
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
}

export const RankingGoodsItem = ({
  rank,
  imageSrc,
  subtitle,
  title,
  amount,
}: RankingGoodsItemProps) => {
  return (
    <div css={containerStyle}>
      <RankedImage
        rank={rank}
        imageSrc={imageSrc}
        alt={title}
        ratio="square"
        radius={5}
      />
      <GoodsItemDetail subtitle={subtitle} title={title} amount={amount} />
    </div>
  );
};
