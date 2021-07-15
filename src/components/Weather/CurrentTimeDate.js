import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

function CurrentTimeDate() {
  const [currentTime, setCurrentTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);

  const getTimeDate = useCallback(() => {
    const now = new Date();

    // time
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;

    const time = `${hours}:${minutes}`;

    // date
    let day = now.getDay();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    const year = now.getFullYear();

    if (month < 10) month = '0' + month;
    if (date < 10) date = '0' + date;

    switch (day) {
      case 0:
        day = 'Sunday';
        break;
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
      default:
    }

    const today = `${day}, ${date}.${month}.${year}.`;

    return { time, today };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTimeDate().time);
      setCurrentDate(getTimeDate().today);
    }, 1000);

    return () => clearInterval(interval);
  }, [getTimeDate]);

  return (
    <Container>
      <CurrentTime>{currentTime}</CurrentTime>
      <CurrentDate>{currentDate}</CurrentDate>
    </Container>
  );
}

export default React.memo(CurrentTimeDate);

const Container = styled.div`
  text-align: center;
  color: var(--light-color);
  margin: 2rem 0;
`;

const CurrentTime = styled.span`
  display: block;
  font-size: 4rem;
  font-weight: 700;
`;

const CurrentDate = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;
