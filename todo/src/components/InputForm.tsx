import React from 'react'

type InputFormType = {
    note: string
    setNote: (note: string) => void
}

export const InputForm: React.FC<InputFormType> = ({note, setNote}) => {
  return (
    <div>
        <input 
        style={{marginLeft: '50px', marginTop: '50px'}}
        type="text" 
        value={note}
        onChange={e => setNote(e.currentTarget.value)}
      />
    </div>
  )
}
