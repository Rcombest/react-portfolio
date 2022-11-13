import { Link } from "react-router-dom"
import CoolNectFour from "../assets/CoolNectFour"
import OnlyBands from "../assets/Only-Bands.png"
import Relocate from "../assets/Relocate"

export const projects = [
  {
    title: 'Cool-Nect Four',
    description: "Built with JavaScript, CSS, HTML, Bootstrap, Animate.CSS and a GitHub library, Cool-Nect Four provides a quick fun game of the Connect Four you know and love with an exciting twist using dark mode functionality.",
    image: CoolNectFour,
    repoLink: <Link>https://github.com/Rcombest/cool-nect-four</Link>,
    deployedLink: <Link>https://coolnectfour.netlify.app/</Link>,
  },
  {
    title: 'Only-Bands',
    description: "Built using Azure, JavaScript, CSS, EJS, Google OAuth, MongoDB and the MEN stack, Only-Bands is a family friendly, entirely Safe For Work application that allows users to sign in using Google OAuth and share their current favorite songs and artists with other users, as well as create a list of all time favorite albums and bands on their profile and view other users favorites lists on their profiles",
    image: OnlyBands,
    repoLink: <Link>https://github.com/Rcombest/only-bands</Link>,
    deployedLink: <Link>https://only-bands.fly.dev/</Link>,
  },
  {
    title: "Relocate.",
    description: " Built using Azure, CSS, HTML, JavaScript, MongoDB, MUI, and the MERN stack in collaboration with Stephanie Michael and Zeus Zaragoza-Gildo, Relocate is an app that seeks to make moving easier and give users peace of mind throughout the moving process. Users are able to create a profile and create, read, update, and delete to-do lists and their individual items as well as create, read, update, and delete wishlists and wishlist items. Users are also able to add images of and links to their wishlist items.",
    image: Relocate,
    repoLink: <Link>https://github.com/zgildo01/Relocate-back-end</Link>,
    deployedLink: <Link>https://cgcorelocate.netlify.app/</Link>,
  },
]