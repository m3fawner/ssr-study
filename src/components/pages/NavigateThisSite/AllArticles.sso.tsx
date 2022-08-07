import {
  ListItem, Text, UnorderedList, Link,
} from '@chakra-ui/react';
import { RECENT_BY_LAST_AUTHORED, RECENT_BY_LAST_UPDATED } from '../../../routing';

type AllArticlesProps = {
  listOrder: 'updated' | 'authored'
}
const AllArticles = ({ listOrder }: AllArticlesProps) => (
  <UnorderedList>
    {(listOrder === 'updated' ? RECENT_BY_LAST_UPDATED : RECENT_BY_LAST_AUTHORED).map(({
      url, title, authored, description,
    }) => (
      <ListItem key={url}>
        <Link color="brand.800" href={url} display="inline"><Text as="strong">{title}</Text></Link>
        <Text display="inline">
          {' '}
          -
          {' '}
          {description}
        </Text>
        <Text as="em" display="block">{new Date(authored).toLocaleDateString()}</Text>
      </ListItem>
    ))}
  </UnorderedList>
);
export default AllArticles;
