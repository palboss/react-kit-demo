import React from "react"
import {Timeline, TimelineEvent} from 'react-event-timeline'
import Icon from '@mdi/react';
import {mdiFirework, mdiSchool, mdiStarOutline} from '@mdi/js';


const Demo4 = () => {
     return (
      <>
        <h3>Demo4</h3>
        <Timeline lineColor="hsl(171, 100%, 41%)">
            <TimelineEvent
                  title="John Doe sent a SMS"
                  createdAt="2016-09-12 10:06 PM"
                  icon={<i path={mdiSchool}/>}
                  iconColor="hsl(204, 86%, 53%)"
                >
                 I received the payment for $543. Should!
                </TimelineEvent>
                <TimelineEvent
                  title="You sent an email to John Doe"
                  createdAt="2016-09-11 09:06 AM"
                  icon={<Icon path={mdiFirework}/>}
                  iconColor="#03a9f4"
                >
                <p>
                Subject: Any updates?
                </p>
                </TimelineEvent>
                <TimelineEvent
                  title="You sent an email to John Doe"
                  createdAt="2016-09-11 09:06 AM"
                  icon={<Icon path={mdiStarOutline}/>}
                  iconColor="#03a9f4"
                >
                <p>
                Subject: Any updates?
                </p>
                </TimelineEvent>
            </Timeline>
      </>
    )
}

export default Demo4