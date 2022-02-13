import {ReactNode, useState} from 'react'
import styled from 'styled-components'
import {ChevronDown} from '../../svg/ChevronDown'
import {ChevronUp} from '../../svg/ChevronUp'

const MenuCollapse = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const contentClass = collapsed ? '' : 'open'

  return (
    <MenuCollapseContainer>
      <MenuButton onClick={() => setCollapsed(prev => !prev)}>
        <span className="btn-title">{props.header}</span>
        {collapsed ? <ChevronDown width="24px" height="24px" /> : <ChevronUp width="24px" height="24px" />}
      </MenuButton>
      <CollapseContent className={contentClass}>{props.children}</CollapseContent>
    </MenuCollapseContainer>
  )
}

const MenuCollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const CollapseContent = styled.div`
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.25s ease-in-out;

  &.open {
    max-height: 250px;
    opacity: 1;
  }
`

const MenuButton = styled.button`
  outline: none;
  background: none;
  border: none;
  width: 100%;
  padding: 10px 0;
  font-weight: 500;
  text-align: start;
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  overflow: hidden;

  .btn-title {
    display: inline-block;
  }
`

interface Props {
  children?: ReactNode | ReactNode[]
  header: string
}

export default MenuCollapse
