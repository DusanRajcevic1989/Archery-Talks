import React from "react";
import styled from "styled-components";

const StyledComment = styled.ul`
  overflow: auto;
  height: 100px;
`;

const CommentList = styled.li`
  background-color: #cfa663;
  padding: 8px;
  margin: 3px;
  border-radius: 12px;
  overflow: auto;
  width: auto;
`;

export default function ProjComments({ projectId, comments }) {
  const projComments = comments.filter(
    (comment) => comment.projectId === projectId
  );

  return (
    <StyledComment>
      {projComments.map((comment) => {
        return <CommentList key={comment._id}>{comment.text}</CommentList>;
      })}
    </StyledComment>
  );
}
