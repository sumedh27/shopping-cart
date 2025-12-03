import ProductItem from "./ProductItem";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Peoples Shirt",
      price: 0.1,
      description: "Shirt Made by People",
      category: "Shirt",
      image: "https://robohash.org/you.png?size=200x200",
    },
    {
      id: 2,
      title: "Peoples Pant",
      price: 0.1,
      description: "Pant Made by People",
      category: "Pant",
      image: "https://robohash.org/1.png?size=200x200",
    },
    {
      id: 3,
      title: "Peoples Shorts",
      price: 0.1,
      description: "Shorts Made by People",
      category: "Shorts",
      image: "https://robohash.org/2.png?size=200x200",
    },
  ];

  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}
