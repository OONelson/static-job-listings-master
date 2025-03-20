import * as React from "react";
import JobListings from "./JobListings";
import FilterBar from "./FilterBar";
import Header from "./Header";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <main className=" flex justify-center items-center flex-col bg-(--Light-Grayish-Cyan-Background)">
      <Header />
      <FilterBar />
      <JobListings />
    </main>
  );
};

export default HomePage;
