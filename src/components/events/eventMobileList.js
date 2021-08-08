import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { IoArrowBackOutline } from "react-icons/io5";
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { useEventData } from './useEventData'
import { idChange } from '../../store/posterId'
import EventCard from './eventCard'

function EventMobileList() {
  var dateNow = new Date();
  const { width } = useWindowDimensions();
  const { nodes } = useEventData();
  const idChangeDispatch = useDispatch();


  useEffect(() => {
    let posterContainer = document.querySelector('.eventContainer');
    let posterBlock = [...document.querySelectorAll('.eventCard')];
    let eventBack = document.querySelector('.eventBack');
    let posterCount = posterContainer.childElementCount;
    let attractMode = false;
    let attractTo = 0;
    let speed = 0;
    let position = 0;
    let rounded = 0;
    let roundedChanged = 0;
    let startPoint;
    let movePoint;

    const ActiveIdPoster = (id) => { idChangeDispatch(idChange(id)) }

    eventBack.style.left = (posterCount - 1) * 100 + 'px';

    ActiveIdPoster(posterBlock[0].id);

    eventBack.addEventListener('click', () => {
      attractTo = 0;
      attractMode = true;
    })

    window.addEventListener('touchstart', (e) => {
      startPoint = e.changedTouches[0].pageX;
    })

    window.addEventListener('touchend', (e) => {
      movePoint = (Math.round(startPoint) - Math.round(e.changedTouches[0].pageX));

      if (movePoint > 100 || movePoint < -100) {
        if (movePoint < 100 && rounded < 1) {
          attractTo = 0;
          attractMode = true;
        }
        else if (movePoint > 100 && rounded > posterCount - 3) {
          attractTo = posterCount - 2;
          attractMode = true;
        }
        else {
          speed += (Math.sign(movePoint) * 350 - Math.sign(movePoint) * 50) * 0.001;
          attractMode = false;
        }
      }
    })


    function raf() {
      position += speed;
      speed *= 0.75;

      rounded = Math.round(position);

      let diff = (rounded - position);
      position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.5) * 0.025;

      posterContainer.style.transform = `translate(${-position * 100 + (width / 2) - 50}px, 0)`;

      if (attractMode) {
        position += -(position - attractTo) * 0.2;
      }
      else {
        position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.05;
        posterContainer.style.transform = `translate(${-position * 100 + (width / 2) - 50}px, 0)`;
      }

      if (rounded !== roundedChanged && rounded >= 0 && rounded < posterCount) {
        roundedChanged = rounded;
        setTimeout(() => {
          var blockActive = posterBlock[rounded];
          if (rounded >= 0 && rounded < posterCount) {
            ActiveIdPoster(blockActive.id);
          }
        }, 200);
      }

      window.requestAnimationFrame(raf);
    }

    raf();

    posterBlock.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        attractMode = true;
        attractTo = Number(el.getAttribute('data-nav'));
      })
    })


  }, [width, idChangeDispatch])

  return (
    <div className="eventList">
      <div className="eventContainer">
        {nodes.map((event, index) => {
          const { id, title, date, genre, duration } = event;

          if ((Date.parse(date) > Date.parse(dateNow))) {
            const dateEvent = new Date(date);
            const day = dateEvent.getDate();
            const month = dateEvent.getMonth();
            const hour = dateEvent.getHours();
            const minutes = dateEvent.getMinutes();
            const weekDay = dateEvent.getDay();
            const time = (hour < 10 ? '0' + hour : '' + hour) + ':' + (minutes < 10 ? '0' + minutes : '' + minutes);
            const monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
            const weekName = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

            return (
              <EventCard day={day < 10 ? '0' + day : '' + day} month={monthName[month]} title={title} key={id} genre={genre} duration={duration} time={time} week={weekName[weekDay]} left={(index) * 100} data={index} id={id} />
            )
          }
          else {
            return null;
          }
        })}
        <div className="eventBack">
          <IoArrowBackOutline />
          <p>Вернуться в начало</p>
        </div>
      </div>
    </div>
  )
}

export default EventMobileList
