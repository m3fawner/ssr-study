import { Text, Heading } from '@chakra-ui/react';
import Head from '../src/components/Head';

const Home = () => (
  <>
    <Head title="Home" description="Welcome to FIcarious! This is a site dedicated to teaching about financial independence with helpful tools and articles about the subject." url="" />
    <Heading>Welcome to FIcarious!</Heading>
    <Heading as="h4" size="md" mt="4">What is this site?</Heading>
    <Text mt="2">
      &nbsp;&nbsp;This site is really just a testing ground for technologies I am interested
      in studying and learning more about. For instance, this is a React Server Side
      rendered site using Chakra UI.
    </Text>
    <Heading as="h4" size="md" mt="2">What&apos;s here?</Heading>
    <Text>
      &nbsp;&nbsp;Well, my go to hobby is finances...so here we are, building finance tools
      because it&apos;s what I know best! I will probably add tools as I take days off...
      so rarely! Right now, there is a net RSU grant proceeds calculator. Check the menu for info!
    </Text>
  </>
);
export default Home;
