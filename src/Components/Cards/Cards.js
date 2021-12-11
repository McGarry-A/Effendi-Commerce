import "./Cards.css";
import Card from "../Card/Card";
const Cards = () => {
  const sections = [
    {
      name: "MENS",
      image:
        "https://images.unsplash.com/photo-1519699391638-2c1858ed0a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "WOMENS",
      image:
        "https://images.unsplash.com/photo-1545296593-4f1259273322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=914&q=80",
    },
    {
      name: "CHILDREN",
      image:
        "https://images.unsplash.com/photo-1601299124383-d65f0339d910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "HOME",
      image: "https://images.unsplash.com/photo-1471880504582-cf7e63045303?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80",
    },
  ];
  return (
    <section className="cards">
      {sections.map((el, index) => {
        return (
          <div>
            <Card name={el.name} image={el.image} key={index} />
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
