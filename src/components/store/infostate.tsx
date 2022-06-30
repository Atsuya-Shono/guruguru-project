import { atom } from "recoil";

export const infoState = atom<number>({
    key: "infoState",
    default: 0
});
