import React, { useRef, useEffect, useState } from "react";
import { AcordionWrapper } from "./styles";
import { ArrowDownIcon } from "../../assets/svg";

const Panel = (props) => {
  const itemRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const height = itemRef.current.scrollHeight;
    setHeight(height);
  }, [height]);

  const { label, content, activeTab, index, activateTab } = props;
  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive}>
      <div className="plus" />
      <button className="panel__label" role="tab" onClick={activateTab}>
        {label.toUpperCase()}

        <div className='panel_icon'>
          <ArrowDownIcon width="15px" height="15px" />
        </div>
      </button>
      <div
        ref={itemRef}
        className="panel__inner"
        style={innerStyle}
        aria-hidden={!isActive}
      >
        <p className="panel__content">{content}</p>
      </div>
    </div>
  );
};

const Accordion = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  const { panels, ...otherProps } = props;
  return (
    <AcordionWrapper {...otherProps} role="tablist">
      {panels.map((panel, index) => (
        <Panel
          key={index}
          activeTab={activeTab}
          index={index}
          {...panel}
          activateTab={() => activateTab(index)}
        />
      ))}
    </AcordionWrapper>
  );
};

export default Accordion;
