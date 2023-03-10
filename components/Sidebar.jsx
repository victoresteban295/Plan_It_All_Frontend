import { BallotOutlined, CalendarMonth, CalendarMonthOutlined, Dashboard, NotificationsNone } from "@mui/icons-material"
import { Box, Stack, Button, Typography, Divider } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabinSideBar = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const Sidebar = () => {
    return (
        <Box
            id='left-sidebar'
            sx={{
                display : {xs: 'none', md: 'inline'},
                width: '200px',
                p: 3,
            }}
        >
            <Stack
                spacing={1}
                alignItems='flex-start'
            >
                <Button 
                    variant='text' 
                    startIcon={<Dashboard />} 
                    sx={{
                        color: 'text.primary',
                        "&:hover": {
                            background: '#ccc5b9'
                        },
                    }}
                >    
                    <Typography variant='button' className={cabinSideBar.className}
                    >
                        Dashboard
                    </Typography>
                </Button>
                <Button 
                    variant='text' 
                    startIcon={<CalendarMonthOutlined />} 
                    sx={{
                        color: 'text.primary',
                        "&:hover": {
                            background: '#ccc5b9'
                        },
                    }}
                >    
                    <Typography variant='button' className={cabinSideBar.className}>
                        Calendar
                    </Typography>
                </Button>
                <Button 
                    variant='text' 
                    startIcon={<NotificationsNone />} 
                    sx={{
                        color: 'text.primary',
                        "&:hover": {
                            background: '#ccc5b9'
                        },
                    }}
                >    
                    <Typography variant='button' className={cabinSideBar.className}>
                        Reminders
                    </Typography>
                </Button>
                <Button 
                    variant='text' 
                    startIcon={<BallotOutlined />} 
                    sx={{
                        color: 'text.primary',
                        "&:hover": {
                            background: '#ccc5b9'
                        },
                    }}
                >    
                    <Typography variant='button' className={cabinSideBar.className}>
                        Checklist
                    </Typography>
                </Button>
                <Divider variant='middle' sx={{width: '150px', bgcolor: 'text.primary'}}/>
                <Button 
                    variant='text' 
                    sx={{
                        color: 'text.primary',
                        "&:hover": {
                            background: '#ccc5b9'
                        },
                    }}
                >    
                    <Typography variant='button' className={cabinSideBar.className}>
                        Math 345
                    </Typography>
                </Button>
                <Button 
                    variant='text' 
                    sx={{
                        color: 'text.primary',
                        "&:hover": {
                            background: '#ccc5b9'
                        },
                    }}
                >
                    <Typography variant='button' className={cabinSideBar.className}>
                        CS 247
                    </Typography>
                </Button>
                <Button 
                    variant='text' 
                    sx={{
                        color: 'text.primary',
                        "&:hover": {
                            background: '#ccc5b9'
                        },
                    }}
                >    
                    <Typography variant='button' className={cabinSideBar.className}>
                        Math 230
                    </Typography>
                </Button>
                <Button 
                    variant='text' 
                    sx={{
                        color: 'text.primary',
                        "&:hover": {
                            background: '#ccc5b9'
                        },
                    }}
                >    
                    <Typography variant='button' className={cabinSideBar.className}>
                        CHEM 121
                    </Typography>
                </Button>
            </Stack>
        </Box>

    )
}

export default Sidebar
