import { Box, Divider, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'
import ScheduleWidget from "./ScheduleWidget"
import ClassWidget from "./ClassWidget"
import RightContent from "./RightContent"
import WeatherTime from "./WeatherTime"

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const Maincontent = () => {
    return (
        <Box
            id='main-content'
            sx={{
                maxWidth: '1500px',
                flexGrow: '1',
                flexShrink: '1',
                display: 'flex',
                my: 2,
            }}
        >
            <Box
                id='center-content'
                sx={{
                    maxWidth: '1000px',
                    flexGrow: '1',
                    flexShrink: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    mx: 2,
                }}
            >
                <WeatherTime />
                {/* <ScheduleWidget /> */}
                {/* <ClassWidget /> */}
            </Box>
            <RightContent />
        </Box>
    )
}

export default Maincontent
