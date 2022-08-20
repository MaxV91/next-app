import {Button, Htag, P, Rating, Tag} from '../components';
import {useState} from 'react';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

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
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}
