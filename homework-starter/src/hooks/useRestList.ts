import { useMemo, useState } from "react";
import { queryClient } from "../api/queryClient";
import { getRestaurants } from "../api/api";
import { useQuery } from "@tanstack/react-query";

export const useRestList = () => {
    const RestaurantListQuery = useQuery(
    {
        queryFn: () => getRestaurants(),
        queryKey: ["Restaurant"],
    },
    queryClient
    );

    const [searchItem, setSearchItem] = useState("");

    const list = useMemo ( () => {
        if (RestaurantListQuery.data) {
            return RestaurantListQuery.data.filter((x) => 
                x.name.toLowerCase().includes(searchItem.toLowerCase())
            );
        } else {
            return []
        }
    }, [searchItem, RestaurantListQuery.data]);

    return {
        RestaurantListQuery,
        setSearchItem,
        list,
        searchItem
    };
};