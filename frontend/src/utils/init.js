import { BsCalculator, BsInbox } from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'

const spaces = ["Inbox", "Today", "Upcoming"]

export const initial_state = [
  {
    space_id: 1,
    space_name: spaces[0],
    tasks: [],
    icon: BsInbox
  },
  {
    space_id: 2,
    space_name: spaces[1],
    tasks: [],
    icon: SlCalender

  },
  {
    space_id: 3,
    space_name: spaces[2],
    tasks: [],
    icon: BsCalculator
  }
]