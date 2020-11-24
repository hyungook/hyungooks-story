import React from 'react'
import styled from 'styled-components';


export const Cursor = styled.div`
    display:none;

    @media only screen and (min-width: 1025px) {
        display:block;
        position: fixed;
        width: 50px;
        height: 50px;
        border: 1px solid #c6c6c6;
        border-radius: 50%;
        left: 0;
        top: 0;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: 0.1s ease;
        z-index: 99999;
    }
`;
export const Cursor2 = styled.div`    
    display:none;

    @media only screen and (min-width: 1025px) {
        display:block;
        position: fixed;
        width: 4px;
        height: 4px;
        background-color: #2966ff20;
        border-radius: 50%;
        left: 0;
        top: 0;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
    
        z-index: 99999;
    }
`;

export const Wrap = styled.section`
    width: 100%;
    box-sizing: border-box;
`;

export const AboutWrap = styled.div`

    @media only screen and (min-width: 1025px) {
        margin: 0;
        width: 84%;
        height: 100vh;
        overflow-y: scroll;
        float: right;
        padding: 80px 0 0 40px;
        box-sizing: border-box;
    }
`;

export const MainHeader = styled.header`

    position: relative;
    width: 100%;
    margin-bottom: 54px;
    
    h1 {
        font-size: 4rem;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 8px 0 2px 0;
        line-height: 4rem;
        color: #bbbbbb;
    }
    p {
        position: absolute;
        font-family: S-CoreDream-1Thin,sans-serif;
        font-size: 1.3rem;
        z-index: 999;
        color: #bbbbbb;
    }

    @media only screen and (min-width: 768px) {
        margin-bottom: 140px;
        h1 {
            font-size: 7rem;
            font-family: "Squada One", cursive;
            font-weight: 400;
            margin: 0 0 8px 0;
            line-height: 5rem;
            color: #bbbbbb;
        }
        p {
            position: absolute;
            font-family: S-CoreDream-1Thin,sans-serif;
            font-size: 2.6rem;
            z-index: 999;
        }
    }


    @media only screen and (min-width: 1025px) {
        clear: both;

        margin-bottom: 180px;
        
        
        h1 {
            // position: absolute;
            font-size: 190px;
            font-family: "Squada One", cursive;
            font-weight: 400;
            margin: 0 0 10px 0;
            line-height: 150px;
            color: #bbbbbb;
        }
        p {
            font-family: S-CoreDream-1Thin,sans-serif;
            font-size: 80px;
            z-index: 999;
        }
    }
`;


export const About__header = styled.section`
    padding-top: 6rem;
    width: 100%;

    p {
        width: 80%;
        font-family: Noto Sans KR,sans-serif;
        font-size: 1.1rem;
        line-height: 1.9;
        padding: 1rem 6%;
        margin: 0 0 1rem 0;
        color: #777;
        font-weight: 300;
        white-space: pre-line;
    }
    .image__box {
        width: 100%;
        height: 40vh;

        background-color: #999;
    }
`;

export const Section = styled.section`
    width: 100%;
    padding: 0 9rem 0 7rem;

`;

export const SectionWrap = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid rgba(187, 187, 187, 0.2);
`;

export const SectionLi = styled.li`
    padding: 7rem 0 4rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    // flex-wrap: wrap;

    border-bottom: 1px solid rgba(187, 187, 187, 0.2);
`;

export const SectionHeader = styled.div`
    min-width: 50%;
    width: 50%;
    height: auto;

    strong {
        font-size: 3rem;
        font-family: "S-CoreDream-9Black", cursive;
        font-weight: 400;
        // margin: 8px 0 2px 0;
        line-height: 4rem;
        color: #bbbbbb;
    }
`;

export const MapWrap = styled.section`
    min-width: 50%;
    width: 50%;
    overflow: hidden;

    // :last-child {
    //     margin: none;
    // }
`;

export const SectionBody = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 3rem;


    .skill__header {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 1.8rem;

        .skillIcon {
            width: 2rem;
            height: 2rem;
            overflow: hidden;

            margin-right: 10px;

            // background-color: tomato;

            img {
                width: 100%;
                height: 100%;
            }
        }

        p {
            font-family: S-CoreDream-9Black;
            font-size: 1.7rem;
            margin-right: auto;
        }
        .level {
            position: relative;
            width: 50%;
            height: 2px;
            background-color: #333333;

            span {
                position: absolute;
                height: 100%;
                left: 0;
                top: 0;
            }
        }
      }
    .map__text {
        font-family: Noto Sans KR,sans-serif;
        font-size: 1.1rem;
        line-height: 1.9;
        color: #777;
        font-weight: 400;
        white-space: pre-line;
    }

`;

export const Footer = styled.footer`

    width: 100%;
    padding: 7rem;
    display: flex;

    .footer__header {
        width: 50%;
        font-size: 3rem;
        line-height: 1.6;
        white-space: pre;
        // font-weight: 900;
        color: #bbb;
        font-family: S-CoreDream-3Light,"sans-serif";
    }

    .footer__body {
        .communi li {
            line-height: 2.3;
            font-size: 24px;
            font-weight: 300;
            word-break: keep-all;
            color: #bbb;
            font-family: S-CoreDream-3Light,"sans-serif";
        }
    }

`;