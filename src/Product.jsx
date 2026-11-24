// import { useParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

// function Product() {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const search = searchParams.get("search");

//   return (
//     <div>
//         <h2>Product ID: {id}</h2>
//         <h2>Search Result: {search}</h2>
//     </div>
//   )
// }
// export default Product;
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return <h2>Search Result: {search}</h2>;
}
export default Products;