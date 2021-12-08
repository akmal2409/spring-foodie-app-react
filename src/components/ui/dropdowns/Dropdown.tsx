import { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import { useClickOutside } from '../../../hooks/useClickOutside';
import Spacer from '../Spacer';
import { ChevronDown } from '../svg/ChevronDown';


export const DropdownContainer = styled.div<StylePropsContainer>`
  position: relative;
  height: ${props => props.height || '56px'};
  background: ${props => props.background || 'var(--theme-background-primary)'};
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin: 0;
  cursor: pointer;
  width: 100%;

  ${props => props.flexGrow ? `flex-grow: ${props.flexGrow};` : ''}
`;

const OptionContainer = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  background: var(--theme-background-primary);
  top: 100%;
  left: 0;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedOption = styled.div`
  font-weight: 500;
  line-height: 20px;
  flex-grow: 1;
`;

export const Option = styled.div`


`;

const Dropdown = (props: Props) => {
  const containerRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  useClickOutside(containerRef, () => setShowOptions(false));

  const toggle = () => {
    setShowOptions(prev => !prev);
  }

  return <DropdownContainer
    className={props.classes}
    onClick={toggle}
    flexGrow={props.flexGrow}
    ref={containerRef}
    height={props.height}
    background={props.background}>
    <Spacer spacer='4' />
    {props.icon && <IconContainer>{props.icon}</IconContainer>}
    <SelectedOption>{props.value}</SelectedOption>
    <IconContainer><ChevronDown /></IconContainer>
    {showOptions && <OptionContainer>{props.children}</OptionContainer>}
  </DropdownContainer>;
}



type Props = {
  children?: ReactNode | ReactNode[];
  height?: string;
  background?: string;
  icon?: ReactNode;
  value?: any;
  classes?: string;
  minWidth?: string;
  maxWidth?: string;
  flexGrow?: number;
};

type StylePropsContainer = {
  height?: string;
  background?: string;
  flexGrow?: number;
}

export default Dropdown;