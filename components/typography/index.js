import styled from '@emotion/styled'
import { css } from "@emotion/react";


const SharedTitle = () => css`
    font-weight: 400;
    line-height: var(--lineHeight0);
    text-transform: uppercase;
    transition: font-size var(--transition1);
    margin: 0;
`


// Titles

export const TitleXL = styled.h1`
    ${SharedTitle}
    font-size: var(--fontSize9);
    @media screen and (max-width: 1200px) {
        font-size: var(--fontSize8);
    }
    @media screen and (max-width: 996px) {
        font-size: var(--fontSize7);
    }
`

export const TitleLg = styled.h2`
    ${SharedTitle}
    font-size: var(--fontSize8);
    @media screen and (max-width: 1200px) {
        font-size: var(--fontSize7);
    }
    @media screen and (max-width: 996px) {
        font-size: var(--fontSize6);
    }
`

export const TitleMd = styled.h3`
    ${SharedTitle}
    font-size: var(--fontSize7);
    @media screen and (max-width: 1200px) {
        font-size: var(--fontSize6);
    }
    @media screen and (max-width: 996px) {
        font-size: var(--fontSize5);
    }
`

export const TitleSm = styled.h4`
    ${SharedTitle}
    font-size: var(--fontSize6);
    @media screen and (max-width: 1200px) {
        font-size: var(--fontSize5);
    }
    @media screen and (max-width: 996px) {
        font-size: var(--fontSize4);
    }
`

// Subtitles

export const SubtitleLg = styled.h5`
    ${SharedTitle}
    font-size: var(--fontSize5);
    @media screen and (max-width: 1200px) {
        font-size: var(--fontSize4);
    }
    @media screen and (max-width: 996px) {
        font-size: var(--fontSize3);
    }
`

export const Subtitle = styled.h6`
    ${SharedTitle}
    font-size: var(--fontSize4);
    @media screen and (max-width: 1200px) {
        font-size: var(--fontSize3);
    }
    @media screen and (max-width: 996px) {
        font-size: var(--fontSize2);
    }
`


// Labels

const SharedLabel = () => css`
    font-family: 'D-DINExp', sans-serif;
    font-weight: 600;
    line-height: var(--lineHeight1);
    transition: font-size var(--transition1);
    text-transform: uppercase;
    margin: 0;
`

export const Label = styled.div`
    ${SharedLabel}
    font-size: var(--fontSize1);
    letter-spacing: var(--letterSpacing1);
`

export const LabelStyle = () => css`
    font-family: 'D-DINExp', sans-serif;
    font-weight: 600;
    line-height: var(--lineHeight1);
    transition: font-size var(--transition1);
    text-transform: uppercase;
    margin: 0;
    font-size: var(--fontSize1);
    letter-spacing: var(--letterSpacing1);
`

export const LabelSm = styled.div`
    ${SharedLabel}
    font-size: var(--fontSize0);
    letter-spacing: var(--letterSpacing0);
`


// Body

const SharedBody = () => css`
    font-weight: 400;
    line-height: var(--lineHeight2);
    transition: font-size var(--transition1);
    margin: 0;
`

export const BodyLg = styled.p`
    ${SharedBody}
    font-size: var(--fontSize3);
    @media screen and (max-width: 996px) {
        font-size: var(--fontSize2);
    }
`

export const Body = styled.p`
    ${SharedBody}
    font-size: var(--fontSize2);
`


// Captions

const SharedCaptions = () => css`
    font-weight: 400;
    line-height: var(--lineHeight1);
    transition: font-size var(--transition1);
    margin: 0;
`

export const Caption = styled.p`
    ${SharedCaptions}
    font-size: var(--fontSize1);
`

export const CaptionSm = styled.p`
    ${SharedCaptions}
    font-size: var(--fontSize0);
`

