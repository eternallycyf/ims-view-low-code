import React, { useEffect, useState, type MouseEventHandler } from 'react';
import { useComponentConfigStore } from '../../stores/component-config';
import { Component, useComponetsStore } from '../../stores/components';
import HoverMask from '../HoverMask';

function EditArea() {
  const { components, addComponent } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();
  const [hoverComponentId, setHoverComponentId] = useState<number>();

  const handleMouseOver: MouseEventHandler = (e) => {
    const path = e.nativeEvent.composedPath();

    for (let i = 0; i < path.length; i += 1) {
      const ele = path[i] as HTMLElement;

      const componentId = ele.dataset?.componentId;
      if (componentId) {
        setHoverComponentId(+componentId);
        return;
      }
    }
  };

  function renderComponents(components: Component[]): React.ReactNode {
    return components.map((component: Component) => {
      const config = componentConfig?.[component.name];

      if (!config?.component) {
        return null;
      }

      return React.createElement(
        config.component,
        {
          key: component.id,
          id: component.id,
          name: component.name,
          ...config.defaultProps,
          ...component.props,
        },
        renderComponents(component.children || []),
      );
    });
  }

  // const handleClick: MouseEventHandler = (e) => {
  //   const path = e.nativeEvent.composedPath();

  //   for (let i = 0; i < path.length; i += 1) {
  //     const ele = path[i] as HTMLElement;

  //     const componentId = ele.dataset?.componentId;
  //     if (componentId) {
  //       setCurComponentId(+componentId);
  //       return;
  //     }
  //   }
  // };

  return (
    <div
      className="h-[100%] edit-area"
      style={{ position: 'relative' }}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => {
        setHoverComponentId(undefined);
      }}
      // onClick={handleClick}
    >
      {renderComponents(components)}
      {hoverComponentId && (
        <HoverMask
          portalWrapperClassName="portal-wrapper"
          containerClassName="edit-area"
          componentId={hoverComponentId}
        />
      )}

      <div className="portal-wrapper"></div>
    </div>
  );
}

export default EditArea;
