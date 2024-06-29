import { GoodsItem } from './components/ui/GoodsItem/GoodsItem';
import { RankingGoodsItem } from './components/ui/GoodsItem/RankingGoodsItem';

const App = () => {
  return (
    <div>
      <GoodsItem
        imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
        subtitle="카카오 프렌즈 특별 한정판"
        title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
        amount="1000000000"
      />
      <RankingGoodsItem
        rank={4}
        imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
        subtitle="카카오 프렌즈 특별 한정판"
        title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
        amount="1000000000"
      />
    </div>
  );
};

export default App;
