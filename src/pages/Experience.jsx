import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";



function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2003 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Saraswati Vidya Mandir, Kalyan, Maharashtra.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">S.S.C</h4>
          <p>Score- 84%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            B.K. Birla College Of Arts, Science & Commerce, Kalyan, Maharashtra.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">H.S.C</h4>

          <p>Score- 74.85%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            M.H Saboo Siddik College Of Engineering, Byculla, Mumbai.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Automobile Engineer.
          </h4>

          <p> CGPI- 7.07</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Service Head/Analyst - RSA AUTO I-CARE.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maharashtra, India
          </h4>
          <p>
            As the Team Leader at this company, I oversee Operations, Marketing
            and Data Analysis holding the resposibility for managing diverse
            functions within the organization.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sales Analyst - KiCK EV
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maharashtra, India
          </h4>
          <p>
            In this role, I held a crucial resposibility in analyzing sales
            datato steer strategic decision making within the organization.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
