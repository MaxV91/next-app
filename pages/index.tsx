import {Button, Htag, P, Tag} from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <P size='l'>Большой</P>
      <P size='m'>Средний</P>
      <P size='s'>Маленькой</P>
      <Tag size='s'>Маленкой</Tag>
      <Tag size='m' color='red'>red</Tag>
      <Tag size='m' color='primary'>red</Tag>
    </>
  );
}
