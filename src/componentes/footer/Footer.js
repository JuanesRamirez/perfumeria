import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function Footer() {
  return (
    <div>
        <footer class="text-center text-lg-start bg-light text-muted">

<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
    </div>



    <div>
        <a href="" class="me-4 text-reset">
            <FacebookIcon/>
        </a>
        <a href="" class="me-4 text-reset">
            <InstagramIcon/>
        </a>
        <a href="" class="me-4 text-reset">
            <TwitterIcon/>
        </a>
        <a href="" class="me-4 text-reset">
           <MusicNoteIcon/>
        </a>
    </div>

</section>



<section class="">
    <div class="container text-center text-md-start mt-5">

        <div class="row mt-3">

            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                    Gracias por confiar en fragancias Juancho.Tu mejor version
                    con nuestras fragancias.
                </p>
            </div>



            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" class="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Laravel</a>
                </p>
            </div>



            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" class="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Help</a>
                </p>
            </div>



            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                    <i class="fas fa-envelope me-3"></i>
                    info@example.com
                </p>
                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>

        </div>

    </div>
</section>



<div class="text-center p-4" >
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>

</footer>
      
    </div>
  )
}
