import { Jobs } from "../constants/constant";
const JobListings: React.FC = () => {
  return (
    <>
      <main className="w-[80%] ">
        {Jobs.map((job) => (
          <section className="bg-Desaturated-Dark-Cyan my-20 w-full ">
            <article
              className="bg-white flex justify-between items-center my-4 p-4"
              key={job.id}
            >
              <div className="w-[25%] flex justify-between items-center">
                <img src={`./images/${job.logo}`} alt={job.company} />
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
          </section>
        ))}
      </main>
    </>
  );
};

export default JobListings;
