import { useMutation } from "@tanstack/react-query";
import { updateRestaurantRating } from "../api/api";
import { queryClient } from "../api/queryClient";

export const useRaiting = () => {
    const mutate = useMutation(
        {
            mutationFn: updateRestaurantRating,
            onSuccess() {
                queryClient.invalidateQueries({ queryKey: ['restaurant'] });
            },
        },
        queryClient
    )

    return {mutate};
}