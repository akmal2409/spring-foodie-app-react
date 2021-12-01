import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  height: auto;
  cursor: pointer;
  outline: none;
  transition: background 100ms ease 0s;
  &:hover {
    background: #f6f6f6;
  }

  & .option_icon {
    border-radius: 50%;
    background-color: var(--theme-background-grey);
    padding: 4px 5px 2px 5px;

    * {
      width: 24px;
    }
  }

  .option-wrapper {
    margin-left: 6px;
    .option_label {
      font-weight: normal;
    }

    .option_sublabel {
      font-weight: 300;
      color: var(--theme-text-secondary);
    }
  }
`;

const Option = ({ onClick, value, label, sublabel, optionIcon }: Props) => {
  return <StyledOption onClick={() => onClick(value)}>
    {optionIcon && <div className='option_icon'>
      {optionIcon}
    </div>}
    <div className='option-wrapper'>
      <div className='option_label'>{label}</div>
      {sublabel && <div className='option_sublabel'>{sublabel}</div>}
    </div>
  </StyledOption>;
}

type Props = {
  value: any;
  onClick: (value: any) => void;
  label: string;
  sublabel?: string;
  optionIcon?: ReactNode;
}

export default Option;