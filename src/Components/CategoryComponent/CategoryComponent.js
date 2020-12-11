import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  width: 90vw;
`;
export const CategoryItem = styled.a`
  list-style: none;
  margin: 20px 8px;
  font-size: 18px;
  letter-spacing: 0.36;
  color: black;
  text-decoration: none;
  &:hover {
    color: #5cb646;
  }
`;

export default function CategoryComponent(props) {
  return (
    <CategoryContainer>
      {props.arrayCategory.map((category, idx) => {
        return (
          <CategoryItem
            key={idx}
            href={`#${category}`}
            onClick={() => props.getCategory(category)}
          >
            {category}
          </CategoryItem>
        );
      })}
    </CategoryContainer>
  );
}
