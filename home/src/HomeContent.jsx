import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getProducts, currency } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-7 px-8 py-16">
      {products.map((product) => (
        <div key={product.id} className="border p-8 flex flex-col">
          <Link to={`/product/${product.id}`} className="flex-1 self-center  p-4">
            <img src={product.image} alt={product.name} className="object-cover" />
          </Link>
          <div className="flex h-24 flex-2">
            <div className="flex flex-1 flex-col pr-6">
              <div className="flex-3 font-bold text-xl">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </div>
              <div className="text-sm mt-4">{product.description}</div>
            </div>
            <div className="flex w-28 flex-col items-end">
              <div className="flex-end">{currency.format(product.price)}</div>
              {loggedIn && (
                <div className="flex-end w-max mt-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={() => addToCart(product.id)}
                    id={`addtocart_${product.id}`}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
