import { useRecoilValue } from "recoil";
import { infoState } from "../store/infoState";

const infos = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    post: "", // 投稿日
    views: 0, // 閲覧回数  
    name: `革命居酒屋第` + val + `号店`,  images: ["", "", ""], // 画像,path or url
    budet: "￥100", // 予算
    opening: "0:00 ~ 24:00", // 営業時間
    map: "", // 地図(画像？)
    comments: ["おいしい", "こすぱよし", "てんいんがいい"], // 一言コメント
    tags: ["海鮮", "肉", "中華", "日本酒"], // タグ,string
    target: "革命児", // 目的
    recommend: ["", "", ""] // 類似ページid
  
  };
});

export const GuruInfo = () => {

  //onst { id } = props;
  // console.log(infos[val].id);
  //const id = 2;
  const id = useRecoilValue(infoState);
  console.log(id);

  return (
    <div>
      <h2>{infos[id].name}</h2>
      <img height={180} width={180} src={infos[id].images[0]} />
      <dl>
        <dt>予算:</dt>
        <dl>{infos[id].budet}</dl>
        <dt>営業時間・定休日:</dt>
        <dl>{infos[id].opening}</dl>
        <dt>マップ:</dt>
        <dl>{infos[id].map}</dl>
      </dl>
    </div>
  );
}

