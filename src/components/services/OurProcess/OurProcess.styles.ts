import { styled } from '@mui/material/styles';
import { Box, Typography, Container, Stack } from '@mui/material';

export const ProcessSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: '93px 0',
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden',

    // Smooth transition overlay for top and bottom
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        background: `linear-gradient(
            to bottom, 
            ${theme.palette.background.default} 0%, 
            transparent 15%, 
            transparent 85%, 
            ${theme.palette.background.default} 100%
        )`,
    },
}));

export const VideoBg = styled('video')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    opacity: 0.3,
});

export const RelativeContainer = styled(Container)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    margin: 0,
    maxWidth: '100% !important',
    padding: '0 !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    [theme.breakpoints.down('lg')]: {
        alignItems: 'flex-start',
    },
}));

export const StepContentWrapper = styled(Stack)({
    width: '100%',
});

export const StepNumber = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    fontWeight: 700,
    color: theme.palette.section.processNumber,
    lineHeight: 1,
    minWidth: '85px',
    [theme.breakpoints.down('md')]: {
        fontSize: '48px',
        minWidth: '65px',
    },
}));