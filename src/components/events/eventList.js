import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useEventData } from './useEventData'
import { idChange } from '../../store/posterId'
import EventCard from './eventCard'


function EventList() {
  var dateNow = new Date();
  var indexEvent = 0;
  const { nodes } = useEventData();
  const idChangeDispatch = useDispatch();

  useEffect(() => {
    let posterContainer = document.querySelector('.eventContainer');
    let posterBlock = [...document.querySelectorAll('.eventCard')];
    let posterCount = posterContainer.childElementCount;
    let attractMode = false;
    let attractTo = 0;
    let speed = 0;
    let position = 0;
    let rounded = 0;
    let roundedChanged = 0;

    const ActiveIdPoster = (id) => { idChangeDispatch(idChange(id)) }

    ActiveIdPoster(posterBlock[0].id);

    const scrollEvent = (e) => {
      speed += e.deltaY * 0.001;
      if (e.deltaY < 0 && rounded <= 1) {
        attractTo = 0;
        attractMode = true;
      }
      else if (e.deltaY > 0 && rounded >= posterCount) {
        attractTo = posterCount - 1;
        attractMode = true;
      }
      else {
        attractMode = false;
      }
    }

    window.addEventListener('wheel', scrollEvent);

    function raf() {
      position += speed;
      speed *= 0.75;

      rounded = Math.round(position);

      let diff = (rounded - position);
      position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.025;

      posterContainer.style.transform = `translate(0, ${-position * 140}px)`;

      if (attractMode) {
        position += -(position - attractTo) * 0.2;
      }
      else {
        position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.025;
        posterContainer.style.transform = `translate(0, ${-position * 140}px)`;
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


    return () => {
      window.removeEventListener('wheel', scrollEvent);
    }

  }, [idChangeDispatch])

  return (
    <div className="eventList">
      <div className="eventContainer">
        {nodes.map(event => {
          const { id, title } = event;
          const { date, genre, duration } = event.events;

          if ((Date.parse(date) > Date.parse(dateNow))) {
            const dateEvent = new Date(date);
            const day = dateEvent.getDate();
            const month = dateEvent.getMonth();
            const hour = dateEvent.getHours();
            const minutes = dateEvent.getMinutes();
            const weekDay = dateEvent.getDay();
            const time = (hour < 10 ? '0' + hour : '' + hour) + ':' + (minutes < 10 ? '0' + minutes : '' + minutes);
            const monthName = ['????????????', '??????????????', '??????????', '????????????', '??????', '????????', '????????', '??????????????', '????????????????', '??????????????', '????????????', '??????????????'];
            const weekName = ['????', '????', '????', '????', '????', '????', '????'];

            indexEvent++;

            return (
              <EventCard day={day < 10 ? '0' + day : '' + day} month={monthName[month]} title={title} key={id} genre={genre} duration={duration} time={time} week={weekName[weekDay]} top={(indexEvent - 1) * 140} data={indexEvent - 1} id={id} />
            )
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default EventList
