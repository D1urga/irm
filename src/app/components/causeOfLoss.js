import React, { useState } from "react";
import styles from "./styles/causeOfLoss.module.css";
import { FaAngleUp, FaArrowRight } from "react-icons/fa";

export default function CauseOfLoss({
  causeOfLoss,
  setCauseOfLoss,
  onClickFun,
}) {
  const [isSuggestionShowing, setIsSuggestionShowing] = useState(false);
  const handleChange = (event) => {
    setCauseOfLoss({
      ...causeOfLoss,
      [event.target.name]: event.target.value,
    });
  };
  const handleSuggestionChange = (event, val) => {
    setCauseOfLoss({
      ...causeOfLoss,
      causeOfLoss: val,
    });
  };
  const suggestions = [
    "Based on our observations and declarations of Insured on claim form, we tend to believe that the declared damages are of malicious nature, caused by unidentified individuals, in view of stealing copper pipes fittings and wires from Insured premises.However, there has been no forcible entry/ exit from Insured’s premises during this incidence – as mentioned above.",
    `Based on our observations and declarations of Insured on claim form, we tend to 
believe that the declared damages are of malicious nature, caused by unidentified 
individuals, in view of stealing copper pipes fittings and wires from Insured premises.
However, there has been no forcible entry/ exit from Insured’s premises during this 
incidence – as mentioned above.
Detail of the damages as follows:
• 1 indoor unit stollen on first floor – requires systematic replacement.
• 2 outdoor units demolished on ground floor – requires systematic replacement.
• 7 units copper pipes, fittings, and wiring damages – requires repairs.
We cannot state if the surveyed damages to fixtures were existing before the reported 
incidence. However, we believe that Insured’s declaration was made in good faith.
`,
    `Based on our observations – we understand that the damages tv cabinet as found at 
time of survey, might have been caused by accumulation of water following water 
filter burst in the kitchen of Insured’s premises.
`,
    `Based on our observations and declarations made by Insured, we are of clear opinion 
that the damages reported on location were caused by unidentified individual(s) with 
malicious intentions to steal from Insured’s premises, whereby there are clear and 
visible signs of forcible entry/ exit from the surveyed premises`,
    `Based on our observations and declarations made by Insured, we are of clear opinion 
that the damages reported on location were caused by unidentified individual(s) with 
malicious intentions to steal from Insured’s premises, whereby there are clear and 
visible signs of forcible entry/ exit from the surveyed premises.`,
    `Based on our observations and declarations of Insured, we are of opinion the 
damages caused to electrical appliances supplied as part of the covered project 
were subject to surficial scratches following the action of covering and uncovering in 
attempt to protect these appliances against damages on the construction site at 
completion stage. Completion stage was conducted within insurance period.
We were made to understand that the covering and uncovering exercises were done 
by Insured’s personnel, being the main contractor on site. It is also understood that 
such activity is part of main contractor’s job - Insured in this case.
Based on survey conducted, we cannot assess adequacy of sum insured under this 
policy. While bill of quantities for this project was supplied to us – we rely on 
declaration of Insured to assume that the appliances were part of the project.
In our opinion the damages are of accidental nature`,
    `Based on our observations and declaration made by insured, we are of opinion that 
the declared damages to polycarbonate roofing might have been caused by cyclonic 
gusts, which could have also caused detachment of the missing polycarbonate 
sheets.
We can neither justify adequacy of roofing fixation nor the presence of reported 
polycarbonate sheets prior to incidence. However, we believe the declaration of 
Insured was made in good faith.
Damages caused to wooden flooring inside bedroom is a result to rainwater infiltration
through the window frame, which in our opinion is result of manufacturing defects and 
not directly due to damage caused by cyclone Based on this, we are of opinion that wooden laminated flooring damage cannot be 
linked to damage cause by cyclone as there are no visible damage to window/ building 
structure from cyclonic conditions, which let water inside the premises.`,
    `Based on our observations and as per declaration of Insured – we tend to believe this 
is an obvious case of accidental fire outbreak which may be of electrical origin.
We cannot assess adequacy and appropriateness of electrical installation and 
protection devices in Insured’s premises`,
    `Clear signs of malicious damages (broken viewing panel, damaged generator door 
lock and snipped cables) were seen on the concerned equipment, based on which 
we are of opinion that this is a case of burglary, whereby unidentified individual(s) 
accessed Insured’s premises to steal copper cables.
We thus believe the claim is admissible under cover against malicious damage.`,
  ];
  return (
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <p>Cause of Loss</p>
        <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
      </div>
      <p
        style={{ cursor: "pointer" }}
        className={styles.des}
        onClick={() => {
          setIsSuggestionShowing(!isSuggestionShowing);
        }}
      >
        Description{" "}
        <span style={{ fontSize: "12px", color: "blue" }}>
          (see suggestions)
        </span>
      </p>
      <textarea
        value={causeOfLoss.causeOfLoss}
        onChange={handleChange}
        name="causeOfLoss"
        className={styles.intro_textarea}
        placeholder="description ..."
      ></textarea>
      <div
        className={isSuggestionShowing ? styles.suggestion : styles.suggestion1}
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIsSuggestionShowing(!isSuggestionShowing);
            }}
          />
          <p>reason suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {suggestions.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleSuggestionChange(e, data);
              }}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
