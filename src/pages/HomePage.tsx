import JobListings from "../components/JobListings";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <main className="bg-[var(--color-Light-Grayish-Cyan-Background)]">
      <Header />
      <JobListings />
    </main>
  );
};

export default HomePage;
