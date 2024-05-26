import { useDispatch } from "react-redux"
import { openCardState } from "../slice/CardOpen";

export const CardAction = () => {
    const dispatch = useDispatch();
    const openCard = () => {
        dispatch(openCardState());
    }
    return {openCard};
}