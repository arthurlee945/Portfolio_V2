import { FC, MouseEvent } from "react";
import styled from "styled-components";
import { colors, medias } from "../../../styles/style-variables";

interface BulbProps {
  id: string;
  className: string;
  ariaPressed: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const BulbButton = styled.button`
  --init-ani-dul: 300ms;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  > svg {
    display: block;
    width: 60px;
    height: 60px;
    aspect-ratio: 1/1;
    fill: ${colors.white};
    pointer-events: none;
    transition: transform 300ms;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      width: 55px;
      height: 55px;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      width: 50px;
      height: 50px;
    }
    .filament {
      transition: fill 150ms;
    }
  }
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    aspect-ratio: 1/1;
    background-image: radial-gradient(#faf1d5, transparent 40%);
    opacity: 0;
    transition: opacity 150ms;
  }
  &[aria-pressed="true"] {
    > svg {
      transform: rotate(180deg);
      .bulb-top {
        animation: bulb-click 200ms;
        animation-delay: 300ms;
        @keyframes bulb-click {
          50% {
            transform: translateY(300px);
          }
        }
      }
      .filament {
        fill: ${colors.yellow};
        transition-delay: var(--init-ani-dul);
      }
    }
    &:before {
      animation: light-bulb-glow 150ms;
      animation-delay: var(--init-ani-dul);
      @keyframes light-bulb-glow {
        from {
          opacity: 0.15;
        }
        20% {
          opacity: 0;
        }
        45% {
          opacity: 0.25;
        }
        65% {
          opacity: 0;
        }
        100% {
          opacity: 0.35;
        }
      }
      opacity: 0.35;
    }
    &:hover {
      &:before {
        opacity: 0.6;
      }
    }
  }
  &[aria-pressed="false"] {
    &:hover {
      > svg {
        .filament {
          fill: #fff3c5;
        }
      }
      &:before {
        opacity: 0.15;
      }
    }
  }
`;

const LightbulbBtn: FC<BulbProps> = ({ id, className, ariaPressed, onClick }) => {
  return (
    <BulbButton id={id} className={className} onClick={onClick} aria-pressed={ariaPressed}>
      <svg xmlns="http://www.w3.org/2000/svg" width="6.72in" height="6.72in" viewBox="400 600 5700 5500">
        <path d="M3360 4747l0 0 542 0c24,-195 87,-366 173,-525 339,-503 849,-1085 849,-1699 0,-212 -42,-414 -118,-598 -79,-191 -195,-363 -340,-507 -144,-144 -317,-261 -507,-340 -184,-76 -386,-118 -598,-118l0 0 0 0c-212,0 -414,42 -598,118 -191,79 -363,195 -507,340 -144,144 -261,317 -340,507 -76,184 -118,386 -118,598 0,614 509,1196 849,1699 85,159 149,330 173,525l542 0 0 0zm0 -3947l0 0c233,0 455,46 659,131 211,88 401,216 560,374 159,159 287,348 374,560 84,203 131,426 131,659 0,568 -276,939 -542,1293 -1,2 -3,4 -4,6l0 0c-1,2 -3,4 -4,5 -116,155 -230,307 -318,470 -86,160 -147,332 -161,531 -1,44 -36,79 -80,79l-615 0 0 0 0 0 -615 0c-44,0 -79,-35 -80,-79 -14,-200 -75,-372 -161,-531 -87,-162 -201,-315 -318,-470 -2,-2 -3,-4 -4,-5l0 0c-1,-2 -3,-4 -4,-6 -266,-354 -542,-725 -542,-1293 0,-233 46,-455 131,-659 88,-211 216,-401 374,-560 159,-159 348,-287 560,-374 203,-84 426,-131 659,-131l0 0z" />
        <path d="M3892 4907l-1063 0 0 583 1063 0 0 -583zm-1143 -160l1223 0c44,0 80,36 80,80l0 716c0,11 -2,23 -5,33 -3,9 -7,18 -11,26 -4,8 -10,14 -16,20 -4,3 -7,7 -11,9 -3,2 -7,5 -10,7l0 0 0 0 0 0c-14,8 -29,12 -45,12l-1183 0c-16,0 -32,-4 -46,-12 -8,-4 -15,-10 -21,-16 -2,-2 -3,-3 -5,-5 -2,-2 -4,-4 -5,-6 -3,-4 -6,-8 -8,-12l1 0 0 0 0 0c-5,-8 -8,-17 -11,-28 -2,-9 -3,-19 -3,-27l0 -716c0,-44 36,-80 80,-80zm4 812l0 0 0 0 0 0z" />
        <path
          className="filament"
          d="M3131 4826c0,44 36,80 80,80 44,0 80,-36 80,-80l0 0 0 0c0,-9 1,-737 -340,-1296 116,-11 261,-16 406,-16 149,0 297,5 413,16 -341,560 -340,1288 -340,1296l0 0 0 0c0,44 36,80 80,80 44,0 80,-36 80,-80l0 0 0 0c0,-9 -1,-780 379,-1307 9,-11 16,-24 19,-39 7,-44 -22,-85 -66,-92l0 0c-131,-22 -348,-34 -564,-34 -207,0 -416,11 -552,33 -14,1 -27,6 -39,15 -36,26 -44,76 -18,112l0 0c384,527 383,1304 383,1313l0 0 0 0z"
        />
        <path
          className="bulb-top"
          d="M2950 5760c-44,0 -80,36 -80,80 0,44 36,80 80,80l820 0c44,0 80,-36 80,-80 0,-44 -36,-80 -80,-80l-820 0z"
        />
      </svg>
    </BulbButton>
  );
};

export default LightbulbBtn;
