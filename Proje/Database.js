/*
<div class="blog-post">
				 <a href="detay_yazi.html"><button >Yeni Nesil Turhost Sunucuları ve Diğer Yenilikler </button></a>
				<button onClick='detay_yazi(1)'>Yeni Nesil Turhost Sunucuları ve Diğer Yenilikler </button>
				<img class="thumbnail" src="thurhost_sunuculari.jpg">
				<p >Aklınızda sizin için çok değerli bir fikir var ve bunu uygulamak, insanlarla paylaşmak, harcadığınız emeğin karşılığını almak istiyorsunuz. Tabi ki bunun en kolay yolu artık gelişen internet ortamından geçiyor. Fikirlerinizi paylaştığınız bir blog sitesi, ürünlerinizi pazarladığınız bir e-ticaret sitesi ya da insanların fikirlerini paylaştığı modern bir forum sitesi kurma hedefiniz olabilir. Hayallerinizi gerçeğe dönüştürdüğünüz bir web sitesinde başarılı olabilmek için en önemli ilk üç etkenden biri de şüphesiz web sitesi barındırma hizmetidir.</p>
				<div class="callout">
					<ul class="menu simple">
						<li><a href="#">Yazar: Hasan Kağıt</a></li>
						<li><a href="#">Yorum: 3</a></li>
					</ul>
				</div>
			</div>
*/
function pressAll() {
  var content = document.getElementById("innerContent");
  //console.log(content)
  var obj;
  for (i = 0; i < yazilar.length; i++) {
    obj = yazilar[i];

    var blog_post_div = document.createElement("div");
    blog_post_div.className = "blog-post";

    var createA = document.createElement('a');
    var createAText = document.createTextNode(obj.baslik);
    createA.setAttribute('href', "");
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

function pressKategori(key) {
  var obj;
  for (i = 0; i < yazilar.length; i++) {
    if (yazilar[i].kategori == key) {
      
    }
  }
}

function detay_yazdir() {
  key = yazilar[0].baslik;
  var obj;
  var content = document.getElementById("innerContent");
  content.innerHTML = "";
  for (i = 0; i < yazilar.length; i++) {
    if (yazilar[i].baslik == key) {
      console.log("girdi")
      obj = yazilar[i];

      var blog_post_div = document.createElement("div");
      blog_post_div.className = "blog-post";

      var createA = document.createElement('a');
      var createAText = document.createTextNode(obj.baslik);
      createA.setAttribute('href', "");
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
  var yazilar = [];
  var a;

  function yazi_ekle() {
    console.log(a);

    document.getElementById("baslik").innerHTML = yazilar[a].baslik + " " + yazilar[a].tarih + "asd";
    document.getElementById("resim").src = yazilar[a].resim;
    document.getElementById("detay").innerHTML = yazilar[a].detay;

  }
  function detay_yazi(id) {
    console.log(id);
    a = this.id;
  }
  function yazim_ekle() {

    var x = new Yazilar();
  }

  class Yazilar {
    constructor(id, kategori, baslik, tarih, resim, detay, yazar_ad) {
      this.id = id;
      this.kategori = kategori;
      this.baslik = baslik;
      this.tarih = tarih;
      this.resim = resim;
      this.detay = detay;
      this.yazar_ad = yazar_ad;
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
  y.resim = "thurhost_sunuculari.jpg";
  y.yazar_ad = "Hasan Kağıt"
  y.detay = "Aklınızda sizin için çok değerli bir fikir var ve bunu uygulamak, insanlarla paylaşmak, harcadığınız emeğin karşılığını almak istiyorsunuz. Tabi ki bunun en kolay yolu artık gelişen internet ortamından geçiyor. Fikirlerinizi paylaştığınız bir blog sitesi, ürünlerinizi pazarladığınız bir e-ticaret sitesi ya da insanların fikirlerini paylaştığı modern bir forum sitesi kurma hedefiniz olabilir. Hayallerinizi gerçeğe dönüştürdüğünüz bir web sitesinde başarılı olabilmek için en önemli ilk üç etkenden biri de şüphesiz web sitesi barındırma hizmetidir.";
  yazilar.push(y);
  var y1 = new Yazilar();
  y1.id = 2;
  y1.kategori = "Teknoloji";
  y1.baslik = "Google Translate’in Yeni Özellikleri Neler?";
  y1.tarih = "02/01/2018";
  y1.resim = "google_translate.jpg";
  y1.yazar_ad = "Mustafa Kıyga";
  y1.detay = "Dünyanın en çok kullanılan ama bunun yanında en çok dalga geçilen hatta çeviri ile dalga geçmek için “bunu Google Translate’de mi çevirdin” sorularına konu olan uygulama güncellendi. Artık daha iyi artık daha gelişmiş. İşte Google Translate’in bilmek isteyebileceğiniz yenilikleri";
  yazilar.push(y1);
