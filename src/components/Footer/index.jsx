import {
  Link
} from 'wouter'

export default function Footer () {
  return (
    <nav>
      <Link href='/home'>Home</Link>
      <Link href='/explore'>Explore</Link>
      <Link href='/notifications'>Notifications</Link>
      <Link href='/messages'>Messages</Link>
    </nav>
  )
}
