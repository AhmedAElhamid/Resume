import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(education => {
      return (
        <div key={education.school} className="twelve columns">
            <div className="two columns">
            <img className="school-image" src={education.schoolImage.includes("http")
                ? education.schoolImage :
                `images/${education.schoolImage}`} alt={education.school} />

            </div>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(work => {
        const {description} = work;
      return (
        <div className="company" key={work.company}>
            <div className="two columns">
                <img className="work-image" src={work.companyImage.includes("http")
                    ? work.companyImage :
                    `images/${work.companyImage}`} alt={work.company} />

            </div>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{description.intro}</p>
            <h4>Responsibilities</h4>
          <ul>
              {description.responsibilities.map(r =>(
              <li style={{listStyleType: "circle"}} key={r}>{r}</li>
            ))}
          </ul>
            <h4>Achievements</h4>
            <ul>
              {description.achievements.map(a =>(
              <li style={{listStyleType: "circle"}} key={a}>{a}</li>
            ))}
          </ul>
        </div>
      );
    });

    const courses = this.props.data.courses.map(course => {
        return(
            <div key={course.school} className="twelve columns">
                <div className="two columns">
                    <img className="school-image" src={course.schoolImage.includes("http")
                        ? course.schoolImage :
                        `images/${course.schoolImage}`} alt={course.school} />

                </div>
                <h3>{course.school}</h3>
                <p className="info">
                    {course.degree} <span>&bull;</span>
                    <em className="date">{course.graduated}</em>
                </p>
            </div>
        );
    })

    const skills = this.props.data.skills.map(skills => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
          <div className="row courses">
          <div className="three columns header-col">
            <h1>
              <span>Courses</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{courses}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
