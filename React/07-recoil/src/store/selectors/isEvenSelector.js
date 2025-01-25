import { selector } from "recoil";
import { counterAtom } from "../atoms/counter";

export const evenSelector = selector({
    key : "isEven",
    get : ({ get }) => {
        const count = get(counterAtom);
        return count % 2 === 0;
    }
});