import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Description = styled.p`
  overflow: auto;
  width: auto;
`;

const Article = styled.article`
  border: 5px solid black;
  border-radius: 0.8rem;
  padding: 0.5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 10rem;
`;

const Figure = styled.figure`
  position: relative;
`;

const Anchor = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default function Card({ title, image, description, id, blueprints }) {
  return (
    <Article>
      <Figure>
        <figcaption>{title}</figcaption>
        <ImageContainer>
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt=""
          />
        </ImageContainer>
      </Figure>
      <Description>Description: {description}</Description>
      <p>Blueprints: {blueprints}</p>
      {/* <Link href={`projects/${id}`} passHref legacyBehavior>
        <Anchor>
          <span>More Info</span>
        </Anchor>
      </Link> */}
    </Article>
  );
}
