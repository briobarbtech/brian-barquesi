import React from 'react'
import colors from '../../utils/colors'

function TextAreaForm({placeholder}) {

   

  return (
    <div>
      <textarea style={{marginBottom: 40,paddingLeft: 10,paddingTop: 10,width: 480, height: 160,borderRadius: 15, background: colors.colorWhiteSecondary,borderWidth: 0}} type="text" placeholder={placeholder.toUpperCase()} />
    </div>
  )
}

export default TextAreaForm
