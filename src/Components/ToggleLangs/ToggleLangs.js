import React, { useContext } from 'react'
import French from '../../assets/france.svg'
import Spain from '../../assets/spain.svg'
import Uk from '../../assets/united-kingdom.svg'
import Mg from '../../assets/madagascar.png'
import { langContext } from '../../context/langContext'
import './ToggleLangs.css'

export default function ToggleLangs() {
    const { toogleLang } = useContext(langContext);
  return (
      <div className='container-langs '>
          <img onClick={() => toogleLang('FR')} src={French} />
          <img onClick={() => toogleLang('ES')} src={Spain} />
          <img onClick={() => toogleLang('EN')} src={Uk} />
          <img onClick={() => toogleLang('MG')} src={Mg} />
      </div>
  )
}
