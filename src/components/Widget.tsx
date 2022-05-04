import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {
  return (
    <Popover className='absolute bottom-4 right-4'>
      <Popover.Panel>widget_window_here</Popover.Panel>
      <Popover.Button className='group flex items-center bg-brand-500 rounded-full px-3 h-12 text-white'>
        <ChatTeardropDots className='w-6 h-6' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}