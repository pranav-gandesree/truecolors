import { TypeAnimation } from 'react-type-animation';

const TypeAnimations = () => {
    return (
        <div>
           <TypeAnimation className='Typeanimation'
                
                sequence={[
                    `Welcome to \nTruecolors Photography`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                    12000,
                    '',
                ]}
                repeat={Infinity}
                />
      </div>
    );
  };

  export default TypeAnimations;