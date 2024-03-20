import React from "react";
import SingleItemCard from "./SingleItemCard";

const ShowItem = () => {
  const booksData = [
    {
      name: "Pride and Prejudice",
      description:
        "A witty comedy of manners by Jane Austen that follows the relationships of five sisters in English society.",
      category: "Classic",
      price: 12.99,
      discountedPrice: 9.99,
      image:
        "https://www.penguinrandomhouse.com/books/286387/pride-and-prejudice-by-jane-austen-edited-with-an-introduction-and-notes-by-vivien-jones-original-penguin-classics-introduction-by-tony-tanner-cover-by-coralie-bickford-smith/",
    },
    {
      name: "To Kill a Mockingbird",
      description:
        "Harper Lee's Pulitzer Prize-winning novel that explores racial prejudice in the American South through the eyes of a young girl.",
      category: "Classic",
      price: 14.5,
      discountedPrice: 11.6,
      image:
        "https://www.harpercollins.com/products/to-kill-a-mockingbird-harper-lee",
    },
    {
      name: "The Hobbit",
      description:
        "J.R.R. Tolkien's fantasy adventure that follows Bilbo Baggins on a quest to reclaim a mountain hoard from a dragon.",
      category: "Fantasy",
      price: 10.99,
      discountedPrice: 8.79,
      image:
        "https://www.amazon.com/Hobbit-Publisher-Houghton-Mifflin-Harcourt/dp/B004N0JH8Y",
    },
    {
      name: "The Lord of the Rings Trilogy",
      description:
        "An epic high-fantasy trilogy by J.R.R. Tolkien that chronicles the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
      category: "Fantasy",
      price: 29.99,
      discountedPrice: 23.99,
      image: "https://www.amazon.com/Lord-Rings-3-Volumes/dp/0618153977",
    },
    {
      name: "The Very Hungry Caterpillar",
      description:
        "Eric Carle's colorful and engaging children's book that follows a very hungry caterpillar as he eats his way through the week.",
      category: "Children",
      price: 7.99,
      discountedPrice: 6.39,
      image:
        "https://www.penguinrandomhouse.com/books/301943/the-very-hungry-caterpillar-by-eric-carle/",
    },
  ];
  return (
    <div className="row">
      {booksData.map((item, idx) => (
        <div className="col-md-4" key={idx}>
          <SingleItemCard bookDetail={item} />
        </div>
      ))}
    </div>
  );
};

export default ShowItem;
