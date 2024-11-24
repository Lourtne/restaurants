import "./StarRating.css";
import star from "../../assets/star.svg";
import unstar from "../../assets/unstar.svg";
import { FC, useContext, useState } from "react";
import { contextRaiting } from "../../provider/constextRaiting";

export interface TProps {
    id: string;
    raiting: number
  }

export const StarRating: FC<TProps> = ({id, raiting}) => {    
    const stars: number[] = Array(5).fill(0);

    const [currentItem, setCurrentItem] = useState<number>(raiting-1);

    const contextData = useContext(contextRaiting);

    const handleSubmit = ({id, raiting}: {id: string, raiting: number}) => {
        contextData.method({id, raiting});
    }

    return (
        <div className="star-rating" >
            {stars.map((item, index: number) => {
                return (
                    <div
                        key={index}
                        onClick={() => setCurrentItem(index)}>
                        <img className="star" src={index <= currentItem ? unstar : star} onClick={() => handleSubmit({id, raiting: index + 1})}></img>
                    </div>
    )
})}
        </div >
      );
}