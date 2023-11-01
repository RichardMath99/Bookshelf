// Imports
import React from "react";

// Styled Components
import { Description, ListItems, ListS, TitleS } from "./styles";

// Interface
interface listProps {
    text?: string;
    title ?: string;
    numeric ?: boolean;
}

// Data
const list: listProps[] = [
    {
        text: 'It has roots in a piece of classical Latin literature from 45 BC,'
    },
    {
        text: 'To generate Lorem Ipsum which looks reasonable,'
    },
    {
        text: 'The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet,'
    },
]

// Functional Component
const List: React.FC<listProps> = (props: listProps) => {
    // Rendering
    return (
        <>
        <TitleS>{props.title}</TitleS>
        <Description >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.</Description>
        <ListS numeric={props.numeric}>
            {list.map((item, index) => {
                return (
                    <ListItems key={index}>{item.text}</ListItems>
                )
            })}
        </ListS>
        </>
    )
}

// Export
export default List;