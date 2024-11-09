import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumb  from "@mui/material/Breadcrumbs";
import { emphasize, styled } from "@mui/material/styles";
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
} );

const ProductDetails = () => {
    return(
        <>
                <div className="right-content w-100">
                    <div className="card shadow border-0 w-100 flex-row p-4">
                        <h5 className="mb-0">Chi tiết sản phẩm</h5>
                        <Breadcrumb aria-label="breadcrumb" className="ml-auto breadcrumbs_">

                            <StyledBreadcrumb component = "a"
                                href="#"
                                label="Tổng quan"
                                icon={<HomeIcon fontSize ="small" />}
                             />

                            <StyledBreadcrumb component="a"
                            href="/products"
                            label="Danh sách sản phẩm"
                            deleteIcon={<ExpandMore />}
                            />

                            <StyledBreadcrumb
                                label="Chi tiết sản phẩm"
                                deleteIcon={<ExpandMore />}
                             />

                        </Breadcrumb>

                    </div>
                </div>
        </>
    )
}

export default ProductDetails;