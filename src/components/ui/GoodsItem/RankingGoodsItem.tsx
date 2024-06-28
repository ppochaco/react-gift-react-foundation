import BaseGoodsItem from './BaseGoodsItem';
import RankedImage from './RankingImage';

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
    <BaseGoodsItem
      imageComponent={
        <RankedImage
          rank={rank}
          imageSrc={imageSrc}
          alt={title}
          ratio="square"
          radius={5}
        />
      }
      subtitle={subtitle}
      title={title}
      amount={amount}
    />
  );
};
