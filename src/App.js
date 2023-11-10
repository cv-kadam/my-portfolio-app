import React from "react";

const App = () => {
  const portfolioData = {
    name: "Shah Rukh Khan",
    place: "Mumbai, India",
    skills: [
      "Acting",
      "Film Production",
      "Public Speaking",
      "Charity Work",
      "Entrepreneurship",
    ],
    projects: [
      {
        title: "-My Blockbuster Film",
        description:
          "Directed and starred in a record-breaking blockbuster movie that captivated audiences worldwide.",
      },
      {
        title: "-Being Human Initiative",
        description:
          "Founded a charitable foundation focused on healthcare and education for underprivileged children.",
      },
      {
        title: "-SRK Productions",
        description:
          "Established a highly successful film production company known for producing quality cinema.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2>
            <u>PLACE:</u> {portfolioData.place}
          </h2>
        </div>
        <div className="body">
          <div className="about">
            <h3>
              <u>ABOUT ME</u>
            </h3>
            <p>
              Shah Rukh Khan is a renowned actor, film producer, and
              philanthropist. He has received numerous awards for his
              outstanding contributions to the film industry. In addition to
              his successful acting career, he is known for his charitable work
              and entrepreneurship endeavors.
            </p>
          </div>
          <div className="skills">
            <h3>
              <u>SKILLS</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3>
              <u>PROJECTS</u>
            </h3>
            {portfolioData.projects.map((project) => (
              <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
