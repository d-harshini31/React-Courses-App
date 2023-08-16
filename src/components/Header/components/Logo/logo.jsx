/* eslint-disable prettier/prettier */
import Logoimage from './logoimage.jpeg'
import EpamLogo from './epamlogo.jpeg'

export default function Logo() {
  return (
    <>
      <img src={Logoimage} alt='logo' height='50' width='50' />
      <img src={EpamLogo} alt='epamlogo' height='50' width='50' />
    </>
  )
}
