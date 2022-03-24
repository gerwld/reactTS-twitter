import React from 'react'
import s from "./Header.module.css";

const Header: React.FC<HeaderProps> = ({children}) => {
  return (
    <div className={s.header}>{children}</div>
  )
}

interface HeaderProps {
  children: React.ReactNode
}

export default Header