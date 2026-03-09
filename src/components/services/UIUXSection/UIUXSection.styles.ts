import { styled } from '@mui/material/styles';
import { Box, ListItem } from '@mui/material';
import Image from 'next/image';

export const SectionContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 0',
    gap: '93px', // Figma gap
    margin: '0 auto',
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        gap: '40px',
        padding: '40px 24px',
    },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    // This was the error: You had [theme.breakpoints.down('sm')]: { display: 'none' } here.
    // I have removed it so the Title, Desc, and Tools stay visible.

    '& .what-we-did-section': {
        padding: '32px 0',
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none', // Only this part should hide
        },
    },

    '& .title': {
        fontSize: '22px',
        fontWeight: 600,
        color: theme.palette.section.heading,
        marginBottom: '12px',
        fontFamily: 'Montserrat, sans-serif',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px', // Fixed your font-size boost for mobile
            fontWeight: 400,
        },
    },

    '& .desc': {
        fontSize: '20px',
        color: theme.palette.section.desc,
        lineHeight: 1.6,
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            fontWeight: 400,
        },
    },

    '& .subtitle': {
        fontSize: '20px',
        fontWeight: 600,
        color: theme.palette.section.heading,
        marginBottom: '8px',
    },
}));

export const CustomListItem = styled(ListItem)(({ theme }) => ({
    paddingLeft: '0px',
    fontSize: '20px',
    color: theme.palette.section.desc,
    display: 'list-item',
    listStyleType: 'disc',
    '&::marker': {
        color: theme.palette.section.heading,
    },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
    flex: '0 0 713px', // Width from Figma
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xl')]: {
        flex: 1,
    },
}));

export const ToolIcon = styled(Image)(({ theme }) => ({
    objectFit: 'contain',
    borderRadius: '20px',
    width: '80px',
    height: '40px',

    [theme.breakpoints.down('sm')]: {
        width: '60px',
        height: '30px',
    },
}));