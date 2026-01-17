import { Html } from '@react-three/drei';
import TextType from './TextType';

export function Loader() {
  return (
    <Html center>
      <TextType
        text={['Loading...']}
        typingSpeed={10}
        showCursor={true}
        cursorCharacter="|"
        cursorClassName="color-lime-400"
        textColors={['#63ff00']}
        className="text-5xl"
      />
    </Html>
  );
}
