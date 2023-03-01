import { colors } from "@/styles/style-variables";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
interface IZProps {}
const ImageZoomContainer = styled.div`
  position: relative;
  border: 1px solid ${colors.white};
  flex: 1;
  > img {
    object-fit: cover;
  }
`;
const ImageZoom: FC<IZProps> = ({}) => {
  return (
    <ImageZoomContainer>
      <Image src="/assets/abstract.jpg" alt="image zooming section" fill sizes="100%" />
    </ImageZoomContainer>
  );
};

export default ImageZoom;
