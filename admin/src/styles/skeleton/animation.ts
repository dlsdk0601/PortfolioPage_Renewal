import styled, { keyframes } from "styled-components";

export const skeletonAnimation = keyframes`
     0%{
        background: #ddd;
        opacity: 1;
    }
    25%{
        background: #ddd;
        opacity: 0.5;
    }
    50%{
        background: #ddd;
        opacity: 1;
    }
    75%{
        background: #ddd;
        opacity: 0.5;
    }
    100%{
        background: #ddd;
        opacity: 1;
    }
`;
