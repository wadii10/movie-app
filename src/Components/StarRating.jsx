import React from 'react';

const StarRating = ({ rating }) => {
    const star = (rating) => {
        var tab = [];
        for (let i = 1; i <= 5; i++) {
            i <= rating ? tab.push(<span>★</span>) : tab.push(<span>☆</span>)
        }
        return tab;
    };
    return <div>
        {star(rating)}
    </div>;
};

export default StarRating;
