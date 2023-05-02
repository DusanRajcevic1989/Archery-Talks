import React from "react";
import styled from "styled-components";

const StyledComment = styled.div`
  background-color: rgb(241, 246, 249);
  border-radius: 5px;
  box-shadow: 3px 2px;
`;

export default function ProjComments({ projectId, comments }) {
  const projComments = comments.filter(
    (comment) => comment.projectId === projectId
  );

  return (
    <StyledComment>
      {projComments.map((comment) => {
        return <li key={comment._id}>{comment.text}</li>;
      })}
    </StyledComment>
  );
}
