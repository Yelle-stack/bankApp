import card from "../assets/card.png";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
       <div className={layout.sectionInfo}>
         <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Keep your payments organized and secure with just a few taps. Manage invoices effortlessly and never miss a payment. </p>

           <Button styles="mt-10"/>
       </div>

       <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
       </div>
    </section>
  )
}

export default CardDeal
