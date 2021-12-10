import { useEffect, useState } from "react";

import { starsElements } from "@components/Rating/Rating.module.css";

export const Rating = ({ rating }) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const amount = [...Array(rating).keys()];
        setStars(amount);
    }, [rating]);

    return (
        <section className={starsElements}>
            {stars.map((star) => (
                <p key={star}>⭐️</p>
            ))}
        </section>
    );
};
