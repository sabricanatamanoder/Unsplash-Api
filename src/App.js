// /* Uygulamanın Oluşturulma Evreleri */
/* Bootstrap ile, bir buton ve input oluşturuldu.
 useState Hook'u kullanılarak, photo state'indeki boş ifade
 input'a başlangıç değeri atandı. Ardından onChange eventi yoluyla
 e.target.value (yani girilen değer) setPhoto state'ine atandı. Bu sayede
 artık başlangıç state'imiz değiştirilmek istendiğinde, girilen değeri alabiliriz.

 Daha sonra butonumuza, onClick metodu atadık. Bu butonu çalıştıran bir changePhoto
 fonksiyonumuz var. Butona tıkladığımızda axios'la veri çekmeye çalışacağız. unsplash api'den
 aldığımız keyi, client_id'nin peşine yapıştırıyoruz ve bunları JavaScript template literal
 özelliği gereğince backtip içerisinde gösteriyoruz. Daha sonra cevabı .then ile alıp
 setResult içerisinde yazdırıyoruz.
 Map metoduyla da erişeceğimiz verilerin nasıl bir dizi içerisinde gösterilmesi gerektiğini belirtiyoruz. Fotoğrafları ise
 src'nin içinde small olarak almayı tercih ediyoruz. Bunu belirlemek için chrome geliştiriciye giderek
 giderek datanın nasıl geldiğini öğreniyor ve ona göre hedefe uyguluyoruz.
 
 */


import React, { useState } from 'react'
import axios from 'axios'
function App() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])
    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=3224Xacy20PNhepfWhxUD7aLCTfNk6CLYis-Mz3bwJY`)

            .then((response) => {
                setResult(response.data.results);
            })
    }
    return (
        <>
            <div className='container text-center my-5'>
                <input type="text" className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
            </div>

            <div className="container">
                <div className="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6">
                                <a href='#' className='d-block mb-4 h-100'>
                                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                                </a>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default App;