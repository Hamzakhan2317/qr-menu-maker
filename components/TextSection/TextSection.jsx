import { marqueeTextClass } from '@/styles/BrandSectionStyling/BrandSectionStyling'
import { Box, Typography } from '@mui/material'

const TextSection = () => {
    return (
        <Box sx={marqueeTextClass}>
            <Box>
                <marquee>
                    <Typography variant='h1' sx={{ color: "#bd81f7 " }}>
                        finedine all-in-one management platform for hotels. finedine all-in-one management platform for hotels. take reservations, take orders and payment.finedine all-in-one management platform for hotels. finedine all-in-one management platform for hotels. take reservations, take orders and payment.finedine all-in-one management platform for hotels. finedine all-in-one management platform for hotels. take reservations, take orders and payment.
                    </Typography>
                </marquee>
            </Box>
        </Box >
    )
}

export default TextSection