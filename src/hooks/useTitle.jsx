import { useEffect } from "react";


export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} | ShopMate Cart`;
    }
        , [title])
    return null;
}
