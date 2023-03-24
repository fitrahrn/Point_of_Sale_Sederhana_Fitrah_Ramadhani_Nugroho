import React, {useState, useEffect} from 'react';
import { Link} from "react-router-dom";
import axios from "axios";

const ListMenu= () => {
    const [menus,setMenu] = useState([]);
    useEffect(() => {
        getMenus();
      }, []);
    
      const getMenus = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/menus`);
        setMenu(response.data);
      };
    
      const deleteMenu = async (menu_id) => {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/menus/${menu_id}`);
          getMenus();
        } catch (error) {
          console.log(error);
        }
      };
    return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Tambah Menu
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Gambar</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {/* looping */}
            {menus.map((menu, index) => (
              <tr key={menu.id}>
                <td>{index+1}</td>
                <td><img src={`img/${menu.gambar}`} alt="Gambar" width="200" height="200"/></td>
                <td>{menu.nama}</td>
                <td>{menu.harga}</td>
                <td>
                  <Link
                    to={`edit/${menu.id}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteMenu(menu.id)}
                    className="button is-small is-danger"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ListMenu