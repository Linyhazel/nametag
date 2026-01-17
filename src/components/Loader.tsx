import { Html } from '@react-three/drei';
import TextType from './TextType';

export function Loader() {
  return (
    <Html center>
      <TextType
        text={['Loading...']}
        typingSpeed={750}
        showCursor={true}
        cursorCharacter="|"
        textColors={['#63ff00']}
        className="text-5xl"
      />
    </Html>
  );
}
