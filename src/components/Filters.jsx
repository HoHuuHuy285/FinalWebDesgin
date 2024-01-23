import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, year, category, shipping, order, price } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="filters[title][$contains]"
        defaultValue={search}
        size="input-sm"
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
        size="select-sm"
      />
      {/* Year */}
      <FormSelect
        label="sort by"
        name="filters[Year][$eq]"
        list={[2023, 2022, 2021]}
        defaultValue={year}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange
        label="select price"
        name="filters[price][$lte]"
        price={price}
        size="range-sm"
      />
      {/* SHIPPING */}
      <FormCheckbox
        label="free shipping"
        name="filters[shipping][$eq]"
        defaultValue={shipping}
        size="checkbox-sm"
      />
      {/* BUTTONS */}
      <div className="col-span-2 sm:col-span-1">
        <button type="submit" className="btn btn-primary btn-block">
          Search
        </button>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <Link to="/products" className="btn btn-accent btn-block">
          Reset
        </Link>
      </div>
    </Form>
  );
};
export default Filters;
