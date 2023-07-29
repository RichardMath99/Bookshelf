import { Content, DivS, Number, Text } from "./style"

interface ComponentType {
    number?: string,
    mensage?: string,
}

const teste: ComponentType[] = [
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
    },
]

const Component = (props: ComponentType) => {
    return (
        <DivS>
            {teste.map((item, index) => {
                return (
                    <Content>
                        <Number>{item.number}</Number>
                        <Text>{item.mensage}</Text>
                    </Content>
                )
            })}
        </DivS>
    )
}

export default Component