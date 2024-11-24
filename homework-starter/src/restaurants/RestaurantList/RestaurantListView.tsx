import { Restaurant } from "../../api/api";
import { RestaurantView } from "../RestaurantView/RestaurantView";
import "./RestaurantListView.css";
import { FC } from "react";

export interface restaurantListViewProps {
  restaurantList: Restaurant[];
}

export const RestaurantListView: FC<restaurantListViewProps> = ({ restaurantList }) => {
  if (restaurantList.length > 0) {
    return (
      <ul className="restaurant-list-view">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantView
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              description={restaurant.description}
              url={restaurant.url}
              raiting={restaurant.raiting} />
          );
        })}
      </ul>
    );
  } else {
    return (
      <div className="error">
        <span>По запросу поиска данные не найдены.</span>
      </div>
    )
  }

};
