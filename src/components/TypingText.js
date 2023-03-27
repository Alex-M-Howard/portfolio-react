import { TypeAnimation } from 'react-type-animation';

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        'HellloW',
        400,
        2,
        1000,
        'Hello World...',
        2000,
        '',
        2000,
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      speed={10}
      deletionSpeed={12}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default TypingText;
