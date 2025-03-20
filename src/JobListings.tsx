import * as React from "react";
import "./index.css";

const Jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

interface IJobListingsProps {}

const JobListings: React.FunctionComponent<IJobListingsProps> = () => {
  const MainContainerStyles = {
    background: "var(--Desaturated-Dar-Cyan)",
    width: "80%",
    margin: "5rem 0 5rem 0",
  };

  const ContainerStyles = {
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem 0 1rem 0",
    padding: "1rem",
  };

  const SubContainerStyles = {
    width: "25%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <>
      <section style={MainContainerStyles}>
        {Jobs.map((job) => (
          <article style={ContainerStyles} key={job.id}>
            <div style={SubContainerStyles}>
              <img src={job.logo} alt={job.company} />
              <div>
                <div className="flex justify-between w-[80%]">
                  <h4 className="jobCompany">{job.company}</h4>
                  <span className="jobNew">{job.new && <span>New</span>}</span>
                  <span className="jobFeatured">
                    {job.featured && <span>Featured</span>}
                  </span>
                </div>
                <h2 className="jobPosition">{job.position}</h2>
                <div className="text-slate-400">
                  <span>{job.postedAt}</span> . <span>{job.contract}</span> .
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
            <div>
              <span>{job.role}</span>
              <span>{job.level}</span>
              <span>{job.languages}</span>
              <div>
                {job.tools.map((tool) => (
                  <span>{tool}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
    // </main>
  );
};

export default JobListings;
