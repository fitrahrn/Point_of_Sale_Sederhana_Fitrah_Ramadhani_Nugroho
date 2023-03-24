import React, {useState} from 'react';
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const AddMenu = () => {
    const [gambar, setGambar] = useState("No File Selected");
    const [setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const navigate = useNavigate();
  
    const uploadMenu = async (event) => {
      event.preventDefault(); // ketika disubmit, page tidak reload
      const formData = JSON.stringify({"nama":nama,"gambar":gambar,"harga":harga})
      try {
        await axios.post(`http://127.0.0.1:8000/api/menus`, formData, {
          headers:{"Content-type": "application/json"},
        });
        navigate(`/menu`)
      } catch (error) {
        console.log(error);
      }
    };
  
    const loadGambar = (event) => {
      const gambar = event.target.files[0];
      if (gambar) {
        setGambar(gambar.name);
        setFile(gambar);
        setPreview(URL.createObjectURL(gambar));
      } else {
        setGambar("Tidak ada Gambar yang Dipilih");
        setFile("");
      }
    };
    return (
        <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={uploadMenu}>
          <div className="field">
            <label className="label">Nama Makanan</label>
            <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Nama Makanan"
                  value={nama}
                  onChange={(event) => setNama(event.target.value)}
                />
            </div>
          </div>
          <div className="field">
              <label className="label">Harga</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Harga"
                  value={harga}
                  onChange={(event) => setHarga(event.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Gambar Path</label>
              <div className="control">
                <div className="file is-info has-name">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="resume"
                      onChange={loadGambar}
                      onClick={() => setPreview("")}
                    />
                    <span className="file-cta">
                      <span className="file-label">Pilih Gambar..</span>
                    </span>
                    <span className="file-name">{gambar}</span>
                  </label>
                </div>
              </div>
            </div>
            <img src={preview} alt="Gambar"/>

          <div className="field">
            <button type="submit" className="button is-success">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default AddMenu