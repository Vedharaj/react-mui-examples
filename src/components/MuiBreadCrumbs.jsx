import { 
    Box,
    Breadcrumbs,
    Link,
} from "@mui/material";

import {MdOutlineArrowForwardIos} from "react-icons/md";

const MuiBreadCrumbs = () => {
  return (
    <Box>
        <Breadcrumbs aria-label='breadcrumpts'>
            <Link underline='hover' href="#">Home</Link>
            <Link underline='hover' href="#">Catalog</Link>
            <Link underline='hover' href="#">Accessories</Link>
            <Link underline='hover' href="#">Shoes</Link>
        </Breadcrumbs>
        <Breadcrumbs aria-label='breadcrumpts' separator='-'>
            <Link underline='hover' href="#">Home</Link>
            <Link underline='hover' href="#">Catalog</Link>
            <Link underline='hover' href="#">Accessories</Link>
            <Link underline='hover' href="#">Shoes</Link>
        </Breadcrumbs>
        <Breadcrumbs aria-label='breadcrumpts' separator={<MdOutlineArrowForwardIos />}>
            <Link underline='hover' href="#">Home</Link>
            <Link underline='hover' href="#">Catalog</Link>
            <Link underline='hover' href="#">Accessories</Link>
            <Link underline='hover' href="#">Shoes</Link>
        </Breadcrumbs>
        <Breadcrumbs 
            aria-label='breadcrumpts'
            separator={<MdOutlineArrowForwardIos />}
            maxItems={3}
        >
            <Link underline='hover' href="#">Home</Link>
            <Link underline='hover' href="#">Catalog</Link>
            <Link underline='hover' href="#">Accessories</Link>
            <Link underline='hover' href="#">Shoes</Link>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadCrumbs