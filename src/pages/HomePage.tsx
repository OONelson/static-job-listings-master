import JobListings from "../components/JobListings";
import FilterBar from "../components/FilterBar";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <main className="bg-[var(--color-Light-Grayish-Cyan-Background)]">
      <Header />
      <FilterBar />
      <JobListings />
    </main>
  );
};

export default HomePage;
