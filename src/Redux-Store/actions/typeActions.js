import { useDispatch } from "react-redux"
import { setSelectedType } from "../slice/SelectType";

export const TypeAction = () => {
    const dispatch = useDispatch();
    const setType = (item) => {
        dispatch(setSelectedType(item));
    }
    return {setType};
}