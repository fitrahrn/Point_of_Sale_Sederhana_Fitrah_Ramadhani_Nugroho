import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from "axios";
const MenuPOS = () => {
    const [menus,setMenu] = useState([]);
    useEffect(() => {
        getMenus();
      }, []);
    
      const getMenus = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/menus`);
        setMenu(response.data);
      };
    var orderList = [];
    const listObject = document.getElementById("listObject");
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div class="grid-container">
                <div>
                    <div class="grid-food">
                    {menus.map((menu, index) => (
                        <div>
                            <button type="button"
                            onClick={() => {
                                        orderList.push(menu)
                                        let newLabel = document.createElement("label");
                                        let listLabel = document.createElement("li");
                                        newLabel.innerText=menu.nama
                                        newLabel.class="list-menu"
                                        listLabel.appendChild(newLabel)
                                        listObject.appendChild(listLabel)
                                    }
                                }>
                                <img class="image is-128x128" src={`img/${menu.gambar}` } alt="Gambar" width="200" height="200"/>
                                <br></br>
                                <label>{menu.nama}</label>
                            </button>
                        </div>
                    ))}
                    </div>
                </div>
                <div class="bill">
                    <h1>New Customer</h1>
                    <h2>Dine In</h2>
                    <ul id="listObject">
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MenuPOS