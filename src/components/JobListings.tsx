import { Card } from "@heroui/card";
import { Jobs } from "../constants/constant";
const JobListings: React.FC = () => {
  return (
    <main className="lg:px-[5rem] px-[0.5rem] pt-[3rem]">
      {Jobs.map((job) =>
        job.featured ? (
          <Card className="bg-[var(--color-Desaturated-Dark-Cyan)] mb-[2rem] w-full rounded-[.3rem]">
            <article
              className="bg-[#fff] relative flex flex-col lg:flex-row justify-between items-start w-[98%] self-end "
              key={job.id}
            >
              <div className="lg:flex justify-start items-center pl-[.3rem]">
                <img
                  src={`./images/${job.logo}`}
                  className="w-[20%] absolute -top-[1.5rem] left-[1rem]"
                  alt={job.company}
                />
                {/* <div> */}
                <div className="flex justify-between items-center pt-[2rem] gap-x-[1.5rem]">
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
                <div className="text-[#535353]">
                  <span>{job.postedAt}</span> . <span>{job.contract}</span> .
                  <span>{job.location}</span>
                </div>
              </div>
              {/* </div> */}
              <div className="pl-[.3rem]">
                <span>{job.role}</span>
                <span>{job.level}</span>
                <div>
                  {job.languages.map((language) => (
                    <span>{language}</span>
                  ))}
                </div>
                <div>
                  {job.tools.map((tool) => (
                    <span>{tool}</span>
                  ))}
                </div>
              </div>
            </article>
          </Card>
        ) : (
          <article
            className="bg-[#fff] flex flex-col justify-between items-center w-[98%] self-end mb-[2rem] rounded-[.3rem]"
            key={job.id}
          >
            <div className="flex justify-between items-center">
              <img
                src={`./images/${job.logo}`}
                className="w-[30%]"
                alt={job.company}
              />
              <div>
                <div className="flex justify-between w-[80%]">
                  <h4 className="">{job.company}</h4>
                  <span className="">{job.new && <span>New</span>}</span>
                  <span className="">
                    {job.featured && <span>Featured</span>}
                  </span>
                </div>
                <h2 className="">{job.position}</h2>
                <div className="text-slate-400">
                  <span>{job.postedAt}</span> . <span>{job.contract}</span> .
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
            <div>
              <span>{job.role}</span>
              <span>{job.level}</span>
              <div>
                {job.languages.map((language) => (
                  <span>{language}</span>
                ))}
              </div>
              <div>
                {job.tools.map((tool) => (
                  <span>{tool}</span>
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
