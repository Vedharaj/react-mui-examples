import {
    Stack,
    Alert,
    AlertTitle,
    Button
} from "@mui/material";

import {FaCheck} from "react-icons/fa6";

const MuiAlert = () => {
  return (
    <Stack spacing={4}>
        <Alert severity="error">This is error alert</Alert>
        <Alert severity="warning">This is warning alert</Alert>
        <Alert severity="info">This is info alert</Alert>
        <Alert severity="success" action={
            <Button>UNDO</Button>
        }>This is success alert</Alert>

        <Alert variant="outlined" severity="error">This is error alert</Alert>
        <Alert variant="outlined" severity="warning">This is warning alert</Alert>
        <Alert variant="outlined" severity="info">This is info alert</Alert>
        <Alert variant="outlined" severity="success">This is success alert</Alert>
        
        <Alert variant="outlined" severity="error">
            <AlertTitle>Error</AlertTitle>
            This is error alert
        </Alert>
        <Alert variant="outlined" severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is warning alert
        </Alert>
        <Alert variant="outlined" severity="info">
            <AlertTitle>Info</AlertTitle>
            This is info alert
        </Alert>
        <Alert 
            variant="outlined"
            severity="success"
            icon={<FaCheck />}
            onClose={()=>alert("are you want close?")}
        >
            <AlertTitle>Success</AlertTitle>
            This is success alert
        </Alert>

        <Alert variant="filled" severity="error">This is error alert</Alert>
        <Alert variant="filled" severity="warning">This is warning alert</Alert>
        <Alert variant="filled" severity="info">This is info alert</Alert>
        <Alert variant="filled" severity="success">This is success alert</Alert>
    </Stack>
  )
}

export default MuiAlert