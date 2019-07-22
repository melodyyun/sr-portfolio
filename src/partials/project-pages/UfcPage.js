import React from "react";
import ProjectContainer from "./ProjectContainer";
import Template from "./ProjectTemplate";

class UfcPage extends React.Component {
  render() {
    const projectInfo = {
      name: "Khabib vs. McGregor",
      quote: "The world is watching",
      textblock1: [
        "On October 6th, 2018, millions of people around the world huddled around their TV’s, anticipating the biggest UFC match of all time between two of the fiercest rivals to ever enter The Octagon - Khabib Nurmagomedov and Conor McGregor. Some would watch at their favourite local pub and others would round up the gang on Saturday night at home.",
        "I had the opportunity to spearhead a multi-level marketing campaign at Bell Canada to showcase this fight to our millions of customers. Working alongside numerous cross-functional teams from product to content to marketing communications, we made sure our targeted communications hit over 1 million Canadian households and our call centers were equipped to deal with the info needed to guide customers."
      ],
      textblock2: [
        "The project required communication and strategy with key internal and external to understand the story behind Khabib and Conor. We showcased the excitement leading up the event with social messaging via Facebook, Twitter and Instagram stories and then dropped an email to  customers before the event. Our social focused on positioning the fight as the most exciting of the year and available on our leading platform service.",
        "We executed flawlessly and saw the biggest numbers for a UFC event in 2018, and the second biggest of all time, only behind UFC 217: Bisping vs. St-Pierre, our hometown hero."
      ],
      imgMain: "http://melodyyun.com/saad/assets/images/ufcbackground.png",
      imgMainAlt: "Khabib vs McGregor faceoff",
      nextLink: "flipgive",
      nextProject: "FlipGive",
      imgSub: "http://melodyyun.com/saad/assets/images/ufc229SS.png",
      imgSubAlt: "Official Bell Screen Saver for UFC229"
    };
    return (
      <ProjectContainer id={"ufc-page"}>
        <Template project={projectInfo} />
      </ProjectContainer>
    );
  }
}

export default UfcPage;
