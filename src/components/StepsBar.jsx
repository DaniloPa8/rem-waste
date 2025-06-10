import styles from "styles/components/StepBar.module.css";

import { SvgRenderer } from "./SvgRenderer";
import { useState } from "react";

import { ReactComponent as TrashIcon } from "resources/waste.svg";
import { ReactComponent as PermitIcon } from "resources/permit.svg";
import { ReactComponent as DateIcon } from "resources/date.svg";
import { ReactComponent as PaymentIcon } from "resources/payment.svg";
import { ReactComponent as PostcodeIcon } from "resources/postcode.svg";
import { ReactComponent as SkipIcon } from "resources/skip.svg";

const steps = [
  { name: "Postcode", icon: PostcodeIcon },
  { name: "Waste Type", icon: TrashIcon },
  { name: "Select Skip", icon: SkipIcon },
  { name: "Permit Check", icon: PermitIcon },
  { name: "Choose Date", icon: DateIcon },
  { name: "Payment", icon: PaymentIcon },
];

export const StepsBar = () => {
  const [activeStep] = useState(2);

  return (
    <div className={styles.barWrapper}>
      <button className={styles.mobileBackButton}>Back</button>
      {steps.map((oneStep, index) => {
        const IconComponent = oneStep.icon;

        return (
          <div
            className={`${styles.oneStep} ${
              index === activeStep && styles.activeStep
            } ${index > activeStep && styles.disabledStep} ${
              index < activeStep && styles.takenStep
            }`}
            key={index}
          >
            <SvgRenderer width={"20%"}>
              <IconComponent />
            </SvgRenderer>
            <p className={styles.stepText}>{oneStep.name}</p>
            <div className={styles.mobileStepNumber}>
              <span>
                Step {index + 1} of {steps.length}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
