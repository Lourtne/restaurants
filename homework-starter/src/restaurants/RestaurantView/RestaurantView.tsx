import { Restaurant } from "../../api/api";
import { StarRating } from "../../ui/StarRating";
import "./RestaurantView.css"

export const RestaurantView = (restaurant: Restaurant) => {
    return (
        <li className="RestaurantView" key={restaurant.id}>
          <img className="restaurant-image" src={restaurant.url} alt="" />
          <span className="restaurant-title">{restaurant.name}</span>
          <p className="restaurant-descr">{restaurant.description}</p>
          <StarRating id={restaurant.id} raiting={restaurant.raiting}/>
        </li>
      );
}