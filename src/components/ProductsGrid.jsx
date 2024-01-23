import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="card w-full bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
        >
          <figure className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-64 md:h-48 object-cover"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
            <span className="text-secondary block mb-4">{dollarsAmount}</span>
            <div className="flex justify-center">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
