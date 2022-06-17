import {
  Link
} from 'wouter'

export default function Footer () {
  return (
    <nav className='sticky bottom-0 flex justify-evenly mt-auto max-h-[16vh] h-14 leading-[3.5rem] bg-white'>
      <Link href='/home'>Home</Link>
      <Link href='/explore'>Explore</Link>
      <Link href='/notifications'>Notifications</Link>
      <Link href='/messages'>Messages</Link>
    </nav>
  )
}
