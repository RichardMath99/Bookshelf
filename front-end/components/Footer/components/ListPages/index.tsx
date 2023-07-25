import React from 'react';
import Image from 'next/image';

// styled components
import {
  ContainerList,
  List,
  LinkItem,
  Item
} from './styles';

interface ListItem {
  text: string;
}

interface ListPagesProps {
  items: ListItem[];
}

const ListPages: React.FC<ListPagesProps> = ({ items }) => {
  return (
    <ContainerList>
      <List>
        {items.map((item, index) => (
            <Item key={index}>
               <Image
                src="/svgs/marker.svg"
                alt='icon twitter'
                width={20}
                height={10}
                style={{ marginRight: '15px' }}
              />
              <LinkItem href="/" key={index} target="_blank">{item.text}</LinkItem>
            </Item>
        ))}
      </List>
    </ContainerList>
  );
};

export default ListPages;