import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

import styles from "./FAQSection.module.css";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <svg className={styles.chevron} width={20} height={32}>
          <use href="/sprite.svg#icon-chevron"></use>
        </svg>
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

const FAQSection = () => {
  return (
    <div>
      <div className={styles.accordion}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={250}>
          <AccordionItem header="What is Lorem Ipsum?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionItem>

          <AccordionItem header="Where does it come from?">
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
            erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
          </AccordionItem>

          <AccordionItem header="Why do we use it?">
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
