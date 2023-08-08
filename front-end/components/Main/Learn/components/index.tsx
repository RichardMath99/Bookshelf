import React from "react";
import { Content, DivS, Number, Text } from "./styles";

interface ComponentType {
    number?: string;
    mensage?: string;
}

const testData: ComponentType[] = [
    {
        number: '01',
        mensage: 'Use HDFS & Map Reduce for storing & analyzing data at scale.'
    },
    {
        number: '02',
        mensage: 'Consume streaming data using Spark Streaming, Flink, and Storm.'
    },
    {
        number: '03',
        mensage: 'Choose an appropriate data storage technology for your application.'
    },
    {
        number: '04',
        mensage: 'Analyze non-relational data using HBase, Cassandra, and MongoDB.'
    }
];

const Component: React.FC = () => {
    return (
        <DivS>
            {testData.map((item, index) => (
                <Content key={index}>
                    <Number>{item.number}</Number>
                    <Text>{item.mensage}</Text>
                </Content>
            ))}
        </DivS>
    );
}

export default Component;
