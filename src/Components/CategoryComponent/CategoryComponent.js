import React from 'react';
import styled from 'styled-components'

const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:312px;
    left: 10px;
    overflow: scroll;
    width: 95%;
`
export const CategoryItem = styled.a`

    list-style: none;
    margin: 50px 50px;
    font-size: 30px;
    letter-spacing: 0.36;
    color: black;
    text-decoration: none;
    &:hover{
        color: #5cb646;
    }
`

export default function CategoryComponent(props) {
  return (
    <CategoryContainer>
        
    {
      props.arrayCategory.map(category=>{
      return <CategoryItem href={`#${category}`} onClick={() => props.getCategory(category)}>{category}</CategoryItem>

      })
    }
 
</CategoryContainer>
  );
}
