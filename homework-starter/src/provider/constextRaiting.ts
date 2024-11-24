import { createContext } from "react";
import { UpdateRestaurantRaitingArgs } from "../api/api";

export const  contextRaiting = createContext({method: ({ id, raiting }:UpdateRestaurantRaitingArgs) => {console.log(id, raiting)}});