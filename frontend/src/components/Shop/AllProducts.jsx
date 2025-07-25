// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { Link } from "react-router-dom";
// import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// import { Button } from "@mui/material";
// import Loader from "./Layout/Loader";
// import { DataGrid } from "@mui/x-data-grid";

// const AllProducts = () => {
//   const { products, isLoading } = useSelector((state) => state.products);
//   const { seller } = useSelector((state) => state.seller);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllProductsShop(seller._id));
//   }, [dispatch]);

//   const columns = [
//     {
//       field: "id",
//       headerName: "Product id",
//       minWidth: 150,
//       flex: 0.7,
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       minWidth: 180,
//       flex: 1.4,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       type: "number",
//       minWidth: 100,
//       flex: 0.6,
//     },
//     {
//       field: "sold",
//       headerName: "Sold Out",
//       type: "number",
//       minWidth: 130,
//       flex: 0.6,
//     },
//     {
//       field: "preview",
//       headerName: "",
//       type: "number",
//       minWidth: 100,
//       flex: 0.8,
//       sortable: false,
//       renderCell: (params) => {
//         const d = params.row.name;
//         const product_name = d.response(/\s+/g, "-");
//         return (
//           <>
//             <Link to={`/prduct/${product_name}`}>
//               <Button>
//                 <AiOutlineEye size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },

//     {
//       field: "preview",
//       headerName: "",
//       type: "number",
//       minWidth: 100,
//       flex: 0.8,
//       sortable: false,
//       renderCell: (params) => {
//         const d = params.row.name;
//         const product_name = d.response(/\s+/g, "-");
//         return (
//           <>
//             <Link to={`/prduct/${product_name}`}>
//               <Button>
//                 <AiOutlineDelete size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//   ];
//   const row = [];
//   products &&
//     products.forEach((item) => {
//       row.push({
//         id: item._id,
//         name: item.name,
//         price: "US$" + item.discountPrice,
//         stock: item.stock,
//         sold: 10,
//       });
//     });
//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white ">
//             <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableRowSelectionOnClick
//             autoHeight/>
//         </div>
//       )}
//     </>
//   );
// };

// export default AllProducts;



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProductsShop } from "../../redux/actions/product";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Button } from "@mui/material";
import Loader from "./Layout/Loader";
import { DataGrid } from "@mui/x-data-grid";

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  useEffect(() => {
    if (seller && seller._id) {
      dispatch(getAllProductsShop(seller._id));
    }
  }, [dispatch, seller]);

  const handleDelete=(id)=>{
    dispatch(deleteProduct(id));
    window.location.reload();
  }

  const columns = [
    {
      field: "id",
      headerName: "Product ID",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "sold",
      headerName: "Sold Out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "preview",
      headerName: "Preview",
      type: "number",
      minWidth: 100,
      flex: 0.5,
      sortable: false,
      renderCell: (params) => {
        const product_name = params.row.name.replace(/\s+/g, "-");
        return (
          <Link to={`/product/${product_name}`}>
            <Button>
              <AiOutlineEye size={20} />
            </Button>
          </Link>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      type: "number",
      minWidth: 100,
      flex: 0.5,
      sortable: false,
      renderCell: (params) => {
        const product_name = params.row.name.replace(/\s+/g, "-");
        return (
          <Link to={`/product/${product_name}`}>
            <Button
            onClick={()=>handleDelete(params.id)}
            >
              <AiOutlineDelete size={20} />
            </Button>
          </Link>
        );
      },
    },
  ];

  const rows = products
    ? products.map((item) => ({
        id: item._id,
        name: item.name,
        price: "US$" + item.discountPrice,
        stock: item.stock,
        sold: item.sold || 0,
      }))
    : [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableRowSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllProducts;
