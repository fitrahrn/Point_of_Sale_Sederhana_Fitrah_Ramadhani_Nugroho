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
    const [order,setOrder] = useState([{
        "nama": "test","jumlah":0,"harga":1000
    }]);
    const [harga,setHarga] = useState(0)
    const bodyTable = document.getElementById("bodyTable");

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div class="grid-container">
                <div>
                    <div class="grid-food">
                    {menus.map((menu, index) => (
                        <div>
                            <button type="button"
                            onClick={() => {
                                let check = order.map(item => item.menu).includes(menu.nama);
                                console.log(check)
                                    if(!check){
                                        setOrder([
                                            ...order,
                                            {
                                                "menu":menu.nama,"jumlah":1,"harga":menu.harga
                                            }
                                        ])
                                        console.log(order)
                                        let newRow= document.createElement("tr");
                                        let newName= document.createElement("td");
                                        let newPrice = document.createElement("td");
                                        newPrice.id = "price"+(order.length)
                                        console.log(newPrice.id)
                                        let newOrder = document.createElement("td");
                                        newOrder.id = "order"+(order.length)
                                        newName.innerHTML=menu.nama
                                        newPrice.innerHTML = "Rp " +menu.harga
                                        
                                        newRow.append(newName)
                                        newRow.append(newOrder)
                                        newRow.append(newPrice)
                                        bodyTable.appendChild(newRow)
                                        
                                    }
                                    else{
                                        index = order.findIndex((event)=>{
                                            if(event.menu === menu.nama){
                                                return true;
                                            }
                                            return false;

                                        })
                                        order[index].jumlah++
                                        order[index].harga = menu.harga*order[index].jumlah
                                        let changePrice = document.getElementById("price"+index)
                                        changePrice.innerHTML = "Rp " +order[index].harga
                                        let changeOrder = document.getElementById("order"+index)
                                        changeOrder.innerHTML = "x"+order[index].jumlah
                                    }
                                    setHarga(harga+menu.harga)
                                    let totalCharge = document.getElementById("totalCharge")
                                    totalCharge.innerHTML = "Charge Rp "+ (harga+menu.harga)
                                    let sub = document.getElementById("sub")
                                    sub.innerHTML= "Rp "+(harga+menu.harga)
                                    let total = document.getElementById("total")
                                    total.innerHTML= "Rp " + (harga+menu.harga)
                                    

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
                    <table className="table is-striped is-fullwidth" >
                        
                        <tbody id="bodyTable">
                        </tbody>
                    </table>
                    <table className="table is-striped is-fullwidth" >
                        
                        <tbody>
                            <tr>
                                <th>Sub-Total</th>
                                <th></th>
                                <th id="sub"> Rp 0</th>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th id="total"> Rp 0</th>
                            </tr>
                        </tbody>
                    </table>
                    <button class="button  is-fullwidth">
                        Clear Sale
                    </button>
                    <div class="popup" >
                        <button class="button is-link is-light is-large" onClick={ ()=>{
                            var popup = document.getElementById("myPopup");
                            popup.classList.toggle("show");
                        }
                        }>
                        Save Bill
                        </button>
                        <span class="popuptext" id="myPopup">Bill Saved!</span>
                    </div>
                    <button class="button is-link is-light is-large" onClick={()=>{
                        window.print()
                    }}>
                        Print Bill
                    </button>
                    <button id="totalCharge" class="button is-fullwidth is-link" onClick={()=>{
                        var modal = document.getElementById("myModal")
                        modal.style.display = "block";
                        document.getElementById("harga").innerHTML=document.getElementById("totalCharge").innerHTML  
                    }}>
                        Charge Rp 0
                    </button>
                    <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span class="close" onClick={()=>{
                                var modal = document.getElementById("myModal")
                                modal.style.display = "none";
                            }}>&times;</span>
                            <label id="harga">Total Harga: Rp {harga}</label>
                            <br/>
                            <label>Jumlah Pembayaran: </label>
                            <input type="text" id="pembayaran"onChange={()=>{
                                document.getElementById("kembalian").innerHTML="Kembalian: Rp " + (document.getElementById("pembayaran").value - harga)
                            }}/>
                            <br/>
                            <label id="kembalian">Kembalian: 0</label>
                            <button class="button is-fullwidth is-rounded is-success" onClick={()=>{
                                var modal = document.getElementById("myModal")
                                modal.style.display = "none";
                            }}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuPOS