
import './footer.css'
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>

<footer>
    <p>&copy;{year} Developed By Asif Amin</p>
   
</footer>


    </div>
  )
}

export default Footer