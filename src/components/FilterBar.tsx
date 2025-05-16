import { useFilter } from "./hooks/useFilters";

const FilterBar: React.FC = () => {
  const { filters, filteredJobs, handleClearFilters } = useFilter();

  return (
    filteredJobs.length > 0 && (
      <div className="bg-white shadow-md rounded px-4 py-2 mb-6 flex gap-4 flex-wrap items-center">
        {filters.map((filter, index) => (
          <span
            key={index}
            className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded font-semibold"
          >
            {filter}
          </span>
        ))}
        <button
          onClick={handleClearFilters}
          className="ml-auto text-red-500 font-semibold hover:underline"
        >
          Clear
        </button>
      </div>
    )
  );
};

export default FilterBar;
