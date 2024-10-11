import { useState, useRef } from 'react';
import Arrow from './Arrow';

const Bio = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex flex-col items-center max-w-xl mx-auto'>
      {/* Displayed text */}
      <p className='mt-14'>
        Shepherds of Cassini is a psychedelic prog quartet from Auckland, New Zealand. Formed in
        2012, the group features Omar Al-Hashimi on drums, Vitesh Bava on bass, Felix Lun on
        electric violin, and Brendan Zwaan on guitar, vocals, and keys.
      </p>
      <p className='mt-6'>
        Atmospheric, turbulent and epic, Shepherds of Cassini deliver an immersive fusion of
        crushing riffs, psychedelic breakdowns and hypnotic sound experimentation. Featuring
        intricately arranged rhythms, interwoven exotic melodies, and vocals ranging from soothingly
        gentle to brutally fierce, the quartet conjures a sonic landscape that is as ominous as it
        is serene.
      </p>

      {/* Toggle button */}
      <button onClick={toggleExpanded} className='flex items-center mt-6'>
        {isExpanded ? 'Hide bio' : 'Read bio'}
        <span
          className={`ml-1 transform transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}>
          <Arrow />
        </span>
      </button>

      {/* Hidden text with CSS transition */}
      <div
        ref={contentRef}
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px]' : 'max-h-0'
        }`}
        style={{ maxHeight: isExpanded ? contentRef.current?.scrollHeight : 0 }}>
        <p className='mt-6'>
          The origins of Shepherds of Cassini trace back to 2008 at the University of Auckland,
          where drummer Omar Al-Hashimi and bassist Vitesh Bava first met while playing together in
          the band Pilgrim&apos;s Pyre. During this period, Vitesh also met
          guitarist/vocalist/keyboardist Brendan Zwaan at a show featuring Brendan&apos;s band,
          Flood.
        </p>
        <p className='mt-6'>
          Following the disbandment of Pilgrim&apos;s Pyre in 2011, Vitesh and Omar sought to begin
          a new project. By then, Vitesh had already met violinist Felix Lun from the band An
          Emerald City through mutual friends. By February 2012, all four musicians came together,
          forming Shepherds of Cassini and playing their first show at Lucha Lounge in Auckland in
          July of the same year.
        </p>
        <p className='mt-6'>
          The band entered the studio at Depot Sound in May 2013 to record their debut full-length
          album with engineer Dave Rhodes. Released on August 23rd of the same year, the self-titled
          album Shepherds of Cassini garnered positive reviews both locally and internationally.
          Following its release, the band gigged extensively while concurrently crafting new
          material.
        </p>
        <p className='mt-6'>
          In April 2015, they returned to Depot Sound to record their second full-length album,
          Helios Forsaken, once again engineered by Dave Rhodes. Released on July 11th of the same
          year, the album received acclaim from both local and international critics, further
          expanding the band&apos;s reach beyond New Zealand.
        </p>
        <p className='mt-6'>
          Early 2016 marked the beginning of a hiatus for the band as members pursued personal
          endeavours and side projects, including Felix and Omar&apos;s collaboration in Star
          Control. Omar also played in the band Ginzu and the Steak Knives, while Brendan delved
          into his solo project, Asymmetrical Faces. Despite the break, the band&apos;s music
          continued to gain traction worldwide through online platforms and music media outlets.
        </p>
        <p className='mt-6'>
          Following a seven-year hiatus, the band reunited in 2023, regrouping in Auckland with a
          renewed passion for creating music. They swiftly began working on new material, entering
          the studio at The Chapel in February 2024 to record once again with engineer Dave Rhodes.
          Their third full-length album is due to be released in late 2024.
        </p>
      </div>
    </div>
  );
};

export default Bio;
