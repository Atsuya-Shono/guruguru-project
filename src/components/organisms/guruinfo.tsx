const info = {
  id: 1,
  post: "", // 投稿日
  views: 0, // 閲覧回数
  name: "革命居酒屋", // 店名
  images: ["", "", ""], // 画像,path or url
  budet: "￥100", // 予算
  opening: "0:00 ~ 24:00", // 営業時間
  map: "", // 地図(画像？)
  comments: ["おいしい", "こすぱよし", "てんいんがいい"], // 一言コメント
  tags: ["海鮮", "肉", "中華", "日本酒"], // タグ,string
  target: "革命児", // 目的
  recommend: ["", "", ""] // 類似ページid
};

export const GuruInfo = () => {

  return (
    <div>
      <h2>{info.name}</h2>
      <img height={80} width={180} src={info.images[0]} />
      <dl>
        <dt>予算:</dt>
        <dl>{info.budet}</dl>
        <dt>営業時間・定休日:</dt>
        <dl>{info.opening}</dl>
        <dt>マップ:</dt>
        <dl>{info.map}</dl>
      </dl>
    </div>
  );
}
