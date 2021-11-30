import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetAboutJokeQuery } from '../../services/jokes';
import './aboutJoke.scss';

const AboutJoke = () => {
  const { id } = useParams<'id'>();
  const [selected, setSelected] = useState(false);

  const aboutJoke = useGetAboutJokeQuery(id || '');
  const aboutJokeData = aboutJoke.data;
  return (
    <div className="about__joke--wrapper">
      <div className="accordion__title" onClick={() => setSelected(!selected)}>
        <h4>{aboutJokeData?.joke}</h4>
        <div className="accordion__selector">{selected ? '-' : '+'}</div>
      </div>
      <div className={selected ? 'active' : 'inactive'}>
        {(selected) && (
          <div className="about__content">
            <span className="about__joke--info">{`Id: ${aboutJokeData?.id}`}</span>
            <span className="about__joke--info">{`Category: ${aboutJokeData?.category}`}</span>
            <span className="about__joke--info">{`Language: ${aboutJokeData?.lang}`}</span>
            <span className="about__joke--info">{`Type: ${aboutJokeData?.type}`}</span>
            <span className="about__joke--info">{`Safe: ${aboutJokeData?.safe}`}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutJoke;
