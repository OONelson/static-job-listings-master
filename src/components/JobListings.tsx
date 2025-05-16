import { Card } from "@heroui/card";
import { useFilter } from "./hooks/useFilters";

const JobListings: React.FC = () => {
  const { handleFilterClick, filteredJobs } = useFilter();
  return (
    <main className="lg:px-[5rem] px-[0.5rem] py-[3rem] ">
      {filteredJobs.map((job) =>
        job.featured ? (
          <Card className="bg-[var(--color-Desaturated-Dark-Cyan)] mb-[3rem] rounded-[.3rem]">
            <article
              className="bg-[#fff] relative flex flex-col lg:flex-row justify-between items-start w-[98%] self-end rounded-r-[.3rem] shadow-[5rem]"
              key={job.id}
            >
              <div className="lg:flex justify-start items-center pl-[1rem] w-[90%]">
                <img
                  src={`./images/${job.logo}`}
                  className="w-[20%] absolute -top-[1.5rem] left-[1rem]"
                  alt={job.company}
                />
                {/* <div> */}
                <div className="flex justify-start items-center pt-[2rem] gap-x-[1.5rem]">
                  <h4 className="text-[var(--color-Desaturated-Dark-Cyan)]">
                    {job.company}
                  </h4>
                  <div className="flex justify-between items-center gap-x-[.5rem]">
                    {job.new && (
                      <span className="bg-[var(--color-Desaturated-Dark-Cyan)] text-[#fff] py-[.4rem] px-[.8rem] rounded-[1rem]">
                        New
                      </span>
                    )}
                    {job.featured && (
                      <span className="bg-[var(--color-Very-Dark-Grayish-Cyan)] text-[#fff] py-[.4rem] px-[.8rem] rounded-[1rem]">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <h2 className="text-[16px] mb-[1rem]">{job.position}</h2>
                <div className="text-[#535353] border-b-[2px]  border-[#d6d5d5] pb-[.5rem]">
                  <span>{job.postedAt}</span> · <span>{job.contract}</span> ·{" "}
                  <span>{job.location}</span>
                </div>
              </div>
              {/* </div> */}
              <div className="pl-[1rem] pt-[1rem] flex items-center gap-x-[.5rem] flex-wrap pb-[2rem] ">
                <span
                  className="bg-[var(--color-Light-Grayish-Cyan-Filter-Tablets)] py-[.3rem] px-[.5rem] text-[var(--color-Desaturated-Dark-Cyan)] font-[500] rounded-[.3rem] mb-[.5rem] cursor-pointer"
                  onClick={() => handleFilterClick(job.role)}
                >
                  {job.role}
                </span>
                <span
                  className="bg-[var(--color-Light-Grayish-Cyan-Filter-Tablets)] py-[.3rem] px-[.5rem] text-[var(--color-Desaturated-Dark-Cyan)] font-[500] rounded-[.3rem] mb-[.5rem] cursor-pointer"
                  onClick={() => handleFilterClick(job.level)}
                >
                  {job.level}
                </span>
                <div className="flex gap-x-[.5rem]">
                  {job.languages.map((language) => (
                    <span
                      className="bg-[var(--color-Light-Grayish-Cyan-Filter-Tablets)] py-[.3rem] px-[.5rem] text-[var(--color-Desaturated-Dark-Cyan)] font-[500] rounded-[.3rem] mb-[.5rem] cursor-pointer"
                      onClick={() => handleFilterClick(language)}
                    >
                      {language}
                    </span>
                  ))}
                </div>
                <div>
                  {job.tools.map((tool) => (
                    <span
                      className="bg-[var(--color-Light-Grayish-Cyan-Filter-Tablets)] py-[.3rem] px-[.5rem] text-[var(--color-Desaturated-Dark-Cyan)] font-[500] rounded-[.3rem] mb-[.5rem] cursor-pointer"
                      onClick={() => handleFilterClick(tool)}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Card>
        ) : (
          <article
            className="bg-[#fff] relative flex flex-col lg:flex-row justify-between items-start w-[98%] self-end rounded-[.3rem] shadow-[5rem] mb-[3rem]"
            key={job.id}
          >
            <div className="lg:flex justify-start items-center pl-[1rem] w-[90%]">
              <img
                src={`./images/${job.logo}`}
                className="w-[20%] absolute -top-[1.5rem] left-[1rem]"
                alt={job.company}
              />
              {/* <div> */}
              <div className="flex justify-start items-center pt-[2rem] gap-x-[1.5rem]">
                <h4 className="text-[var(--color-Desaturated-Dark-Cyan)]">
                  {job.company}
                </h4>
                <div className="flex justify-between items-center gap-x-[.5rem]">
                  {job.new && (
                    <span className="bg-[var(--color-Desaturated-Dark-Cyan)] text-[#fff] py-[.4rem] px-[.8rem] rounded-[1rem]">
                      New
                    </span>
                  )}
                  {job.featured && (
                    <span className="bg-[var(--color-Very-Dark-Grayish-Cyan)] text-[#fff] py-[.4rem] px-[.8rem] rounded-[1rem]">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <h2 className="text-[16px] mb-[1rem]">{job.position}</h2>
              <div className="text-[#535353] border-b-[2px]  border-[#d6d5d5] pb-[.5rem]">
                <span>{job.postedAt}</span> · <span>{job.contract}</span> ·{" "}
                <span>{job.location}</span>
              </div>
            </div>
            {/* </div> */}
            <div className="pl-[1rem] pt-[1rem] flex items-center gap-x-[.5rem] flex-wrap pb-[2rem] ">
              <span
                className="bg-[var(--color-Light-Grayish-Cyan-Filter-Tablets)] py-[.3rem] px-[.5rem] text-[var(--color-Desaturated-Dark-Cyan)] font-[500] rounded-[.3rem] mb-[.5rem] cursor-pointer"
                onClick={() => handleFilterClick(job.role)}
              >
                {job.role}
              </span>
              <span
                className="bg-[var(--color-Light-Grayish-Cyan-Filter-Tablets)] py-[.3rem] px-[.5rem] text-[var(--color-Desaturated-Dark-Cyan)] font-[500] rounded-[.3rem] mb-[.5rem] cursor-pointer"
                onClick={() => handleFilterClick(job.level)}
              >
                {job.level}
              </span>
              <div className="flex gap-x-[.5rem]">
                {job.languages.map((language) => (
                  <span
                    className="bg-[var(--color-Light-Grayish-Cyan-Filter-Tablets)] py-[.3rem] px-[.5rem] text-[var(--color-Desaturated-Dark-Cyan)] font-[500] rounded-[.3rem] mb-[.5rem] cursor-pointer"
                    onClick={() => handleFilterClick(language)}
                  >
                    {language}
                  </span>
                ))}
              </div>
              <div>
                {job.tools.map((tool) => (
                  <span
                    className="bg-[var(--color-Light-Grayish-Cyan-Filter-Tablets)] py-[.3rem] px-[.5rem] text-[var(--color-Desaturated-Dark-Cyan)] font-[500] rounded-[.3rem] mb-[.5rem] cursor-pointer"
                    onClick={() => handleFilterClick(tool)}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </article>
        )
      )}
    </main>
  );
};

export default JobListings;
