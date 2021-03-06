import React, { useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Layout from '../layouts/Layout'
import EventList from '../components/events/eventList'
import EventMobileList from '../components/events/eventMobileList'
import EventDescription from '../components/events/eventDescription'

function Events() {
  const { width } = useWindowDimensions();

  useEffect(() => {
    
  }, [width])
  
  return (
    <Layout blockClass="eventPage">
      <EventDescription />
      {width > 1025 ? <EventList /> : <EventMobileList />}
    </Layout>
  )
}

export default Events
