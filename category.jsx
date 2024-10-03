
import '../../pages/categoryPage/category.css'
import Logo from '../../assets/Logo/logo nabtaty-08.png'

import image from '../../assets/images/Plants.png'
import cart from '../../assets/images/bi_cart.svg'
import heart from '../../assets/images/heart.svg'

function category() {
    
  return (
    <main className='category-page'>
        <section className='category-menu'>
            <h5>Filters</h5>
            <h3 id='categories'>Categories</h3><br/>
            <h4 className='slides-title'> All</h4>
           <a href='#green-plants'><h4 className='slides-title' >Green Plants</h4></a> 
           <a href='#flower-plants'> <h4 className='slides-title' >Flower Plants</h4></a>
            <a href='#Cacti'><h4 className='slides-title'>Cacti</h4></a>
            <a href='#Hanging-plant'><h4 className='slides-title' >Hanging Plants</h4></a>
            <a href='#tree-plants'><h4 className='slides-title' >Tree Plants</h4></a>
           <a href='#gifts'><h4 className='slides-title' >Gifts</h4></a> 
            <a href='#subs'><h4 className='slides-title' >Subscription</h4></a>
            <a href='#acc'><h4 className='slides-title'>Accessories and Pottery</h4></a>
        </section>
    <section className='category-details'>
    <div className='title'>
        <img src={Logo} />
        <h1>Category</h1>
    </div>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Default Sort
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">A to Z</a></li>
    <li><a className="dropdown-item" href="#">Z to A</a></li>
    <li><a className="dropdown-item" href="#">Max price</a></li>
    <li><a className="dropdown-item" href="#">Min price</a></li>
  </ul>
</div>
<div className='cards'>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
            <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
</div>
<section id='green-plants'>
<div className='title'>
        <img src={Logo} />
        <h1>Green plants</h1>
    </div>
    <div className='cards'>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
            <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    </div>
    </section>      
    <section id='flower-plants'>
    <div className='title'>
        <img src={Logo} />
        <h1>Flower Plants</h1>
    </div>
    <div className='cards'>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
            <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
</div>
    </section>
    <section id='Cacti'>
    <div className='title'>
        <img src={Logo} />
        <h1>Cacti</h1>
    </div>
    <div className='cards'>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
            <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
</div>
    </section>
    <section id='Hanging-Plants'>
    <div className='title'>
        <img src={Logo} />
        <h1>Hanging Plants</h1>
    </div>
    <div className='cards'>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
            <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
</div>
    </section>
    <section id='tree-plants'>
    <div className='title'>
        <img src={Logo} />
        <h1>Tree Plants</h1>
    </div>
    <div className='cards'>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
            <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
</div>
    </section>
    <section id='gifts'>
    <div className='title'>
        <img src={Logo} />
        <h1>Gifts</h1>
    </div>
    <div className='cards'>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
            <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
    <div className='card'>
        <div className='content'>
           <img src={image} />
           <div className='desc'>
            <h5>lorem</h5>
            <h4>100$</h4>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat dolor a. Maiores veniam repellat saepe atque sint fuga fugiat, suscipit voluptatum </p>
           <br/>
           <div className="image">
           <img src={heart} />
           <img src={cart} />
           </div>
        </div>
    </div>
</div>
    </section>


    </section>
   
    </main>
      )
}


export default category