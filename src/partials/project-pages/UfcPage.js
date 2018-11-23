import React from "react";
import { Link } from "react-router-dom";
import ProjectContainer from "./ProjectContainer";
import Template from "./ProjectTemplate";
import Border from "../Border";

class UfcPage extends React.Component {
  render() {
    const projectInfo = {
      name: "Khabib vs McGregor",
      quote: "The world is watching",
      textblock1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil culpa, aliquid accusantium temporibus porro impedit perferendis magni est inventore mollitia commodi laborum suscipit, sint vitae repellendus ducimus sunt dolor reiciendis quidem. Laudantium numquam debitis a tenetur nisi, impedit corporis iusto eligendi odit quis maxime amet velit neque deserunt officiis!",
      textblock2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil culpa, aliquid accusantium temporibus porro impedit perferendis magni est inventore mollitia commodi laborum suscipit, sint vitae repellendus ducimus sunt dolor reiciendis quidem. Laudantium numquam debitis a tenetur nisi, impedit corporis iusto eligendi odit quis maxime amet velit neque deserunt officiis!",
      imgMain:
        "https://img.maximummedia.ie/sportsjoe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtc3BvcnRzam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE4XFxcLzA4XFxcLzE1MDkzNTE3XFxcL1VGQy0yMjktdGlja2V0LXByaWNlcy5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuc3BvcnRzam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvc3BvcnRzam9lXFxcL25vLWltYWdlLnBuZz92PTVcIn0iLCJoYXNoIjoiNWUyYTMxMmJkOWM3YWM5MGE3NjM4YTZlZmI0ZmQ3NWI3ZDBkODExNiJ9/ufc-229-ticket-prices.png",
      imgMainAlt: "Conor and Khabib faceoff"
    };
    return (
      <ProjectContainer id={"ufc-page"}>
        <Template project={projectInfo} />
        <Border />
      </ProjectContainer>
    );
  }
}

export default UfcPage;
