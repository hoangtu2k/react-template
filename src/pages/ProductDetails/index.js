import React from 'react';

import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumb  from "@mui/material/Breadcrumbs";
import { emphasize, styled } from "@mui/material/styles";
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import Slider from 'react-slick';


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

    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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


                    <div className="card">
                            <div className="row">

                                <div className="col-md-4">

                                    <Slider {...productSliderOptions}>
                                        <div className='item'>
                                            <img src="https://acc957.com/Img/TaiKhoan.png" className='w-100' alt=''/>
                                        </div>
                                    </Slider>

                                </div>

                                <div className="col-md-8">

                                </div>

                            </div>
                    </div>

                </div>
        </>
    )
}

export default ProductDetails;