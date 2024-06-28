import { css } from '@emotion/react';

import Image from '@/components/ui/Image';

import GoodsItem from './components/ui/GoodsItem/GoodsItem';
import RankingGoodsItem from './components/ui/GoodsItem/RankingGoodsItem';

const imageStyle = css({
  width: '400px',
  height: 'auto',
});

const App = () => {
  return (
    <div>
      <div css={imageStyle}>
        <Image src="https://picsum.photos/536/354" />
      </div>
      <GoodsItem
        imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
        subtitle="카카오 프렌즈 특별 한정판"
        title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
        amount="100000000000"
      />
      <RankingGoodsItem
        rank={4}
        imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
        subtitle="카카오 프렌즈 특별 한정판"
        title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
        amount="100000000000"
      />
    </div>
  );
};

export default App;
