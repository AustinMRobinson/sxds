import { Global, css } from '@emotion/react'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          :root {
            /* Colors */
            --background: #000000;
            --foregroundInverse: #000000;
            --mediumBackgroundInverse: rgba(0,0,0,0.05);
            --lightBackgroundInverse: rgba(0,0,0,0.10);
            --lightestBackgroundInverse: rgba(0,0,0,0.20);
            --mediumBackground: rgba(255,255,255,0.05);
            --lightBackground: rgba(255,255,255,0.10);
            --lightestBackground: rgba(255,255,255,0.20);
            --lightestForeground: rgba(255,255,255,0.40);
            --lightForeground: rgba(255,255,255,0.60);
            --mediumForeground: rgba(255,255,255,0.80);
            --foreground: #ffffff;
            --negative: #f25353;
            --warning: #f6954e;
            --positive: #57da7c;

            /* Font sizes */
            --fontSize0: 0.75rem;
            --fontSize1: 0.875rem; 
            --fontSize2: 1rem;
            --fontSize3: 1.25rem;
            --fontSize4: 1.75rem;
            --fontSize5: 2.5rem;
            --fontSize6: 3.5rem;
            --fontSize7: 4.5rem;
            --fontsize8: 5.5rem;
            --fontsize9: 7rem;

            /* Line heights */
            --lineHeight0: 1.15;
            --lineHeight1: 1.3;
            --lineHeight2: 1.5;

            /* Letter spacing */
            --letterSpacing0: 0.6px;
            --letterSpacing1: 0.8px;

            /* Background blur */
            --blur0: 3rem;
            --blur1: 4.5rem;
            --blur2: 6rem;
            --blur3: 9rem;

            /* Transition */
            --transition0: 200ms ease-in-out;
            --transition1: 300ms ease-in-out;
            --transition2: 400ms ease-in-out;
            --transition3: 500ms ease-in-out;

            /* Breakpoints */
            --breakpointXl: 1400px;
            --breakpointLg: 1200px;
            --breakpointMd: 996px;
            --breakpointSm: 768px;
            --breakpointXs: 576px;

            /* Border radius */
            --notchSize: 0.5rem;

            /* Misc */
            --headerHeight: 6.25rem;
            --sideMenuWidth: 17.5rem;

            @media screen and (max-width: 996px) {
              --sideMenuWidth: 0;
              --headerHeight: 4rem;
            }

          }
          [data-theme='light'] {
            /* Colors */
            --background: #ffffff;
            --foregroundInverse: #ffffff;
            --mediumBackgroundInverse: rgba(255,255,255,0.05);
            --lightBackgroundInverse: rgba(255,255,255,0.10);
            --lightestBackgroundInverse: rgba(255,255,255,0.20);
            --mediumBackground: rgba(0,0,0,0.05);
            --lightBackground: rgba(0,0,0,0.10);
            --lightestBackground: rgba(0,0,0,0.20);
            --lightestForeground: rgba(0,0,0,0.40);
            --lightForeground: rgba(0,0,0,0.60);
            --mediumForeground: rgba(0,0,0,0.80);
            --foreground: #000000;
            --negative: #c50d0d;
            --warning: #d96f22;
            --positive: #19ae43;
          }
          [data-theme='void'] {
            /* Colors */
            --background: #020738;
            --foregroundInverse: #020738;
            --mediumBackgroundInverse: rgba(2,7,56,0.05);
            --lightBackgroundInverse: rgba(2,7,56,0.10);
            --lightestBackgroundInverse: rgba(2,7,56,0.20);
            --mediumBackground: rgba(255,255,255,0.05);
            --lightBackground: rgba(255,255,255,0.10);
            --lightestBackground: rgba(255,255,255,0.20);
            --lightestForeground: rgba(255,255,255,0.40);
            --lightForeground: rgba(255,255,255,0.60);
            --mediumForeground: rgba(255,255,255,0.80);
            --foreground: #ffffff;
            --negative: #f25353;
            --warning: #f6954e;
            --positive: #57da7c;
          }
          @font-face {
            font-family: "D-DIN";
            src: url("/fonts/d-din/D-DIN.woff");
            font-style: normal;
            font-weight: 400;
            font-display: swap;
          }
          @font-face {
            font-family: "D-DIN";
            src: url("/fonts/d-din/D-DIN-Italic.woff");
            font-style: italic;
            font-weight: 400;
            font-display: swap;
          }
          @font-face {
            font-family: "D-DIN";
            src: url("/fonts/d-din/D-DIN-Bold.woff");
            font-style: normal;
            font-weight: 600;
            font-display: swap;
          }
          @font-face {
            font-family: "D-DINExp";
            src: url("/fonts/d-din/D-DINExp.woff");
            font-style: normal;
            font-weight: 400;
            font-display: swap;
          }
          @font-face {
            font-family: "D-DINExp";
            src: url("/fonts/d-din/D-DINExp-Bold.woff");
            font-style: normal;
            font-weight: 600;
            font-display: swap;
          }
          * {
            box-sizing: border-box;
          }
          *:focus {
            outline-color: currentcolor;
            outline-style: dotted;
          }
          body {
            margin: 0;
            padding: 0;
            /* transition: color var(--transition0), background var(---transition0); */
            background: var(--background);
            color: var(--foreground);
            font-family: 'D-DIN', sans-serif;
            font-size: var(--fontSize2);
            line-height: var(--lineHeight1);
            /* overflow: hidden; */
          }
          a {
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
