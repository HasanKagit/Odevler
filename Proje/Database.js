var yazilar=[];
var a;

function yazi_ekle()
{
	console.log(a);
	
	document.getElementById("baslik").innerHTML = yazilar[a].baslik +" "+ yazilar[a].tarih +"asd";
	document.getElementById("resim").src = yazilar[a].resim;
	document.getElementById("detay").innerHTML = yazilar[a].detay;

}
function detay_yazi(id)
{
	console.log(id);
	a=this.id;
}
function yazim_ekle()
{

	var x = new Yazilar();
 	x.id=yazilar([yazilar.length()-1].id)+1;
    x.kategori=kategoriler.value;
    x.baslik=yazi_basligi.value;
    x.tarih="01/01/2018";
    x.resim="thurhost_sunuculari.jpg";
    x.yazar_ad=yazar_adi.value;
    x.detay=yazi_konu.value;
    yazilar.push(x);
}

class Yazilar{
	constructor(id,kategori,baslik,tarih,resim,detay,yazar_ad) {
    this.id=id;
    this.kategori = kategori;
    this.baslik = baslik;
    this.tarih = tarih;
    this.resim = resim;
    this.detay = detay;
    this.yazar_ad=yazar_ad;
  }

  toString() {
    return this.kategori;
  }


}
 	var y = new Yazilar();
 	y.id=1;
    y.kategori="Teknoloji";
    y.baslik="Yeni Nesil Turhost Sunucuları ve Diğer Yenilikler";
    y.tarih="01/01/2018";
    y.resim="thurhost_sunuculari.jpg";
    y.yazar_ad="Hasan Kağıt"
    y.detay="Aklınızda sizin için çok değerli bir fikir var ve bunu uygulamak, insanlarla paylaşmak, harcadığınız emeğin karşılığını almak istiyorsunuz. Tabi ki bunun en kolay yolu artık gelişen internet ortamından geçiyor. Fikirlerinizi paylaştığınız bir blog sitesi, ürünlerinizi pazarladığınız bir e-ticaret sitesi ya da insanların fikirlerini paylaştığı modern bir forum sitesi kurma hedefiniz olabilir. Hayallerinizi gerçeğe dönüştürdüğünüz bir web sitesinde başarılı olabilmek için en önemli ilk üç etkenden biri de şüphesiz web sitesi barındırma hizmetidir.";
    yazilar.push(y);
    var y1 = new Yazilar();
    y1.id=2;
    y1.kategori="Teknoloji";
    y1.baslik="Google Translate’in Yeni Özellikleri Neler?";
    y1.tarih="02/01/2018";
    y1.resim="google_translate.jpg";
    y1.yazar_ad="Mustafa Kıyga";
    y1.detay="Dünyanın en çok kullanılan ama bunun yanında en çok dalga geçilen hatta çeviri ile dalga geçmek için “bunu Google Translate’de mi çevirdin” sorularına konu olan uygulama güncellendi. Artık daha iyi artık daha gelişmiş. İşte Google Translate’in bilmek isteyebileceğiniz yenilikleri";
    yazilar.push(y1);






