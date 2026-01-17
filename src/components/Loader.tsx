import { Html } from '@react-three/drei';
import TextType from './TextType';

export function Loader() {
  return (
    <Html center>
      <TextType
        text={['Loading...']}
        typingSpeed={10}
        showCursor={true}
        cursorCharacter="_"
        cursorClassName="text-lime-400"
        textColors={['#9ae600']}
        className="text-5xl"
      />
    </Html>
  );
}
