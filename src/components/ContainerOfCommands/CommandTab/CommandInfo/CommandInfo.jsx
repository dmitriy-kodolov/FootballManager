import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getComandsInfo } from '../../../../api/metods';
import { ErrorMessage } from '../../../../store/action';
import styles from './style.module.scss';

const CommandsInfo = () => {
  const dispatch = useDispatch();
  const [commandInfo, setCommandInfo] = useState([]);
  const commands = useSelector((state) => state.commands);
  const { slug } = useParams();
  useEffect(() => {
    if (!commands.length) {
      getComandsInfo(slug)
        .then(({ data }) => setCommandInfo(data))
        .catch((err) => dispatch(ErrorMessage(`${err.message}. Try again later.`)));
    } else {
      setCommandInfo(commands.find((item) => item.id.toString() === slug));
    }
  }, []);
  return (
    <div className={styles.infoTab}>
      <div className={styles.info}>
        <ul>
          <li>{`Name: ${commandInfo.shortName}`}</li>
          <li><a href={`${commandInfo.website}`}>{`Website: ${commandInfo.website}`}</a></li>
          <li>{`Phone: ${commandInfo.phone}`}</li>
          <li>{`Address: ${commandInfo.address}`}</li>
          <li>{`Founded: ${commandInfo.founded}`}</li>
          <li>{`Venue: ${commandInfo.venue}`}</li>
        </ul>
      </div>
      <div>
        <img src={`${commandInfo.crestUrl}`} alt="flag" />
      </div>
      <Link className={styles.btnAllMatches} to={`/matchesOfCommands/${slug}/`}>Show all mathes of particular team</Link>
    </div>
  );
};
export default CommandsInfo;
