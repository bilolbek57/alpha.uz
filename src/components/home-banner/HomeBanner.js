import React from 'react'
import "./HomeBanner.css"
function HomeBanner() {
    const homeCard__data = [ 
        {
            img: "https://olcha.uz/image/132x132/category/M90cCGAT8ARmlnxJzt5sH4cTD4eBUjWocRW36j69zghIlMA6leRkjL9mvoBr.png",
            text: "Smartfin telefon gatjet"
        },
        {
            img: "https://olcha.uz/image/132x132/category/JpxEi31tJ1woH8kt5UaDYFEkpkf8VFG3SH5kggJ2QWBUxnposr9TcC4gpCJp.png",
            text: "Ayollar kiyimlari"
        },
        {
            img: "https://olcha.uz/image/132x132/category/1Iz2mWCWd8AOoyztWNSrNBZKcdjANSo3mgV8PPFPLP4bRhR7YsLxUHncVc62.png",
            text: "Abtomobil uchun diskalar"
        },
        {
            img: "https://olcha.uz/image/132x132/category/NFCDekkz4eiaOnS6a35eBUVnSTAiL8jbG3iFMMVfvjjSKFDPICnv5cV59FR3.",
            text: "Erkaklar uchun"
        },
        {
            img: "https://olcha.uz/image/132x132/category/6zDy6H7NAKLmaIszRCYFLxiXDtZDvNapSNOmLkLZJUpuXpRTtEq98OC9gX5J.png",
            text: "Televizor, photo video va audio"
        },
        {
            img: "https://olcha.uz/image/132x132/category/9JkxXzngexbP8M4tA9CFYujuuRXSKlE6UZGTvwU656J6S8tiL1xbvFJcON91.png",
            text: "Bolalar uchun stol o'yinlari"
        },
        {
            img: "https://olcha.uz/image/132x132/category/jsUPuEA9IHAEvkuJAwNGHjYkeVa2yJa6eQWK7EcDIdQMInif8HjQvQ8YlI36.png",
            text: "Minimoyka va yuqori bosimli"
        },
        {
            img: "https://olcha.uz/image/132x132/category/uSZ7ukWOhOGAavEsU53jITihn8GZwiqeCmnzaErWodbkagi99gq739isSfC2.png",
            text: "Geymerlar uchun"
        },
        {
            img: "https://olcha.uz/image/132x132/category/iBvYc6RKMpI8eqIiVaAMPc6IJ3kWHJSWtFb0B1JAX3197TvPSUgxB7k97izI.png",
            text: "Bolalar kiymi"
        },
        {
            img: "https://olcha.uz/image/132x132/category/RXsjevBJB5abpxLqrT0pkis7ZHb20QGn30uNiEben9yzpbz2zqhHHRAgTVC0.png",
            text: "Fara"
        },
        {
            img: "https://olcha.uz/image/132x132/category/qvlpVJwqHCKTfiUbNVXPfTHvxraaS2gVVMrthPLx8hfolSRoLRWfxKHiibru.",
            text: "Pardoz jixozlari"
        },
        {
            img: "https://olcha.uz/image/132x132/category/LMk7YuQAzKqsUIBDfr4jRA2IEFsLPsyFkWAWFHYkwlQZ8WRVvWut5Heb8Dju.png",
            text: "Laptop,printer"
        },
        {
            img: "https://olcha.uz/image/132x132/category/adAcDR88OUxUmBwfbqvkK88qzwyFfClbphQchk5iq3Wt9Rg3FHzATRjviSTI.png",
            text: "Bolalar aravachalar"
        },
        {
            img: "https://olcha.uz/image/132x132/category/1T79CVFM1tfWRjatnqv7RsWiFzFhvAeMEhbMZjc1bNceJR7ara6LAMBrjDb5.png",
            text: "Auto uchun rul"
        }
    ]   
  return (
    <div className=' homeBanner'>
        {
            homeCard__data?.map((item, inx)=>         <div key={inx} className="homeb__card">
            <img src={item?.img} alt="" />
            <p>{item?.text}</p>
            </div>)
        }

    </div>
  )
}

export default HomeBanner