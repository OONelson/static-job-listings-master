import { useState } from "react";
import { Jobs } from "../../constants/constant";

export const useFilter = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilterClick = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters((prev) => [...prev, filter]);
    }
  };

  const handleClearFilters = () => setFilters([]);

  const filteredJobs =
    filters.length === 0
      ? Jobs
      : Jobs.filter((job) => {
          const tags = [job.role, job.level, ...job.languages, ...job.tools];
          return filters.every((filter) => tags.includes(filter));
        });

  return {
    filters,
    setFilters,
    handleClearFilters,
    handleFilterClick,
    filteredJobs,
  };
};
