import { RecoilState, atom } from "recoil";

export const themeModeState: RecoilState<boolean> = atom({
  key: "themeModeState",
  default: false,
});
