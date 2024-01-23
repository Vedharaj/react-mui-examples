import React from 'react'
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
// import Setup from './components/MuiText'
// import Setup from './components/MuiButtons'
// import Setup from './components/MuiTextField'
// import Setup from './components/MuiSelect'
// import Setup from './components/MuiRadioButton'
// import Setup from './components/MuiCheckbox'
// import Setup from './components/MuiSwitch'
// import Setup from './components/MuiRating'
// import Setup from './components/MuiAutocomplete'
// import Setup from './components/MuiLayout'
// import Setup from './components/MuiCard'
// import Setup from './components/MuiAccordion'
// import Setup from './components/MuiImageList'
// import Setup from './components/MuiNavbar'
// import Setup from './components/MuiLink'
// import Setup from './components/MuiBottomNavigation'
// import Setup from './components/MuiAvatar'
// import Setup from './components/MuiBadge'
// import Setup from './components/MuiList'
// import Setup from './components/MuiChip'
// import Setup from './components/MuiTooltip'
// import Setup from './components/MuiTable'
// import Setup from './components/MuiAlert'
// import Setup from './components/MuiSnackbar'
// import Setup from './components/MuiDialog'
// import Setup from './components/MuiProgress'
// import Setup from './components/MuiSkeleton'
// import Setup from './components/MuiLoadingBtn'
// import Setup from './components/MuiTimeline'
// import Setup from './components/MuiMasonry'
import Setup from './components/MuiResponsiveness'

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='App'>
        <Setup />
      </div>
    </LocalizationProvider>
  )
}

export default App