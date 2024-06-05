import React, { useState } from 'react';
import './CardComponent.css'
const cards = [
    { id: 1, content: 'Card 1 content', img: "https://media.licdn.com/dms/image/D5612AQEJE3Jeyxkw6w/article-cover_image-shrink_720_1280/0/1678832858907?e=2147483647&v=beta&t=_qqBTYXcoVwmllIqo4vvSC8GY16gR7yTIdro8Pr8e6U"  },
    { id: 2, content: 'Card 2 content', img: 'https://www.elegantthemes.com/blog/wp-content/uploads/2023/10/Chatsonic-Review.jpg'},
    { id: 3, content: 'Card 3 content', img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Midjourney_Emblem.svg"},
    { id: 4, content: 'Card 4 content', img: "https://raiday.ai/wp-content/uploads/2024/05/slides-jpg.webp"},
    { id: 5, content: 'Card 5 content', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXz27L9bHAa4yj82qSIz6xv1kyCGjeUmHN4MRlQD6KsG8jTDf6SngmOywGwjqvMJuGNA&usqp=CAU"},
    { id: 6, content: 'Card 6 content', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ry6djugDiGR_OlusXMH8qSLn14eYIq5QbgNFY1YKO6KpA03Vcy7yWIWYaQ9t9e_vQzU&usqp=CAU"},
    // ... more cards
  ];

const CardComponent = () => {
    const [isActive, setIsActive] = useState(true); 

  


    return (
      <div>
      <h1 className="text-3xl font text-center my-8 text-black bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent shadow-md transition duration-300 ease-in-out transform hover:scale-105">Our Partners</h1>
      <div className=" flex mx-auto px-4 gap-10">
          {cards.map((card) => (
              <div key={card.id} className="card w-96 bg-base-100 shadow-xl image-full slide-left">
                  {card.img && (
                      <figure>
                          <img src={card.img} alt="Card image" className="object-cover w-full h-30 rounded-t-lg" />
                      </figure>
                  )}
              </div>
          ))}
      </div>
  </div>
    );
};

export default CardComponent;

{/* <div key={card.id} content={card.content} className={isActive ? 'slide-left' : ''} /> */}