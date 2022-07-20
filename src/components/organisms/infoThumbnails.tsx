// import { useRecoilState } from "recoil";
import styled from "styled-components";
import { InfoThumbnail } from "../molecules/infoThumbnail";
// import { infoState } from "../store/infoState";
// import { InfoData } from "../data/infoData";
//import { InfoData } from "../data/infoData";

export const InfoData = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    post: "", // 投稿日
    views: 0, // 閲覧回数
    name: `革命居酒屋第` + val + `号店`,
    images: ["", "", ""], // 画像,path or url
    budet: "￥100", // 予算
    opening: "0:00 ~ 24:00", // 営業時間
    map: "", // 地図(画像？)
    comments: ["おいしい", "こすぱよし", "てんいんがいい"], // 一言コメント
    tags: ["海鮮", "肉", "中華", "日本酒"], // タグ,string
    target: "革命児", // 目的
    recommend: [1, 2, 3], // 類似ページid
  };
});

export const InfoThumbnails = () => {
  const infoIds: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <ul>
        {infoIds.map((key) => (
          <SLi key={key}>
            <InfoThumbnail id={key} />
          </SLi>
        ))}
      </ul>
    </>
  );
};

const SLi = styled.li`
display: block;
padding 10px;
text-align: center;
font-size: 120%;
`;
