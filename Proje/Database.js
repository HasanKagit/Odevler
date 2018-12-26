function pressAll() {
  var content = document.getElementById("innerContent");
  var obj;
  for (i = 0; i < yazilar.length; i++) {
    obj = yazilar[i];

    var blog_post_div = document.createElement("div");
    blog_post_div.className = "blog-post";

    var createA = document.createElement('a');
    var createAText = document.createTextNode(obj.baslik);
    //createA.setAttribute('href', "");
    createA.setAttribute('onclick', 'detay_yazdir('+obj.id+')')
    createA.appendChild(createAText);

    blog_post_div.appendChild(createA);


    var x = document.createElement("IMG");
    x.setAttribute("src", obj.resim);
    blog_post_div.appendChild(x);

    var p = document.createElement("p");
    var tnode = document.createTextNode(obj.detay);
    p.appendChild(tnode);
    blog_post_div.appendChild(p);

    var callout_div = document.createElement("div");
    callout_div.className = "callout";

    var ul = document.createElement("ul");
    ul.className = "menu simple";
    var yazar_node = document.createElement("LI");
    yazar_node.innerHTML += "<a href='#'>Yazar: " + obj.yazar_ad + "</a>"
    var yorum_node = document.createElement("LI");
    yorum_node.innerHTML += "<a href='#'>Yorum: " +obj.yorum_sayisi+ "</a>"

    ul.appendChild(yazar_node);
    ul.appendChild(yorum_node);

    callout_div.appendChild(ul);
    blog_post_div.appendChild(callout_div);


    content.appendChild(blog_post_div)
  }
}

function pressKategori(key) {
  var obj;
  var content = document.getElementById("innerContent");
  content.innerHTML = "";
  for (i = 0; i < yazilar.length; i++) {
    if (yazilar[i].kategori == key) {
      obj = yazilar[i];

      var blog_post_div = document.createElement("div");
      blog_post_div.className = "blog-post";

      var createA = document.createElement('a');
      var createAText = document.createTextNode(obj.baslik);
     
      createA.setAttribute('onclick', 'detay_yazdir('+obj.id+')')
      createA.appendChild(createAText);

      blog_post_div.appendChild(createA);


      var x = document.createElement("IMG");
      x.setAttribute("src", obj.resim);
      blog_post_div.appendChild(x);

      var p = document.createElement("p");
      var tnode = document.createTextNode(obj.detay);
      p.appendChild(tnode);
      blog_post_div.appendChild(p);

      var callout_div = document.createElement("div");
      callout_div.className = "callout";

      var ul = document.createElement("ul");
      ul.className = "menu simple";
      var yazar_node = document.createElement("LI");
      yazar_node.innerHTML += "<a href='#'>Yazar: " + obj.yazar_ad + "</a>"
      var yorum_node = document.createElement("LI");
      yorum_node.innerHTML += "<a href='#'>Yorum: " +obj.yorum_sayisi+ "</a>"

      ul.appendChild(yazar_node);
      ul.appendChild(yorum_node);

      callout_div.appendChild(ul);
      blog_post_div.appendChild(callout_div);


      content.appendChild(blog_post_div)
    }
  }
}


function yazarYazilari(key) {
  var obj;
  var content = document.getElementById("innerContent");
  content.innerHTML = "";
  for (i = 0; i < yazilar.length; i++) {
    if (yazilar[i].yazar_ad == key) {
      obj = yazilar[i];

      var blog_post_div = document.createElement("div");
      blog_post_div.className = "blog-post";

      var createA = document.createElement('a');
      var createAText = document.createTextNode(obj.baslik);
     
      createA.setAttribute('onclick', 'detay_yazdir('+obj.id+')')
      createA.appendChild(createAText);

      blog_post_div.appendChild(createA);


      var x = document.createElement("IMG");
      x.setAttribute("src", obj.resim);
      blog_post_div.appendChild(x);

      var p = document.createElement("p");
      var tnode = document.createTextNode(obj.detay);
      p.appendChild(tnode);
      blog_post_div.appendChild(p);

      var callout_div = document.createElement("div");
      callout_div.className = "callout";

      var ul = document.createElement("ul");
      ul.className = "menu simple";
      var yazar_node = document.createElement("LI");
      yazar_node.innerHTML += "<a href='#'>Yazar: " + obj.yazar_ad + "</a>"
      var yorum_node = document.createElement("LI");
      yorum_node.innerHTML += "<a href='#'>Yorum: " +obj.yorum_sayisi+ "</a>"

      ul.appendChild(yazar_node);
      ul.appendChild(yorum_node);

      callout_div.appendChild(ul);
      blog_post_div.appendChild(callout_div);


      content.appendChild(blog_post_div)
    }
  }
}



function detay_yazdir(key) {
  var obj;
  var content = document.getElementById("innerContent");
  content.innerHTML = "";
  for (i = 0; i < yazilar.length; i++) {
    if (yazilar[i].id == key) {
      obj = yazilar[i];

      var blog_post_div = document.createElement("div");
      blog_post_div.className = "blog-post";

      var createA = document.createElement('a');
      var createAText = document.createTextNode(obj.baslik);
     
      createA.setAttribute('onclick', 'detay_yazdir('+obj.id+')')
      createA.appendChild(createAText);

      blog_post_div.appendChild(createA);


      var x = document.createElement("IMG");
      x.setAttribute("src", obj.resim);
      blog_post_div.appendChild(x);

      var p = document.createElement("p");
      var tnode = document.createTextNode(obj.detay);
      p.appendChild(tnode);
      blog_post_div.appendChild(p);

      var callout_div = document.createElement("div");
      callout_div.className = "callout";

      var ul = document.createElement("ul");
      ul.className = "menu simple";
      var yazar_node = document.createElement("LI");
      yazar_node.innerHTML += "<a href='#'>Yazar: " + obj.yazar_ad + "</a>"
      var yorum_node = document.createElement("LI");
      yorum_node.innerHTML += "<a href='#'>Yorum: 3</a>"

      ul.appendChild(yazar_node);
      ul.appendChild(yorum_node);

      callout_div.appendChild(ul);
      blog_post_div.appendChild(callout_div);


      content.appendChild(blog_post_div)
    }
  }
}
  var yazilar=[];
  var a;
function yazi_ekle()
{
  var x = new Yazilar();
  x.id = 1;
  x.kategori = kategoriler.value;
  x.baslik = yazi_basligi.value;
  x.tarih = yazi_tarihi.value;
  x.resim = yazi_gorsel.value;
  x.yazar_ad = yazar_adi.value;
  x.detay =yazi_konu.value;
  yazilar.push(y);
}
  class Yazilar {
    constructor(id, kategori, baslik, tarih, resim, detay, yazar_ad,yorum_sayisi) {
      this.id = id;
      this.kategori = kategori;
      this.baslik = baslik;
      this.tarih = tarih;
      this.resim = resim;
      this.detay = detay;
      this.yazar_ad = yazar_ad;
      this.yorum_sayisi=yorum_sayisi;
    }

    toString() {
      return this.kategori;
    }


  }
  var y = new Yazilar();
  y.id = 1;
  y.kategori = "Teknoloji";
  y.baslik = "Yeni Nesil Turhost Sunucuları ve Diğer Yenilikler";
  y.tarih = "01/01/2018";
  y.resim = "https://hasankagit.github.io/Odevler/Proje/resimler/thurhost_sunuculari.jpg";
  y.yazar_ad = "Hasan Kağıt"
  y.yorum_sayisi=10;
  y.detay = "Aklınızda sizin için çok değerli bir fikir var ve bunu uygulamak, insanlarla paylaşmak, harcadığınız emeğin karşılığını almak istiyorsunuz. Tabi ki bunun en kolay yolu artık gelişen internet ortamından geçiyor. Fikirlerinizi paylaştığınız bir blog sitesi, ürünlerinizi pazarladığınız bir e-ticaret sitesi ya da insanların fikirlerini paylaştığı modern bir forum sitesi kurma hedefiniz olabilir. Hayallerinizi gerçeğe dönüştürdüğünüz bir web sitesinde başarılı olabilmek için en önemli ilk üç etkenden biri de şüphesiz web sitesi barındırma hizmetidir.";
  yazilar.push(y);

  var y1 = new Yazilar();
  y1.id = 2;
  y1.kategori = "Teknoloj";
  y1.baslik = "Google Translate’in Yeni Özellikleri Neler?";
  y1.tarih = "02/01/2018";
  y1.resim = "https://hasankagit.github.io/Odevler/Proje/resimler/google_translate.jpg";
  y1.yazar_ad = "Mustafa Kıyga";
  y1.yorum_sayisi=13;
  y1.detay = "Dünyanın en çok kullanılan ama bunun yanında en çok dalga geçilen hatta çeviri ile dalga geçmek için “bunu Google Translate’de mi çevirdin” sorularına konu olan uygulama güncellendi. Artık daha iyi artık daha gelişmiş. İşte Google Translate’in bilmek isteyebileceğiniz yenilikleri";
  yazilar.push(y1);

  
  var y2 = new Yazilar();
  y2.id = 3;
  y2.kategori = "İnternet";
  y2.baslik = "Spotify’ın Yeni Özellikleri Neler?";
  y2.tarih = "03/01/2018";
  y2.resim = "https://hasankagit.github.io/Odevler/Proje/resimler/spotify.jpg";
  y2.yazar_ad = "Furkan Çankaya";
  y2.yorum_sayisi=7;
  y2.detay = "Spotify , dünyanın en çok kullanılan müzik platformlarından birisi. Geniş müzik yelpazesi, uygun fiyatlar ve kaliteli ses gibi özelliklerle ülkemizde de ön plana çıkan Spotify, kendini yenilmeye devam ediyor. Ortaya atılan bazı iddialar, Spotify’ın oldukça dikkat çekici bir kaç özelliğini test ettiğini ortaya koyuyor. İşte Spotify’a yakın zaman içinde gelmesi beklenen özellikler.";
  yazilar.push(y2); 


  var y3 = new Yazilar();
  y3.id = 4;
  y3.kategori = "Android";
  y3.baslik = "Android İçin Chrome’a Parmak Hareketleri Geliyor";
  y3.tarih = "21/12/2018";
  y3.resim = "https://hasankagit.github.io/Odevler/Proje/resimler/chrome.jpg";
  y3.yazar_ad = "Hasan Kağıt";
  y3.yorum_sayisi=5;
  y3.detay = "Uzun zamandır iOS in Chrome ‘da kullanılan özellik sonunda Android işletim sistemindeki Chrome için de yayınlanacak. Jestler dedikleri parmak hareketleri desteği Chrome için geliyor. İnsanların sordukları soru ise neden ilk...";
  yazilar.push(y3);  
