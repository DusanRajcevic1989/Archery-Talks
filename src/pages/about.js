import Link from "next/link";
import styled from "styled-components";

const StyledParagraph = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: antiquewhite;
  margin-bottom: 5px;
  color: black;
`;
const BackButton = styled.button`
  background-color: lightsalmon;
  padding: 0.4rem;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  font-size: inherit;
`;

export default function About() {
  return (
    <div>
      <StyledParagraph>
        <p>
          My passion for the Archery goes way back. It started 15 years ago, and
          it did not deminish over time. Hell, one might say it only grew!
          <br />
          You remember when we were kids, we all used to play with sticks that
          were bended and connected with a piece of twine, add to is another
          piece of a strait wood, and you got your selfe something that can
          treathen a neighbours cat.
          <br />
          <br />
          So I started. With thicker willow stick for the bow, and tinner one
          for the arrows. It flew, but woble was real big. Then you change wood
          for the arrows, but anyhow it is hte bush wood, still. Next step for
          me was to add a bit of wire in the front of the arrows. It flew
          straiter and longer. I was thrilled!!
          <br />
          <br />
          Next thing I knew, I was devoting all of my time searching on the
          internet how to make my arrows fly strait. Naturally, articles and
          wideos about bows started to pop up. and the more I read about it, the
          more i knew it is something that will stick with me for a long time.
          <br />
          <br />
          Since, I have made 4 bows, 2 hickory and 2 ash bows. I have made few
          dozens of arrows (pine, poplar, spruce, ash). Of course, I added
          featherd, nocks and arrow tips. Went to a few medieval fairs, shot
          some nice bows, but I have never hold or shoot English Longbow (
          <strong>Shame!!</strong>)
        </p>
        <br />
        <br />
        <p>
          I created this WebApp so we all can share our knowledge and help each
          other with projects that we work on, or we plan to start but not sure
          if it will pay off. Personally, every project that we start regarding
          this toppic is well worth of time and stress, cuz it is important to
          prevent this craft from going extinct.
          <br />
          <br />
          I know for a fact, that people who find themselves working on things
          like this, are good natured people with good heart, and desire to help
          and share.
          <br />
          <br />
          So, lets get going to create fine bows, fine arrows, and even finner
          relations with one another. Share, comment, add and chat about your
          successes, fails, frustrations and ideas.
          <br />
        </p>
      </StyledParagraph>
      <Link href="/">
        <BackButton>Go Back</BackButton>
      </Link>
    </div>
  );
}
