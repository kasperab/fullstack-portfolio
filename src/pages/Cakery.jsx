import index from "./img/cakery-index.png";
import newsletter from "./img/cakery-newsletter.png";
import products from "./img/cakery-products.png";
import contact from "./img/cakery-contact.png";
import mobile from "./img/cakery-mobile.png";

export default function Cakery() {
    return (
        <div>
            <h3 className="text-center">Cakery Website</h3>
            <br />
            <p>
                Website for baking bussiness to showcase products and provide methods of contact. The fonts and colors were matched with the existing logo.
            </p>
            <img src={index} alt="Cakery Website Index" className="w-100" />
            <br /><br />
            <p>
                Sign up for newsletter and footer has social links.
            </p>
            <img src={newsletter} alt="Cakery Website Newsletter" className="w-100" />
            <br /><br />
            <p>
                Cupcakes and wedding cakes arranged in grids.
            </p>
            <img src={products} alt="Cakery Website Products" className="w-100" />
            <br /><br />
            <p>
                Contact page with delivery information and contact form.
            </p>
            <img src={contact} alt="Cakery Website Contact" className="w-100" />
            <br /><br />
            <p>
                The website works great on mobile devices as well.
            </p>
            <img src={mobile} alt="Cakery Website Mobile" className="w-100" />
        </div>
    );
}