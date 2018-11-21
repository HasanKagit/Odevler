function report(msg, id, list) {
    // out.innerHTML += "<br>"; msg += " ";
    // out.appendChild(document.createTextNode(msg));
    // let n1;
    // if (id) {
    //     n1 = document.createElement("span");
    //     n1.appendChild(document.createTextNode(id));
    //     n1.classList.add("link");
    //     out.appendChild(n1); msg += id;
    //     //n1.addEventListener("click", doClick);
    // }
    // if (list) {
    //     let n2 = document.createElement("span");
    //     n2.appendChild(document.createTextNode(""));
    //     n2.innerHTML += list.join("<br>");
    //     n2.classList.add("course");
    //     if (n1) n1.appendChild(n2);
    // }
    // console.log(msg);
}


const url = "https://maeyler.github.io/JS/data/";
function readData(file) {
    console.log("readData "+file);
    if(file.includes("Student")) {
      fetch(url+file)
          .then(r => r.text(), report)
          .then(ogrenciEkle, report);
    }
    if(file.includes("Courses")) {
      fetch(url+file)
          .then(r => r.text(), report)
          .then(kursEkle, report);
    }
}

const ogrenciler = [];
const kurslar = [];

function parseStudent(line) {
    let b = line.split("\t");
    let id = b[0], name = b[1], gpa = b[2];
    let courses = [];
    for (let i=3; i<b.length; i++)
        courses.push(b[i]);
    return {id, name, gpa, courses};
}

function ogrenciEkle(txt)
{
    let a = txt.split("\n");
    for (let s of a) {
      let std = parseStudent(s);
      ogrenciler.push(std);
    }
    db.convertStuToMap();
    // report(msg + keys.length+" students");
}


function parseCourses (line) {
    let b = line.split("\t");
    let name = b[0], time = b[1], date = b[2];
    let rooms = [];
    for (var i = 3; i < b.length; i++) {
      rooms.push(b[i]);
    }
    return {name, time, date, rooms}
}
function kursEkle(txt)
{
    let a = txt.split("\n");
    for(let s of a) {
      let course = parseCourses(s);
      kurslar.push(course);
    }
    db.convertCrsToMap();
    // report(msg + keys.length+" students");
}

function find () {
  db.findStu();
}
function randomOgrenci(){
  db.random();
}
function ortUstu(){
  db.ortUstu();
}
function aldigiDersler(){
  db.aldigiDersler();
}
function dersiAlanOgrenciler()
{
  db.dersiAlanOgrenciler();
}
function sinavTarihleri()
{
  db.sinavTarihleri();
}
function odadakiDersler()
{
  db.odadakiDerslerinSayisi();
}
function odadakiDerslerinAdı()
{
  db.odadakiDerslerinAdı();
}
function ortakDersliOgrenciler()
{
  db.ortakDersliOgrenciler();
}
class Course {
  constructor(name, time, date, rooms) {
    this.name = name;
    this.time = time;
    this.date = date;
    this.rooms = rooms;
  }
  toString() {
    return this.name
  }
}
class Student {
  constructor(id, name, gpa, courses=[]) {
    this.id = id;
    this.name = name;
    this.gpa = gpa;
    this.courses = courses;
  }
  toString() {
    return this.id+"";
  }
}
class Database{
  constructor() {
    this.ogrenci_map = new Map();
    this.ders_map = new Map();
  }

  convertStuToMap() { 
   console.log("Converting Students to a map object is starting.")
    for(var i =0; i < ogrenciler.length; i++) {
      this.ogrenci_map.set(ogrenciler[i].id, ogrenciler[i]);
    }
    console.log("Converting Students to a map object is completed.")
  }
  convertCrsToMap () {
    console.log("Converting Courses to a map object is starting.")
    for(let i of kurslar) {
      this.ders_map.set(i.name, i);
    }
    console.log("Converting Courses to a map object is completed.")
  }

  ortUstu(){
    var count = 0;
    for(let v of this.ogrenci_map.values()){
      if (v.gpa>=x.value)
      {
        count++;
      }
    }
    p1.innerText=x.value +" ortalama üstü öğrenci sayısı: "+ count;
  }

  aldigiDersler()
  {
    for(let v of this.ogrenci_map.values()){
      if (v.id==ogrenci_id.value)
      {
         p1.innerText=v.name + " Öğrencisinin Aldığı Dersler" + v.courses;
      }
    }
  }

  random()
  {
    let randomValue = Math.trunc(this.ogrenci_map.size * Math.random());
    var count=0;
    for(let v of this.ogrenci_map.values()){
      count++;
      if (count==randomValue)
      {
         p1.innerText="Rastgele seçmiş olduğunuz öğrenci: " +v.name ;
      }
    }
  }
  dersiAlanOgrenciler()
  {
      var i=0;
      var dersiAlanlar=[];
      let ders=ders_adı.value;
      for(let v of this.ogrenci_map.values()){
        for(var y=0;y<v.courses.length;y++)
        {
           if (v.courses[y]==ders)
            {
              dersiAlanlar[i]=v.name;
                i++;
         
               }
        }
    }
    p1.innerText=dersiAlanlar;
  }


  sinavTarihleri()
  {
    var dersleri=[];
    var count=0;
    for(let v of this.ogrenci_map.values())
    {
      if (v.id==ogrenci_id.value)
      {
         for(var y=0;y<v.courses.length;y++)
        {
          for(let x of this.ders_map.values())
            {
                if(x.name==v.courses[y])
                {
                  dersleri[count]=x.name;
                  dersleri[count+1]=x.time;
                  dersleri[count+2]=x.date;
                  count=count+3;
                }
            }
        }
         
      }
    }
    p1.innerText=dersleri;
  }
  

  odadakiDerslerinSayisi()
  {
    var count=0;
      for(let v of this.ders_map.values())
      {
        for(var x=0;x<v.rooms.length;x++)
        {
          if(oda_adı.value==v.rooms[x])
          {
            count++;
          }
        }
        
      }
      p1.innerText=oda_adı.value+" odasında toplam "+count+" adet ders vardır.";
  }

  odadakiDerslerinAdı()
  {
    var kurslarım=[];

      var count=0;
      for(let v of this.ders_map.values())
      {
        for(var x=0;x<v.rooms.length;x++)
        {
          if(oda_adı.value==v.rooms[x])
          {
            kurslarım[count]=v.name;
            count++;
          }
        }
        
      }
      p1.innerText=kurslarım;
  }

  ortakDersliOgrenciler()
  {
      var ortaklar =[]
      var count=0;
      for(let v of this.ogrenci_map.values()){
      if (v.id==ogrenci_id.value)
      {
         for(let x of this.ogrenci_map.values()){
          if (JSON.stringify(v.courses)==JSON.stringify(x.courses)) {
            ortaklar[count]=x.name;
            count++;
           
          }
         }
      }
    }
     p1.innerText=ortaklar;
  }
}
readData("Students.txt");
readData("Courses.txt");
var db = new Database();


