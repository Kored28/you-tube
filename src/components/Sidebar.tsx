import React from 'react'
//Components
import { Stack } from '@mui/material'

// Utils
import { categories, icons } from '../Utility/constant'

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}


const Sidebar: React.FC<Props> = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
     direction='row'
     sx={{
      overflow:  'auto',
      height: {sx: 'auto', md: '95%'},
      flexDirection: { md: 'column'}
     }}
    >
      {categories.map(({name, icon}) =>{ 
        const Icon = icons[icon]
        return(
        <button className='category-btn'
         onClick={() => setSelectedCategory(name)}
         style={{
          background: name === selectedCategory ? '#FC1503' : undefined,
          color: 'white'
         }}
         key={name}
        >
          <span style={{ color: name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}
          >
            <Icon/>
          </span>
          <span style={{opacity: name === selectedCategory ? '1' : '0.8'}}>
            {name}
          </span>
        </button>
      )})}
    </Stack>
  )
}

export default Sidebar