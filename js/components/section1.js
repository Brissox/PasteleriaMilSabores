document.getElementById("section1").innerHTML = `
<section class="bs-header-top d-lg-block">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-auto d-flex align-items-center">
                        <a class="btn-header-social" title="visitanos en facebook" href="https://www.facebook.com/dulcealegriapasteleria/" target="_blank" rel="nofollow noopener noreferrer">
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
  
                        <a class="btn-header-social" title="visitanos en instagram" href="https://www.instagram.com/dulcealegria_tupasteleria" target="_blank" rel="nofollow noopener noreferrer">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
 
                        <a class="btn-header-social" title="visitanos en youtube" href="https://www.youtube.com/channel/UC8bmWMVT10DwcgkG3NCNENQ/" target="_blank" rel="nofollow noopener noreferrer">
                            <i class="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                <div class="btn btn-header-outline m-1 btn-sm"> 
                    
                               <a href="tel:+56971419020" title="Clic para llamar" target="_blank" data-bs="contact.phone" data-info="+56971419020">  
                                <i class="fas fa-phone"></i> 
                                +569 7141 9020
                            </a>
                                  
                    </div>
            
            </div>
            <div class="col-auto d-flex align-items-center">
  
                <form class="bs-search" action="/search">
                    <div class="input-group input-seach">
                        <input id="inputSearch" class="form-control" type="search" name="search_text" placeholder="Buscar..." aria-label="Search" required="" oninvalid="this.setCustomValidity('Escribe que deseas buscar')" oninput="setCustomValidity('')">
                        <div class="input-group-append">
                            <button class="btn" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <!-- login end-->
                
                    
                        <a class="btn btn-header-outline m-1 btn-sm" href="/login" title="Iniciar Sesión">
                            <i class="fas fa-user-circle "></i>
                            <span class="ml-1">Entrar</span>
                        </a>
                    
                
                <!-- login end-->
                <!--cart-->
                <a class="btn btn-cart mx-1" href="/cart/display/carro" title="carro">
                    <i class="fas fa-shopping-basket"></i>
                    <span data-bs="cart.items" class="cart-items">0</span>
                </a>
            </div>
        </div>
    </div>

</section> 
`;