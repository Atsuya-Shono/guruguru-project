export const InfoData = [...Array(10).keys()].map((val) => {
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
  