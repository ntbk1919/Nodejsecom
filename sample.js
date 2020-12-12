function Person(name,age,place){
  this.name=name
  this.age=age
  this.place=place
  this.display=function(){
    console.log("Name: "+this.name+" AGe:"+this.age)
  }
}
var a=new Person("Noel",20,"Tvpm")
var b=new Person("Leon",30,"Ekm")

a.display()
b.display()
