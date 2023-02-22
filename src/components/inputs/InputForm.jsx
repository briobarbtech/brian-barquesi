import React from 'react'
import colors from '../../utils/colors'

function InputForm({placeholder}) {

  

  return (
    <div>
      <input style={{marginBottom: 40,paddingLeft: 10,width: 480, height: 40,borderRadius: 15, background: colors.colorWhiteSecondary,borderWidth: 0}} type="text" placeholder={placeholder.toUpperCase()} />
    </div>
  )
}

export default InputForm
