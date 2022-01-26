import React from 'react';

const StarRating = ({ rating, handleRating }) => {
    const star = (rating) => {
        var tab = [];
        for (let i = 1; i <= 5; i++) {
            i <= rating ? tab.push(<span onClick={()=>handleRating(i)} style={{cursor:"pointer"}} >★</span>) : tab.push(<span onClick={()=>handleRating(i)} style={{cursor:"pointer"}} >☆</span>)
        }
        return tab;
    };
    return <div>
        {star(rating)}
    </div>;
};

StarRating.defaultProps = {
    handleRating:()=>{}
}

export default StarRating;