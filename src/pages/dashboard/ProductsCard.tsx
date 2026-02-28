import Card from "./Card";
import type { Product } from "../../types";
import Spinner from "../../components/Spinner";
import { FiPlus } from "react-icons/fi";

type ProductsProps = {
  isLoading: boolean;
  productsData: undefined | Product[];
};

const ProductsCard = ({ isLoading, productsData }: ProductsProps) => {
  if (isLoading || !productsData) {
    return (
      <Card>
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      </Card>
    );
  }
  return (
    <Card>
      <section>
        <div className="mb-2 flex justify-between gap-2">
          <h3 className="text-xl font-bold text-gray-800">Products</h3>
          <button className="flex items-center gap-1 rounded-xl border border-green-900 px-2 py-1 text-green-900 hover:cursor-pointer">
            <span>
              <FiPlus />
            </span>
            <span>New</span>
          </button>
        </div>
        <div className="space-y-2">
          {productsData.map((product) => (
            <div key={product.id}>
              <p className="font-semibold text-gray-800">{product.name}</p>
              <p className="text-gray-400">{product.price}$</p>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );
};
export default ProductsCard;
