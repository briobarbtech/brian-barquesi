import React, { useState } from 'react'
import colors from '../utils/colors'

function ProjectsCard({link, alt, img, title}) {

  const CardStyled = {width: 340, height: 360, marginBottom: 20}
  const imageContainerStyled = {background: colors.colorBackgroundSecondary,width: 340, height: 280, display: 'flex', justifyContent: 'center', alignItems: 'center'}
  const imageStyled = {width: 320}
  const titleStyled = {color: colors.colorWhite, fontFamily: "Kanit, sans-serif",
  fontSize: 22,
  fontWeight: 'Bold',marginTop: 10,
  marginBottom: 10,marginLeft: 10}
  const linkStyled = {fontFamily: "Kanit, sans-serif",marginLeft: 10,
  fontSize: 20,textDecoration: 'none', color: colors.colorPrimary, shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2}
  const linkStyled2 = {fontFamily: "Kanit, sans-serif",marginLeft: 10,
  fontSize: 20,textDecoration: 'none', color: colors.colorWhite, shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2}
 
  const [state, setState] = useState(linkStyled)

  return (
    <div style={CardStyled}>
      <div style={imageContainerStyled}><img style={imageStyled} src={img} alt={alt} /></div>
      <p style={titleStyled}>{title}</p>
      <a onMouseEnter={()=>setState(linkStyled2)} onMouseLeave={()=>setState(linkStyled)} style={state} href={link}>Ver más +</a>
    </div>
  )
}

export default ProjectsCard
