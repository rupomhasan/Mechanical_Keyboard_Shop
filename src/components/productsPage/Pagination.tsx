import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../redux/features/productsApi";
import { setFilter } from "../../redux/features/product/productSlice";
import { RootState } from "../../redux/store";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = () => {
  const filters = useSelector((state: RootState) => state.products.filters);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllProductsQuery({});
  const totalPage = Math.ceil(data?.data?.length / filters.limit);
  const handlePrev = () => {
    if (1 < Number(filters.page)) {
      // setPage(page - 1);
      const pageNumber = filters.page - 1;
      dispatch(setFilter({ page: Number(pageNumber) }));
    }
  };
  const handleNext = () => {
    if (totalPage > Number(filters.page)) {
      const pageNumber = filters.page + 1;
      dispatch(setFilter({ page: Number(pageNumber) }));
    }
  };

  return (
    <div className="px-4 py-2 rounded">
      {!data ? (
        <>No data is found</>
      ) : isLoading ? (
        "Is Loading..."
      ) : (
        <div className="join ">
          <button onClick={handlePrev} className="join-item btn btn-sm rounded">
            <MdKeyboardDoubleArrowLeft className="text-2xl" />
          </button>
          <div>
            {Array(totalPage)
              .fill(0)
              .map((item, idx) => {
                const pageNumber = idx + 1;

                return (
                  <button
                    onClick={() =>
                      dispatch(setFilter({ page: Number(pageNumber) }))
                    }
                    className={` ${
                      pageNumber === filters.page
                        ? "bg-blue-500 text-white"
                        : ""
                    } btn btn-sm join-item`}
                    key={pageNumber}
                  >
                    {pageNumber}
                  </button>
                );
              })}
          </div>

          <button onClick={handleNext} className="join-item btn btn-sm rounded">
            <MdKeyboardDoubleArrowRight className="text-2xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
