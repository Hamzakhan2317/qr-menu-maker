import { marqueeTextClass } from '@/styles/BrandSectionStyling/BrandSectionStyling'
import { textSectionHeadingStyles } from '@/styles/TextSectionStyles/TextSectionStyles'
import { Box, Typography } from '@mui/material'

const TextSection = () => {
    return (
        <Box sx={marqueeTextClass}>
            <Box>
                <marquee scrollamount="20">
                    <Typography sx={textSectionHeadingStyles}>
                        finedine all-in-one management platform for hotels. finedine all-in-one management platform for hotels. take reservations, take orders and payment.finedine all-in-one management platform for hotels. finedine all-in-one management platform for hotels. take reservations, take orders and payment.finedine all-in-one management platform for hotels. finedine all-in-one management platform for hotels. take reservations, take orders and payment.
                    </Typography>
                </marquee>
            </Box>
        </Box >
    )
}

export default TextSection